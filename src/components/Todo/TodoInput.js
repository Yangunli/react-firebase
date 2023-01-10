import React from "react";

const TodoInput = ({ addTask, newTask, setNewTask }) => {
  return (
    <>
      <input
        type="text"
        className="todo__input"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        name="todo"
        required
      />
      <button href="/" onClick={addTask}>
        <i className="fa fa-plus" />
      </button>
    </>
  );
};

export default TodoInput;
