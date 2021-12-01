import actionTypes1 from "./actionTypes1.js";

function reducer(state = [], action) {
  if (action.type === actionTypes1.ADD_TODO) {
    return [
      ...state,
      {
        id: state.length + 1,
        todo: action.payload.todo,
        resolved: false,
      },
    ];
  }

  if (action.type === actionTypes1.REMOVE_TODO) {
    return state.filter((todo) => todo.id !== action.payload.id);
  }

  if (action.type === actionTypes1.MARK_RESOLVED) {
    return state.map((todo) =>
      todo.id !== action.payload.id ? todo : { ...todo, resolved: true }
    );
  }

  return state;
}

export default reducer;
