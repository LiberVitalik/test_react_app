import React from 'react';
import RemoveButtonClasses from './RemoveButton.module.css';

export function RemoveButton(props) {

    function removeItem(e) {
        e.preventDefault();

        props.removeItem();
    }

    return (
        <button className={RemoveButtonClasses.close} onClick={removeItem}></button>
    );
}