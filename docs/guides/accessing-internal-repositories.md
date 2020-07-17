---
id: accessing-internal-repositories
title: Accessing interal repositories
---

If you're trying to run huskyCI inside your internal remote and has been facing some dificulties along the way, this section will guide you on how to overcome it.

## GoSec

If the project you're trying to analyze is deployed on an internal remote, is written in GoLang and does not have a `Vendor` folder, you might face an `Error Cloning` error.

This error is caused due to the way GoSec fetches it's dependencies through the `go get` command, which, by default, uses HTTPS for cloning.

In order to overcome this issue, huskyCI has 2 environment variables to "force" `go get` to do it's cloning through SSH with the user's key. It's important to notice that no extra key is needed, only the one provided to huskyCI's API (the key must have access to the desired repository).

An example on how the environment variables should be set is as follows:

```sh
HUSKYCI_API_GIT_SSH_URL=gitlab@gitlab.example.com
HUSKYCI_API_GIT_URL_TO_SUBSTITUTE=https://gitlab.example.com/
```

**Note**: If one of the environment variables is filled but the other is not, being left empty or not set, the value of the first is set to empty.

Setting both of the above variables correctly, the `.gitconfig` file inside the `huskyCI/gosec` container should look like this:
```sh
[url "gitlab@gitlab.example.com:"]
	insteadOf = https://gitlab.example.com/
```

Now, you should be able to run huskyCI with the internal remote you desire.
