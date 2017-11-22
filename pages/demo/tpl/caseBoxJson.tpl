<div class="case-box">
  <div class="case-type">
    <h3>{{name}}</h3>
    <div class="op">
      <a class="run" data-index="{{i}}">
        <i class="iconfont icon-yunxing"></i>
        Try
      </a>
    </div>
  </div>
  <div class="case-demo">
    <div id="example{{i}}"></div>
  </div>
  <div class="case-code">
    <ul class="case-code-switch">
      <li data-lang="react" class="case-code-switch-item{{reactClass}}">React</li>
      <li data-lang="vue" class="case-code-switch-item{{vueClass}}">Vue</li>
      <li data-lang="angular" class="case-code-switch-item{{angularClass}}">Angular</li>
    </ul>
    <pre class="case-code-detail{{reactClass}}" id="react-{{i}}"></pre>
    <pre class="case-code-detail{{vueClass}}" id="vue-{{i}}"></pre>
    <pre class="case-code-detail{{angularClass}}" id="angular-{{i}}"></pre>
  </div>
</div>
