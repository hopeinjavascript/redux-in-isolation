import actionTypes from "./actionTypes.js";

function reducer(state = [], action) {
  if (action.type === actionTypes.ADD_NOTE) {
    return [
      ...state,
      {
        id: state.length + 1,
        note: action.payload.note,
        resolved: false,
      },
    ];
  }

  if (action.type === actionTypes.REMOVE_NOTE) {
    return state.filter((note) => note.id !== action.payload.id);
  }

  if (action.type === actionTypes.MARK_RESOLVED) {
    return state.map((note) =>
      note.id !== action.payload.id ? note : { ...note, resolved: true }
    );
  }
  return state;
}

export default reducer;
