import React, { useState } from 'react';
import Button from '../../../shared/components/UI/Button/Button';
import Notiflix from "notiflix";

import Input from '../../../shared/components/UI/Input/Input';
import GenreItem from './genreItem/genreItem';
import './itemForm.scss';

// const createdBook = new Book({
    //     title: 'Волшебная гора',
    //     author: 'Томас Манн',
    //     price: '390',
    //     rating: 8.5,
    //     imageUrl: 'https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover/8600333-tomas-mann-volshebnaya-gora.jpg',
    //     genres: [ 'fiction' ]
    // });

const ItemForm = props => {
    const [formData, setFormData] = useState(
        {
            inputs: [
                {
                    id: 'title',
                    name: 'Название',
                    value: ''
                },
                {
                    id: 'author',
                    name: 'Автор',
                    value: ''
                },
                {
                    id: 'price',
                    name: 'Цена',
                    value: ''
                },
                {
                    id: 'rating',
                    name: 'Рейтинг',
                    value: ''
                },
                {
                    id: 'imageUrl',
                    name: 'imageUrl',
                    value: ''
                }
            ],
            genres: [
                {
                    id: 'history',
                    name: 'История',
                    checked: true
                },
                {
                    id: 'science',
                    name: 'Наука',
                    checked: true
                },
                {
                    id: 'philosophy',
                    name: 'Философия',
                    checked: true
                },
                {
                    id: 'economy',
                    name: 'Экономика',
                    checked: true
                },
                {
                    id: 'fiction',
                    name: 'Художественное',
                    checked: true
                }
            ]
        }
    );

    const changeInputHandler = (event) => {
        const newFormData = {
            ...formData
        };
        
        const inputIndex = newFormData.inputs.findIndex(input => {
            return input.id === event.target.id;
        });

        newFormData.inputs[inputIndex].value = event.target.value;
        setFormData(newFormData);
    };

    const changeGenreStatusHandler = (event) => {
        const newFormData = {
            ...formData
        };

        const genresIndex = newFormData.genres.findIndex(genre => {
            return genre.id === event.target.id;
        });

        newFormData.genres[genresIndex].checked = event.target.checked;
        setFormData(newFormData);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        const response = await fetch(
            'http://localhost:5000/api/shop',
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.ok) {
            Notiflix.Notify.Success('Товар добавлен');
        } else {
            const parsedData = await response.json();
            Notiflix.Notify.Failure(parsedData.message ||'Произошла ошибка при добавлении товара');
        }
    };

    const inputs = formData.inputs.map(input => {
        return (
            <Input
                id={input.id}
                key={input.id}
                value={input.value}
                label={input.name}
                onChange={changeInputHandler} />
        );
    });

    const genres = (
        <ul>
            {
                formData.genres.map(genre => {
                    return (
                        <GenreItem
                            id={genre.id}
                            key={genre.id}
                            checked={genre.checked}
                            onChange={changeGenreStatusHandler}>
                            {genre.name}
                        </GenreItem>
                    );
                })
            }
        </ul>
    );

    let inputsIsValid = formData.inputs.every(input => {
        return input.value;
    });
    let genresIsValid = formData.genres.some(genre => {
        return genre.checked;
    });
    let formIsValid = inputsIsValid && genresIsValid;
    
    return (
        <form 
            className="add-item__form"
            onSubmit={submitHandler}>
            {inputs}
            {genres}
            <Button disabled={!formIsValid} centered>Добавить</Button>
        </form>
    );
};

export default ItemForm;