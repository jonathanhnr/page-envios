import React, { useRef } from "react";
import FaqItemArrow from "./FaqItemArrow.jsx";

const FaqItem = (props) => {
  const inputRef = useRef();
  return (
    <div className={'faq-component-style'}>
      <input
        type="radio"
        name="tabs"
        id={`faq-item-${props.index}`}
        ref={inputRef}
      />
      <label
        htmlFor={`faq-item-${props.index}`}
        onClick={(ev) => {
          ev.preventDefault();
          inputRef.current.checked = !inputRef.current.checked;
        }}
      >
        <h4>
          <span>{props.title}</span> <FaqItemArrow />
        </h4>
      </label>
      <div className={"tab-content"}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default FaqItem;
