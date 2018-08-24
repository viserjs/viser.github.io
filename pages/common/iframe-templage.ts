export const pkgMap = {
    //包名映射的变量名
    'viser-react': 'ViserReact'
}
export const template = {
    react: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
        <script src="https://cdn.bootcss.com/babel-standalone/6.26.0/babel.min.js"></script>
        <script src="/assets/pkg/viser-react.min.js"></script>
        <script src="/assets/pkg/jquery.min.js"></script>
        <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.data-set-0.8.9/dist/data-set.min.js"></script>
        <title>Document</title>
        <style>*{margin:0;padding:0;overflow:hidden;}</style>
    </head>
    <body>
    <div id="mount"></div>
    <script type="text/babel">
    {code}
    </script>
        
    </body></html>`
}