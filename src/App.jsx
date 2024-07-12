import { useReducer } from "react";
import "./App.css";

// Define action types
const ADD_NOTE = "ADD_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";
const DELETE_NOTE = "DELETE_NOTE";
const SET_TITLE = "SET_TITLE";
const SET_EDIT_MODE = "SET_EDIT_MODE";
const SET_UPDATE_TITLE = "SET_UPDATE_TITLE";

// Define the initial state
const initialState = {
  title: "",
  notes: [],
  editMode: false,
  updateTitle: null,
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { id: Date.now(), title: state.title }],
        title: "",
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === state.updateTitle.id
            ? { ...note, title: state.title }
            : note
        ),
        title: "",
        editMode: false,
        updateTitle: null,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_EDIT_MODE:
      return {
        ...state,
        editMode: action.payload,
      };
    case SET_UPDATE_TITLE:
      return {
        ...state,
        updateTitle: action.payload,
        title: action.payload.title,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTitleChange = (event) => {
    dispatch({ type: SET_TITLE, payload: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.title.trim() === "") {
      return alert("Enter Something valid");
    }

    state.editMode
      ? dispatch({ type: UPDATE_NOTE })
      : dispatch({ type: ADD_NOTE });
  };

  const handleUpdate = (list) => {
    dispatch({ type: SET_EDIT_MODE, payload: true });
    dispatch({ type: SET_UPDATE_TITLE, payload: list });
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_NOTE, payload: id });
  };

  return (
    <div className="app">
      <h1 className="header">Create your to do list</h1>
      <form onSubmit={handleSubmit} className="input">
        <input
          className="inside"
          type="text"
          onChange={handleTitleChange}
          value={state.title}
          placeholder="Enter the task"
        />
        <button type="submit">{state.editMode ? "Update" : "Add Task"}</button>
      </form>
      <div className="output">
        <ul>
          {state.notes.map((list) => (
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
