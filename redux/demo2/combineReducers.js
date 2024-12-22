export function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  return function combiaction(state = {}, action) {
    const nextState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      nextState[key] = reducer(previousStateForKey, action);
    }
    return nextState;
  };
}
