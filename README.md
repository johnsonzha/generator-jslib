# JS lib generator

---
[Yeoman](http://yeoman.io) generator for Javascript library.
---
## Features

* use rollup to build the javascript
* babel convert es6
* build for 3 formats: cjs, esm, umd

## Usage

To install generator-eslib from npm, run:

```bash
$ npm install --global yo generator-eslib
```

Make a new directory and cd into it:
```bash
$ mkdir mylib
```

Finally, initiate the generator:

```bash
$ yo eslib
```

### Npm scripts
- Run `npm run build` to build javascript library
- Run `npm run dev` to build and watch for changes
- Run `npm run test` to run mocha test 

## Layout
```
	|- mylib
          |- .editorconfig      // Example .editorconfig (http://editorconfig.org/)
          |- .gitignore         // Basic .gitignore
          |- .rollup.config.js  // Rollup config file
          |- README.md          // Basic README file
          |- package.json       // Basic Npm configuration
          |- dist               // Folder for your distributables
            |- <lib>.umd.js
            |- <lib>.cjs.js
            |- <lib>.esm.js
          |- src                // Folder for your library source !!
            |- main.js          // the entry js
            |- .babelrc         // Babel config file
          |- test               // Folder for your tests
```

## License
MIT
