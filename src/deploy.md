---
layout: info-page
title: "Deploy Scripts"
permalink: /deploy/
---

# Intune

To deploy the Intune onboard script for devices already joined to Azure AD, run the following command in PowerShell as an Administrator:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://gist.github.com/itsolver/f55bf83fcf11181dd6ad88c2de02a5f4/raw'))
```

# Security

[Enforce security key sign in](https://gist.github.com/itsolver/d75b9547caa0700373d5ac5ea75ddabf)

