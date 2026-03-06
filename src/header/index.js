import React from "react";
import "./style.css";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Headermain = () => {
  return (
    <>
      <header className="fixed-top site__header">
        <div className="header-container">
          <button className="navbar-brand nav_ac" onClick={() => scrollToSection('home')}>
            {logotext}
          </button>
          <nav className="navbar__tabs">
            <button className="nav-tab" onClick={() => scrollToSection('home')}>Home</button>
            <button className="nav-tab" onClick={() => scrollToSection('portfolio')}>Portfolio</button>
            <button className="nav-tab" onClick={() => scrollToSection('about')}>About</button>
            <button className="nav-tab" onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
          <Themetoggle />
        </div>
      </header>
    </>
  );
};

export default Headermain;
