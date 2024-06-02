import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Tour-Travel</h1>
          <ul className="nav-menu">
            <li>
              <NavLink
                to="/"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
