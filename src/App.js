import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/style.css";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
