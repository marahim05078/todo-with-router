import React from "react";

import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/todo-app">
          <li>ToDo App</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
