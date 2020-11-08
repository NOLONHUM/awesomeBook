
const mongoose = require('mongoose');

const Book = require('../models/book');

const DummyBooks = [
    {
        title: 'Атлант расправил плечи',
        author: 'Айн Ренд',
        price: '800',
        rating: 5.9,
        imageUrl: 'https://img-gorod.ru/21/101/2110110_detail.jpg',
        link: '/',
        _id: '123'
    },
    {
        title: 'Первая научная история войны 1812 года',
        author: 'Евгений Понасенков',
        price: '990',
        rating: 10,
        imageUrl: 'https://cdn.book24.ru/v2/ASE000000000849281/COVER/cover3d1__w337.jpg',
        link: '/',
        _id: '456'
    },
    {
        title: 'Заводной Апельсин',
        author: 'Энтони Бёрджесс',
        price: '340',
        rating: 7.21,
        imageUrl: 'https://www.ukazka.ru/img/g/uk456888.jpg',
        link: '/',
        _id: '1'
    },
    {
        title: 'Капитал',
        author: 'Карл Маркс',
        price: '990',
        rating: 6.8,
        imageUrl: 'https://i.ebayimg.com/00/s/ODU0WDYwMA==/z/rYQAAOSwW7NcL5kP/$_57.JPG?set_id=8800005007',
        link: '/',
        _id: '2'
    },
    {
        title: 'Государство',
        author: 'Платон',
        price: '550',
        rating: 8.3,
        imageUrl: 'https://cdn1.ozone.ru/multimedia/1008797960.jpg',
        link: '/',
        _id: '3'
    },
    {
        title: 'Божественная комедия. Новая жизнь',
        author: 'Данте Алигьери',
        price: '890',
        rating: 8.25,
        imageUrl: 'https://img-gorod.ru/23/739/2373923_detail.jpg',
        link: '/',
        _id: '4'
    },
    {
        title: 'Рассуждения о методе',
        author: 'Рене Декарт',
        price: '490',
        rating: 7.6,
        imageUrl: 'https://img-gorod.ru/26/199/2619938_detail.jpg',
        link: '/',
        _id: '5'
    },
    {
        title: 'Государь',
        author: 'Николло Макиавелли',
        price: '690',
        rating: 8.1,
        imageUrl: 'https://book24.ua/upload/iblock/578/57828ad0adc198033a2a6f3b6ba5ed0d.jpg',
        link: '/',
        _id: '6'
    }
];

const genres = [
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
    }
];

const getBooks = async (req, res, next) => {
    let books;

    try {
        const genres = Object.keys(req.query)
        books = await Book
            .find(
                {
                    genres: { $in: genres }
                }
            )
            .sort({rating: -1});
    } catch (err) {
        return res.status(400);
    }
    
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