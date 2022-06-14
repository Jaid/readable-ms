# readable-ms


<a href="https://raw.githubusercontent.com/jaid/readable-ms/master/license.txt"><img src="https://img.shields.io/github/license/jaid/readable-ms?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor readable-ms"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/readable-ms/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Freadable-ms%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/readable-ms/commits"><img src="https://img.shields.io/github/commits-since/jaid/readable-ms/v3.0.0?style=flat-square&logo=github" alt="Commits since v3.0.0"/></a> <a href="https://github.com/jaid/readable-ms/commits"><img src="https://img.shields.io/github/last-commit/jaid/readable-ms?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/readable-ms/issues"><img src="https://img.shields.io/github/issues/jaid/readable-ms?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/readable-ms"><img src="https://img.shields.io/npm/v/readable-ms?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/readable-ms/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/readable-ms?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/readable-ms"><img src="https://img.shields.io/npm/dm/readable-ms?style=flat-square&logo=npm" alt="Downloads"/></a>

**Converts a milliseconds value into a human-readable string.**





## Installation

<a href="https://npmjs.com/package/readable-ms"><img src="https://img.shields.io/badge/npm-readable--ms-C23039?style=flat-square&logo=npm" alt="readable-ms on npm"/></a>

```bash
npm install --save readable-ms@^3.0.0
```

<a href="https://yarnpkg.com/package/readable-ms"><img src="https://img.shields.io/badge/Yarn-readable--ms-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="readable-ms on Yarn"/></a>

```bash
yarn add readable-ms@^3.0.0
```

<a href="https://github.com/jaid/readable-ms/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/readable--ms-24282e?style=flat-square&logo=github" alt="@jaid/readable-ms on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/readable-ms@^3.0.0
```



## Example


```javascript
import readableMs from "readable-ms"

const result = readableMs(3021)
```

Variable `result` will be:

```javascript
"3s 21ms"
```

















## Development



Setting up:
```bash
git clone git@github.com:jaid/readable-ms.git
cd readable-ms
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/jaid/readable-ms/master/license.txt)  
Copyright © 2020, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)
