import React from 'react';
import { Link } from 'react-scroll';

const NavMenu = () => {
    return(
        <>
            <nav className="nav-menu">
                <ul className="nav-menu-list">
                    <li className="nav-menu-item">
                        <Link to="banner" smooth={true} duration={800}>Start</Link>
                    </li>
                    <li className="nav-menu-item">
                        <Link to="steps" smooth={true} duration={800}>O co chodzi?</Link>
                    </li>
                    <li className="nav-menu-item">
                        <Link to="about-us" smooth={true} duration={800}>O nas</Link>
                    </li>
                    <li className="nav-menu-item">
                        <Link Link to="receivers" smooth={true} duration={800}>Fundacja i organizacje</Link>
                    </li>
                    <li className="nav-menu-item">
                        <Link to="contact" smooth={true} duration={800}>Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavMenu;