# GINA React Starter Kit
A starter kit for building universal React + React Native apps.

BTW you can use it to build just web/just mobile React apps too!

This starter kit is especially useful for those developing on Windows as it uses TypeScript as the transpiler (see "Why TypeScript and not babel?" in the bottom).

## Features
* Maximum amount of code shared between web and mobile platforms
* [TypeScript](https://github.com/Microsoft/TypeScript) as transpiler + [TSLint](https://palantir.github.io/tslint/) for linting
* Excellent code completion support for [VS Code](https://code.visualstudio.com/)
* [Redux](https://github.com/reactjs/redux) as Flux implementation (support for [Redux Dev Tools](https://github.com/gaearon/redux-devtools) included)
* Automatic state saving & loading for both web and mobile using [redux-storage](https://github.com/michaelcontento/redux-storage)
* Internationalization support using [react-intl](https://github.com/yahoo/react-intl/)
* Automated tests using [mocha](https://mochajs.org), [sinon](http://sinonjs.org/), [chai](http://chaijs.com/), [chai-as-promised](https://github.com/domenic/chai-as-promised), [sinon-chai](https://github.com/domenic/sinon-chai) and [enzyme](https://github.com/airbnb/enzyme)
* Fully automated build, and developer mode (using npm)
* Hot loading for both web and mobile, excellent developer experience
* Works on Windows, macOS, should work on Linux too

## Prerequisites
* [Node](https://nodejs.org/en/) 6.x with NPM 3.x
* typings (`npm i typings -g`)
* Using [VS Code](https://code.visualstudio.com/) as editor is not required, but highly recommended

## Usage
### Quick start
1. Clone this repo (beware that we use LF for line endings and they're forced by the linter - you can either disable the `linebreak-style` rule in `tslint.json` file after cloning; or set git line endings to LF on Windows, see [this post](http://stackoverflow.com/a/33424884/3979621) on StackOverflow on how to set git line endings to LF on Windows)
2. Run `npm install`
3. Run `typings install && cd test && typings install`
4. Run `npm run dev`
5. Happy coding!

### One command to rule them all
* `npm run dev` - builds the app for both web and mobile (watch mode, hot loading!), starts webpack development server; runs TypeScript compiler, linter and tests in watch mode in a single window

### Other useful commands
* `npm run clean` - cleans build folders
* `npm run build-web-prod` - creates production build for web
* `npm run build-android-release` - creates production apk for Android (you need to modify the gradle config [according to the official guide](https://facebook.github.io/react-native/docs/signed-apk-android.html) first!!!)
* `react-native run-android` - starts the React Native packager and deploys the app on an Android phone connected to the PC (don't forget to run `npm run dev` first!)
* `npm run build-run-web-dev` - starts the webpack dev server and transpiles the app on-the-fly
* `npm run build-native-dev-watch` - builds mobile for dev, watch mode
* `npm run lint-watch` - starts linter in watch mode
* `npm run test-watch` - transpiles tests using `tsc`, runs tests using `mocha`, both in watch mode 

## Remarks
* Using [VS Code](https://code.visualstudio.com/) for development is highly recommended as this editor offers very nice code completion and many other cool features (please beware that using the React Native extension for VS Code is on the other hand discouraged, as it may introduce conflicts with the installed typings)
* Beware that at this time, the starter kit does not include any universal routing (actually no routing at all). This is due to the fact that web and mobile apps might require different navigation structure. However, this might change in the future. Also, adding [react-router](https://github.com/reactjs/react-router) shouldn't be an issue for advanced developers.
* If you do a full rebuild and the React Native packager crashes, just restart it using `react-native start`
* If you get red squiggly errors in VS Code for some of the project files, use `File -> Close folder` and then `File -> Open folder...`. [This is probably an issue with VS Code.](https://github.com/Microsoft/vscode/issues/10391)
* Feedback is welcome! :)
* Help with macOS and iOS is also very welcome :)

## Libraries
See the `package.json` file for list of libraries used.

## Why TypeScript and not babel?
Both, [TypeScript](https://github.com/Microsoft/TypeScript) and [babel](https://github.com/babel/babel), are awesome transpilers! Babel is especially great if you want to use the next-gen, cutting-edge JavaScript, today (unlike TypeScript, which plays it safe and doesn't introduce any new features unless they're standardized first).

However, TypeScript, being also a language (superset of JavaScript), introduces static typing, which is very useful. You can get some pretty awesome code completion, refactoring, safer code etc. And with version 2.0 [just around the corner](https://blogs.msdn.microsoft.com/typescript/2016/07/11/announcing-typescript-2-0-beta/), plus the traction TypeScript is picking up, there is really no reason why not to go the TypeScript way :)

This starter kit should be especially useful to Windows developers, who couldn't use [Flow](https://flowtype.org) until recently, and who still [don't get all the features](https://github.com/facebook/nuclide/issues/321) of [Nuclide](https://nuclide.io/).