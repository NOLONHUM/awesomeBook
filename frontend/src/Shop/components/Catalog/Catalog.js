import React from 'react';

import CatalogItem from './CatalogItem/CatalogItem';
import Loader from '../../../shared/components/UI/Loader/Loader';
import './Catalog.css';

const Catalog = props => {
    let CatalogItems;

    if (props.books) {
        if (props.books.length) {
            CatalogItems = props.books.map(book => {
            return <CatalogItem 
                        title={book.title}
                        author={book.author}
                        price={book.price}
                        rating={book.rating}
                        imageUrl={book.imageUrl}
                        _id={book._id}
                        key={book._id} />
            });
        } else {
            CatalogItems = <h2 className="catalog-miss">К сожалению, ничего не нашлось!</h2>
        }
    } else {
        CatalogItems = <Loader />
    }
    
    return (
        <div className="catalog">
            {CatalogItems}
        </div>
    );
};

export default Catalog;