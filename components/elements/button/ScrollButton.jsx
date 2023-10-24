"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "iconoir-react"


const ScrollButton = () => {
    const [showTopButton, setShowTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
  return (
    <>
    {" "}
    {showTopButton && (
    <div 
    className="scrollbutton" 
    onClick={scrollToTop}
    title="scroll to top"
    >
        <span>
            <ArrowUp/>
        </span>
    </div>     
    )}
    </>      
  )
}

export default ScrollButton