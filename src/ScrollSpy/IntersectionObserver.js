import React, { useState, useRef, useEffect } from "react";
import "./style.scss";

const pages = Array.from({ length: 8 }).map((_, i) => i + 1);

const IntersectionObserver = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const contentRef = useRef([]);
  const moveToPage = (index) => () => {
    contentRef.current[index].scrollo;
  };

  const scrollSpyObserver = new IntersectionObserver();
  return <div>hello</div>;
};

export default IntersectionObserver;
