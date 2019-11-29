import React from "react";
import classnames from 'classnames';
import styles from '../styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ContentImg({imageUrl, imgAlt}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('col col--6', styles.imageAlignSide, styles.contentImg)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.contentImg} src={imgUrl} alt={imgAlt} />
                </div>
            )}
        </div>
    ); 
}