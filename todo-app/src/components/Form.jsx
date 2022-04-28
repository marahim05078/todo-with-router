import React from "react";

function Form(props) {
  // Create
  const addtodohandler = () => {
    if (!props.toDoTitle) {
      alert("Please enter a valid Title.");
    } else {
      const toDoItem = {
        id: Date.now(),
        title: props.toDoTitle,
        isComplete: false,
      };
      fetch("http://localhost:3000/todoItems", {
        method: "POST",
        body: JSON.stringify(toDoItem),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => console.log(res))
        .then(() => {
          props.dataFetchHandler();
        });

      props.setToDoTitle("");
    }
  };
  // Update
  const updatehandler = () => {
    if (props.toDoTitle) {
      let editableItemObj = {
        ...props.editableItem,
        title: props.toDoTitle,
      };
      fetch(`http://localhost:3000/todoItems/${props.editableItem.id}`, {
        method: "PUT",
        body: JSON.stringify(editableItemObj),
        headers: {
          "Content-type": "application/json",
        },
      }).then(() => {
        props.dataFetchHandler();
      });
      props.setToDoList(
        props.toDoList
          .filter((item) => item.isComplete === false)
          .map((todo) => {
            if (todo.id === props.editableItem.id) {
              todo.title = props.toDoTitle;
            }
            return todo;
          })
      );
      props.setEditMode(false);
      props.setToDoTitle("");
    } else {
      alert("Update with valid name.");
    }
  };

  return (
    <div className="todo">
      <input
        type="text"
        value={props.toDoTitle}
        onChange={(e) => props.setToDoTitle(e.target.value)}
      />
      <button
        onClick={() => (props.editMode ? updatehandler() : addtodohandler())}
      >
        {props.editMode ? "Update todo" : "Add todo"}
      </button>
    </div>
  );
}

export default Form;
