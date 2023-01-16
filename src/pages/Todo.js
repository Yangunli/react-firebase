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
  onSnapshot,
} from "firebase/firestore";

const Todo = () => {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const todoCollectionRef = collection(db, "todo");
  useEffect(() => {
    const q = query(todoCollectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodoList(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const addTask = async () => {
    if (newTask.trim().length > 3) {
      let newEntry = { todo: newTask.trim(), status: false };
      await addDoc(todoCollectionRef, newEntry);
      setNewTask("");
    } else {
      alert("最少要輸入四個字唷");
    }
  };

  const deleteTask = async (id) => {
    const todoDoc = doc(db, "todo", id);
    await deleteDoc(todoDoc);
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
        {todoList ?? todoList.length ? "" : "Your List is Empty"}
        {todoList.map((todo, i) => {
          return <TodoItem todo={todo} key={i} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
