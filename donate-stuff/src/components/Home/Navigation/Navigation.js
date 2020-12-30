import React, { useContext } from 'react';
import {AuthContext} from './../../Auth/Auth';
import NavMenu from './NavMenu'
import NavSign from './NavSign';
import NavLoggedIn from './../../DonateStuff/DonateNavigation/NavLoggedIn';

const Navigation = () => {

    const currentUser = useContext(AuthContext);

    return(
        <section className="nav container">
            {currentUser ? <NavLoggedIn /> : <NavSign />}
            <NavMenu />
        </section>
    );
}

export default Navigation;