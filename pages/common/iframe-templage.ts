export const pkgMap = {
    //包名映射的变量名
    'viser-react': 'ViserReact',
    'viser-graph-react': 'ViserGraphReact'
}
export const moduleTemp = `
/******/ (function(modules) { // webpackBootstrap
    /******/    // The module cache
    /******/    var installedModules = {};
    
    /******/    // The require function
    /******/    function __webpack_require__(moduleId) {
    
    /******/        // Check if module is in cache
    /******/        if(installedModules[moduleId])
    /******/            return installedModules[moduleId].exports;
    
    /******/        // Create a new module (and put it into the cache)
    /******/        var module = installedModules[moduleId] = {
    /******/            exports: {},
    /******/            id: moduleId,
    /******/            loaded: false
    /******/        };
    
    /******/        // Execute the module function
    /******/        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    
    /******/        // Flag the module as loaded
    /******/        module.loaded = true;
    
    /******/        // Return the exports of the module
    /******/        return module.exports;
    /******/    }
    
    
    /******/    // expose the modules object (__webpack_modules__)
    /******/    __webpack_require__.m = modules;
    
    /******/    // expose the module cache
    /******/    __webpack_require__.c = installedModules;
    
    /******/    // __webpack_public_path__
    /******/    __webpack_require__.p = "/bundle";
    
    /******/    // Load entry module and return exports
    /******/    return __webpack_require__(0);
    /******/ })
    /************************************************************************/
    /******/ ([
    /* 0 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
    
        var App=__webpack_require__(1).default;
        window.console.log(__webpack_require__(1));
        window.App=App;
        parent.angular.getNgApp(App);
    /***/ },
    /* 1 */
    /***/ function(module, exports) {
        {{code}}
    
    /***/ }
    /******/ ]);
`
export const template = {
    react: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script crossorigin src="/assets/pkg/react.production.min.js"></script>
        <script crossorigin src="/assets/pkg/react-dom.production.min.js"></script>
        <script src="https://cdn.bootcss.com/babel-standalone/7.0.0-beta.3/babel.min.js"></script>
        <script src="/assets/pkg/viser-react.min.js"></script>
        <script src="/assets/pkg/jquery.min.js"></script>
        <script src="/assets/pkg/viser-graph-react.min.js"></script>
        <script src="/assets/pkg/lodash.core.min.js"></script>
        <script src="/assets/pkg/data-set.min.js"></script>
        <title>Document</title>
        <style>*{margin:0;padding:0;}</style>
    </head>
    <body>
    <div id="mount"></div>
    <script type="text/babel">
    {code}
    </script>
        
    </body></html>`,
    // vue: `<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //     <script src="/assets/pkg/vue.min.js"></script>
    //     <script src="/assets/pkg/viser-vue.min.js"></script>
    //     <script src="/assets/pkg/viser-graph-vue.min.js"></script>
    //     <script src="https://cdn.bootcss.com/babel-standalone/7.0.0-beta.3/babel.min.js"></script>
    //     <script src="/assets/pkg/data-set.min.js"></script>
    //     <script src="/assets/pkg/babel-plugin-transform-vue-jsx.min.js"></script>
    //     <style>*{margin:0;padding:0;}</style>
    //     <title>Document</title>
    // </head>
    // <body>
    //     <div id="mount"></div>
    //     {code}
    // </body>

    // </html>`,
    angular: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script src="/assets/pkg/data-set.min.js"></script>
        <title>Document</title>
        <style>*{margin:0;padding:0;}</style>
    </head>
    <body>
    <div id="mount"></div>
    <script>
    {code}
    </script>  
    </body></html>`
}