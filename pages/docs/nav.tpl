{{#each menuList}}
  <div class="common-nav-folder" data-folder="{{folderKey}}">
    <h3 class="common-nav-title">
      {{folderDisplayName}}
    </h3>
    <ul class="common-nav-list">
      {{#each mds}}
        <li class="common-nav-item {{activeClass}}">
          <a class="common-nav-link" href="{{linkName}}" title="{{itemDisplayName}}">{{itemDisplayName}}</a>
        </li>
      {{/each}}
    </ul>
  </div>
{{/each}}


