import React from 'react';
import { Link } from 'react-scroll';

const NavMenu = () => {
    return(
        <>
            <div>
                <ul>
                    <li>
                        <Link to="banner" smooth={true} duration={800}>Start</Link>
                    </li>
                    <li>
                        <Link to="steps" smooth={true} duration={800}>O co chodzi?</Link>
                    </li>
                    <li>
                        <Link to="about-us" smooth={true} duration={800}>O nas</Link>
                    </li>
                    <li>
                        <Link Link to="receivers" smooth={true} duration={800}>Fundacja i organizacje</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={800}>Kontakt</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavMenu;