import actionTypes1 from "./actionTypes1.js";

export function addTodo(todo) {
  return {
    type: actionTypes1.ADD_TODO,
    payload: {
      todo,
    },
  };
}

export function removeTodo(id) {
  return {
    type: actionTypes1.REMOVE_TODO,
    payload: {
      id,
    },
  };
}

export function markResolved(id) {
  return {
    type: actionTypes1.MARK_RESOLVED,
    payload: {
      id,
    },
  };
}
