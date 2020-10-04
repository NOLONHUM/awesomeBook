import React from 'react';
import Button from '../../../../shared/components/UI/Button/Button';

import './CatalogItem.css';

const CatalogItem = props => {
    let title = props.title;
    if (title.length > 46) {
        title = title.slice(0, 46) + '...';
    }
    
    return (
        <div className="catalog-item">
            <a href={props.link}>
                <img src={props.imageUrl} alt={props.title} />
            </a>
            <h3 className="catalog-item__rating">{props.rating ? props.rating.toFixed(2) : 'Без рейтинга'}</h3>
            <a className="catalog-item__title" href={'/' + props._id}>{title}</a>
            <a className="catalog-item__author" href={'/' + props.author}>{props.author}</a>
            <h4>{props.price} ₽</h4>
            <Button>В КОРЗИНУ</Button>
        </div>
    );
};

export default CatalogItem;