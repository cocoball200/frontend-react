import React, { useRef, useState, useEffect } from "react";
import "./modal.scss";
import Detail from "./Detail";
import dummyData from "./dummyData";
import ContextPortal from "./ContextPortal";

export default function Modal() {
  const [openIndex, setOpen] = useState(null);
  const detailRefs = useRef([]);

  const togglePopover = (index) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(e.target.parentElement.open ? null : index);
  };

  const closeAll = () => {
    setOpen(null);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeAll);
    return () => {
      document.body.removeEventListener("click", closeAll);
    };
  }, []);

  return (
    <div>
      <div className="wrapper">
        {dummyData.map(({ text, context }, index) => (
          <Detail key={`detail${index}`}>
            ref={(r) => (detailRefs.current[index] = r)}
            text={text}
            context={context}
            open={openIndex === index}
            onToggle={togglePopover(index)}
          </Detail>
        ))}
      </div>
      <ContextPortal
        target={detailRefs.current[openIndex]}
        chidren={<p>{dummyData[openIndex]?.context}</p>}
      />
    </div>
  );
}
