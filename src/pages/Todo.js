import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import TodoInput from "../components/Todo/TodoInput";
import TodoItem from "../components/Todo/TodoItem";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

const Todo = () => {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const todoCollectionRef = collection(db, "todo");
  const getTodoList = async () => {
    const data = await getDocs(todoCollectionRef);
    setTodoList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getTodoList();

    // eslint-disable-next-line
  }, []);

  const addTask = async () => {
    if (newTask.trim().length > 3) {
      let num = todoList.length + 1;
      let newEntry = { todo: newTask.trim(), status: false };
      await addDoc(todoCollectionRef, newEntry);
      setNewTask("");
      getTodoList();
    } else {
      alert("最少要輸入四個字唷");
    }
  };

  const deleteTask = async (id) => {
    const todoDoc = doc(db, "todo", id);
    await deleteDoc(todoDoc);
    getTodoList();
  };

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
