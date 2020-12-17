import React from 'react';
import ItemForm from '../components/itemForm/ItemForm';

import './addItem.scss';

const AddItem = props => {
    return (
        <div className="add-item">
            <ItemForm />
        </div>
    );
}

export default AddItem;