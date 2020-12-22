import { Link } from 'react-router-dom';

const NavLoggedIn = () => {
    return(
        <>
            <div className="nav-sign">
                <ul className="nav-sign-list">
                    <li className="nav-sign-item">
                        <p className="nav-sign-item">Użytkownik</p>
                    </li>
                    <li className="nav-sign-item">
                        <Link to="/donate-stuff">Oddaj rzeczy</Link>
                    </li>
                    <li className="nav-sign-item">
                        <Link to="/signout">Wyloguj</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavLoggedIn;