{{#each codeConfig}}
  <li class="common-nav-item" class="{{#active ../chartType @key}}{{/active}}">
    <a class="common-nav-link" href="/demo.html?type={{@key}}&language={{../language}}">
      <i class="iconfont icon-{{icon}}"></i>
      {{cnName}}
    </a>
  </li>
{{/each}}
