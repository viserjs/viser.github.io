import $ from 'jquery';

const URL = {
  react: 'https://unpkg.com/react@15/dist/react.min.js',
  reactDom: 'https://unpkg.com/react-dom@15/dist/react-dom.min.js',
  vue: 'https://viserjs.github.io/lib/vue.min.js',
  browser: 'https://cdn.bootcss.com/babel-core/5.8.38/browser.min.js',
  viser: 'https://unpkg.com/viser@1.0.5/umd/viser.min.js',
  viserReact: 'https://unpkg.com/viser-react@1.0.4/umd/viser-react.min.js',
  rechartVue: 'https://unpkg.com/viser-vue@1.0.4/umd/viser-vue.min.js',
  rechartNg: 'https://unpkg.com/viser-ng@1.0.2/umd/viser-ng.min.js',
};

const getJsfiddleJsonData = (code) => {
  code.config.chart.container = 'example';
  const config = JSON.stringify(code.config, null, 2);
  const data = {
    js: `var config = ${config};
Viser.default(config);
      `,
    html: `<script src="${URL.viser}"></script>
<div id="example"></div>`,
    panel_css: 1,
    panel_js: 3
  };
  return data;
}


const getJsfiddleVueData = (code) => {
  const { vueCode, jsonCode } = this.attrs.codes;
  const config = JSON.stringify(jsonCode.config, null, 2);
  const data = {
    js: `var config = ${config};
new Vue({
  el: '#example',
  data: {
    config,
  },
});
        `,
    html: `
<script src="${URL.vue}"></script>
<script src="${URL.rechartVue}"></script>
<div id="example">${vueCode.template}</div>`,
    panel_css: 1,
    panel_js: 3
  };
  return data;
}

const getJsfiddleReactData = (code) => {
  const { reactCode, jsonCode } = this.attrs.codes;
  const config = JSON.stringify(jsonCode.config, null, 2);
  const data = {
    js: `
var config = ${config};
${reactCode.script || ''}
ReactDOM.render(${reactCode.template},document.getElementById('example'));`,
    html: `<script src="${URL.react}"></script>
<script src="${URL.reactDom}"></script>
<script src="${URL.browser}"></script>
<script src="${URL.viser}"></script>
<script src="${URL.viserReact}"></script>
<div id="example"></div>`,
    panel_css: 1,
    panel_js: 3
  };

  return data;
}

const getJsfiddleData = (framework, code) => {
  switch (framework) {
    case 'json':
      return this.getJsfiddleJsonData(code);
    case 'react':
      return this.getJsfiddleReactData(code);
    case 'vue':
      return this.getJsfiddleVueData(code);
    case 'angular':
      return;
    default:
      return;
  }
}

export const jumpToJsfiddle = (framework, code) => {
  const data = getJsfiddleData(framework, code);

  const formAttributes = {
    method: 'post',
    action: 'https://jsfiddle.net/api/post/library/pure/',
    target: '_blank',
    id: 'fiddle-form',
    style: 'display: none;'
  }

  const node = document.createElement('textarea');
  const form = document.createElement('form');
  for (const attr in formAttributes) {
    form.setAttribute(attr, formAttributes[attr]);
  }

  for (let name in data) {
    node.name = name;
    node.value = data[name].toString();
    form.appendChild(node.cloneNode());
  }

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}
