---
id: env-vars
title: Environment Variables
---

This section describes each environment variable that is used by HuskyCI API. Use your own organization configuration in each of them.

## Required

| Name | Description | Example |
|----|:----:|:----:|
| **HUSKYCI_DATABASE_DB_ADDR** | DB server address | 10.10.10.12 |  
| **HUSKYCI_DATABASE_DB_NAME** | DB name | huskyCI-DB-123 |
| **HUSKYCI_DATABASE_DB_USERNAME** | DB username | huskyCI-User-123 |
| **HUSKYCI_DATABASE_DB_PASSWORD** | DB password | 1w1lln0tU53th15p455w0rd |
| **HUSKYCI_API_DEFAULT_USERNAME** | API Admin username | huskyCIAdmin |
| **HUSKYCI_API_DEFAULT_PASSWORD** | API Admin password | huskyCIPassword |
| **HUSKYCI_API_ALLOW_ORIGIN_CORS** | CORS domanis | https://huskyci.myorg.com |
| **HUSKYCI_DOCKERAPI_ADDR** | Docker API host address | 10.10.10.13 |
| **HUSKYCI_DOCKERAPI_CERT_PATH** | Path which contains certificates generated | /go/src/github.com/globocom/huskyCI/ |



## Optional

| Name | Description | Default Value |
|:----:|:----:|:----:|
| HUSKYCI_API_DEFAULT_HASH_FUNCTION | Hash function used | SHA512 |
| HUSKYCI_API_DEFAULT_ITERATIONS | PBKDF2 Number of iterations | 100000 |
| HUSKYCI_API_DEFAULT_KEY_LENGTH | PBKDF2 Key length | 512 |
| HUSKYCI_API_PORT | huskyCI API port | 8888 |
| HUSKYCI_API_ALLOW_ORIGIN_CORS | Domain to set CORS configuration | localhost |
| HUSKYCI_API_ENABLE_HTTPS | Bool to initiate huskyCI API using TLS | false |
| HUSKYCI_API_GIT_PRIVATE_SSH_KEY | Private SSH key used to clone authenticated git repositories | "" |
| HUSKYCI_API_GIT_SSH_URL | Internal SSH URL that GoSec will use for cloning the internal repo | "" |
| HUSKYCI_API_GIT_URL_TO_SUBSTITUTE | Internal repository HTTPS URL to be substituted by the SSH one | "" |
| HUSKYCI_LOGGING_GRAYLOG_ADDR | Graylog server address | "" |
| HUSKYCI_LOGGING_GRAYLOG_PROTO | Protocol used to send events to graylog | "" (use `tcp` or `udp`) |
| HUSKYCI_LOGGING_GRAYLOG_APP_NAME | App name used for logging | "" |
| HUSKYCI_LOGGING_GRAYLOG_TAG | Tag to be sent on GLEF | "" |
| HUSKYCI_LOGGING_GRAYLOG_DEV | If set to true, log is printed to STDOUT and not sent to Graylog | "" (use `true` or `false`) |
| HUSKYCI_DATABASE_TYPE | Database type | mongodb (use `postgresql` or `mongodb`) |
| HUSKYCI_DATABASE_DB_MAX_OPEN_CONNS | Number of max allowed DB open connections | 1 |
| HUSKYCI_DATABASE_DB_MAX_IDLE_CONNS | Number of max allowed DB idle | 1 |
| HUSKYCI_DATABASE_DB_CONN_MAXLIFETIME | Number of max duration of a DB connection | `time.hour` (use nanoseconds) |
| HUSKYCI_DATABASE_DB_PORT | Database port | 27017 |
| HUSKYCI_DATABASE_DB_TIMEOUT | Database timeout | 60 (use seconds) |
| HUSKYCI_DATABASE_DB_POOL_LIMIT | Database Pool Limit | 1000 |
| HUSKYCI_DOCKERAPI_PORT | Docker API port | 2376 |
| HUSKYCI_DOCKERAPI_TLS_VERIFY | Boolean to verify TLS certificates at Docker API host | 1 (use `1`, `0` or `true`, `false`) |
| HUSKYCI_DOCKERAPI_CERT_FILE_VALUE | Content of `cert.pem` certificate. To be used if deploying in Tsuru without the need to pass `cert.pem` as part of the command. | "" (use `-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----`) |
| HUSKYCI_DOCKERAPI_CERT_KEY_VALUE | Content of `key.pem` key. To be used if deploying in Tsuru without the need to pass `key.pem` as part of the command. | "" (use `-----BEGIN RSA PRIVATE KEY----- ... -----END RSA PRIVATE KEY-----`) |
| HUSKYCI_DOCKERAPI_API_TLS_CERT_VALUE | Content of `api-tls-cert.pem` certificate. To be used if deploying in Tsuru without the need to pass `api-tls-cert.pem` as part of the command. | "" (use `-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----`) |
| HUSKYCI_DOCKERAPI_API_TLS_KEY_VALUE | Content of `api-tls-key.pem` key. To be used when deploying in Tsuru without the need to pass `api-tls-key.pem` as part of the command. | "" (use `-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----`) |
| HUSKYCI_DOCKERAPI_CERT_CA_VALUE | Content of `ca.pem` certificate. To be used when deploying in Tsuru without the need to pass `ca.pem` as part of the command. | "" ( use `-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----`) |
