import actionTypes from "./actionTypes.js";

export function addNote(note) {
  return {
    type: actionTypes.ADD_NOTE,
    payload: {
      note,
    },
  };
}

export function removeNote(id) {
  return {
    type: actionTypes.REMOVE_NOTE,
    payload: {
      id,
    },
  };
}

export function markResolved(id) {
  return {
    type: actionTypes.MARK_RESOLVED,
    payload: {
      id,
    },
  };
}
