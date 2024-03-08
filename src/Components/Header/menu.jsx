import React from 'react';
import { Link } from 'react-router-dom';
import "./menu.css";

const Header = () => {
    return (
        <>
        <header>
            <nav>
                <a href="/">Accueil</a>
                <a href="/">Presentation</a>
                {/*<Link to={Presentation}>Présentation</Link> */}
                <a href="/">Destination</a>
                <a href="/">Contact</a>
                <a href="/">À Propos </a>
            </nav>
        </header>
        </>
    );
};

export default Header;