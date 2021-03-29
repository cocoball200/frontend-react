import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal/modal";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Modal />
  </StrictMode>,
  rootElement
);
