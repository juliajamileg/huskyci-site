"use strict";(self.webpackChunkhusky_site=self.webpackChunkhusky_site||[]).push([[883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=s,k=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const a={id:"routes",title:"Routes"},i=void 0,o={unversionedId:"api/routes",id:"api/routes",title:"Routes",description:"Healthcheck:",source:"@site/docs/api/routes.md",sourceDirName:"api",slug:"/api/routes",permalink:"/huskyci-site/docs/api/routes",draft:!1,tags:[],version:"current",frontMatter:{id:"routes",title:"Routes"},sidebar:"docs",previous:{title:"API",permalink:"/huskyci-site/docs/category/api"},next:{title:"Environment Variables",permalink:"/huskyci-site/docs/api/env-vars"}},l={},c=[{value:"GET /healthckeck",id:"get-healthckeck",level:4},{value:"GET /version",id:"get-version",level:4},{value:"GET /analysis/:id",id:"get-analysisid",level:4},{value:"POST /analysis",id:"post-analysis",level:4},{value:"POST /securitytest",id:"post-securitytest",level:4},{value:"POST /repository",id:"post-repository",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("a",{name:"top"}),(0,s.kt)("p",null,"Healthcheck:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#gethealthcheck"},(0,s.kt)("inlineCode",{parentName:"a"},"GET /healthcheck"))," : returns API health status")),(0,s.kt)("p",null,"Version:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#getversion"},(0,s.kt)("inlineCode",{parentName:"a"},"GET /version"))," : returns API version")),(0,s.kt)("p",null,"Analysis:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#getanalysisid"},(0,s.kt)("inlineCode",{parentName:"a"},"GET /analysis/:id"))," : gets an analysis given its ",(0,s.kt)("inlineCode",{parentName:"li"},"id")," (RID)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#postanalysis"},(0,s.kt)("inlineCode",{parentName:"a"},"POST /analysis"))," : creates a new analysis")),(0,s.kt)("p",null,"SecurityTest:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#postsecuritytest"},(0,s.kt)("inlineCode",{parentName:"a"},"POST /securitytest"))," : creates a new security test")),(0,s.kt)("p",null,"Repository:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#postrepository"},(0,s.kt)("inlineCode",{parentName:"a"},"POST /repository"))," : creates a new repository")),(0,s.kt)("hr",null),(0,s.kt)("a",{name:"gethealthcheck"}),(0,s.kt)("h4",{id:"get-healthckeck"},"GET /healthckeck"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"curl -i localhost:8888/healthcheck\n")),(0,s.kt)("p",null,"200 OK"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"WORKING\n")),(0,s.kt)("hr",null),(0,s.kt)("a",{name:"getversion"}),(0,s.kt)("h4",{id:"get-version"},"GET /version"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"curl -i localhost:8888/version\n")),(0,s.kt)("p",null,"200 OK"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n    "date":"2019-04-05",\n    "version":"0.1.2"\n}\n')),(0,s.kt)("hr",null),(0,s.kt)("a",{name:"getanalysisid"}),(0,s.kt)("h4",{id:"get-analysisid"},"GET /analysis/:id"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"curl -i localhost:8888/analysis/Ym3CjUl3H9nfaHbhaeXuEz7ILBtXiP0J\n")),(0,s.kt)("p",null,"200 OK"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n  "RID": "Ym3CjUl3H9nfaHbhaeXuEz7ILBtXiP0J",\n  "repositoryURL": "https://github.com/globocom/huskyCI.git",\n  "repositoryBranch": "poc-golang-gosec",\n  "commitAuthors": [\n    "husky_test@example.com"\n  ],\n  "status": "finished",\n  "result": "failed",\n  "errorFound": "",\n  "containers": [\n    {\n      "CID": "db850be381bf1dd27a63b8a16ea807d53faa4e1edfe21c8c115e421f806e75c1",\n      "securityTest": {\n        "name": "gitauthors",\n        "image": "huskyci/gitauthors",\n        "imageTag": "2.18.1",\n        "cmd": "mkdir -p ~/.ssh &&\\necho \'GIT_PRIVATE_SSH_KEY\' > ~/.ssh/huskyci_id_rsa &&\\nchmod 600 ~/.ssh/huskyci_id_rsa &&\\necho \\"IdentityFile ~/.ssh/huskyci_id_rsa\\" >> /etc/ssh/ssh_config &&\\necho \\"StrictHostKeyChecking no\\" >> /etc/ssh/ssh_config &&\\ngit clone %GIT_REPO% code --quiet 2> /tmp/errorGitCloneEnry\\ncd code\\ngit checkout %GIT_BRANCH% --quiet\\nif [ $? -eq 0 ]; then\\n  for i in $(git log origin/master.. --pretty=\\"%ae\\" | sort -u); do\\n    jsonMiddle=\\"\\\\\\"$i\\\\\\",$jsonMiddle\\"\\n  done\\n  length=${#jsonMiddle}\\n  endindex=$(expr $length - 1)\\n  authors=\\"${jsonMiddle:0:$endindex}\\"\\n  echo \\"{\\\\\\"authors\\\\\\":[$authors]}\\"\\nelse\\n  echo \\"ERROR_CLONING\\"\\n  cat /tmp/errorGitCloneEnry\\nfi\\n",\n        "type": "Generic",\n        "language": "",\n        "default": true,\n        "timeOutSeconds": 60\n      },\n      "cStatus": "finished",\n      "cOutput": "{\\"authors\\":[\\"husky_test@example.com\\"]}\\r\\n",\n      "cResult": "passed",\n      "cInfo": "No issues found.",\n      "startedAt": "2019-12-11T17:06:42.404Z",\n      "finishedAt": "2019-12-11T17:07:58.622Z"\n    },\n    {\n      "CID": "2f873c5516fa58a30624ccaca3a86566b69dff7fa60d5bda1093875202891fb9",\n      "securityTest": {\n        "name": "gitleaks",\n        "image": "huskyci/gitleaks",\n        "imageTag": "2.1.0",\n        "cmd": "mkdir -p ~/.ssh &&\\necho \'GIT_PRIVATE_SSH_KEY\' > ~/.ssh/huskyci_id_rsa &&\\nchmod 600 ~/.ssh/huskyci_id_rsa &&\\necho \\"IdentityFile ~/.ssh/huskyci_id_rsa\\" >> /etc/ssh/ssh_config &&\\necho \\"StrictHostKeyChecking no\\" >> /etc/ssh/ssh_config &&\\ngit clone -b %GIT_BRANCH% --single-branch %GIT_REPO% code --quiet 2> /tmp/errorGitCloneGitleaks\\nif [ $? -eq 0 ]; then\\n    touch /tmp/results.json\\n    $(which gitleaks) --log=warn --report=/tmp/results.json --repo-path=./code --repo-config > /tmp/errorGitleaks\\n    if [ $? -eq 2 ]; then\\n        echo -n \'ERROR_RUNNING_GITLEAKS\'\\n        cat /tmp/errorGitleaks\\n    else\\n        jq -j -M -c . /tmp/results.json\\n    fi\\nelse\\n    echo \\"ERROR_CLONING\\"\\n    cat /tmp/errorGitCloneGitleaks\\nfi\\n",\n        "type": "Generic",\n        "language": "",\n        "default": true,\n        "timeOutSeconds": 360\n      },\n      "cStatus": "finished",\n      "cOutput": "",\n      "cResult": "passed",\n      "cInfo": "No issues found.",\n      "startedAt": "2019-12-11T17:06:42.399Z",\n      "finishedAt": "2019-12-11T17:08:04.681Z"\n    },\n    {\n      "CID": "8eda196517b06aad3e935f2a4db06ca0562db120ec354138a64054360f0bf1d5",\n      "securityTest": {\n        "name": "gosec",\n        "image": "huskyci/gosec",\n        "imageTag": "v2.1.0",\n        "cmd": "mkdir -p ~/.ssh &&\\necho \'GIT_PRIVATE_SSH_KEY\' > ~/.ssh/huskyci_id_rsa &&\\nchmod 600 ~/.ssh/huskyci_id_rsa &&\\necho \\"IdentityFile ~/.ssh/huskyci_id_rsa\\" >> /etc/ssh/ssh_config &&\\necho \\"StrictHostKeyChecking no\\" >> /etc/ssh/ssh_config &&\\ncd src\\ngit clone -b %GIT_BRANCH% --single-branch %GIT_REPO% code --quiet 2> /tmp/errorGitCloneGosec\\nif [ $? -eq 0 ]; then\\n  cd code\\n  touch results.json\\n  $(which gosec) -quiet -fmt=json -log=log.txt -out=results.json ./... 2> /dev/null\\n  jq -j -M -c . results.json\\nelse\\n  echo \\"ERROR_CLONING\\"\\n  cat /tmp/errorGitCloneGosec\\nfi\\n",\n        "type": "Language",\n        "language": "Go",\n        "default": true,\n        "timeOutSeconds": 360\n      },\n      "cStatus": "finished",\n      "cOutput": "{\\"Golang errors\\":{\\"/go/src/code/api/server.go\\":[{\\"line\\":20,\\"column\\":42,\\"error\\":\\"Healthcheck not declared by package routes\\"}]},\\"Issues\\":[{\\"severity\\":\\"MEDIUM\\",\\"confidence\\":\\"HIGH\\",\\"rule_id\\":\\"G501\\",\\"details\\":\\"Blacklisted import crypto/md5: weak cryptographic primitive\\",\\"file\\":\\"/go/src/code/api/util/util.go\\",\\"code\\":\\"\\\\\\"crypto/md5\\\\\\"\\",\\"line\\":\\"4\\"},{\\"severity\\":\\"MEDIUM\\",\\"confidence\\":\\"HIGH\\",\\"rule_id\\":\\"G401\\",\\"details\\":\\"Use of weak cryptographic primitive\\",\\"file\\":\\"/go/src/code/api/util/util.go\\",\\"code\\":\\"md5.New()\\",\\"line\\":\\"23\\"},{\\"severity\\":\\"LOW\\",\\"confidence\\":\\"HIGH\\",\\"rule_id\\":\\"G104\\",\\"details\\":\\"Errors unhandled.\\",\\"file\\":\\"/go/src/code/api/util/util.go\\",\\"code\\":\\"io.WriteString(h, s)\\",\\"line\\":\\"24\\"}],\\"Stats\\":{\\"files\\":3,\\"lines\\":68,\\"nosec\\":0,\\"found\\":3}}",\n      "cResult": "failed",\n      "cInfo": "Issues found.",\n      "startedAt": "2019-12-11T17:06:42.4Z",\n      "finishedAt": "2019-12-11T17:10:36.036Z"\n    }\n  ],\n  "startedAt": "2019-12-11T17:06:07.359Z",\n  "finishedAt": "2019-12-11T17:10:36.036Z",\n  "codes": [\n    {\n      "language": "Go",\n      "files": [\n        "api/routes/healthcheck.go",\n        "api/server.go",\n        "api/util/util.go",\n        "api/util/util_suite_test.go",\n        "api/util/util_test.go"\n      ]\n    }\n  ],\n  "huskyciresults": {\n    "goresults": {\n      "gosecoutput": {\n        "lowvulns": [\n          {\n            "language": "Go",\n            "securitytool": "GoSec",\n            "severity": "LOW",\n            "confidence": "HIGH",\n            "file": "/go/src/code/api/util/util.go",\n            "line": "24",\n            "code": "io.WriteString(h, s)",\n            "details": "Errors unhandled."\n          }\n        ],\n        "mediumvulns": [\n          {\n            "language": "Go",\n            "securitytool": "GoSec",\n            "severity": "MEDIUM",\n            "confidence": "HIGH",\n            "file": "/go/src/code/api/util/util.go",\n            "line": "4",\n            "code": "\\"crypto/md5\\"",\n            "details": "Blacklisted import crypto/md5: weak cryptographic primitive"\n          },\n          {\n            "language": "Go",\n            "securitytool": "GoSec",\n            "severity": "MEDIUM",\n            "confidence": "HIGH",\n            "file": "/go/src/code/api/util/util.go",\n            "line": "23",\n            "code": "md5.New()",\n            "details": "Use of weak cryptographic primitive"\n          }\n        ]\n      }\n    },\n    "pythonresults": {\n      "banditoutput": {},\n      "safetyoutput": {}\n    },\n    "rubyresults": {\n      "brakemanoutput": {}\n    },\n    "javaresults": {\n      "spotbugsoutput": {}\n    },\n    "genericresults": {\n      "gitleaksoutput": {}\n    }\n  }\n}\n')),(0,s.kt)("p",null,"400 Bad Request"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"invalid RID","success":false}\n')),(0,s.kt)("p",null,"404 Not Found"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"analysis not found","success":false}\n')),(0,s.kt)("p",null,"500 Internal Server Error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"internal error","success":false}\n')),(0,s.kt)("hr",null),(0,s.kt)("a",{name:"postanalysis"}),(0,s.kt)("h4",{id:"post-analysis"},"POST /analysis"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -i -H "Content-Type: application/json" -d \'{"repositoryURL":"https://github.com/globocom/huskyCI.git","repositoryBranch":"master"}\' http://localhost:8888/analysis\n')),(0,s.kt)("p",null,"201 Created"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"none","success":true}\n')),(0,s.kt)("p",null,"400 Bad Request"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"invalid repository JSON","success":false}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"invalid repository URL","success":false}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"invalid repository branch","success":false}\n')),(0,s.kt)("p",null,"409 Conflict"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"an analysis is already in place for this URL and branch","success":false}\n')),(0,s.kt)("p",null,"500 Internal Server Error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"internal error","success":false}\n')),(0,s.kt)("hr",null),(0,s.kt)("a",{name:"postsecuritytest"}),(0,s.kt)("h4",{id:"post-securitytest"},"POST /securitytest"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -i -H "Content-Type: application/json" -d \'{"name":"newSecTest", "image":"huskyci/new","cmd":"whoami", "language":"JavaScript", "default":true, "timeOutSecods":60}\' http://localhost:8888/securitytest\n')),(0,s.kt)("p",null,"201 Created"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"none","success":true}\n')),(0,s.kt)("p",null,"400 Bad Request"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"invalid security test JSON","success":false}\n')),(0,s.kt)("p",null,"409 Conflict"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"this security test is already registered","success":false}\n')),(0,s.kt)("p",null,"500 Internal Server Error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"internal error","success":false}\n')),(0,s.kt)("hr",null),(0,s.kt)("a",{name:"postrepository"}),(0,s.kt)("h4",{id:"post-repository"},"POST /repository"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -i -H "Content-Type: application/json" -d \'{"repositoryURL":"https://github.com/globocom/huskyCI2", "repositoryBranch":"master"}\' http://localhost:8888/repository\n')),(0,s.kt)("p",null,"201 Created"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"none","success":true}\n')),(0,s.kt)("p",null,"400 Bad Request"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"invalid repository JSON","success":false}\n')),(0,s.kt)("p",null,"409 Conflict"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"this repository is already registered","success":false}\n')),(0,s.kt)("p",null,"500 Internal Server Error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"error":"internal error","success":false}\n')),(0,s.kt)("hr",null))}d.isMDXComponent=!0}}]);