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
                Solar Roofs Service
                <img className="website-logo" src={Logo} alt=""></img>
              </a>
            </h1>
            <ul>
              <li>
                <a class="current" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
