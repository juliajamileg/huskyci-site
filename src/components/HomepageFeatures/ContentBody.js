import React from "react";
import classnames from 'classnames';
import styles from './styles.module.css';

export default function ContentBody({title, body}) {
    return (
        <div className={classnames('col col--6')}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    ); 
}