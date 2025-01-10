// https://bigfrontend.dev/zh/problem/throttle-Promises
// 假设你需要调用100个API获取数据，并且需要越快越好。

// 如果使用Promise.all()，100个请求会同时到达你的服务器，如果你的服务器性能很低的话，这就会是个负担。

// 请 节流API请求，使得任何时刻最多只有5个请求正在进行中。

// 你需要实现一个throttlePromises() 函数来达到目的。这个函数接受一个promise生成函数的数组，和一个同一时刻进行中的API请求最大数量。
/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(promises, maxConcurrency) {
  let index = 0; // 记录已经发起请求的 promise 的索引
  let activeCount = 0; // 记录正在进行中的请求数量
  let results = new Array(promises.length); // 用于保存最终结果的数组
  // 定义一个递归函数，用于处理请求队列中的下一个任务
  function processNext() {
    // 如果所有任务已经完成，则直接返回包含结果的 Promise
    if (index === promises.length && activeCount === 0) {
      return Promise.resolve(results);
    }
    // 如果可以执行新的任务，则执行
    if (index < promises.length && activeCount < maxConcurrency) {
      const currentIndex = index++;
      activeCount++;
      const currentPromise = promises[currentIndex]();
      // 将任务 promise 的结果放入结果数组中
      currentPromise
        .then((result) => {
          results[currentIndex] = result;
        })
        .catch((error) => {
          results[currentIndex] = error;
        })
        .finally(() => {
          activeCount--;
        });
      // 递归调用 processNext()，进入下一轮处理
      return processNext();
    }
    // 如果不能执行新的任务，则等待之前的任务完成后再执行
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(processNext());
      }, 10);
    });
  }
  // 调用 processNext()，返回 Promise
  return processNext();
}
