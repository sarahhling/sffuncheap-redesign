import { userRef } from "react";
import "../styles/globals.css";

function navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav>
                <a href="/#">Events</a>
                <a href="/#">Contact</a>
                <a href="/#">Filter</a>
            </nav>
        </header>
    );
}

export default navbar