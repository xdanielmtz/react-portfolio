import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <NavLink to="/home" className="navName">Daniel Martinez</NavLink>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <NavLink to="/home" activeStyle={{backgroundColor: "rgba(0,0,0,0.1)"}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeStyle={{backgroundColor: "rgba(0,0,0,0.1)"}}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeStyle={{backgroundColor: "rgba(0,0,0,0.1)"}}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
