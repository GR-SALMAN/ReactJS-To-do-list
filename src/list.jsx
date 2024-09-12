import { useContext } from "react";
import { ContextTag } from "./context/CreateContext";

export const Listing = () => {
  const { notes, handleDelete, handleUpdate } = useContext(ContextTag);

  return (
    <>
      {notes.length > 0 && (
        <div className="output">
          <ul>
            {notes.map((list) => (
              <li key={list.id} className="animated bounce">
                <strong className="title">{list.title}</strong>
                <div className="btn-mini">
                  <button onClick={() => handleUpdate(list)}>Edit</button>
                  <button onClick={() => handleDelete(list.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Optionally, you can add an alternative message for no notes */}
      {notes.length === 0 && <p>No notes available yet.</p>}
    </>
  );
};
