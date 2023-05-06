export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
//
export const ADD_CATEGORY = "ADD_CATEGORY";

//
export function addTodo(task) {
  return {
    type: ADD_TODO,
    payload: task,
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function toggleTodo(todoId) {
  return {
    type: TOGGLE_TODO,
    payload: todoId,
  };
}

//
export function addCategory(categoryName) {
  return {
    type: ADD_CATEGORY,
    payload: categoryName,
  };
}
