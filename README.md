[![Build Status](https://travis-ci.org/itsolver/msp-marketing-site.svg?branch=master)](https://travis-ci.org/itsolver/msp-marketing-site)

Jekyll marketing site for a managed tech support business, IT Solver, forked from [CloudCannon/hydra-jekyll-template](https://github.com/CloudCannon/hydra-jekyll-template).

Find more templates and themes at [Jekyll Tips](http://jekyll.tips/templates/).

Learn Jekyll with step-by-step tutorials and videos at [Jekyll Tips](http://jekyll.tips/).

## Hosting
For hosting I chose [Google Firebase](https://firebase.google.com) based on the fact it's free and fast with a local CDN for my customer base. You can go with any static file hosting but my other choice would be [GitHub Pages](https://pages.github.com/).

## Setup

1. Add your site and author details in `_config.yml`.
2. Add your Google Analytics and Disqus keys to `_config.yml`.
3. Get a workflow going to see your site's output (with [CloudCannon](https://app.cloudcannon.com/) or Jekyll locally). 

My workflow:
  - local dev: Visual Studio Code with ``./serve.sh`` running on integrated terminal for local testing
  - version control: push changes I like to this github repository
  - automation / continuous integration: pushing code to this github repo triggers Travis build. If build successful, publishes to Firebase. Learn how to [deliver Jekyll build to Firebase using TravisCI
](http://www.wrapcode.com/jekyll-deploy-firebase-travis-ci/)

## Develop

Hydra was built with [Jekyll](http://jekyllrb.com/) version 3.3.1, but should support newer versions as well.

Install the dependencies with [Bundler](http://bundler.io/):

~~~bash
$ bundle install
~~~

Run `jekyll` commands through Bundler to ensure you're using the right versions:

~~~bash
$ bundle exec jekyll serve
~~~

## Editing

Edit with your favourite text editor. There were editable classes for Cloudcannon, but I had no use for them.

### Posts

* Add, update or remove a post in the *Posts* collection.
* The **Staff Author** field links to members in the **Staff** collection.
* Documentation pages are organised in the navigation by category, with URLs based on the path inside the `_docs` folder.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

### Staff

* Reused around the site to save multiple editing locations.
* Add `excluded_in_search: true` to any documentation page's front matter to exclude that page in the search results.

### Footer

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Navigation* section.

### Footer

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Footer* section.
