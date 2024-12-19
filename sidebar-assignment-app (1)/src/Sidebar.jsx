/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Sidebar.css";

const MenuItem = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sidebar">
      <div
        className={`menu-item ${level > 0 ? "menu-item-nested" : ""}`}
        style={{ paddingLeft: `${20 * level}px` }}
        onClick={hasChildren ? toggle : null}>
        {item.label}
        {hasChildren ? (isOpen ? " [-]" : " [+]") : null}
      </div>
      {hasChildren && isOpen && (
        <div>
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ menu }) => {
  return (
    <div className="sidebar-container">
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
