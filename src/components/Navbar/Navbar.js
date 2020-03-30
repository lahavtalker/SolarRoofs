import React, { Component } from "react";
import "./Navbar.css";
import Logo from "./Logo.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <h1 className="logo">
              <a href="#">
                <span>S</span>olar <span>R</span>oofs <span>S</span>ervice
                <img className="website-logo" src={Logo} alt=""></img>
              </a>
            </h1>
            <ul>
              <li>
                <a href="#">Private service</a>
              </li>
              <li>
                <a href="#">Organizational service</a>
              </li>
              <li>
                <a href="#">Nationl service</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
