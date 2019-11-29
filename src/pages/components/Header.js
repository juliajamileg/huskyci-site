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
            <div className={styles.heroContainer}>
                <h1 className={styles.heroContent}>
                    <img className={styles.heroImg} src={useBaseUrl('img/logo.png')} />
                    <span className={styles.heroText}>huskyCI makes it easy to find <span className={styles.heroHighlight}>vulnerabilities</span> inside your CI</span>
                </h1>
                <div className={styles.heroButtons}>
                    <Link
                    className={classnames(
                        'button button--secondary button--lg',
                        styles.getStarted,
                    )}
                    to={useBaseUrl('docs/overview.md')}>
                    Get Started
                    </Link>
                    <iframe src="https://ghbtns.com/github-btn.html?user=globocom&amp;repo=huskyci&amp;type=star&amp;count=true&amp;size=large" width="160" height="30" title="GitHub Stars"></iframe>
                </div>
            </div>
        </header>
    )
}