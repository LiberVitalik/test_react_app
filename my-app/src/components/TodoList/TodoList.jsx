import React from 'react';
import TodoListClasses from './TodoList.module.css';

export const  TodoList = (props) => {
    return (
        <div>
            <ul className={TodoListClasses.container}>
                {props.children}
            </ul>
        </div>
    )
};