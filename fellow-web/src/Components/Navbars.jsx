import React, { useState, useEffect } from "react";
import "../Styles/navbar.css";
import bible from "./images/bible.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing menu icons

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={bible} alt="Bible" />
        <h1 className="left-side">
          <span>JIT</span> Fellowship
        </h1>
      </div>

      {/* Menu Icon for Mobile Screens */}
      <button className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {/* Navigation Links - Shows when menu is open */}
      <ul className={menuOpen || !isMobile ? "menu open" : "menu"}>
        <li><a href="/">Home</a></li>
        <li><a href="programs">Programs</a></li>
        <li><a href="event">Events</a></li>
        <li><a href="teams">Teams</a></li>
        <li><a href="join">Join</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
