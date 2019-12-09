import React from "react";
import classnames from 'classnames';
import styles from '../styles.module.css';
import Feature from './Feature';

const features = [
    {
      title: <>Vulnerabilities</>,
      imageUrl: 'img/undraw_bug_fixing_oc7a.svg',
      description: (
        <>
          Run security tests in multiple languages to find issues before the deployment.
        </>
      ),
    },
    {
      title: <>Easy to Use</>,
      imageUrl: 'img/undraw_web_developer_p3e5.svg',
      description: (
        <>
          Add a simple stage into your pipeline and huskyCI will find which security tests better suit the repository.
        </>
      ),
    },
    {
      title: <>Extensible</>,
      imageUrl: 'img/undraw_logistics_x4dc.svg',
      description: (
        <>
          Create your own security test and add it into huskyCI.
        </>
      ),
    },
    {
      title: <>Open Source</>,
      imageUrl: 'img/undraw_version_control_9bpv.svg',
      description: (
        <>
          Everyone can use, give feedback and contribute. Give it a try!
        </>
      ),
    },
    {
      title: <>Metrics</>,
      imageUrl: 'img/undraw_data_trends_b0wg.svg',
      description: (
        <>
          Gather information about the health of the organization projects. 
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