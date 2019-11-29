import React from "react";
import Showcase from './Showcase';
import styles from '../styles.module.css';

const showcases = [
    {
        image: 'img/showcases/globocom.svg',
        infoLink: 'https://globo.com/',
        pinned: true,
    },
    {
        image: 'img/showcases/williamHill.png',
        infoLink: 'https://www.williamhill.com/',
        pinned: true,
    },
];

export default function Showcases(){
    return (
        <>
        {showcases && showcases.length && (
            <section className={styles.showcases}>
                <h2>Who is Using huskyCI?</h2>
                <div className={styles.showcase}>
                    {showcases.map((props, idx) => (
                        <Showcase key={idx} {...props} />
                    ))}
                </div>
                <p>Is your organization using huskyCI? Send us a <a href="https://github.com/globocom/huskyCI">Pull Request</a> to add your logo!</p>
                

            </section>
        )}
        </>
    )
}