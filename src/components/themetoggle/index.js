import React, { useEffect, useState } from "react";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="theme-toggle" onClick={themetoggle} title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"}></i>
    </div>
  );
};

export default Themetoggle;
