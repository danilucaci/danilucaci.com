---
title: "How to lint and test your code using git pre-commit hooks"
slug: "how to lint and test code using git pre-commit hooks"
date: "2020-08-26"
category: "blog"
intro: "There is no doubt that the benefits of using a version control system such as Git are many. However, by itself, Git will just keep track of the commits you and your teammates are making to a repository, without performing any checks about the quality of the code such as: if it follows linting rules, if it is free of bugs or whether it passes unit or integration tests.
|
To easily solve these problems, you can use Git hooks together with tools that enable you to run linting and testing tools before or after Git events such as creating a commit or pushing code to a remote repository."
snippet:
  "How to use Git hooks, husky and lint-staged to run scripts that run linting
  and testing tools before we make a commit or push code to a repo."
tags:
  - git hooks
  - test
posted: true
locale: "en"
twinPost: "como formatear y testear codigo usando git pre commit hooks"
---

## What are Git hooks?

Git hooks are scripts that Git will run before or after some actions you might
take in your repo like creating a new commit or pushing code to a repository.
Although these are some of the most common hooks, you can learn more about all
the other available ones in the
[official docs](https://git-scm.com/docs/githooks).

## The solution

By using Git hooks, you will be able to lint and test the code you are
committing to check if it is following the rules you and your team have set up.
This way, you can ensure that the commits are all following best practices, are
free of bugs such as syntax errors, or that they are passing unit, integration,
or end-to-end tests.

If the code doesn’t pass one of the rules in the Git hooks, the commit won’t be
made and you will be able to see an error report of what needs to be fixed so
that the commit can be made. On the other hand, if the code passes all the rules
specified, the commit will be created.

This allows you to **fail fast** without having to wait for CI tools —that might
take a long time— to fail your build which will cause you to switch context
allot, thus affecting your productivity —you can learn more about why this is
bad for your productivity in this video by
[Paul Armstrong at @ReactEurope 2019](https://www.youtube.com/watch?v=ikn_dBSski8&feature=youtu.be&t=434).
Instead, in just a couple of minutes —or even less, depending on your setup—,
you will be able to run scripts and tools before or after Git events to see if
your code is passing tests and linting rules.

So let’s go ahead and learn how to achieve these goals by using Git hooks,
husky, and lint-staged to be able to execute scripts that run linting and
testing tools before we make a commit or push code to a repo.

## Setup and Instalation

You can execute Git hooks by using shell scripts, but it is much easier to use
them with tools such as `husky`. Usually, `husky` is used together with the
`lint-staged` package which allows you to run hooks against only the files that
are staged, to avoid linting all your code or running the entire test suite of
your repo each time you make a new commit. By using the `lint-staged` package
you will be able to lint and test only the files in the Git staging area.

### Installing dependencies

#### husky

First, you will need to install the `husky` package, to be able to run Git hooks
such as `pre-commit`.

```bash
npm i --save-dev husky
```

#### lint-staged

Next, you will need to install the `lint-staged` package, to only run Git hooks
on the files in the Git staging area.

```bash
npm i --save-dev lint-staged
```

## Linting

### Configuring husky

Once you have installed `husky`, you will need to configure it. I used a
`.huskyrc.js` file to add the configuration, but it
[supports several other ways to configure it](https://github.com/typicode/husky#local-commands-huskyrc)
(one of the most common ones is adding the rules and scripts in the
`package.json` file).

```js
// .huskyrc.js
module.exports = {
  hooks: {
    "pre-commit": "lint-staged",
  },
};
```

This will run `lint-staged` when the `pre-commit` hook is triggered which, in
turn, will execute the scripts you have set up in the `lint-staged`
configuration.

### Configuring lint-staged

The next step is to configure `lint-staged` to include all the scripts you want
to run against the files in the staging area. To do so, you will need to create
a `.lintstagedrc.js` file that contains the configuration —there are other ways
to configure it, which you can read more about in the
[oficial docs](https://github.com/okonet/lint-staged#configuration).

```js
// .lintstagedrc.js
module.exports = {
  "src/**/*.js": ["npm run lint:js"],
};
```

In this example, I am using `lint-staged` to run the `lint:js` npm script inside
my `package.json` file which executes `eslint` on all the files with a `.js`
extension inside the `src` folder. If any of the code inside these files doesn’t
follow a rule in the `eslint` configuration, it will throw an error and prevent
the commit from being made.

```json
// package.json
"scripts": {
  "lint:js": "eslint . --ext .js"
}
```

Another common option is to use the `--fix` flag so that `eslint` fixes the
errors that can be solved automatically.

```json
// package.json
"scripts": {
  "lint:js": "eslint . --ext .js",
  "lint:js:fix": "npm run lint:js -- --fix"
}
```

Now, if you try to make a commit that adds changes to a file inside the `src`
folder with a `.js` extension, the `lint:js` npm script will be executed by
`lint-staged` when the `pre-commit` hook is triggered by `husky`.

## Testing

To take it a step further, you can also run tests using `jest` when a Git hook
is triggered.

First, you will need to create an npm script that will run `jest` with several
flags:

- `--bail`: will exit the entire test suite when the first test fails
- `--findRelatedTests`: it is useful for `pre-commit` hooks to allow you to only
  run test that affect the files in the staging area.

```json
// package.json
"scripts": {
  "lint:js": "eslint . --ext .js",
  "lint:js:fix": "npm run lint:js -- --fix",
  "test:related": "jest --bail --findRelatedTests"
}
```

Next, you will have to configure `lint-staged` to also run `jest` before any Git
hook.

```js
// .lintstagedrc.js
module.exports = {
  "src/**/*.js": ["npm run lint:js", "npm run test:related"],
};
```

Now, `lint-staged` will run the `lint:js` and `test:related` scripts before
every time you try to make a new commit. If the tests pass and there are no
linting errors, the commit will be made. Otherwise, you will get an error report
of what needs to be fixed.

### Creating a new commit

In this example I am making a sample commit which shows you the output of
running the previous scripts with `lint-staged` and `husky`.

```bash{5,6,7,8}
> git commit -m "hack hack hack"

husky > pre-commit (node v14.8.0)
✔ Preparing...
❯ Running tasks...
  ❯ Running tasks for src/**/*.js
    ⠼ npm run lint:js
    ◼ npm run test:related
◼ Applying modifications...
◼ Cleaning up...
```

### All the scripts pass and the commit is made

Once the scripts are executed and no errors are returned, the commit is made.

```bash{6}
✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up...
[husky-post ccf9092] hack hack hack
 1 file changed, 1 insertion(+)
```

### Final versions of the files

#### `package.json`

```json
// package.json
"scripts": {
  "lint:js": "eslint . --ext .js",
  "lint:js:fix": "npm run lint:js -- --fix",
  "test:related": "jest --bail --findRelatedTests"
}
```

#### `lint-staged`

```js
// .lintstagedrc.js
module.exports = {
  "src/**/*.js": ["npm run lint:js", "npm run test:related"],
};
```

#### `husky`

```js
// .huskyrc.js
module.exports = {
  hooks: {
    "pre-commit": "lint-staged",
  },
};
```

## Takeaways

Now, each time you make a new commit, you will be able to quickly see if the
code you are committing is free of linting issues, bugs, and if it passes tests.
By introducing these tools in your projects, you can now have much more
confidence in the code you ship because you can see faster if it introduces any
issues that might affect your repo without having to wait for CI tools to report
back the problems.

Since I added Git hooks to my workflow, I feel much more comfortable writing and
commiting code because I know that I have automated tools that will lint and
test the changes I am introducing with each commit.
