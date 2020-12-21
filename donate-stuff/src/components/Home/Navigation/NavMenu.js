import React from 'react';
import {HashLink} from 'react-router-hash-link';  

const NavMenu = () => {
    return(
        <>
            <nav className="nav-menu">
                <ul className="nav-menu-list">
                    <li className="nav-menu-item">
                        <HashLink smooth to="/#banner">Start</HashLink>
                    </li>
                    <li className="nav-menu-item">
                        <HashLink smooth to="/#steps">O co chodzi?</HashLink>
                    </li>
                    <li className="nav-menu-item">
                        <HashLink smooth to="/#about-us">O nas</HashLink>
                    </li>
                    <li className="nav-menu-item">
                        <HashLink smooth to="/#receivers">Fundacja i organizacje</HashLink>
                    </li>
                    <li className="nav-menu-item">
                        <HashLink smooth to="/#contact">Kontakt</HashLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavMenu;