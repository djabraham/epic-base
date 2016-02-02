## TypeScript/React Client/Server Demo App

#### Simple starter for a TypeScript/React app with separate Client/Server components


### Major Dependencies:
* [Typescript](https:github.com/Microsoft/TypeScript) Introduces structural typing for JS/React (no typing is a major limitation of JS)
* [TsLint](http:palantir.github.io/tslint/rules/) Similar to EsLint, but works on TypeScript TS/TSX files
* [React](https:github.com/facebook/react) Performant Web Component framework featuring Virtual DOM
* [Flux](https:github.com/facebook/flux) Unidirectional Flow for use within React Applications
* [Webpack](https:github.com/webpack/webpack) Versitile module packager that uses require to build client assets
* [Sass](https:github.com/sass/sass) Popular CSS pre-processor

### Source Folder Structure

    root
    ├─ config
    │  ├─ development.json
    │  └─ production.json       Todo
    ├─ dist
    │  ├─ client                React client JS output
    │  ├─ library               Shared library JS output
    │  └─ server                Server JS output
    └─ source
       ├─ client                React Client
       ├─ library               Classes shared by Server and Client
       └─ server                Server exposing API


### Application
Both Client and Server share modules in the source/library folder.
Webpack compiles the source/library code into the dist/client/../library.js file for the Client,
while gulp emits them into the dist/library folder for Server consumption.

Some of these npm scripts require gulp-cli in order to run

#### Client build options
* **npm run client-build** - for manual client & shared library build to dist/client folder.

* **npm run client-watch** - for launching webpack-dev-server.js and incremental builds.
Does not output files to dist, files are served dynamically by webpack dev server.

    **Client webpack dev server address:** **http://localhost:3082**

#### Server build options
* **npm run library-build** - for manual shared library build to dist/library folder.

* **npm run server-build** - for manual server build to dist/server folder.

* **npm run server-watch** - start/restart api server after every manual server/library build.
Client webpack services (3082) are accessible here through a proxy.

    **Server & proxied Client address:** **http://localhost:3080**

### VSCode integration
Some of the features shown above can be ran directly using gulp-cli, or as VSCode tasks.

#### Run a task
* Hit Ctrl + P
* Run "task ..."

#### Kill a running task
* Hit Ctrl + shift + P
* Run "Tasks: Terminate Running Task"

### React

#### Component Reference

    ComponentClass<P>        >                     > ReactElement<P>   >              > Component<P, S>
    ClassicComponentClass<P> > React.createElement > ClassicElement<P> > React.render > ClassicComponent<P, S>
    string                   >                     > DOMElement<P>     >              > DOMComponent<P>


