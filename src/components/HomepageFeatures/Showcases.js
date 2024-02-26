import React from "react";
import Showcase from './Showcase';
import styles from './styles.module.css';

const showcases = [
    {
        image: 'img/showcases/globo.svg',
        infoLink: 'https://globo.com/',
        pinned: true,
    }
];

export default function Showcases(){
    return (
        <>
        {showcases && showcases.length && (
            <section className={styles.showcases}>
                <h2>Who is Using HuskyCI?</h2>
                <div className={styles.showcase}>
                    {showcases.map((props, idx) => (
                        <Showcase key={idx} {...props} />
                    ))}
                </div>
                <p>Is your organization using HuskyCI? Send us a <a href="https://github.com/globocom/huskyCI">Pull Request</a> to add your logo!</p>
                

            </section>
        )}
        </>
    )
}