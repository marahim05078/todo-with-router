import React from "react";

function ToDoList(props) {
  // Read/Edit
  const edithandler = (id) => {
    const tobeEdited = props.toDoList.find((item) => item.id === id);
    props.setEditMode(true);
    props.setEditableItem(tobeEdited);
    props.setToDoTitle(tobeEdited.title);
  };
  return (
    <div className="todo-list">
      <h4>Incomplete item list</h4>
      <ul>
        {props.toDoList
          .filter((item) => item.isComplete === false)
          .map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                onChange={() => props.toggleHandler(todo.id)}
              />
              <span>{todo.title}</span>
              <button onClick={() => edithandler(todo.id)}>Edit</button>
              <button onClick={() => props.deletehandler(todo.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ToDoList;
