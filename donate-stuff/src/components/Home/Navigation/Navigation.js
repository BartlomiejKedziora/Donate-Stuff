import React from 'react';
import NavMenu from './NavMenu'
import NavSign from './NavSign';

const Navigation = () => {
    return(
        <section className="nav container">
            <NavSign />
            <NavMenu />
        </section>
    );
}

export default Navigation;