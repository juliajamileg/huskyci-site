import React from "react";
import Language from './Language';
import styles from '../styles.module.css';

const languages = [
    {
        image: 'img/languages/go.png',
        pinned: true,
    },
    {
        image: 'img/languages/python.png',
        pinned: true,
    },
    {
        image: 'img/languages/ruby.png',
        pinned: true,
    },
    {
        image: 'img/languages/javascript.png',
        pinned: true,
    },
    {
        image: 'img/languages/java.png',
        pinned: true,
    },
];

export default function Languages(){
    return (
        <>
        {languages && languages.length && (
            <section className={styles.showcases}>
                <h2>Supported Languages</h2>
                <div className={styles.showcase}>
                    {languages.map((props, idx) => (
                        <Language key={idx} {...props} />
                    ))}
                </div>
            </section>
        )}
        </>
    )
}