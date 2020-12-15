import { Link, Router } from 'react-router-dom';

const NavSign = () => {
    return(
        <>
            <div className="nav-sign">
                <ul className="nav-sign-list">
                    <li className="nav-sign-item">
                        <Link to="/signin">Zaloguj</Link>
                    </li>
                    <li className="nav-sign-item">
                        <Link to="/signup">Zarejestruj</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavSign;
