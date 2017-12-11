{{#each menuList as |value key|}}
  <div class="common-nav-folder expandable {{expanded}}" data-folder="{{@key}}">
    <h3 class="common-nav-title">
      <i class="iconfont icon-{{icon}}"></i>
      {{folderDisplayName}}
    </h3>
    <ul class="common-nav-list">
      {{#each examples}}
        <li class="common-nav-item {{activeClass}}">
          <a class="common-nav-link" href="/demo.html?type={{@key}}&example={{linkName}}" title="{{itemDisplayName}}">{{itemDisplayName}}</a>
        </li>
      {{/each}}
    </ul>
  </div>
{{/each}}


