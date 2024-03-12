import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

const NewBoxForm = function({addBox}){
    const INIT_STATE = {color: 'gray',
                        width: 100,
                        height: 100};

    const [formData, setFormData] = useState(INIT_STATE);


    const handleSubmit = function(evt){
        evt.preventDefault();
        addBox({...formData, id: uuid()});
        setFormData(INIT_STATE);
    };

    const handleChange = function(evt){
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color:</label>
            <input
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />

            <label htmlFor="width">Width:</label>
            <input
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height:</label>
            <input
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <button>Add box</button>
        </form>
    )
}

export default NewBoxForm;