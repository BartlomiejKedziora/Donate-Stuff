import React from 'react';


const Pagination = ({qtyOnPage, totalQuantity, changePageFn, numbActive}) => {

    const totalPages = Math.ceil(totalQuantity / qtyOnPage);

    const pageUrls = [];
    for(let i=0; i<totalPages; i++) {
        pageUrls.push({
            title: i+1,
            from: i*qtyOnPage,
            to: i*qtyOnPage+qtyOnPage
        })
    }

    return (
       <>
            {pageUrls.map( p => <a key={p.title} id={p.title} className={numbActive===p.title?"receivers-list-number-border" : ""} onClick={ ()=>changePageFn(p.from, p.to, p.title)}>{p.title}</a>)}
       </>
    );
}

export default Pagination;