---
id: integrating-with-sonar
title: Integrating with SonarQube
---

<p align="center"> <img src="/img/sonar-stage2.png" scale="10"/></p>

## Settings

huskyCI can export its output to [SonarQube](https://www.sonarqube.org/) using CI artifacts. It is very important to mention that huskyCI's stage should be executed prior to the SonarQube's stage:

<p align="center"> <img src="/img/sonar-stage.png" scale="10"/></p>

### sonar-project.properties

Add to the `sonar-project.properties` file the `sonar.externalIssuesReportPaths` flag to `./huskyCI/sonarqube.json` so that SonarQube can consume huskyCI JSON output:

```yml
sonar.externalIssuesReportPaths=./huskyCI/sonarqube.json
```

### .gitlab-ci.yaml (Gitlab CI)

If you are using Gitlab CI, we can use the `artifacts` configuration to let huskyCI generate the `sonarqube.json` file so that SonarQube can consume it:

```yml
artifacts:
    when: always # If a vulnerability is found, the CI will fail and the artifact will not be dropped into the pipeline. To overcome this, we must set the flag `always` here.
    paths:
      - huskyCI # Is the folder in which sonarqube.json is generated and should be available for others stages.
```

The final `.gitlab-ci.yaml` configuration to have both huskyCI and SonarQube run is the following: 

```yml
stages:
  - huskyCI
  - sonar-stage

huskyCI: 
  stage: huskyCI
  image: "golang:1.13-alpine"
  before_script:
    - ""
  variables: # use your org configuration
    HUSKYCI_CLIENT_URL: https://huskyci-client.YOURORG.com 
    HUSKYCI_CLIENT_API_ADDR: https://huskyci.YOURORG.com
    HUSKYCI_CLIENT_REPO_URL: gitlab@gitlab.YOURORG.com:$CI_PROJECT_PATH.git
    HUSKYCI_CLIENT_REPO_BRANCH: $CI_COMMIT_REF_NAME
    HUSKYCI_CLIENT_API_USE_HTTPS: "true"
  script:
    - wget $HUSKYCI_CLIENT_URL/huskyci-client
    - chmod +x huskyci-client
    - ./huskyci-client
  allow_failure: true
  artifacts:
    when: always
    paths:
      - huskyCI

sonar: # use your org configuration
  stage: sonar-stage
  image: "YOURORG:sonar-image"
  script:
    - sonar-scanner 
```

