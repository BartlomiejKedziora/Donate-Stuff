import React, { useState } from 'react';
import Pagination from './../Pagination/Pagination';

const Fund = () => {

    const allFundList = [
        {
            id: 1,
            name: "Fundacja Trala la",
            description: "Zbieracz, handlarz, kombajnista",
            address: "ul. Rynek 111, Kraków"
        },
        {
            id: 2,
            name: "Fundacja Trala la",
            description: "Zbierami i dajemy",
            address: "ul. Rynek 10, Kraków"
        },
        {
            id: 3,
            name: "Fundacja Trala la",
            description: "Zbieracz, handlarz, kombajnista",
            address: "ul. Rynek 18, Kraków"
        },
        {
            id: 4,
            name: "Fundacja Trala la",
            description: "Zbieracz, handlarz, kombajnista",
            address: "ul. Rynek 110, Kraków"
        },
        {
            id: 5,
            name: "Fundacja Trala la",
            description: "Zbieracz, kombajnista",
            address: "ul. Rynek 210, Kraków"
        },
        {
            id: 6,
            name: "Fundacja Trala la",
            description: "Zbieracz, handlarz, kombajnista",
            address: "ul. Rynek 10, Kraków"
        },
        {
            id: 7,
            name: "Fundacja Trala la",
            description: "Zbieracz, handlarz, kombajnista",
            address: "ul. Rynek 10, Kraków"
        },
        {
            id: 8,
            name: "Fundacja Trala la",
            description: "Zbieracz, handlarz, kombajnista",
            address: "ul. Rynek 10, Kraków"
        }
    ];

    const [fundationsToShow, setFundationToShow] = useState(allFundList.slice(0,3));
    const [numbActive, setNumbActive] = useState(1);
  
    const listLength = allFundList.length;

    const showElements = (fromIndex, toIndex, title) => {
        setFundationToShow(allFundList.slice(fromIndex, toIndex));
        setNumbActive(title);
    }

    return(
        <>
            <div className="receivers-list">
                {fundationsToShow.map(el => {
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

export default Fund;