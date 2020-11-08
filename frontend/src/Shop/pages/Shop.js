import React, { useEffect, useState } from 'react';
import Catalog from '../components/Catalog/Catalog';
import Sidebar from '../components/Sidebar/Sidebar';

import './Shop.scss';

const Shop = props => {
    const [books, setBooks] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [genres, setGenres] = useState([
        {
            id: 'history',
            name: 'История',
            picked: true
        },
        {
            id: 'science',
            name: 'Наука',
            picked: true
        },
        {
            id: 'philosophy',
            name: 'Философия',
            picked: true
        },
        {
            id: 'economy',
            name: 'Экономика',
            picked: true
        },
        {
            id: 'fiction',
            name: 'Художественное',
            picked: true
        }
    ]);

    useEffect(() => {
        const fetchBooks = async () => {
            setIsLoading(true);
            try {
                const responseData = await fetch('http://localhost:5000/api/shop?fiction');
                const parsedData = await responseData.json();

                setBooks(parsedData);
            } catch (e) {}
            setIsLoading(false);
        };
        fetchBooks();
    }, []);

    const changeGenreStatus = (event) => {
        const genreIndex = genres.findIndex(genre => {
            return genre.id === event.id;
        });
        
        const newGenres = [
            ...genres,
        ];
        newGenres[genreIndex].picked = !newGenres[genreIndex].picked;

        setGenres(newGenres);
    }

    return (
        <div className="shop">
            <Sidebar genres={genres}/>
            <Catalog books={books} isLoading={isLoading} />
            {/* PAGINATION */}
        </div>
    );
};

export default Shop;