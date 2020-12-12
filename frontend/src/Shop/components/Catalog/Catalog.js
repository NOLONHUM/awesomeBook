import React from 'react';
import { connect } from 'react-redux';

import CatalogItem from './CatalogItem/CatalogItem';
import Loader from '../../../shared/components/UI/Loader/Loader';
import './Catalog.scss';

const Catalog = props => {
    let CatalogItems;

    if (props.isLoading) {
        CatalogItems = <Loader />
    } else if (props.books) {
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
            CatalogItems = <h2 className="catalog__miss">К сожалению, ничего не нашлось!</h2>
        }
    } else {
        CatalogItems = <h2 className="catalog__miss">Что-то пошло не так!</h2>
    }
    
    return (
        <div className="catalog">
            {CatalogItems}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.catalog.isLoading,
        books: state.catalog.books
    };
};

export default connect(mapStateToProps)(Catalog);