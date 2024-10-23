let globalState = {};
let globalSubscribers = {};
let stateIndex = 0;

export function useState(initialValue) {
  const currentIndex = stateIndex;
  stateIndex++;
  globalState[currentIndex] = initialValue;
  globalSubscribers[currentIndex] = new Set();

  const setState = (newState) => {
    if (typeof newState === "function") {
      newState = newState(globalState[currentIndex]);
    }
    globalState[currentIndex] = newState;
    for (const subscrier of globalSubscribers[currentIndex]) {
      subscrier(newState);
    }
  };
  const subscribe = (callback) => {
    globalSubscribers[currentIndex].add(callback);
  };
  return [globalState[currentIndex], setState, subscribe];
}
