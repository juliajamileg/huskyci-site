import React from "react";
import styles from '../styles.module.css';
import ContentBody from './ContentBody';
import ContentImg from './ContentImg';
import classnames from 'classnames';

const contents = [
    {
        img: {
            imageUrl: 'img/stage.png',
        },
        body: {
            title: 'Add a security stage into your pipeline',
            body: 'Let huskyCI client perform the required requests to the API by simply downloading and running it.',
        }
    },
    {
        img: {
            imageUrl: 'img/vulns.png',
            imgAlt: 'image description',
        },
        body: {
            title: 'Get detailed information from issues',
            body: 'If a vulnerability is found in a new push, huskyCI shows the severity, the file, the line, and many other useful information that could help developers fix it.',
        }
    },
    {
        img: {
            imageUrl: 'img/pipeline.png',
            imgAlt: 'image description',
        },
        body: {
            title: 'Fail the pipeline if vulnerabilities are found',
            body: 'Avoid deploying vulnerable code! huskyCI\'s stage will fail in case a new vulnerability is pushed into the repository before reaching production or even development environment.',
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