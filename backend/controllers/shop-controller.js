
const mongoose = require('mongoose');

const Book = require('../models/book');

const getBooks = async (req, res, next) => {
    let books;

    try {
        const reqQuery = Object.keys(req.query);
        let genres = reqQuery.filter(entry => entry != 'title');
        if (req.query.title) {
            books = await Book
            .find(
                {
                    genres: { $in: genres },
                    'title': { $regex: new RegExp(`^${req.query.title}`) }
                }
            )
            .sort({rating: -1});
        } else {
            books = await Book
            .find(
                {
                    genres: { $in: genres }
                }
            )
            .sort({rating: -1});
        };
    } catch (err) {
        return res.status(400);
    };
    
    res.json(books);

    // const createdBook = new Book({
    //     title: 'Божественная комедия. Новая жизнь',
    //     author: 'Данте Алигьери',
    //     price: '890',
    //     rating: 8.25,
    //     imageUrl: 'https://img-gorod.ru/23/739/2373923_detail.jpg',
    //     genres: [ 'history', 'fiction' ]
    // });
    // await createdBook.save();
}

exports.getBooks = getBooks;