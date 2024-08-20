import { useContext } from "react";
import { ContextTag } from "./context/CreateContext";
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
        <button type="submit">{editMode ? "Update" : "Add Task"}</button>
      </form>
    </>
  );
};
