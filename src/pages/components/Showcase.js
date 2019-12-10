
import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../styles.module.css';

export default function Showcase({image, infoLink, caption, pinned}){
    const imgUrl = useBaseUrl(image);
    if (pinned) {
        return (
            <a className={styles.link} href={infoLink}>
                <img src={imgUrl} alt={caption} title={caption} />
                <span className={styles.caption}>{caption}</span>
            </a>
        )
    } else {
        return null
    }
}