import React from 'react';
import MessageClasses from './message.module.scss';

export const Message = props => {
    return (
        <>
            <div className={MessageClasses.message}>
                {props.children}
            </div>
        </>
    )
};