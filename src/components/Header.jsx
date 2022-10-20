import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../img/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="logo-link-container" to="/">
          <Logo className="header-logo" />
          <span>
            <h1>
              Find<em>Friends</em>
            </h1>
          </span>
        </Link>
        <nav>
          <ul className="header__nav-links">
            <li>
              {" "}
              <NavLink
                to=""
                end
                style={({ isActive }) =>
                  isActive ? { color: "#6C63FF" } : { color: "#111111" }
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              {" "}
              <NavLink
                to="/about"
                style={({ isActive }) =>
                  isActive ? { color: "#6C63FF" } : { color: "#111111" }
                }
              >
                About
              </NavLink>
            </li>

            <li>
              {" "}
              <NavLink
                to="/contact"
                style={({ isActive }) =>
                  isActive ? { color: "#6C63FF" } : { color: "#111111" }
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
