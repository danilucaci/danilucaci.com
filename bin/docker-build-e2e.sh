#! /usr/bin/env bash

docker-compose \
  -f docker-compose.yml \
  -f docker-compose-cypress.yml \
  up \
  --build
# --exit-code-from cypress
