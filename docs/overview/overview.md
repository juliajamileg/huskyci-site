---
id: overview
title: Overview
---

Welcome to the HuskyCI documentation!

HuskyCI is an open-source tool that orchestrates security tests inside CI pipelines of multiple projects and centralizes all results into a database for further analysis and metrics.

Watch a presentation about the tool: [HuskyCI: tool for reducing security flaws][Youtube].

## How does it work?

The main goal of this project is to help development teams improve the quality of their code by finding vulnerabilities as quickly as possible, and thus addressing them.

### Tools included in HuskyCI:

* Gosec (Golang)

* Bandit (Python)

* Brakeman (Ruby)

* Safety (Python)

* Gitleaks (git)

* Tfsec (Terraform)

* Securitycodescan (C#)

* Semgrep (JavaScript, TypeScript, Lua)

* Trivy (C#, Java, C++, VBA)

* Osvscanner (Generic)


You should check our [wiki](https://github.com/globocom/huskyCI/wiki/How-does-huskyCI-work%3F) to better understand how this tool could help securing your organization projects!

<p align="center">
  <img src="https://github.com/globocom/huskyCI/raw/master/huskyCI.gif" />
</p>

[Bandit]: https://github.com/PyCQA/bandit
[Safety]: https://github.com/pyupio/safety
[Brakeman]: https://github.com/presidentbeef/brakeman
[Gosec]: https://github.com/securego/gosec
[Gitleaks]: https://github.com/zricethezav/gitleaks
[SpotBugs]: https://spotbugs.github.io
[FindSec]: https://find-sec-bugs.github.io
[Osv-scanner]: https://osv.dev/
[TFSec]: https://github.com/liamg/tfsec
[Semgrep]: https://semgrep.dev/
[security-code-scan]: https://security-code-scan.github.io/
[Trivy]: https://trivy.dev/
[Youtube]: https://www.youtube.com/watch?v=zgp8GOQv6Jo

