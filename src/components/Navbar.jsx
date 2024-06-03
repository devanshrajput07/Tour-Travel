import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { NavItems } from "./NavItems";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Tour-Travel</h1>
          <ul className="nav-menu">
            {NavItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={item.url}
                    className={item.cName}
                    activeClassName="nav-links-active"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
            <button className="nav-button">Sign Up</button>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
