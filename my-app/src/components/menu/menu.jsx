import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = props => {

    const menuItems = ['dialog', 'profile'];

    return (
        <ul>
            {getMenuItem()}
        </ul>
    );

    function getMenuItem() {
        return menuItems.map((item, index) => {
            return <li key={index}>
                <NavLink to={item} >{item}</NavLink>
            </li>
        })
    }

};