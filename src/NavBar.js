import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./styles.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="menuVisible">
        <Link to="/" className="NavItems">
          Home
        </Link>
        <Link to="/about" className="NavItems">
          About
        </Link>
        <Link to="/gallery" className="NavItems">
          Gallery
        </Link>
      </div>
      <div className="burgerVisible">
        <Menu>
          <Link to="/" className="menu-items">
            Home
          </Link>
          <Link to="/about" className="menu-items">
            About
          </Link>
          <Link to="/gallery" className="menu-items">
            Gallery
          </Link>
        </Menu>
      </div>
    </div>
  );
}
