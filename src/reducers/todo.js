import { v4 as uuid } from "uuid";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions";

export function todo(todos = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        { todoId: uuid(), task: action.payload, complete: false },
        ...todos,
      ];
    case DELETE_TODO:
      return todos.filter((todo) => todo.todoId !== action.payload);
    case TOGGLE_TODO:
      return todos.map((todo) =>
        todo.todoId === action.payload
          ? Object.assign(todo, { complete: !todo.complete })
          : todo
      );
    default:
      return todos;
  }
}
