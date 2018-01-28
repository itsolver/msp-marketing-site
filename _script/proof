#!/usr/bin/env bash
#
# Usage:
#   script/proof

set -e

function msg {
  printf "\e[0;37m==> $1\e[0m\n"
}

IGNORE_HREFS=$(ruby -e 'puts %w{
  privacyinternational.org
  https://www.itsolver.net/404.html
  https://www.itsolver.net/news/
  https://www.itsolver.net/security/
  https://www.itsolver.net/security-advisory/
  https://www.itsolver.net/tips-and-tricks/
  https://www.itsolver.net/tag/
}.map{|h| "/#{h}/"}.join(",")')
SOURCE="."
DESTINATION="_site"

export PROOF=true
export NOKOGIRI_USE_SYSTEM_LIBRARIES=true

# 1.
msg "Installing..."
bundle install -j8 > /dev/null || bundle install > /dev/null

# 2.
msg "Building..."
bundle exec jekyll build -s $SOURCE -d $DESTINATION --trace

# 3.
msg "Proofing..."
time bundle exec htmlproofer ./$DESTINATION --allow-hash-href --url-ignore $IGNORE_HREFS $@ --check_favicon --check_opengraph --check_html --check_img_http --