import React from "react";

function CompleteList(props) {
  return (
    <div className="completed-list">
      <h4>Complete item list</h4>
      <ul>
        {props.toDoList
          .filter((item) => item.isComplete === true)
          .map((todo) => (
            <li>
              <input
                type="checkbox"
                onChange={() => props.toggleHandler(todo.id)}
                checked
              />
              <span>{todo.title}</span>
              <button onClick={() => props.deletehandler(todo.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CompleteList;
