{{#each codeConfig}}
  <li class="{{#active ../chartType @key}}{{/active}}">
    <a href="/demo.html?type={{@key}}&language={{../language}}">
      <i class="iconfont icon-{{icon}}"></i>
      {{cnName}}
    </a>
  </li>
{{/each}}
