import React, { useState } from 'react';
import Fund from './Fund';
import Org from './Org';
import Local from './Local';

const Receivers = () => {

    const [orgType, setOrgType] = useState("fund");

    const handleClick = (e) => {
        const type = e.target.id;
        setOrgType(type);
    }

    const getInfo = () => {
        switch (orgType) {
            case "fund":
                return (
                    <>
                        <Fund />
                    </>
                )
            case "org":
                return (
                    <>
                        <Org />
                    </>
                )
            case "local":
                return (
                    <>
                        <Local />
                    </>
                )
        }
    }

    return(
        <>
            <section id="receivers" className="receivers container">
                <h2 className="receivers-title">Komu pomagamy?</h2>
                <div className="receivers-decor"></div>
                <div className="receivers-groups">
                    <p onClick={handleClick} className={orgType==="fund"?"receivers-groups-item borderLink":"receivers-groups-item"} id="fund">Fundacjom</p>
                    <p onClick={handleClick} className={orgType==="org"?"receivers-groups-item borderLink":"receivers-groups-item"} id="org">Organizacjom pozarządowym</p>
                    <p onClick={handleClick} className={orgType==="local"?"receivers-groups-item borderLink":"receivers-groups-item"} id="local">Lokalnym zbiórkom</p>
                </div>
                <p div className="receivers-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                {getInfo()}
            </section>
        </>
    );
}

export default Receivers;