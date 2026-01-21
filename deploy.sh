#!/bin/bash

set -e

cd /home/admin/urbanaut/status || exit

git checkout -- deploy.sh

git stash

git pull

npm install

npm run build
