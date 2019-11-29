import React from "react";
import Showcase from './Showcase';
import styles from '../styles.module.css';

const showcases = [
    {
        image: 'img/showcases/globocom.svg',
        infoLink: 'http://globo.com/',
        pinned: true,
    },
];

export default function Showcases(){
    return (
        <>
        {showcases && showcases.length && (
            <section className={styles.showcases}>
                <h2>Who is Using huskyCI?</h2>
                <p>huskyCI is helping these organizations find vulnerabilities in their CI...</p>
                <div className={styles.showcase}>
                    {showcases.map((props, idx) => (
                        <Showcase key={idx} {...props} />
                    ))}
                </div>
            </section>
        )}
        </>
    )
}