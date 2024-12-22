const initialState = { name: "张三", age: 18 };

export default function infoReducer(state = initialState, action) {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_AGE":
      return { ...state, age: action.payload };
    default:
      return state;
  }
}
