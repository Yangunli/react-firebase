import React from "react";

const TodoItem = ({ todo, i, deleteTask }) => {
  return (
    <li key={i} className="todo__item">
      <label>
        <input type="checkbox" value="true" />
        <span>{todo.todo}</span>
      </label>

      <button>
        <i className="fa fa-times" onClick={() => deleteTask(todo.id)} />
      </button>
    </li>
  );
};

export default TodoItem;
