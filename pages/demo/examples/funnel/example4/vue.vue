<template>
  <div>
    <v-chart :force-fit="true" :height="height" :padding="80" :data="data" :scale="scale">
      <v-tooltip :crosshairs="tooltipOpts.crosshairs" :show-title="tooltipOpts.showTitle" :item-tpl="tooltipOpts.itemTpl"/>
      <v-coord :type="'theta'" :radius="0.8" :innerRadius="0.7"/>
      <v-legend :reversed="true"/>
      <v-facet :type="facetOpts.type" :fields="facetOpts.fields"
        :transpose="facetOpts.transpose"
        :padding="facetOpts.padding"
        :eachView="facetOpts.eachView"
      />
    </v-chart>
  </div>
</template>

<script>
const data = [
  { action: '访问', visitor: 500, site: '站点1' },
  { action: '浏览', visitor: 400, site: '站点1' },
  { action: '交互', visitor: 300, site: '站点1' },
  { action: '下单', visitor: 200, site: '站点1' },
  { action: '完成', visitor: 100, site: '站点1' },
  { action: '访问', visitor: 550, site: '站点2' },
  { action: '浏览', visitor: 420, site: '站点2' },
  { action: '交互', visitor: 280, site: '站点2' },
  { action: '下单', visitor: 150, site: '站点2' },
  { action: '完成', visitor: 80, site: '站点2' }
];

data.sort(function(obj1, obj2){ // 从小到大
  return obj1.visitor - obj2.visitor;
});

const scale = [{
  dataKey: 'percent',
  formatter: (val) => {
    return val * 100 + '%';
  }
}];

const tooltipOpts = {
  crosshairs: false,
  showTitle: false,
  itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
      + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
      + '{name}<br/>'
      + '<span style="padding-left: 16px">{value}</span>'
      + '</li>'
};

const facetOpts = {
  type: 'mirror',
  fields: [ 'site' ],
  transpose: true,
  padding: 0,
  eachView(view, facet) {
    view.interval()
      .position('action*visitor')
      .color('action', [ '#BAE7FF', '#69C0FF', '#40A9FF', '#1890FF', '#0050B3' ])
      .shape('funnel')
      .tooltip('site*action*visitor', (site, action, visitor) => {
        return {
          name: site,
          value: action + ': ' + visitor
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff'
      });

    data.map((obj) => {
      if (obj.site === facet.colValue) {
        view.guide().text({
          top: true,
          position: [obj.action, 'min'],
          content: obj.visitor,
          style: {
            fill: '#fff',
            fontSize: '12',
            textAlign: facet.colIndex ? 'start' : 'end',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)'
          },
          offsetX: facet.colIndex ? 10 : -10
        });
      }
    });
  }
};

export default {
  data() {
    return {
      height: 400,
      data,
      scale,
      tooltipOpts,
      facetOpts,
    };
  }
};
</script>
