/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Features from './components/Features';
import Header from './components/Header';
import Showcases from './components/Showcases';
import Languages from './components/Languages';
import SecurityTests from './components/SecurityTests';
import Contents from './components/Contents';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Performing security tests inside your CI">
      <Header />
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
export default Home;
