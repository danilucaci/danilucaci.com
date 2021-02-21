#! /usr/bin/env bash

docker-compose \
  -f docker-compose.yml \
  -f docker-compose-cypress.yml \
  up \
  --exit-code-from cypress
