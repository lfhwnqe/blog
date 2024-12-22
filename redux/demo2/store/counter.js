const initialState = { count: 0 };

export default function counterReducer(state = initialState, action) {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
