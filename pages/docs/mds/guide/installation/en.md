## Installation

Viser include 3 version which is integrated by React, Vue and Angular. We provide NPM or UMD to use library.

NPM is the easiest and fastest way to get started using Viser. It is the recommended installation method when building single-page applications (SPAs). It pairs nicely with a CommonJS module bundler such as Webpack.

UMD is the script way to using Viser. It is convenient method when you used quickly.

### Vue Version

In Vue version, You mush prepare to Vue version greater than **2.5** in project.

#### npm

The NPM way is only install by shell:

```shell
# latest stable
$ npm install viser-vue
```

#### umd

The UMD build is also available on unpkg.com:

```html
 <script src="https://unpkg.com/viser-vue/umd/viser-vue.min.js"></script>
```

Then you can find the library on window.ViserVue.

### Angular Version

In Angular version, You mush prepare to Angular version greater than **2.4** in project. In addition, you also prepare to reflect-metadata version greater than **0.1**, rxjs version greater than **5** and zone.js version greater than **0.7**.

#### npm

The NPM way is only install by shell:

```shell
# latest stable
$ npm install viser-ng
```

#### umd

The UMD build is also available on unpkg.com:

```html
 <script src="https://unpkg.com/viser-ng/umd/viser-ng.min.js"></script>
```

Then you can find the library on window.ViserNg.

### React Version

In React version, You mush prepare React version greater then **15**, and support **16** certainly.

#### npm

The NPM way is only install by shell:

```shell
# latest stable
$ npm install viser-react
```

#### umd

The UMD build is also available on unpkg.com:

```html
 <script src="https://unpkg.com/viser-react/umd/viser-react.min.js"></script>
```

Then you can find the library on window.ViserReact.

## Demo

To examine the demos in your local build, open to `demo` directory, and execute

```shell
$ git clone https://github.com/viserjs/viser.git
$ npm run postinstall
$ cd ./demo && npm install
$ npm run start
```
