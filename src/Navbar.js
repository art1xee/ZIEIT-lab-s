import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { links, social } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const showMenu = () => {
    if (window.innerHeight > 800) {
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  };

  useEffect(() => {
    showMenu();
    window.addEventListener('resize', showMenu);
    return () => window.removeEventListener('resize', showMenu);
  }, []);

  return (
    <nav className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      {showLinks && (
        <div className="links-social-container">
          <ul className="links">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
          <ul className="social-icons">
            {social.map((item) => (
              <li key={item.id}>
                <a href={item.url}>{item.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
