import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import Content from "./Content";
import "./style.scss";

//const pages = Array.from({ length: 8 }).map((_, i) => i + 1);
const pages = Array.from({ length: 8 }, (_, i) => i + 1);

const IntersectionObserver = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const contentRef = useRef([]);
  const moveToPage = (index) => () => {
    // 클릭하면 해당 페이지로 넘어감.
    contentRef.current[index].scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  const scrollSpyObserver = new IntersectionObserver(
    (entries) => {
      const { target } = entries.find((entry) => entry.isIntersecting) || {};
      // -1은 해당하는 것이 없다.
      setViewIndex(contentRef.current.indexOf(target));
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }
  );

  useEffect(() => {
    //observer 모든 div에게 적용
    contentRef.current.forEach((item) => scrollSpyObserver.observe(item));
    return () => {
      contentRef.current.forEach((item) => scrollSpyObserver.unobserve(item));
    };
  }, []);

  return (
    <div id="app">
      <Nav pages={pages} viewIndex={viewIndex} moveToPage={moveToPage} />
      <div id="contents">
        {pages.map((p, i) => {
          // console.log(contentRef.current[i]);
          //스크롤을 내릴때마다, ref.current[i]가 맵을 돌린다.
          return (
            <Content
              key={p}
              ref={(r) => {
                console.log(r);
                contentRef.current[i] = r;
              }}
              page={p}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IntersectionObserver;
