import React from 'react';
import SideBarClasses from './sidebar.module.scss';

export const SideBar = props => {
    return (
        <nav className={SideBarClasses.nav}>
            {props.children}
        </nav>
    )
};