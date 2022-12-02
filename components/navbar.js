import React from "react";
import "../Home.module.css";

function Navbar() {
	return (
        <div className="Navbar">
            <div className="leftSide">
                <div classname="links">
                    <a href="/events">Events</a>
                    <a href="/contact">Contact</a>
                    <a href="/filter">Search</a>
                </div>
            </div>
            <div className="rightSide"></div>
        </div>
    );
}

export default Navbar;