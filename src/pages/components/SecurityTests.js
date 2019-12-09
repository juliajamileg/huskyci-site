import React from "react";
import SecurityTest from './SecurityTest';
import styles from '../styles.module.css';

const securityTests = [
    {
        image: 'img/securitytests/gosec.png',
        pinned: true,
    },
    {
        image: 'img/securitytests/bandit.png',
        pinned: true,
    },
    {
        image: 'img/securitytests/safety.png',
        pinned: true,
    },
    {
        image: 'img/securitytests/brakeman.png',
        pinned: true,
    },
    {
        image: 'img/securitytests/yarnaudit.png',
        pinned: true,
    },
    {
        image: 'img/securitytests/npmaudit.png',
        pinned: true,
    },
    {
        image: 'img/securitytests/spotbugs.png',
        pinned: true,
    },
    {
        image: 'img/securitytests/gitleaks.png',
        pinned: true,
    },
];

export default function SecurityTests(){
    return (
        <>
        {securityTests && securityTests.length && (
            <section className={styles.showcases}>
                <h2>Security Tests Available</h2>
                <div className={styles.showcase}>
                    {securityTests.map((props, idx) => (
                        <SecurityTest key={idx} {...props} />
                    ))}
                </div>
            </section>
        )}
        </>
    )
}