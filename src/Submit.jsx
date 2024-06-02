import { useContext } from "react";
import { ContextTag } from "./context/ContextProvide";
useContext;
ContextTag;
export const Submit = () => {
  const { title, editMode, handleTitleChange, handleSubmit } =
    useContext(ContextTag);
  return (
    <>
      <form onSubmit={handleSubmit} className="input">
        <input
          className="inside"
          type="text"
          onChange={handleTitleChange}
          value={title}
          placeholder="Enter the task"
        />
        <button type="submit">{editMode ? "Upodate" : "Add Task"}</button>
      </form>
    </>
  );
};
