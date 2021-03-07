#! /usr/bin/env bash

# installs global packages needed for git hooks
yarn global install @commitlint/cli @commitlint/config-conventional commitlint husky lint-staged
