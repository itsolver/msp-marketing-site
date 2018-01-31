---
date: 2017-11-29 20:09:00+10:00
title: Fix huge security flaw in macOS High Sierra
author: angus
categories:
- Security
tags:
- macOS
- High Sierra
- security
- vulnerability
- Apple
- fix
- solution
---

If you’re running macOS High Sierra, stop and *do this now* to fix the root access vulnerability. 

**Update: Apple has released a fix. [Security Update 2017-001](https://support.apple.com/en-au/HT208315). Install the update:**
1. Click Apple icon in menu bar
2. Go to App Store
3. Updates
4. Install security update 2017-001 (Doesn't require a reboot.)

No further action required.

***

<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">🚨 If you’re running <a href="https://twitter.com/hashtag/macOS?src=hash&amp;ref_src=twsrc%5Etfw">#macOS</a> <a href="https://twitter.com/hashtag/HighSierra?src=hash&amp;ref_src=twsrc%5Etfw">#HighSierra</a>, stop and do this *now* to fix the root access vulnerability. <br><br>Then share it with everyone you know and make sure they do it too. <br><br>📺: [Embedded]<br><br>📝: <a href="https://t.co/e9sErEvKNI">https://t.co/e9sErEvKNI</a> <a href="https://t.co/9jKcV7FAXm">pic.twitter.com/9jKcV7FAXm</a></p>&mdash; Rene Ritchie (@reneritchie) <a href="https://twitter.com/reneritchie/status/935627307565355014?ref_src=twsrc%5Etfw">November 28, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Alternative solutions achieve the same outcome

#### Spotlight Search
1. Open **Spotlight Search**, click the magnifying glass icon in the upper-right corner of the menu bar, or press Command-Space from any app
2. Start typing the first few letters of **Directory Utility** and press Return.
3. In Directory Utility, click on the **Lock (🔒)** icon.
4. Enter your **Password**.
5. Click on **Edit** in the menubar.
6. Click on **Enable Root User**.
7. Enter and confirm your **Root User Password**. *Use a password manager e.g. 1Password or Lastpass to generate a strong, unique password.*

#### If you prefer the command line, you can
1. Launch **Terminal**.
2. Type: ``sudo passwd -u root``
3. Enter and confirm your **Root User Password**. *Use a password manager e.g. 1Password or Lastpass to generate a strong, unique password.*

Do not disable the Root User. That just blanks the password and allows the exploit to work again.