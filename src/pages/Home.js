import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/todo"} className="homeToTodo">
        todo
      </Link>
    </div>
  );
};

export default Home;
