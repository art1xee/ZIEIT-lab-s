import React from "react";
import { links, social } from "./data";

function SideBar() {
  return (
    <div className="sidebar-container">
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
  );
}

export default SideBar;
