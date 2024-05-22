import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }; //When the value is inserted the title note is on the title variable

  const handleSubmit = (event) => {
    //Clicked on submit/update button
    event.preventDefault();
    if (title.trim() === "") {
      // make sure user dont submit with empty insert
      return alert("Enter Something valid");
    }

    editMode === true ? updateMode() : createHandle();
  };

  function createHandle() {
    const obj = {
      id: Date.now(),
      title,
    };
    setNotes([...notes, obj]);
    setTitle("");
  }

  function updateMode() {
    let updateNoteList = notes.map((note) => {
      if (note.id == updateTitle.id) {
        return {
          ...notes,
          title: title,
        };
      }
      return note;
    });

    setNotes(updateNoteList);
    setEditMode(false);
    setUpdateTitle(null);
    setTitle("");
  }

  const handleUpdate = (list) => {
    setEditMode(true);
    setUpdateTitle(list);
    setTitle(list.title);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((e) => e.id !== id)); // Strict comparison
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

export default App;
