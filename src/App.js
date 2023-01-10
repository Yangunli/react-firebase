import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./styles/style.css";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import { auth, db } from "./firebase";
function App() {
  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
