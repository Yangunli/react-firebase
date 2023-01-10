import React, { useState } from "react";
import { Link } from "react-router-dom";
import TodoInput from "../components/Todo/TodoInput";
import TodoItem from "../components/Todo/TodoItem";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim().length > 3) {
      let num = todoList.length + 1;
      let newEntry = { id: num, todo: newTask.trim(), status: false };
      setTodoList([...todoList, newEntry]);
      setNewTask("");
    } else {
      alert("最少要輸入四個字唷");
    }
  };
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  console.log(1);
  console.log("====================================");
  // console.log(`${process.env.REACT_APP_API_KEY}???`);
  console.log("====================================");
  return (
    <div className="todo-container">
      <Link to="/">
        <button className="todoToHome"></button>
      </Link>

      <div className="todo__input-container">
        <TodoInput
          className="todo__input"
          setNewTask={setNewTask}
          newTask={newTask}
          addTask={addTask}
        />
      </div>

      <div className="todo__item-container">
        {todoList && todoList.length ? "" : "Your List is Empty"}
        {todoList.map((todo, i) => {
          return <TodoItem todo={todo} key={i} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
