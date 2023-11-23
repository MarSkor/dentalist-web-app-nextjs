"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, text }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
  
    return(
      <li className={`nav__menu--item ${isActive ? "active" : ""}`}>
        <Link href={href} className={`${isActive ? "active" : ""}`}>
          {text}
        </Link>
      </li>
    )
  }

export default NavItem