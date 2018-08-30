## 安装

Viser Viser-Graph 为 React, Vue 和 Angular 提供了 3 个不同的分发版本。我们同时提供了 npm 安装和 umd 引入两种方式来使用 Viser。

npm 安装是使用 Viser 最简单也是最快捷的方式。我们强烈建议您在开发单页应用(SPA)时采用这种方式进行安装。Viser 可以完美兼容 CommonJS 打包工具，例如我们最常用的 Webpack。

UMD 引入是使用 script 标签引入来使用 Viser。当你需要快速使用的时候，这是最便捷的方式。

### Vue 分发版

您需要使用版本 **2.5** 及以上的 Vue，来使用 Vue 分发版 Viser。

#### npm

在终端使用如下命令来安装 npm 版本：

```shell
# latest stable
$ npm install viser-vue
```

#### umd

我们在 unpkg.com 上提供了 UMD 的版本:

```html
 <script src="https://unpkg.com/viser-vue/umd/viser-vue.min.js"></script>
```

然后你可以使用全局变量 `window.ViserVue` 来进行调用 Viser。

### Angular 分发版

您需要使用版本 **2.4** 及以上的 Angular，来使用 Angular 分发版 Viser。另外，你还需要版本 **0.1** 及以上的 reflect-metadata，版本 **5** 及以上的 rxjs，版本 **0.7** 及以上的 zone.js。

#### npm

在终端使用如下命令来安装 npm 版本：

```shell
# latest stable
$ npm install viser-ng
```

#### umd

我们在 unpkg.com 上提供了 UMD 的版本:

```html
 <script src="https://unpkg.com/viser-ng/umd/viser-ng.min.js"></script>
```

然后你可以使用全局变量 `window.ViserNg` 来进行调用 Viser。

### React 分发版

您需要使用版本 **15** 及以上的 React，来使用 React 分发版 Viser。显然，版本 **16** 也是可以的。

#### npm

在终端使用如下命令来安装 npm 版本：

```shell
# latest stable
$ npm install viser-react
```

#### umd

我们在 unpkg.com 上提供了 UMD 引入的版本:

```html
 <script src="https://unpkg.com/viser-react/umd/viser-react.min.js"></script>
```

然后你可以使用全局变量 `window.ViserReact` 来进行调用 Viser。

## Demo

To examine the demos in your local build, open to `demo` directory, and execute

```shell
$ git clone https://github.com/viserjs/viser.git
$ npm run postinstall
$ cd ./demo && npm install
$ npm run start
```
