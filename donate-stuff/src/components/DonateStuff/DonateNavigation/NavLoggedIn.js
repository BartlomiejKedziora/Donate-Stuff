import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';  

const NavLoggedIn = () => {

    return(
        <>
            <div className="nav-logged">
                <ul className="nav-logged-list">
                    <li className="nav-logged-item">
                        <p>ccc</p>
                    </li>
                    <li className="nav-logged-item">
                        <HashLink smooth to="/donate-stuff/#donate-form">Oddaj rzeczy</HashLink>
                    </li>
                    <li className="nav-logged-item">
                        <Link to="/signout">Wyloguj</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavLoggedIn;