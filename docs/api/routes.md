---
id: routes
title: Routes
---

<a name="top"></a>

Healthcheck:
* [`GET /healthcheck`](#gethealthcheck) : returns API health status

Version:
* [`GET /version`](#getversion) : returns API version

Analysis:
* [`GET /analysis/:id`](#getanalysisid) : gets an analysis given its `id` (RID)
* [`POST /analysis`](#postanalysis) : creates a new analysis

SecurityTest:
* [`POST /securitytest`](#postsecuritytest) : creates a new security test

Repository:
* [`POST /repository`](#postrepository) : creates a new repository

---

<a name="gethealthcheck"></a>

#### GET /healthckeck

```sh
curl -i localhost:8888/healthcheck
```
200 OK

```
WORKING
```

[^](#top)

---

<a name="getversion"></a>

#### GET /version

```sh
curl -i localhost:8888/version
```
200 OK

```
{
    "date":"2019-04-05",
    "version":"0.1.2"
}
```

[^](#top)

---

<a name="getanalysisid"></a>

#### GET /analysis/:id

```sh
curl -i localhost:8888/analysis/Ym3CjUl3H9nfaHbhaeXuEz7ILBtXiP0J
```
200 OK

```
{
  "RID": "Ym3CjUl3H9nfaHbhaeXuEz7ILBtXiP0J",
  "repositoryURL": "https://github.com/globocom/huskyCI.git",
  "repositoryBranch": "poc-golang-gosec",
  "commitAuthors": [
    "husky_test@example.com"
  ],
  "status": "finished",
  "result": "failed",
  "errorFound": "",
  "containers": [
    {
      "CID": "db850be381bf1dd27a63b8a16ea807d53faa4e1edfe21c8c115e421f806e75c1",
      "securityTest": {
        "name": "gitauthors",
        "image": "huskyci/gitauthors",
        "imageTag": "2.18.1",
        "cmd": "mkdir -p ~/.ssh &&\necho 'GIT_PRIVATE_SSH_KEY' > ~/.ssh/huskyci_id_rsa &&\nchmod 600 ~/.ssh/huskyci_id_rsa &&\necho \"IdentityFile ~/.ssh/huskyci_id_rsa\" >> /etc/ssh/ssh_config &&\necho \"StrictHostKeyChecking no\" >> /etc/ssh/ssh_config &&\ngit clone %GIT_REPO% code --quiet 2> /tmp/errorGitCloneEnry\ncd code\ngit checkout %GIT_BRANCH% --quiet\nif [ $? -eq 0 ]; then\n  for i in $(git log origin/master.. --pretty=\"%ae\" | sort -u); do\n    jsonMiddle=\"\\\"$i\\\",$jsonMiddle\"\n  done\n  length=${#jsonMiddle}\n  endindex=$(expr $length - 1)\n  authors=\"${jsonMiddle:0:$endindex}\"\n  echo \"{\\\"authors\\\":[$authors]}\"\nelse\n  echo \"ERROR_CLONING\"\n  cat /tmp/errorGitCloneEnry\nfi\n",
        "type": "Generic",
        "language": "",
        "default": true,
        "timeOutSeconds": 60
      },
      "cStatus": "finished",
      "cOutput": "{\"authors\":[\"husky_test@example.com\"]}\r\n",
      "cResult": "passed",
      "cInfo": "No issues found.",
      "startedAt": "2019-12-11T17:06:42.404Z",
      "finishedAt": "2019-12-11T17:07:58.622Z"
    },
    {
      "CID": "2f873c5516fa58a30624ccaca3a86566b69dff7fa60d5bda1093875202891fb9",
      "securityTest": {
        "name": "gitleaks",
        "image": "huskyci/gitleaks",
        "imageTag": "2.1.0",
        "cmd": "mkdir -p ~/.ssh &&\necho 'GIT_PRIVATE_SSH_KEY' > ~/.ssh/huskyci_id_rsa &&\nchmod 600 ~/.ssh/huskyci_id_rsa &&\necho \"IdentityFile ~/.ssh/huskyci_id_rsa\" >> /etc/ssh/ssh_config &&\necho \"StrictHostKeyChecking no\" >> /etc/ssh/ssh_config &&\ngit clone -b %GIT_BRANCH% --single-branch %GIT_REPO% code --quiet 2> /tmp/errorGitCloneGitleaks\nif [ $? -eq 0 ]; then\n    touch /tmp/results.json\n    $(which gitleaks) --log=warn --report=/tmp/results.json --repo-path=./code --repo-config > /tmp/errorGitleaks\n    if [ $? -eq 2 ]; then\n        echo -n 'ERROR_RUNNING_GITLEAKS'\n        cat /tmp/errorGitleaks\n    else\n        jq -j -M -c . /tmp/results.json\n    fi\nelse\n    echo \"ERROR_CLONING\"\n    cat /tmp/errorGitCloneGitleaks\nfi\n",
        "type": "Generic",
        "language": "",
        "default": true,
        "timeOutSeconds": 360
      },
      "cStatus": "finished",
      "cOutput": "",
      "cResult": "passed",
      "cInfo": "No issues found.",
      "startedAt": "2019-12-11T17:06:42.399Z",
      "finishedAt": "2019-12-11T17:08:04.681Z"
    },
    {
      "CID": "8eda196517b06aad3e935f2a4db06ca0562db120ec354138a64054360f0bf1d5",
      "securityTest": {
        "name": "gosec",
        "image": "huskyci/gosec",
        "imageTag": "v2.1.0",
        "cmd": "mkdir -p ~/.ssh &&\necho 'GIT_PRIVATE_SSH_KEY' > ~/.ssh/huskyci_id_rsa &&\nchmod 600 ~/.ssh/huskyci_id_rsa &&\necho \"IdentityFile ~/.ssh/huskyci_id_rsa\" >> /etc/ssh/ssh_config &&\necho \"StrictHostKeyChecking no\" >> /etc/ssh/ssh_config &&\ncd src\ngit clone -b %GIT_BRANCH% --single-branch %GIT_REPO% code --quiet 2> /tmp/errorGitCloneGosec\nif [ $? -eq 0 ]; then\n  cd code\n  touch results.json\n  $(which gosec) -quiet -fmt=json -log=log.txt -out=results.json ./... 2> /dev/null\n  jq -j -M -c . results.json\nelse\n  echo \"ERROR_CLONING\"\n  cat /tmp/errorGitCloneGosec\nfi\n",
        "type": "Language",
        "language": "Go",
        "default": true,
        "timeOutSeconds": 360
      },
      "cStatus": "finished",
      "cOutput": "{\"Golang errors\":{\"/go/src/code/api/server.go\":[{\"line\":20,\"column\":42,\"error\":\"Healthcheck not declared by package routes\"}]},\"Issues\":[{\"severity\":\"MEDIUM\",\"confidence\":\"HIGH\",\"rule_id\":\"G501\",\"details\":\"Blacklisted import crypto/md5: weak cryptographic primitive\",\"file\":\"/go/src/code/api/util/util.go\",\"code\":\"\\\"crypto/md5\\\"\",\"line\":\"4\"},{\"severity\":\"MEDIUM\",\"confidence\":\"HIGH\",\"rule_id\":\"G401\",\"details\":\"Use of weak cryptographic primitive\",\"file\":\"/go/src/code/api/util/util.go\",\"code\":\"md5.New()\",\"line\":\"23\"},{\"severity\":\"LOW\",\"confidence\":\"HIGH\",\"rule_id\":\"G104\",\"details\":\"Errors unhandled.\",\"file\":\"/go/src/code/api/util/util.go\",\"code\":\"io.WriteString(h, s)\",\"line\":\"24\"}],\"Stats\":{\"files\":3,\"lines\":68,\"nosec\":0,\"found\":3}}",
      "cResult": "failed",
      "cInfo": "Issues found.",
      "startedAt": "2019-12-11T17:06:42.4Z",
      "finishedAt": "2019-12-11T17:10:36.036Z"
    }
  ],
  "startedAt": "2019-12-11T17:06:07.359Z",
  "finishedAt": "2019-12-11T17:10:36.036Z",
  "codes": [
    {
      "language": "Go",
      "files": [
        "api/routes/healthcheck.go",
        "api/server.go",
        "api/util/util.go",
        "api/util/util_suite_test.go",
        "api/util/util_test.go"
      ]
    }
  ],
  "huskyciresults": {
    "goresults": {
      "gosecoutput": {
        "lowvulns": [
          {
            "language": "Go",
            "securitytool": "GoSec",
            "severity": "LOW",
            "confidence": "HIGH",
            "file": "/go/src/code/api/util/util.go",
            "line": "24",
            "code": "io.WriteString(h, s)",
            "details": "Errors unhandled."
          }
        ],
        "mediumvulns": [
          {
            "language": "Go",
            "securitytool": "GoSec",
            "severity": "MEDIUM",
            "confidence": "HIGH",
            "file": "/go/src/code/api/util/util.go",
            "line": "4",
            "code": "\"crypto/md5\"",
            "details": "Blacklisted import crypto/md5: weak cryptographic primitive"
          },
          {
            "language": "Go",
            "securitytool": "GoSec",
            "severity": "MEDIUM",
            "confidence": "HIGH",
            "file": "/go/src/code/api/util/util.go",
            "line": "23",
            "code": "md5.New()",
            "details": "Use of weak cryptographic primitive"
          }
        ]
      }
    },
    "pythonresults": {
      "banditoutput": {},
      "safetyoutput": {}
    },
    "javascriptresults": {
      "npmauditoutput": {},
      "yarnauditoutput": {}
    },
    "rubyresults": {
      "brakemanoutput": {}
    },
    "javaresults": {
      "spotbugsoutput": {}
    },
    "genericresults": {
      "gitleaksoutput": {}
    }
  }
}
```

400 Bad Request

```
{"error":"invalid RID","success":false}
```

404 Not Found

```
{"error":"analysis not found","success":false}
```

500 Internal Server Error

```
{"error":"internal error","success":false}
```

[^](#top)

---

<a name="postanalysis"></a>

#### POST /analysis

```sh
curl -i -H "Content-Type: application/json" -d '{"repositoryURL":"https://github.com/globocom/huskyCI.git","repositoryBranch":"master"}' http://localhost:8888/analysis
```

201 Created

```
{"error":"none","success":true}
```

400 Bad Request

```
{"error":"invalid repository JSON","success":false}
```

```
{"error":"invalid repository URL","success":false}
```

```
{"error":"invalid repository branch","success":false}
```

409 Conflict

```
{"error":"an analysis is already in place for this URL and branch","success":false}
```

500 Internal Server Error

```
{"error":"internal error","success":false}
```

[^](#top)

---

<a name="postsecuritytest"></a>

#### POST /securitytest

```sh
curl -i -H "Content-Type: application/json" -d '{"name":"newSecTest", "image":"huskyci/new","cmd":"whoami", "language":"JavaScript", "default":true, "timeOutSecods":60}' http://localhost:8888/securitytest
```

201 Created

```
{"error":"none","success":true}
```

400 Bad Request

```
{"error":"invalid security test JSON","success":false}
```

409 Conflict

```
{"error":"this security test is already registered","success":false}
```

500 Internal Server Error

```
{"error":"internal error","success":false}
```

[^](#top)

---

<a name="postrepository"></a>

#### POST /repository

```sh
curl -i -H "Content-Type: application/json" -d '{"repositoryURL":"https://github.com/globocom/huskyCI2", "repositoryBranch":"master"}' http://localhost:8888/repository
```

201 Created
```
{"error":"none","success":true}
```

400 Bad Request
```
{"error":"invalid repository JSON","success":false}
```

409 Conflict
```
{"error":"this repository is already registered","success":false}
```

500 Internal Server Error
```
{"error":"internal error","success":false}
```

[^](#top)

---
