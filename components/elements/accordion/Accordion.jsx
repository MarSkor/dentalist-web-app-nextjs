"use client"
import React, { useState, useRef } from "react";
import { NavArrowUp, NavArrowDown } from "iconoir-react";

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  
  const contentEl = useRef();

  const handleToggle = () => setIsActive(prev => !prev);


  return (
    <div className={`accordion__item ${isActive ? "active" : ""}`}>
      <span className="accordion__title" onClick={handleToggle}>
        <h5>{question}</h5>
        <span className="accordion__control">
            {isActive ? <NavArrowUp height={36} width={36}/> : <NavArrowDown height={36} width={36}/>} 
        </span>
      </span>

      <div
        ref={contentEl}
        className="accordion__answer_wrapper"
        style={
            isActive
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="accordion__answer">
            <p className="p-16">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion