---
id: doc-api-routes
title: API Routes
sidebar_label: Routes
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
curl -i localhost:8888/analysis/Kdqhj41KwQBhQkkq9vc89DgnlX57Dnpm
```
200 OK
```
{
  "ID": "5cae2a988763c3308649d856",
  "RID": "Kdqhj41KwQBhQkkq9vc89DgnlX57Dnpm",
  "repositoryURL": "https://github.com/globocom/huskyCI.git",
  "repositoryBranch": "master",
  "securityTests": [
    {
      "ID": "5cae2a628763c3308649d800",
      "name": "enry",
      "image": "huskyci/enry",
      "cmd": "mkdir -p ~/.ssh &&\necho 'GIT_PRIVATE_SSH_KEY' > ~/.ssh/huskyci_id_rsa &&\nchmod 600 ~/.ssh/huskyci_id_rsa &&\necho \"IdentityFile ~/.ssh/huskyci_id_rsa\" >> /etc/ssh/ssh_config &&\necho \"StrictHostKeyChecking no\" >> /etc/ssh/ssh_config &&\ngit clone -b %GIT_BRANCH% --single-branch %GIT_REPO% code --quiet 2> /tmp/errorGitCloneEnry\nif [ $? -eq 0 ]; then\n  cd code\n  enry --json | tr -d '\\r\\n'\nelse\n  echo \"ERROR_CLONING\"\n  cat /tmp/errorGitCloneEnry\nfi\n",
      "language": "Generic",
      "default": true,
      "timeOutSeconds": 60
    },
    {
      "ID": "5cae2a628763c3308649d80c",
      "name": "retirejs",
      "image": "huskyci/retirejs",
      "cmd": "mkdir -p ~/.ssh &&\necho 'GIT_PRIVATE_SSH_KEY' > ~/.ssh/huskyci_id_rsa &&\nchmod 600 ~/.ssh/huskyci_id_rsa &&\necho \"IdentityFile ~/.ssh/huskyci_id_rsa\" >> /etc/ssh/ssh_config &&\necho \"StrictHostKeyChecking no\" >> /etc/ssh/ssh_config &&\ngit clone -b %GIT_BRANCH% --single-branch %GIT_REPO% code --quiet 2> /tmp/errorGitCloneRetirejs\nif [ $? -eq 0 ]; then\n  cd code\n  ls yarn.lock >/dev/null 2>/dev/null\n  if [ $? -eq 0 ]; then\n    yarn install >/dev/null 2>&1\n  else \n    npm install >/dev/null 2>&1\n  fi\n  retire --outputformat json --exitwith 0\nelse\n  echo \"ERROR_CLONING\"\n  cat /tmp/errorGitCloneRetirejs\nfi    \n",
      "language": "JavaScript",
      "default": true,
      "timeOutSeconds": 360
    },
    {
      "ID": "5cae2a628763c3308649d803",
      "name": "gosec",
      "image": "huskyci/gosec",
      "cmd": "mkdir -p ~/.ssh &&\necho 'GIT_PRIVATE_SSH_KEY' > ~/.ssh/huskyci_id_rsa &&\nchmod 600 ~/.ssh/huskyci_id_rsa &&\necho \"IdentityFile ~/.ssh/huskyci_id_rsa\" >> /etc/ssh/ssh_config &&\necho \"StrictHostKeyChecking no\" >> /etc/ssh/ssh_config &&\ncd src\ngit clone -b %GIT_BRANCH% --single-branch %GIT_REPO% code --quiet 2> /tmp/errorGitCloneGosec\nif [ $? -eq 0 ]; then\n  cd code\n  touch results.json\n  /go/bin/gosec -quiet -fmt=json -log=log.txt -out=results.json ./... 2> /dev/null\n  jq -j -M -c . results.json\nelse\n  echo \"ERROR_CLONING\"\n  cat /tmp/errorGitCloneGosec\nfi\n",
      "language": "Go",
      "default": true,
      "timeOutSeconds": 360
    }
  ],
  "status": "finished",
  "result": "passed",
  "containers": [
    {
      "CID": "71eaa2c915ed69b5c36d49e10df8b0a5ae32a76d590ba81167b55741e4f1352c",
      "securityTest": {
        "ID": "5cae2a628763c3308649d800",
        "name": "enry",
        "image": "huskyci/enry",
        "cmd": "mkdir -p ~/.ssh &&\necho 'GIT_PRIVATE_SSH_KEY' > ~/.ssh/huskyci_id_rsa &&\nchmod 600 ~/.ssh/huskyci_id_rsa &&\necho \"IdentityFile ~/.ssh/huskyci_id_rsa\" >> /etc/ssh/ssh_config &&\necho \"StrictHostKeyChecking no\" >> /etc/ssh/ssh_config &&\ngit clone -b %GIT_BRANCH% --single-branch %GIT_REPO% code --quiet 2> /tmp/errorGitCloneEnry\nif [ $? -eq 0 ]; then\n  cd code\n  enry --json | tr -d '\\r\\n'\nelse\n  echo \"ERROR_CLONING\"\n  cat /tmp/errorGitCloneEnry\nfi\n",
        "language": "Generic",
        "default": true,
        "timeOutSeconds": 60
      },
      "cStatus": "finished",
      "cOutput": "{\"Dockerfile\":[\"deployments/dockerfiles/api.Dockerfile\",\"deployments/dockerfiles/bandit/2.7/Dockerfile\",\"deployments/dockerfiles/bandit/3.6/Dockerfile\",\"deployments/dockerfiles/brakeman/Dockerfile\",\"deployments/dockerfiles/db.Dockerfile\",\"deployments/dockerfiles/enry/Dockerfile\",\"deployments/dockerfiles/gosec/Dockerfile\",\"deployments/dockerfiles/retirejs/Dockerfile\",\"deployments/dockerfiles/safety/Dockerfile\"],\"Go\":[\"api/analysis/analysis.go\",\"api/analysis/bandit.go\",\"api/analysis/brakeman.go\",\"api/analysis/dockerrun.go\",\"api/analysis/enry.go\",\"api/analysis/gosec.go\",\"api/analysis/retirejs.go\",\"api/analysis/safety.go\",\"api/context/context.go\",\"api/db/huskydb.go\",\"api/db/mongo/mongo.go\",\"api/dockers/api.go\",\"api/log/log.go\",\"api/log/messagecodes.go\",\"api/routes/analysis.go\",\"api/routes/healthcheck.go\",\"api/routes/repository.go\",\"api/routes/securitytest.go\",\"api/routes/version.go\",\"api/server.go\",\"api/types/types.go\",\"api/util/api/api-util.go\",\"api/util/util.go\",\"client/analysis/analysis.go\",\"client/analysis/output.go\",\"client/cmd/main.go\",\"client/config/config.go\",\"client/types/bandit.go\",\"client/types/brakeman.go\",\"client/types/gosec.go\",\"client/types/retirejs.go\",\"client/types/safety.go\",\"client/types/types.go\",\"client/util/util.go\"],\"JavaScript\":[\"deployments/mongo-init.js\"],\"Makefile\":[\"Makefile\"],\"Shell\":[\"deployments/dockerfiles/safety/script.sh\",\"deployments/scripts/create-certs.sh\",\"deployments/scripts/generate-env-pass.sh\",\"deployments/scripts/run-create-certs.sh\"]}",
      "cResult": "",
      "cInfo": "",
      "startedAt": "2019-04-10T17:42:15.735Z",
      "finishedAt": "2019-04-10T17:42:26.244Z"
    },
    {
      "CID": "30e2c9fe67a7217320e19a2dccfff5c61ec8f6655a45f5b05e9b061e8b7216b3",
      "securityTest": {
        "ID": "5cae2a628763c3308649d803",
        "name": "gosec",
        "image": "huskyci/gosec",
        "cmd": "mkdir -p ~/.ssh &&\necho 'GIT_PRIVATE_SSH_KEY' > ~/.ssh/huskyci_id_rsa &&\nchmod 600 ~/.ssh/huskyci_id_rsa &&\necho \"IdentityFile ~/.ssh/huskyci_id_rsa\" >> /etc/ssh/ssh_config &&\necho \"StrictHostKeyChecking no\" >> /etc/ssh/ssh_config &&\ncd src\ngit clone -b %GIT_BRANCH% --single-branch %GIT_REPO% code --quiet 2> /tmp/errorGitCloneGosec\nif [ $? -eq 0 ]; then\n  cd code\n  touch results.json\n  /go/bin/gosec -quiet -fmt=json -log=log.txt -out=results.json ./... 2> /dev/null\n  jq -j -M -c . results.json\nelse\n  echo \"ERROR_CLONING\"\n  cat /tmp/errorGitCloneGosec\nfi\n",
        "language": "Go",
        "default": true,
        "timeOutSeconds": 360
      },
      "cStatus": "finished",
      "cOutput": "",
      "cResult": "passed",
      "cInfo": "No issues found.",
      "startedAt": "0001-01-01T00:00:00Z",
      "finishedAt": "2019-04-10T17:43:33.63Z"
    },
    {
      "CID": "efd3dcff5e56a5df8e6119ff085c07f8195492d6880c179c091682c49da28a42",
      "securityTest": {
        "ID": "5cae2a628763c3308649d80c",
        "name": "retirejs",
        "image": "huskyci/retirejs",
        "cmd": "mkdir -p ~/.ssh &&\necho 'GIT_PRIVATE_SSH_KEY' > ~/.ssh/huskyci_id_rsa &&\nchmod 600 ~/.ssh/huskyci_id_rsa &&\necho \"IdentityFile ~/.ssh/huskyci_id_rsa\" >> /etc/ssh/ssh_config &&\necho \"StrictHostKeyChecking no\" >> /etc/ssh/ssh_config &&\ngit clone -b %GIT_BRANCH% --single-branch %GIT_REPO% code --quiet 2> /tmp/errorGitCloneRetirejs\nif [ $? -eq 0 ]; then\n  cd code\n  ls yarn.lock >/dev/null 2>/dev/null\n  if [ $? -eq 0 ]; then\n    yarn install >/dev/null 2>&1\n  else \n    npm install >/dev/null 2>&1\n  fi\n  retire --outputformat json --exitwith 0\nelse\n  echo \"ERROR_CLONING\"\n  cat /tmp/errorGitCloneRetirejs\nfi    \n",
        "language": "JavaScript",
        "default": true,
        "timeOutSeconds": 360
      },
      "cStatus": "finished",
      "cOutput": "{\"version\":\"2.0.2\",\"start\":\"2019-04-10T17:43:36.388Z\",\"data\":[],\"messages\":[],\"errors\":[],\"time\":0.724}\r\n",
      "cResult": "passed",
      "cInfo": "No issues found.",
      "startedAt": "2019-04-10T17:43:31.519Z",
      "finishedAt": "2019-04-10T17:43:37.651Z"
    }
  ]
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
