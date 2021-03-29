import { createPortal } from "react-dom";

const ContextPortal = ({ chidren, target }) => {
  return target ? createPortal((chidren, target)) : null;
};

export default ContextPortal;
