#! /usr/bin/env bash

# installs global packages needed for git hooks
yarn global add @commitlint/cli@12.0.1 \
  @commitlint/config-conventional@12.0.1 \
  commitlint@12.0.1 \
  husky@6.0.0 \
  lint-staged@10.5.4 \
  chalk@4.1.0
