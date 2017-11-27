{{#each codeConfig as |value key|}}
  <div class="common-nav-folder">
    <h3 class="common-nav-title">
      <i class="iconfont icon-{{icon}}"></i>
      {{@key}}
    </h3>
    <ul class="common-nav-list">
      {{#each examples as |childValue childKey|}}
        <li class="common-nav-item">
          <a class="common-nav-link" href="/demo.html?type={{@key}}&example={{childKey}}">{{enName}}</a>
        </li>
      {{/each}}
    </ul>
  </div>
{{/each}}


