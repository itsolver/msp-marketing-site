---
layout: info-page
title: "Deploy Scripts"
permalink: /deploy/
---

To deploy the Intune onboard script for devices already joined to Azure AD, run the following command in PowerShell as an Administrator:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://github.com/itsolver/gsuitedev/blob/master/M365/Intune/intune-onboard-joined-devices.ps1?raw=true'))
```
