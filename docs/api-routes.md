---
id: api-routes
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
```bash
curl -i localhost:8888/healthcheck
```
200 OK
```
WORKING
```
