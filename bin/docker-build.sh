#! /usr/bin/env bash

# build the latest version of the image
docker build -t danilucaci/app:latest . -f Dockerfile.dev

# XQuartz must be running first:
open -a XQuartz

IP=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')

# add your host ip to the allowed hosts
/usr/X11/bin/xhost + $IP

docker-compose \
  -f docker-compose.yml \
  -f docker-compose-e2e.yml \
  up \
  --build
