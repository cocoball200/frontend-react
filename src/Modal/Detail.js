import React, { forwardRef } from "react";

const Detail = ({ text, context, open, onToggle }, ref) => (
  <details open={open} ref={ref}>
    <summary onClick={onToggle}>
      {text}
      {console.log(text, context)}
    </summary>
    <p>{context}</p>
  </details>
);

export default forwardRef(Detail);
