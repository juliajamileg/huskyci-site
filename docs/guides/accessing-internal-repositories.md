---
id: accessing-internal-repositories
title: Accessing interal repositories
---

If you're trying to run HuskyCI inside your internal remote and has been facing some dificulties along the way, this section will guide you on how to overcome it.

## GoSec

If the project you're trying to analyze has internal dependencies, is written in GoLang and does not have a `Vendor` folder, you might face an `Error Cloning` error.

This error is caused due to the way GoSec fetches it's dependencies through the `go get` command, which, by default, uses HTTPS for cloning.

In order to overcome this issue, HuskyCI has 2 environment variables to "force" `go get` to do it's cloning through SSH with the user's key. It's important to notice that no extra key is needed, only the one provided to HuskyCI's API (the key must have access to the desired repository and should already have been set).

An example on how the environment variables should be set is as follows:

```sh
HUSKYCI_API_GIT_SSH_URL=gitlab@gitlab.example.com
HUSKYCI_API_GIT_URL_TO_SUBSTITUTE=https://gitlab.example.com/
```

**Note**: If one of the environment variables is filled but the other is not, being left empty or not set, both will be set by HuskyCI as being empty.

Now, you should be able to run HuskyCI with the internal remote you desire.
