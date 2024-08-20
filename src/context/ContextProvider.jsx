import react, { useContext, useState } from "react";
Home;
import React from "react";
import { Home } from "../Home";
import { ContextTag } from "./CreateContext";

export const ContextProvider = (props) => {
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

  const everything = {
    title,
    setTitle,
    notes,
    setNotes,
    editMode,
    setEditMode,
    updateTitle,
    setUpdateTitle,
    handleTitleChange,
    handleSubmit,
    handleDelete,
    createHandle,
    updateMode,
    handleUpdate,
  };
  return (
    <ContextTag.Provider value={everything}>
      {props.children}
    </ContextTag.Provider>
  );
};
