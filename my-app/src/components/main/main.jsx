import React, { Component } from 'react';
import MainClasses from './main.module.scss';

export const Main = props => {
    return (
        <div className={MainClasses.main}>
            {props.children}
        </div>
    )
};