import { Link } from 'react-router-dom';

const NavMenu = () => {
    return(
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/">Start</Link>
                    </li>
                    <li>
                        <Link to="/">O co chodzi?</Link>
                    </li>
                    <li>
                        <Link to="/">O nas</Link>
                    </li>
                    <li>
                        <Link to="/">Fundacja i organizacje</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="#contact" spy={true} smooth={true} duration={500}>Kontakt</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavMenu;