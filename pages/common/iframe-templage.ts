export const pkgMap = {
    //包名映射的变量名
    'viser-react': 'ViserReact',
    'viser-graph-react': 'ViserGraphReact'
}
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