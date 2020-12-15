import React from 'react';
import NavMenu from './NavMenu'
import NavSign from './NavSign';

const Navigation = () => {
    return(
        <div className="nav container">
            <NavSign />
            <NavMenu />
        </div>
    );
}

export default Navigation;