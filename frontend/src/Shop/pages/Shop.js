import React from 'react';
import Catalog from '../components/Catalog/Catalog';
import Sidebar from '../components/Sidebar/Sidebar';

import './Shop.css';

const Shop = props => {
    return (
        <div className="shop">
            <Sidebar />
            <Catalog />
        </div>
    );
};

export default Shop;