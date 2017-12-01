---
date: 2014-09-30 23:03:54+00:00
title: IT Solver services unaffected by Shellshock software bug
author_staff_member: angus
categories:
- Security-Advisory
tags:
- bug
- CVE-2014-6271
- CVE-2014-7169
- linux
- mac
- patch
- security
- shellshock
- software
- terminal
- unix
- update
- vulnerability
---

![terminal-shellshock-vulnerable-test]({{ site.baseurl }}/images/terminal-shellshock-vulnerable-test.jpg)
**Dear customers, we would like to advise _our services are not vulnerable to the Shellshock software bug_.**
Shellshock allows unauthorised remote access to certain Linux, Macs, routers, web servers and “Internet of Things” devices that have a vulnerable version of command-line software called Bash. Researchers say Shellshock could be worse than [Heartbleed.](https://en.wikipedia.org/wiki/Heartbleed) Patching Linux and Macs is easy, but security researchers are assessing the risk to our routers and "Internet of Things" devices such as smart televisions, kitchen appliances and security cameras.


## Am I vulnerable?


If you using Linux or Mac OS X, you can test your system by running this command from Terminal:

    
    env x='() { :;}; echo Your system is vulnerable.' bash -c 'echo test script'


If you are vulnerable, you'll get:

    
    Your system is vulnerable. test script


Additionally, [test your website or public IP](http://bashsmash.ccsir.org/) (Internet Protocol) address for Shellshock.
_Hint: To get your public IP address, do a web search "what is my ip"._


## Linux users


You know what to do - [**update**](http://www.linuxnews.pro/patch-bash-shell-shock-centos-ubuntu/)! At the time of writing this post, security updates exist for the following linux distributions:



	
  * CentOS

	
  * Debian

	
  * Redhat

	
  * Ubuntu




## Mac users


Advanced users who have enabled remote services should be concerned. You may want to disable remote services in System Preferences > Sharing.

A patch is available from Apple you can download and install it here:



	
  * [OS X Mavericks](http://support.apple.com/kb/DL1769?viewlocale=en_US&locale=en_US)

	
  * [OS X Mountain Lion](http://support.apple.com/kb/DL1768)

	
  * [OS X Lion](http://support.apple.com/kb/DL1767)




## Learn more


For the geeks, additional technical details about the issue can be found at [CVE-2014-6271](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-6271) and [CVE-2014-7169.](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-7169)
