---
id: env-vars
title: Environment Variables
---

## huskyCI API (required)

| Name | Description | Example |
| --- | --- | --- |
| HUSKYCI_DATABASE_DB_ADDR | DB server address | `10.10.10.12` |  
| HUSKYCI_DATABASE_DB_NAME | DB name | `huskyCI-DB-123` | 
| HUSKYCI_DATABASE_DB_USERNAME | DB username | `huskyCI-User-123` | 
| HUSKYCI_DATABASE_DB_PASSWORD | DB password | `1w1lln0tU53th15p455w0rd` | 
| HUSKYCI_API_DEFAULT_USERNAME | API Admin username | `huskyCIAdmin` | 
| HUSKYCI_API_DEFAULT_PASSWORD | API Admin password | `huskyCIPassword` | 
| HUSKYCI_DOCKERAPI_ADDR | Docker API host address | `10.10.10.13` |
| HUSKYCI_DOCKERAPI_CERT_PATH | Path which contains certificates generated | `/go/src/github.com/globocom/huskyCI/` |
| HUSKYCI_DOCKERAPI_CERT_FILE | Path which contains the certificate file | `/go/src/github.com/globocom/huskyCI/cert.pem` |
| HUSKYCI_DOCKERAPI_CERT_KEY | Path which contains the private key associated to the certificate | `/go/src/github.com/globocom/huskyCI/key.pem` |
| HUSKYCI_API_ALLOW_ORIGIN_CORS | CORS domanis | `localhost` | 

## huskyCI Client (required inside CI)

| Name | Description | Example |
| --- | --- | --- |
| HUSKYCI_CLIENT_API_ADDR | huskyCI API address | `http://10.10.10.14` |
| HUSKYCI_CLIENT_REPO_URL | Repository to be checked | `git@github.com:globocom/huskyci.git` or `https://github.com/globocom/huskyci.git`  | 
| HUSKYCI_CLIENT_REPO_BRANCH | Check current branch to be checked | `$CI_COMMIT_REF_NAME` (Gitlab CI) |
| HUSKYCI_CLIENT_API_USE_HTTPS | Set this boolean if huskyCI is using TLS | `true` or `false` |

## huskyCI API (optional)

| Name | Description | Example(s) | 
| --- | --- | --- | 
| HUSKYCI_DATABASE_MONGO_PORT | MongoDB port | 9003 | 
| HUSKYCI_DATABASE_MONGO_TIMEOUT | MonogDB Timeout | 2 |
| HUSKYCI_DATABASE_MONGO_POOL_LIMIT | MongoDB Pool Limit | 2 |
| HUSKYCI_LOGGING_GRAYLOG_ADDR | Graylog server address | `10.10.10.11:12001` |
| HUSKYCI_LOGGING_GRAYLOG_PROTO | Protocol used to send events to graylog | `tcp` or `udp` |
| HUSKYCI_LOGGING_GRAYLOG_APP_NAME | App name used for logging | `huskyCI` |
| HUSKYCI_LOGGING_GRAYLOG_TAG | Tag to be sent on GLEF | `huskyCI` |
| HUSKYCI_LOGGING_GRAYLOG_DEV | If set to true, log is printed to STDOUT and not sent to Graylog | `true` or `false` | 
| HUSKYCI_DOCKERAPI_CERT_FILE_VALUE | Content of `cert.pem` certificate. To be used when deploying without the need to pass `cert.pem` as part of the command. | `-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----` | 
| HUSKYCI_DOCKERAPI_CERT_KEY_VALUE | Content of `key.pem` key. To be used when deploying without the need to pass `key.pem` as part of the command. | `-----BEGIN RSA PRIVATE KEY----- ... -----END RSA PRIVATE KEY-----` |
| HUSKYCI_DOCKERAPI_API_TLS_CERT_VALUE | Content of `api-tls-cert.pem` certificate. To be used when deploying without the need to pass `api-tls-cert.pem` as part of the command. | `-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----` | 
| HUSKYCI_DOCKERAPI_API_TLS_KEY_VALUE | Content of `api-tls-key.pem` key. To be used when deploying without the need to pass `api-tls-key.pem` as part of the command. | `-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----` |
| HUSKYCI_DOCKERAPI_CERT_CA_VALUE | Content of `ca.pem` certificate. To be used when deploying without the need to pass `ca.pem` as part of the command. | `-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----` |
| HUSKYCI_DOCKERAPI_PORT | Docker API port | `2376` |
| HUSKYCI_DOCKERAPI_TLS_VERIFY | Boolean to verify TLS certificates at Docker API host | `false` |
| HUSKYCI_API_DEFAULT_ITERATIONS | PBKDF2 Number of iterations | `200000` |
| HUSKYCI_API_DEFAULT_KEY_LENGTH | PBKDF2 Key length | `1024` |
| HUSKYCI_API_DEFAULT_HASH_FUNCTION | Hash function used | `SHA512` |
| HUSKYCI_DOCKERAPI_TLS_VERIFY | Boolean to verify TLS certificates at Docker API host | `0` |
| HUSKYCI_API_PORT | App port used to listen requests | `3001` |
| HUSKYCI_API_ENABLE_HTTPS | Bool to initiate huskyCI API using TLS | `true` or `false` |
| HUSKYCI_API_GIT_PRIVATE_SSH_KEY | Private key used to clone authenticated git repositories | `----BEGIN RSA PRIVATE KEY----- ....` |