#! /usr/bin/env bash

# XQuartz must be running first:
open -a XQuartz

IP=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')

# add your host ip to the allowed hosts
/usr/X11/bin/xhost + $IP

# get the IP address of the host machine and allow X11 to accept
# incoming connections from that IP address
# then pass the environment variable DISPLAY
# to show Cypress GUI on the host system
#
# --env DISPLAY=$IP \

docker-compose \
  -f docker-compose.yml \
  -f docker-compose-cypress.yml \
  -f docker-compose-cypress-xquartx.yml \
  --env DISPLAY=$IP \
  up \
  --build
# --exit-code-from cypress
