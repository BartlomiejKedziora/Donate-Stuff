import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { FirebaseContext } from './../../Firebase/index';


const NavLoggedIn = () => {

    const firebase = useContext(FirebaseContext);
    // const history = useHistory();

    // const handleClick = (e) => {
    //     firebase.doSignOut();
    // }

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
                        <Link to="/signout" onClick={() => firebase.doSignOut()}>Wyloguj</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavLoggedIn;