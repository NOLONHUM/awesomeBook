const mongoose = require('mongoose');

const Book = require('../models/book');
const HttpError = require('../models/http-error');

const getBooks = async (req, res, next) => {
    const perPage = 8;
    const page = req.query.page || 1;
    let books;

    try {
        const reqQuery = Object.keys(req.query);
        let genres = reqQuery.filter(entry => entry != 'title' && entry != 'page');
        let searchQuery = {
            genres: { $in: genres }
        };
        if (req.query.title) searchQuery.title = { $regex: new RegExp(`${req.query.title}`, 'i') };
        totalItems = await Book.find(searchQuery).countDocuments();
        books = await Book.find(searchQuery)
            .sort({rating: -1})
            .skip((page - 1) * perPage)
            .limit(perPage);
    } catch (err) {
        return next(
            new HttpError('Что-то пошло не так во время загрузки товаров')
        );
    };
    
    res.json({
        books,
        totalItems
    });

    // const createdBook = new Book({
    //     title: 'Волшебная гора',
    //     author: 'Томас Манн',
    //     price: '390',
    //     rating: 8.5,
    //     imageUrl: 'https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover/8600333-tomas-mann-volshebnaya-gora.jpg',
    //     genres: [ 'fiction' ]
    // });
    // await createdBook.save();
}

const addItem = async (req, res, next) => {
    try {
        const inputsData = req.body.inputs;
        const genresData = req.body.genres;
        const genres = genresData.filter(genre => {
            return genre.checked;
        }).map(genre => {
            return genre.id;
        });
        
        const createdBook = new Book({
            title: inputsData[0].value,
            author: inputsData[1].value,
            price: inputsData[2].value,
            rating: inputsData[3].value,
            imageUrl: inputsData[4].value,
            genres: genres
        });
        await createdBook.save();
    } catch(err) {
        return next(
            new HttpError(err || 'Что-то пошло не так во время добавления товара')
        );
    }

    return res.send();
};

exports.getBooks = getBooks;
exports.addItem = addItem;
