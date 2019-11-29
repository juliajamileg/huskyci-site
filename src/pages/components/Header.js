import React from 'react';
import classnames from 'classnames';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../styles.module.css';

export default function Headers() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <header className={classnames('hero hero--primary', styles.heroBanner)}>
            <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
                <Link
                className={classnames(
                    'button button--secondary button--lg',
                    styles.getStarted,
                )}
                to={useBaseUrl('docs/overview.md')}>
                Get Started
                </Link>
            </div>
            </div>
        </header>
    )
}