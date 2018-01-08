---
date: 2015-06-01 08:02:06+00:00
title: How can I prevent Ask.com Toolbar from being installed every time Java is updated?
author_staff_member: angus
categories:
- Tips-and-Tricks
tags:
- adware
- ask
- ask.com
- java
- opt out
- promotion
- sponsor
---

![Java-ask.com](/images/java-ask-foistware-516x393.png)
Tired of the annoying Ask.com home page and search engine taking over your browser? So are we!
The likely culprit is Java installing bundled "offers", i.e. a euphemism for [adware.](https://en.wikipedia.org/wiki/Adware)


## Do I still need Java?

If you play Minecraft, then yes! However, [Java is less popular these days](https://www.google.com/trends/explore#q=download%20java) so consider removing Java via the Control Panel > Programs and Features. After doing this, test your online banking and other important websites or programs to see if those services still work. If a website or programs stops working, you should probably [reinstall Java.](https://www.java.com)


## Solution

If you still require Java, the following solution will prevent Java updates automatically installing adware including Ask.com toolbar, McAfee Security Scan and any future new "offers" as well.


### Automatic Solution (_aka. I've got Netflix episodes to watch!_) 
Right-click and Save [this .reg file](https://itsolver.net/disable-java-adware.reg), then open and follow prompts to merge the changes.


### Manual Solution (_aka. I know what I'm doing_) 

Copy and paste the text below into a new text file, save with a .reg extension and double-click to apply.

```
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\SOFTWARE\JavaSoft] "SPONSORS"="DISABLE"
[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\JavaSoft] "SPONSORS"="DISABLE"
```