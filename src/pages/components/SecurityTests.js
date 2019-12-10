import React from "react";
import SecurityTest from './SecurityTest';
import styles from '../styles.module.css';

const securityTests = [
    {
        image: 'img/securitytests/gosec.png',
        infoLink: 'https://github.com/securego/gosec',
        pinned: true,
    },
    {
        image: 'img/securitytests/bandit.png',
        infoLink: 'https://github.com/PyCQA/bandit',
        pinned: true,
    },
    {
        image: 'img/securitytests/safety.png',
        infoLink: 'https://github.com/pyupio/safety',
        pinned: true,
    },
    {
        image: 'img/securitytests/brakeman.png',
        infoLink: 'https://github.com/presidentbeef/brakeman',
        pinned: true,
    },
    {
        image: 'img/securitytests/yarnaudit.png',
        infoLink: 'https://yarnpkg.com/lang/en/docs/cli/audit/',
        pinned: true,
    },
    {
        image: 'img/securitytests/npmaudit.png',
        infoLink: 'https://docs.npmjs.com/cli/audit',
        pinned: true,
    },
    {
        image: 'img/securitytests/spotbugs.png',
        infoLink: 'https://find-sec-bugs.github.io/',
        pinned: true,
    },
    {
        image: 'img/securitytests/gitleaks.png',
        infoLink: 'https://github.com/zricethezav/gitleaks',
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