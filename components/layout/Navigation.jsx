"use client"
import React, { useState, useEffect, useRef } from "react";
import { NavItem, NavLogo } from "./menu";
import { motion } from "framer-motion";
import { MENU_LIST } from "./data";
import { useClickAway } from "react-use";
import Hamburger from 'hamburger-react'
import { Button } from "../elements";
import { navVariants } from "@/utils/motions";

const Navigation = () => {
  const [navActive, setNavActive] = useState(null);
  const [navbarScroll, setNavbarScroll] = useState(false);

  const ref = useRef(null);
  useClickAway(ref, () => setNavActive(false));

  const navbarOnChange = () => {
    if(window.scrollY >= 90){
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  }

  useEffect(() => {
    navbarOnChange();
    window.addEventListener('scroll', navbarOnChange);
  })

  return (
    <motion.nav 
    initial="hidden"
    animate="show"
    variants={navVariants}
    className={navbarScroll ? 'nav nav__scroll' : 'nav'} 
    ref={ref}
    >
      <div className="nav__wrapper section--lg">
        <NavLogo/>
        <span className="nav__toggle">
          <Hamburger 
          rounded 
          size={24} 
          toggled={navActive} 
          toggle={setNavActive}
          label="Show menu"
          />
        </span>
        <div className={`nav__menu ${navActive ? "active" : ""}`}>
          <ul className="nav__menu--list">
            {MENU_LIST.map((item, i) => (
              <NavItem 
              key={item.id}
              href={item.href}
              text={item.text}
              />
            ))}
          </ul>
          <Button size="md" variant="primary" type="button">Book Appointment</Button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation