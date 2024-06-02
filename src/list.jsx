import { useContext } from "react";
import { ContextTag } from "./context/ContextProvide";
ContextTag;

useContext;
export const Listing = () => {
  const { notes, handleDelete, handleUpdate } = useContext(ContextTag);
  return (
    <>
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
    </>
  );
};
