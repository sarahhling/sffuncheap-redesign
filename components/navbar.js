import React from "react";
import "../styles/Home.module.css";
import "../styles/Navbar.module.css";
import { Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar>
      <div className="leftSide">
        <div classname="links">
          <a href="/events">EVENTS</a>
          <a href="/contact">CONTACT</a>
          <a href="/filter">FILTER</a>
        </div>
      </div>
      <div className="rightSide"></div>
    </Navbar>
  );
}

export default NavBar;
