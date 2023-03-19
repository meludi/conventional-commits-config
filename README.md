# @meludi/conventional-commits-config

[![NPM Package][npm-badge]][npm-link]
[![GitHub Workflow Status][workflow-badge]][workflow-link]
[![GitHub issues][issues-badge]][issues-link]
[![GitHub license][license-badge]][license-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]

Shareable conventional commits configuration based on [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Install

```sh
$ npm i -D @meludi/conventional-commits-config
```

## Prepare

### [Husky](https://github.com/typicode/husky)

Edit `package.json` > prepare script and run it once:

```sh
$ npm pkg set scripts.prepare="is-ci || husky install"
$ npm run prepare
```

### [lint-staged](https://github.com/okonet/lint-staged)

Add the following to your `package.json`:

```json
...
"lint-staged": {
  "*.js": "eslint .",
  "*": "your_command",
  ...
}
```

Add husky hooks and scripts:

```sh
$ npx husky add .husky/pre-commit "npm run pre-commit"
$ npm pkg set scripts.pre-commit="lint-staged"
```

### [commitlint](https://github.com/conventional-changelog/commitlint) and [commitizen](https://github.com/commitizen/cz-cli)

Create a `commitlint.config.js` configuration file in the root of your project and add the following to it:

```js
// commitlint.config.js
module.exports = require('@meludi/conventional-commits-config/commitlint.config');
```

Add the following to your `package.json`:

```json
...
"config": {
  "commitizen": {
    "path": "cz-conventional-changelog"
  }
}
```

Add husky hooks and scripts:

```sh
# commitlint
$ npx husky add .husky/commit-msg "npm run commitlint"
$ npm pkg set scripts.commitlint="commitlint --edit \$1"

# commitizen
$ npm pkg set scripts.commit="git cz"
```

### Run it:

```sh
$ npm run commit
```

## Recommendation

[semantic-release](https://github.com/semantic-release/semantic-release) - Fully automated version management and package publishing:

### Setup Semantic Release on your GitHub repo

- Create npm token using `npm token create` or https://www.npmjs.com/settings/YOUR_ACCOUNT_NAME/tokens
- Add `NPM_TOKEN` to GitHub repo: `Settings -> Secret and variables -> Secrets`
- Set write permission to GitHub repo: `Settings -> Actions - General -> Workflow permissions -> Read and write permission`
- Set `version` to `0.0.0-semantic-release` in package.json

### GitHub Actions Example

[configuration for Node projects](https://github.com/meludi/conventional-commits-config/tree/main/.github)

## LICENSE

[MIT](LICENSE)

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-link]: http://commitizen.github.io/cz-cli/
[doc-badge]: https://img.shields.io/badge/docs-readme-orange.svg?style=flat-square
[npm-badge]: https://img.shields.io/npm/v/@meludi/conventional-commits-config.svg
[npm-link]: https://www.npmjs.com/package/@meludi/conventional-commits-config
[issues-badge]: https://img.shields.io/github/issues/meludi/conventional-commits-config
[issues-link]: https://github.com/meludi/stylelint-config/issues
[license-badge]: https://img.shields.io/github/license/meludi/conventional-commits-config
[license-link]: https://github.com/meludi/conventional-commits-config/blob/main/LICENSE
[workflow-badge]: https://img.shields.io/github/actions/workflow/status/meludi/conventional-commits-config/ci
[workflow-link]: https://github.com/meludi/conventional-commits-config/actions/workflows/ci.yml
