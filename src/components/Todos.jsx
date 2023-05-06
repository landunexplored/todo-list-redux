import { connect } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../actions";
import { useState } from "react";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (task) => dispatch(addTodo(task)),
    deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
    toggleTodo: (todoId) => dispatch(toggleTodo(todoId)),
  };
};

function Todos({ todos, addTodo, deleteTodo, toggleTodo }) {
  const [todoText, setTodoText] = useState("");

  function updateTodoText(e) {
    setTodoText(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();

    addTodo(todoText.trim());
    setTodoText("");
  }
  return (
    <div>
      <h1 className="text-3xl text-center">Todos</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={todoText}
          onChange={updateTodoText}
          autoFocus
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.todoId} onClick={() => toggleTodo(todo.todoId)}>
            <span
              className={
                todo.complete
                  ? "line-through hover:cursor-pointer"
                  : "hover:cursor-pointer"
              }
            >
              {todo.task}
            </span>{" "}
            <button onClick={() => deleteTodo(todo.todoId)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const TodoComponent = connect(mapStateToProps, mapDispatchToProps)(Todos);
export default TodoComponent;
