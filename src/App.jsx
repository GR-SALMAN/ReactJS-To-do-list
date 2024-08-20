import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./App.css";

function NotesApp() {
  const dispatch = useDispatch();
  const { title, notes, editMode, updateTitle } = useSelector((state) => state);

  const handleTitleChange = (event) => {
    dispatch({ type: "SET_TITLE", payload: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
      return alert("Enter Something valid");
    }

    editMode
      ? dispatch({ type: "UPDATE_NOTE" })
      : dispatch({ type: "ADD_NOTE" });
  };

  const handleUpdate = (list) => {
    dispatch({ type: "SET_EDIT_MODE", payload: true });
    dispatch({ type: "SET_UPDATE_TITLE", payload: list });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_NOTE", payload: id });
  };

  return (
    <div className="app">
      <h1 className="header">Create your to do list</h1>
      <form onSubmit={handleSubmit} className="input">
        <input
          className="inside"
          type="text"
          onChange={handleTitleChange}
          value={title}
          placeholder="Enter the task"
        />
        <button type="submit">{editMode ? "Update" : "Add Task"}</button>
      </form>
      <div className="output">
        <ul>
          {notes.map((list) => (
            <li key={list.id}>
              <strong className="title">{list.title}</strong>
              <div className="btn-mini">
                <button onClick={() => handleUpdate(list)}>Edit</button>
                <button onClick={() => handleDelete(list.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NotesApp;
