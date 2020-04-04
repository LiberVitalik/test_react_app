import React from 'react';
import {AddButton} from '../AddButton/AddButton';
import HeaderClasses from './Header.module.css';

export function Header(props) {
    return (
        <header className={HeaderClasses.header}>
            <AddButton addButtonHandler={headerButtonHandler} />
        </header>
    );

    function headerButtonHandler() {
        props.mainTodoHandler();
    }
}