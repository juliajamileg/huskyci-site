---
id: requirements
title: Requirements
---
## Environment Variables

The following environment variables must be set so that `huskyci-client` can properly communicate with the API:

* `HUSKYCI_CLIENT_REPO_URL` - The repository address of the project being tested.
* `HUSKYCI_CLIENT_REPO_BRANCH` - The name of the branch being tested. 
* `HUSKYCI_CLIENT_API_ADDR` - The address of where the API is waiting for the `huskyci-client` to connect.
* `HUSKYCI_CLIENT_API_USE_HTTPS` - A boolean value to define if HTTPS is being used or not.
* `HUSKYCI_CLIENT_TOKEN` - Token authorization to check if that CI is allowed to perform tests.

Variables application will be shown in [quickstart][Quickstart].

## Docker and Docker-Compose

The easiest way to deploy huskyCI locally is by using [Docker][Docker Install] and [Docker Compose][Docker Compose Install], thus you should have them installed on your machine.

## Golang

You must also have Golang installed to run and develop huskyCI. For Mac users you can install it via `brew`:

```bash
brew install golang
```

For more detailed information on how to install Go in other stacks, you should check this [official reference](https://golang.org/doc/install).

[Docker Install]:  https://docs.docker.com/install/
[Docker Compose Install]: https://docs.docker.com/compose/install/
[Quickstart]: ../category/getting-started