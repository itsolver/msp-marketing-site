# IT Solver Marketing Site

A marketing website for [IT Solver](https://www.itsolver.net), a managed service provider for people and business. 

This is a labour of ❤️ for serverless and the latest web technologies, built by a coding novice, Angus McLauchlan, whose day job is running a solo, desktop support business.

Based on CloudCannon's [Hydra Jekyll Template](https://github.com/CloudCannon/hydra-jekyll-template) and inspired by Made Mistakes [How I'm Using Jekyll in 2017](https://mademistakes.com/articles/using-jekyll-2017/).

Hosted at [Firebase Hosting](https://firebase.google.com/products/hosting/) for the secure connection, Fast content delivery, Rapid deployment, One-click rollbacks, and has a free (Spark) plan for starters.

[Gulp](https://gulpjs.com/) for development workflow.

[Stripe](https://github.com/itsolver/stripe-payments-demo) for payments, deployed via [Firebase Functions](https://firebase.google.com/products/functions/) in TypeScript.

[Travis CI](https://travis-ci.com/) for auto deployments of successful builds.

Source code edited in [Visual Studio Code](https://code.visualstudio.com/).

Build status: [![Build Status](https://travis-ci.org/itsolver/msp-marketing-site.svg?branch=master)](https://travis-ci.org/itsolver/msp-marketing-site)

## Lighthouse reports

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) to audit performance, accessibility and user experience.

### Mobile

[![mobile lighthouse report screenshot](https://www.itsolver.net/tech-review/www.itsolver.net/mobile-lighthouse-report-screenshot.png)](https://www.itsolver.net/tech-review/www.itsolver.net/www.itsolver.net_2018-09-12_11-27-30-mobile)

### Desktop

[![desktop lighthouse report screenshot](https://www.itsolver.net/tech-review/www.itsolver.net/desktop-lighthouse-report-screenshot.png)](https://www.itsolver.net/tech-review/www.itsolver.net/www.itsolver.net_2018-09-12_11-25-43-desktop)

## Setup

1. Add your site and author details in `_config.yml`.
2. Add your Google Analytics and Disqus keys to `_config.yml`.
3. Get a workflow going to see your site's output (with [CloudCannon](https://app.cloudcannon.com/) or Jekyll locally). 

## My workflow

- local dev: Visual Studio Code with ``gulp`` running on integrated terminal for local testing of static content.
- version control: push changes I like to this github repository
- automation / continuous integration: pushing code to this github repo triggers Travis build. If build successful, publishes to Firebase.
- to do: create a testing branch and domain (for testing Firebase Functions)

## Install

Hydra was built with [Jekyll](https://jekyllrb.com/) version 3.3.1, but should support newer versions as well.

Install the dependencies with [Bundler](https://bundler.io/):

~~~bash
bundle install
~~~

Run `jekyll` commands through Bundler to ensure you're using the right versions:

~~~bash
bundle exec jekyll serve
~~~

## Edits

Edit with your favourite text editor. There were editable classes in the original template, for live editing at [CloudCannon](https://app.cloudcannon.com/), but I am doing all editing via source code, so I removed them. CloudCanon is ideal for giving easy access to editors.

### Posts

- Add, update or remove a post in the *Posts- collection.
- The **Staff Author*- field links to members in the **Staff*- collection.
- Documentation pages are organised in the navigation by category, with URLs based on the path inside the `_docs` folder.
- Change the defaults when new posts are created in `_posts/_defaults.md`.

### Staff

- Reused around the site to save multiple editing locations.
- Add `excluded_in_search: true` to any documentation page's front matter to exclude that page in the search results.

### Navigation

- Exposed as a data file to give clients better access.
- Set in the *Data- / *Navigation- section.

### Footer

- Exposed as a data file to give clients better access.
- Set in the *Data- / *Footer- section.

### Jekyll Resources

- Jekyll marketing site for a managed tech support business, IT Solver, forked from [CloudCannon/hydra-jekyll-template](https://github.com/CloudCannon/hydra-jekyll-template).
- Find more templates and themes at [Jekyll Tips](https://jekyll.tips/templates/).
- Learn Jekyll with step-by-step tutorials and videos at [Jekyll Tips](https://jekyll.tips/).
- Learn how to [deliver Jekyll build to Firebase using TravisCI](https://www.wrapcode.com/jekyll-deploy-firebase-travis-ci/)
