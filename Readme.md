# GINA React Starter Kit
A starter kit for building universal React + React Native apps.

## Features
* Maximum amount of code shared between web and mobile platforms
* [TypeScript](https://github.com/Microsoft/TypeScript) as transpiler + [TSLint](https://palantir.github.io/tslint/) for linting
* Excellent code completion support for [VS Code](https://code.visualstudio.com/)
* [Redux](https://github.com/reactjs/redux) as Flux implementation (support for [Redux Dev Tools](https://github.com/gaearon/redux-devtools) included)
* Automatic state saving & loading for both web and mobile using [redux-storage](https://github.com/michaelcontento/redux-storage)
* Internationalization support using [react-intl](https://github.com/yahoo/react-intl/)
* Automated tests using [mocha](https://mochajs.org), [sinon](http://sinonjs.org/), [chai](http://chaijs.com/), [chai-as-promised](https://github.com/domenic/chai-as-promised), [sinon-chai](https://github.com/domenic/sinon-chai) and [enzyme](https://github.com/airbnb/enzyme)
* Fully automated build and developer mode (using npm)
* Hot loading for both web and mobile, excellent developer experience
* Works on Windows, should work on Linux and macOS too

## Prerequisites
* [Node](https://nodejs.org/en/) 6.x with NPM 3.x
* typings (`npm i typings -g`)

## Usage
### Quick start
1. Clone this repo (beware that we use LF for line endings and they are forced by the linter, see [this post](http://stackoverflow.com/a/33424884/3979621) on SO on how to set git line endings to LF on Windows)
2. Run `npm install`
3. Run `typings install && cd test && typings install`
4. Run `npm run dev`
5. Happy coding!

### Useful commands
* `npm run dev` - builds the app, starts webpack development server (hot loading included!); runs TypeScript compiler, linter and tests in watch mode in a single window
* `npm run clean` - cleans build folders
* `npm run build-web-prod` - creates production build for web
* `npm run build-android-release` - creates production apk for Android (you need to modify the gradle config [according to the official guide](https://facebook.github.io/react-native/docs/signed-apk-android.html) first!!!)
* `react-native run-android` - starts the React Native packager and deploys the app on an Android phone connected to the PC (don't forget to run `npm run dev` first!)
* `npm run build-run-web-dev` - starts the webpack dev server and transpiles the app on-the-fly

## Remarks
* Using [VS Code](https://code.visualstudio.com/) for development is highly recommended as this editor offers very nice code completion and many other cool features
* Beware that at this time, the starter kit does not include any universal routing (actually no routing at all). This is due to the fact that web and mobile apps might require different page structure. However, this might change in the future. Also, adding [react-router](https://github.com/reactjs/react-router) is not an issue for advanced developers.
* If you do a full rebuild and the React Native packager crashes, just restart it using `react-native start`
* If you get red squiggly errors in VS Code for some of the project files, use `File -> Close folder` and then `File -> Open folder...`. This is probably an issue with VS Code.  
* Feedback is welcome! :)
* Help with macOS and iOS compatibility is also very welcome :)

## Libraries
See the `package.json` file.