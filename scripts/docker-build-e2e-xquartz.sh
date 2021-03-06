#! /usr/bin/env bash

docker-compose \
  -f docker-compose.yml \
  -f docker-compose-cypress.yml \
  -f docker-compose-cypress-xquartx.yml \
  up \
  --build \
  --exit-code-from cypress
