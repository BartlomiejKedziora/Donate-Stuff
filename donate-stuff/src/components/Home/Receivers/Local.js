import React, { useState } from 'react';

import Pagination from './../Pagination/Pagination';


const Local = () => {

    const allLocalList = [
        {
            id: 1,
            name: "Lokalna akcja Trala la",
            description: "Zbieracz, handlarz, kombajnista",
            address: "ul. Rynek 122, Kraków"
        },
        {
            id: 2,
            name: "Lokalna akcja Trala la",
            description: "Zbierami i dajemy",
            address: "ul. Rynek 10, Kraków"
        },
        {
            id: 3,
            name: "Lokalna akcja Trala la",
            description: "Zbieracz, handlarz, kombajnista",
            address: "ul. Rynek 18, Kraków"
        }
    ];

    const [localsToShow, setLocalsToShow] = useState(allLocalList.slice(0,3));
    const [numbActive, setNumbActive] = useState(1);
  
    const listLength = allLocalList.length;

    const showElements = (fromIndex, toIndex, title) => {
        setLocalsToShow(allLocalList.slice(fromIndex, toIndex));
        setNumbActive(title);
    }

    return(
        <>
            <div className="receivers-list">
                {localsToShow.map(el => {
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

export default Local;