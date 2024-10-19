let globalState = {};
let globalSubscribers = {};
let stateIndex = 0;

export function useState(initialValue) {
  // hook索引
  const currentIndex = stateIndex;
  stateIndex++;
  if (!(currentIndex in globalState)) {
    globalState[currentIndex] = initialValue;
    globalSubscribers[currentIndex] = new Set();
  }
  

  const setState = (newState) => {
    if (typeof newState === "function") {
      newState = newState(globalState[currentIndex]);
    }
    globalState[currentIndex] = newState;
    for (const subscriber of globalSubscribers[currentIndex]) {
      subscriber(newState);
    }
  };
  const subscribe = (subscriber) => {
    globalSubscribers[currentIndex].add(subscriber);
    return () => {
      globalSubscribers[currentIndex].delete(subscriber);
    };
  };

  return [globalState[currentIndex], setState, subscribe];
}
