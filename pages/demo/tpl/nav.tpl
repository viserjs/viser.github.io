{{#each codeConfig}}
  <li class="common-nav-item" class="{{#active ../chartType @key}}{{/active}}">
    <a class="common-nav-link" href="/demo.html?type={{@key}}">
      <i class="iconfont icon-{{icon}}"></i>
      {{@key}} Chart
    </a>
  </li>
{{/each}}
