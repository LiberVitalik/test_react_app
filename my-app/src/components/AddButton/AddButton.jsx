import React from 'react';
import AddButtonClasses from './AddButton.module.css'

export function AddButton(props) {
    return (
        <button className={AddButtonClasses.add} onClick={addButtonHandler} >+ add  todo</button>
    );

    function addButtonHandler() {
        props.addButtonHandler();
    }

}