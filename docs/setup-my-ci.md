---
id: setup-my-ci
title: Adding the huskyCI stage
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p align="center"> <img src="/img/huskyci-stage.png" scale="10"/></p>

Using huskyCI is simple. Your stage script only needs to download and execute a binary (written in Go) called `huskyci-client`. This client will perform several requests to huskyCI's API and act like a worker, regularly checking if all security tests have already finished and printing the results found to STDOUT.

## Environment Variables

The following environment variables must be set so that `huskyci-client` can properly communicate with the API:

* `HUSKYCI_CLIENT_REPO_URL` - The repository address of the project being tested.
* `HUSKYCI_CLIENT_REPO_BRANCH` - The name of the branch being tested. 
* `HUSKYCI_CLIENT_API_ADDR` - The address of where the API is waiting for the `huskyci-client` to connect.
* `HUSKYCI_CLIENT_API_USE_HTTPS` - A boolean value to define if HTTPS is being used or not.
* `HUSKYCI_CLIENT_TOKEN` - Token authorization to check if that CI is allowed to perform tests.

## GitLab CI/CD | GitLab

It is highly recommended not hardcoding huskyCI environment variables into your `.gitlab-ci.yml` file. The best option is using GUI interface and mannually add them as follows:

<p align="center"> <img src="/img/gitlab-env-vars.png" scale="10"/></p>

### Useful Tips

When setting up a stage in Gitlab CI/CD, there are a few interesting environment variables that can be used to help `huskyci-client` properly scan a particular branch (`$CI_COMMIT_REF_NAME`) and repository (`$CI_PROJECT_PATH`). If you would like to check all these variables you should check the [official Gitlab documentation](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html). 

```bash
HUSKYCI_CLIENT_REPO_URL: gitlab@gitlab.myorg.com:$CI_PROJECT_PATH.git
HUSKYCI_CLIENT_REPO_BRANCH: $CI_COMMIT_REF_NAME
```

### Code Example

```bash
stages:
    - huskyCI

huskyCI:
    stage: huskyCI
    script:
        - wget $HUSKYCI_CLIENT_URL/huskyci-client
        - chmod +x huskyci-client
        - ./huskyci-client
```
