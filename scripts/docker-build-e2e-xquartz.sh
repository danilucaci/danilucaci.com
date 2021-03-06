#! /usr/bin/env bash

# XQuartz must be running first:
open -a XQuartz

# add your host ip to the allowed hosts
/usr/X11/bin/xhost + $(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')

docker-compose \
  -f docker-compose.yml \
  -f docker-compose-cypress.yml \
  -f docker-compose-cypress-xquartx.yml \
  up \
  --build
# --exit-code-from cypress
