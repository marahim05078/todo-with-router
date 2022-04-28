import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import ToDoApp from "../components/ToDoApp";
import NotFound from "../components/NotFound";

function Routings(props) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/todo-app" element={<ToDoApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routings;
