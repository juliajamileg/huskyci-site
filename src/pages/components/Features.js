import React from "react";
import classnames from 'classnames';
import styles from '../styles.module.css';
import Feature from './Feature';

const features = [
    {
      title: <>Find Vulnerabilities</>,
      imageUrl: 'img/undraw_bug_fixing_oc7a.svg',
      description: (
        <>
          huskyCI starts multiple security tests in git repositories in order to find issues before the deployment.
        </>
      ),
    },
    {
      title: <>Easy to Use</>,
      imageUrl: 'img/undraw_web_developer_p3e5.svg',
      description: (
        <>
          By adding a simple stage into your CI, test.
        </>
      ),
    },
    {
      title: <>Extensible</>,
      imageUrl: 'img/undraw_logistics_x4dc.svg',
      description: (
        <>
          huskyCI allows you to create your own security test! You can even set up any script runnable in a container and let huskyCI execute it.
        </>
      ),
    },
    {
      title: <>Open Source</>,
      imageUrl: 'img/undraw_version_control_9bpv.svg',
      description: (
        <>
          huskyCI was born Open Source so that everyone can use, give feedback and contribute. Give it a try!
        </>
      ),
    },
    {
      title: <>Metrics</>,
      imageUrl: 'img/undraw_data_trends_b0wg.svg',
      description: (
        <>
          Help the security team gather information about the health of your organization projects. 
        </>
      ),
    },
  ];

export default function Features() {
  return (
    <>
      {features && features.length && (
        <section className={styles.features}>
          <div className="container">
            <div className={classnames('row', styles.justifiedFeatures)}>
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}