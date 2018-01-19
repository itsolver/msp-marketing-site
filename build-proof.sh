#!/bin/bash
# Script: jekyll build and htmlproofer
# Author: Angus McLauchlan, IT Solver
bundle exec jekyll build
bundle exec htmlproofer ./_site --disable-external