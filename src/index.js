import { StrictMode } from "react";
import ReactDOM from "react-dom";
import IntersectionObserver from "./ScrollSpy/IntersectionObserver";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <IntersectionObserver />
  </StrictMode>,
  rootElement
);
