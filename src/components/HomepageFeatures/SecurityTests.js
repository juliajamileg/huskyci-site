import React from "react";
import SecurityTest from './SecurityTest';
import styles from './styles.module.css';

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
        image: 'img/securitytests/tfsec.png',
        infoLink: 'https://aquasecurity.github.io/tfsec/',
        pinned: true,
    },
    {
        image: 'img/securitytests/brakeman.png',
        infoLink: 'https://github.com/presidentbeef/brakeman',
        pinned: true,
    },
    {
        image: 'img/securitytests/safety.png',
        infoLink: 'https://github.com/pyupio/safety',
        pinned: true,
    },
    {
        image: 'img/securitytests/osv.png',
        infoLink: 'https://google.github.io/osv-scanner/',
        pinned: true,
    },
    {
        image: 'img/securitytests/gitleaks.png',
        infoLink: 'https://github.com/zricethezav/gitleaks',
        pinned: true,
    },
    {
        image: 'img/securitytests/semgrep.png',
        infoLink: 'https://github.com/semgrep',
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