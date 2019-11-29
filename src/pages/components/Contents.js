import React from "react";
import styles from '../styles.module.css';
import ContentBody from './ContentBody';
import ContentImg from './ContentImg';
import classnames from 'classnames';

const contents = [
    {
        img: {
            imageUrl: 'img/undraw_docusaurus_mountain.svg',
            imgAlt: 'image description',
        },
        body: {
            title: 'ASD123',
            body: 'ASd123',
        }
    },
    {
        img: {
            imageUrl: 'img/undraw_docusaurus_mountain.svg',
            imgAlt: 'image description',
        },
        body: {
            title: 'ASD123',
            body: 'ASd123',
        }
    },
    {
        img: {
            imageUrl: 'img/undraw_docusaurus_mountain.svg',
            imgAlt: 'image description',
        },
        body: {
            title: 'ASD123',
            body: 'ASd123',
        }
    },
];

export default function Contents() {
    return (
        <>
        {contents.map((props, idx) => (
            <section key={idx} className={styles.contents}>
                <div className={classnames('container', styles.content)}>
                    <div className="row">
                        {idx%2 == 0 && <ContentImg key={"img"+idx.toString} {...props.img} />}
                        <ContentBody key={"body"+idx.toString} {...props.body} />
                        {idx%2 != 0  && <ContentImg key={"img"+idx.toString} {...props.img} />}
                    </div>
                </div>
            </section>
        ))}
        </>
    );
}