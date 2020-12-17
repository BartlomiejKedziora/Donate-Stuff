import React from 'react';

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

    return(
        <>
            <div className="receivers-list">
                {allLocalList.map(el => {
                    return(
                <div className="receivers-list-item">
                    <div className="receivers-list-item-left">
                        <p className="receivers-list-item-name">{el.name}</p>
                        <p className="receivers-list-item-info">{el.description}</p>
                    </div>
                    <p className="receivers-list-item-right">{el.address}</p>
                </div>
                    );
                })}
            </div>
            <div className="receivers-list-number">1</div>
        </>
    );
}

export default Local;