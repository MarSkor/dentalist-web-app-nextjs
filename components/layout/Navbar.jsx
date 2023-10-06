"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, Cancel } from "iconoir-react";
import { Button } from "../elements";

import { MENU_LIST } from "./data";

const NavItem = ({ href, text }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return(
    
      <Link href={href} className={`nav__item ${isActive ? "active" : ""}`}>
        <span>{text}</span>
      </Link>
    
  )
}

const Navbar = () => {
  const [navbarScroll, setNavbarScroll] = useState(false);
  const [navActive, setNavActive] = useState(null);

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
    <nav className={navbarScroll ? 'nav nav__scroll' : 'nav'}>
      <div className="nav__container">
        <Link href={"/"}>
          <div className="nav__logo">
            <picture>
              <source media="(max-width: 969px)" srcSet="/assets/logo/logo_small.svg" loading="lazy"/>
              <source media="(min-width: 970px)" srcSet="/assets/logo/logo.svg" loading="lazy"/>
              <img src="/asset/logo.svg" alt="logo" />
            </picture>
          </div>
        </Link>

        {/* responsive open / close icon */}
        <div onClick={() => setNavActive(!navActive)} className={`nav__menu-bar`}>
          <span>
            {navActive ? <Cancel /> : <Menu />}
          </span>
        </div>

        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          <ul>
            {MENU_LIST.map((menu, index) => (
              <NavItem 
              href={menu.href} 
              key={index} 
              text={menu.text}
              />
            ))}
          </ul> 

          <div className='nav__menu-cta'>
            <Button size="md" variant="primary" type="button">Book Appointment</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar