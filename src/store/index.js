import { createStore } from "redux";

// Define the initial state
const initialState = {
  title: "",
  notes: [],
  editMode: false,
  updateTitle: null,
};

// Define the reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, { id: Date.now(), title: state.title }],
        title: "",
      };
    case "UPDATE_NOTE":
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
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "SET_EDIT_MODE":
      return {
        ...state,
        editMode: action.payload,
      };
    case "SET_UPDATE_TITLE":
      return {
        ...state,
        updateTitle: action.payload,
        title: action.payload.title,
      };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(reducer);

export default store;
