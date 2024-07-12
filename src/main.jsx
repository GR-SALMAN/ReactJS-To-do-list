import ReactDOM from "react-dom/client";
import { Home } from "./Home";
import "./index.css";
import "./Home.css";
import { ContextProvider } from "./context/ContextProvider";
// import { ContextTag } from "./context/ContextProvide";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <ContextTag>

  // </ContextTag>

  <ContextProvider>
    <Home />
  </ContextProvider>
);
