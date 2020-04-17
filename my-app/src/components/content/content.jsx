import React from 'react';
import ContentClasses from './content.module.scss';

export const Content = props => {
    return (
        <section className={ContentClasses.content}>
            {props.children}
        </section>
    )
};