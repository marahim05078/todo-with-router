import React from "react";
import { useState, useEffect } from "react";
import CompleteList from "./CompleteList";
import Form from "./Form";
import ToDoList from "./ToDoList";

function ToDoApp(props) {
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableItem, setEditableItem] = useState(null);
  // Data fetching
  const dataFetchHandler = () => {
    fetch("http://localhost:3000/todoItems")
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Server not responding!");
        }
      })
      .then((data) => setToDoList(data))
      .catch((err) => alert(err.message));
  };
  useEffect(() => {
    dataFetchHandler();
  }, []);
  // Delete
  const deletehandler = (id) => {
    fetch(`http://localhost:3000/todoItems/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      dataFetchHandler();
    });
  };
  // Toggle Hnadler
  const toggleHandler = (id) => {
    let toggleItem = toDoList.find((item) => item.id === id);
    let updatedToggleItem = {
      ...toggleItem,
      isComplete: !toggleItem.isComplete,
    };
    fetch(`http://localhost:3000/todoItems/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedToggleItem),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      dataFetchHandler();
    });
  };
  return (
    <div className="app">
      <h2 style={{ color: "dodgerblue", marginTop: "20px" }}>
        Simple To-Do App
      </h2>
      <Form
        toDoTitle={toDoTitle}
        setToDoTitle={setToDoTitle}
        toDoList={toDoList}
        setToDoList={setToDoList}
        editableItem={editableItem}
        editMode={editMode}
        setEditMode={setEditMode}
        dataFetchHandler={dataFetchHandler}
      />
      <ToDoList
        setToDoTitle={setToDoTitle}
        toDoList={toDoList}
        setToDoList={setToDoList}
        setEditMode={setEditMode}
        setEditableItem={setEditableItem}
        dataFetchHandler={dataFetchHandler}
        deletehandler={deletehandler}
        toggleHandler={toggleHandler}
      />
      <CompleteList
        toDoList={toDoList}
        deletehandler={deletehandler}
        toggleHandler={toggleHandler}
      />
    </div>
  );
}

export default ToDoApp;
