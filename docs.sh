#!/usr/bin/env bash

if [ ! -f deploy.key ]; then exit; fi

eval `ssh-agent -s`
ssh-add deploy.key
git clone -b gh-pages git@github.com:the-tricktionary/web.git .deploy || exit 1
cd .deploy || exit 1
git config user.name travis
git config user.email travis@nowhere
cp -R ../docs/the-tricktionary/* .
git add -A
git commit -m "travis: $TRAVIS_COMMIT"
git push || exit 1
cd ..