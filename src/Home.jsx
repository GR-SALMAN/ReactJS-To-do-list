import { useState } from "react";
import { Submit } from "./Submit";
import { Listing } from "./list";
import { Title } from "./Head";

export const Home = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
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
    setNotes(notes.filter((e) => e.id !== id));
  };

  return (
    <div className="home">
      <Title />
      <Submit
        handleSubmit={handleSubmit}
        handleTitleChange={handleTitleChange}
        editMode={editMode}
        title={title}
      />
      <Listing
        notes={notes}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};
