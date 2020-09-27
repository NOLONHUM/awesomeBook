import React from 'react';

import CatalogItem from './CatalogItem/CatalogItem';
import './Catalog.css';

const Catalog = props => {
    let CatalogItems;

    if (props.books) {
        CatalogItems = props.books.map(book => {
            return <CatalogItem 
                        title={book.title}
                        author={book.author}
                        price={book.price}
                        rating={book.rating}
                        imageUrl={book.imageUrl}
                        link={book.link}
                        key={book._id} />
        });
    } else {
        CatalogItems = <h2 className="catalog-miss">К сожалению, ничего не нашлось!</h2>
    }
    
    return (
        <div className="catalog">
            {CatalogItems}
        </div>
    );
};

export default Catalog;