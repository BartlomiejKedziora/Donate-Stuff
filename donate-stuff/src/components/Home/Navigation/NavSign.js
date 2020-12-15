import { Link } from 'react-router-dom';

const NavSign = () => {
    return(
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/signin">Zaloguj</Link>
                    </li>
                    <li>
                        <Link to="/signup">Zarejestruj</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavSign;