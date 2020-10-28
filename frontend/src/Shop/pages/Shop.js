import React, { useEffect, useState } from 'react';
import Catalog from '../components/Catalog/Catalog';
import Sidebar from '../components/Sidebar/Sidebar';

import './Shop.scss';

const Shop = props => {
    const [books, setBooks] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            setIsLoading(true);
            try {
                const responseData = await fetch('http://localhost:5000/api/shop');
                const parsedData = await responseData.json();

                setBooks(parsedData);
            } catch (e) {}
            setIsLoading(false);
        };
        fetchBooks();
    }, []);

    return (
        <div className="shop">
            <Sidebar />
            <Catalog books={books} isLoading={isLoading} />
            {/* PAGINATION */}
        </div>
    );
};

export default Shop;