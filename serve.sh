#!/bin/bash
# Script: local jekyll development
# Author: Angus McLauchlan, IT Solver
# Get full path to this script

# use lan ip for access via lan or wan with port forward
host=`ipconfig getifaddr en0`
#host='localhost'
port='4000'

open http://$host:$port
bundle exec jekyll serve --incremental -H $host --watch --config _config.yml,_config_dev.yml