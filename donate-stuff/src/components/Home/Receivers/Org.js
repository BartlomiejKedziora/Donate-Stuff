import React, { useState } from 'react';

import Pagination from './../Pagination/Pagination';


const Org = () => {

    const allOrgList = [
        {
            id: 1,
            name: "Organizacja Trala la",
            description: "Zbieracz, handlarz, kombajnista",
            address: "ul. Rynek 111, Kraków"
        },
        {
            id: 2,
            name: "Organizacja Trala la",
            description: "Zbierami i dajemy",
            address: "ul. Rynek 10, Kraków"
        },
        {
            id: 3,
            name: "Organizacja Trala la",
            description: "Zbieracz, handlarz, kombajnista",
            address: "ul. Rynek 18, Kraków"
        },
        {
            id: 4,
            name: "Organizacja Trala la",
            description: "Zbieracz, handlarz, kombajnista",
            address: "ul. Rynek 110, Kraków"
        },
        {
            id: 5,
            name: "Organizacja Trala la",
            description: "Zbieracz, kombajnista",
            address: "ul. Rynek 210, Kraków"
        },
        {
            id: 6,
            name: "Organizacja Trala la",
            description: "Zbieracz, handlarz, kombajnista",
            address: "ul. Rynek 10, Kraków"
        }
    ];

    const [orgToShow, setOrgToShow] = useState(allOrgList.slice(0,3));
    const [numbActive, setNumbActive] = useState(1);


    const listLength = allOrgList.length;

    const showElements = (fromIndex, toIndex, title) => {
        setOrgToShow(allOrgList.slice(fromIndex, toIndex));
        setNumbActive(title);
    }

    return(
        <>
            <div className="receivers-list">
                {orgToShow.map(el => {
                    return(
                <div key={el.id} className="receivers-list-item">
                    <div className="receivers-list-item-left">
                        <p className="receivers-list-item-name">{el.name}</p>
                        <p className="receivers-list-item-info">{el.description}</p>
                    </div>
                    <p className="receivers-list-item-right">{el.address}</p>
                </div>
                    );
                })}
            </div>
            <div className="receivers-list-number">
                <Pagination 
                    qtyOnPage={3}
                    totalQuantity={listLength}
                    changePageFn={showElements}
                    numbActive={numbActive}
                />
            </div>
        </>
    );
}

export default Org;