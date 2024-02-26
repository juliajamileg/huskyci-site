import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import classnames from 'classnames';
import Features from '@site/src/components/HomepageFeatures/Features';
import Languages from '@site/src/components/HomepageFeatures/Languages';
import SecurityTests from '@site/src/components/HomepageFeatures/SecurityTests';
import Showcases from '@site/src/components/HomepageFeatures/Showcases';
import Contents from '@site/src/components/HomepageFeatures/Contents';

import styles from '@site/src/components/HomepageFeatures/styles.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={styles.heroContainer}>
                <h1 className={styles.heroContent}>
                    <img className={styles.heroImg} src={useBaseUrl('img/logo.png')} />
                    <span className={styles.heroText}>HuskyCI makes it easy to find <span className={styles.heroHighlight}>vulnerabilities</span> inside your <span className={styles.heroHighlight}>CI</span></span>
                </h1>
                <div className={styles.heroButtons}>
                    <Link
                    className={classnames(
                        'button button--secondary button--lg',
                        styles.getStarted,
                    )}
                    to={useBaseUrl('docs/overview')}>
                    Get Started
                    </Link>
                    <iframe src="https://ghbtns.com/github-btn.html?user=globocom&amp;repo=huskyci&amp;type=star&amp;count=true&amp;size=large" width="160" height="30" title="GitHub Stars"></iframe>
                </div>
          </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Features />
        <Languages />
        <SecurityTests />
        <Contents />
        <Showcases />
      </main>
    </Layout>
  );
}
