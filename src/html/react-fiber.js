// 实现react16的fiber

// 微任务，会卡住主线程。由于foo函数不断创建新的微任务，
// 并且这些微任务优先级都高于其他任何宏任务。
// 事件循环会一直执行这些微任务。而没有机会执行其他代码
// function foo() {
//   console.log(Math.random());
//   return Promise.resolve().then(foo);
// }
// foo();
// 基于此。react使用了宏任务。避免上述情况
// 由于 setTimeout 在浏览器内延迟较大（宿主环境原因）。
// react选择了另一个宏任务MessageChannel
// new MessageChannel();
// react16使用requestAnimationFrame算每一帧是否还剩时间，有时间我就执行代码
// 计算的过程使用了宏任务
// 如果发现有操作优先级比较高。立马执行

let tasks = []; // 任务队列
let isPerformingTask = false; // 是否在执行任务

const chanel = new MessageChannel();
const port = chanel.port2;

function task1() {
  console.log("preforming task1");
}
function task2() {
  console.log("preforming task2");
}
function task3() {
  console.log("preforming task3");
}

// 任务调度函数
function scheduleTask(task, extTime) {
  tasks.push({ task, extTime });
  if (!isPerformingTask) {
    isPerformingTask = true;
    port.postMessage(null);
  }
}
function performTask(lastFrameEndTime) {
  const frameTime = 1000 / 60; // 约16.67ms
  const currentTime = performance.now();
  const elapsedTime = currentTime - lastFrameEndTime;
  const remainingTime = Math.max(0, frameTime - elapsedTime);

  while (tasks.length > 0 && performance.now() - currentTime < remainingTime) {
    const { task, extTime } = tasks.shift();
    if (extTime <= currentTime) {
      try {
        const taskStartTime = performance.now();
        task();
        console.log(
          `Task ${task.name} took ${performance.now() - taskStartTime}ms`
        );
      } catch (error) {
        console.error("Task execution error:", error);
      }
    } else {
      tasks.push({ task, extTime });
      break; // 如果遇到未过期的任务，退出循环
    }
  }

  if (tasks.length > 0) {
    requestAnimationFrame((newFrameTime) => performTask(newFrameTime));
  } else {
    isPerformingTask = false;
  }
}

chanel.port1.onmessage = () => {
  requestAnimationFrame(performTask);
};

const run = () => {
  //过期时间为当前时间 + 1000ms
  scheduleTask(task1, performance.now() + 1000);
  //过期时间为当前时间
  scheduleTask(task2, performance.now());
  //过期时间为当前时间 + 3000ms
  scheduleTask(task3, performance.now() + 3000);
};
run();
console.log("测试同步任务");
