import React from 'react';
import NavMenu from './../../Home/Navigation/NavMenu'
import NavLoggedIn from './NavLoggedIn';

const DonateNavigation = () => {
    return(
        <section className="nav container">
            <NavLoggedIn />
            <NavMenu />
        </section>
    );
}

export default DonateNavigation;