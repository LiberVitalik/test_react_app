import React from 'react';
import HeaderClasses from './header.module.scss';

export const Header = props => {
    return (
        <header className={HeaderClasses.header}>
            {props.children}
        </header>
    )
};