<template>
<div>
  <v-chart :forceFit="true" :height="400" :scale="scale" :padding="padding">
    <v-tooltip :shared="true" />
    <v-view :data="data">
      <v-axis dataKey='year' :label="label" :tickLine="tickLine"/>
      <v-axis dataKey='value' :label="label" :title="title"/>
      <v-interval position="year*value" :opacity="1" />
    </v-view>
    <v-view :data="dv.rows">
      <v-tooltip :show="false" />
      <v-line position="Year*Value" :vStyle="style" />
      <v-guide type="text" content="趋势线" :position="pos" :vStyle="guideStyle" :offsetY="-140" />
    </v-view>
  </v-chart>
</div>
</template>

<script>
const DataSet = require('@antv/data-set');

const data = [{
  year: '2002',
  value: 10
}, {
  year: '2003',
  value: 20
}, {
  year: '2004',
  value: 50
}, {
  year: '2005',
  value: 40
}, {
  year: '2006',
  value: 50
}, {
  year: '2007',
  value: 20
}, {
  year: '2008',
  value: 25
}, {
  year: '2009',
  value: 70
}, {
  year: '2010',
  value: 120
}, {
  year: '2011',
  value: 140
}, {
  year: '2012',
  value: 80
}, {
  year: '2013',
  value: 250
}, {
  year: '2014',
  value: 280
}, {
  year: '2015',
  value: 400
}, {
  year: '2016',
  value: 400
}, {
  year: '2017',
  value: 800
}, {
  year: '2018',
  value: 1000
}];
const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: 'map',
  callback: function callback(row) {
    row.year = parseInt(row.year);
    return row;
  }
}).transform({
  type: 'regression',
  method: 'polynomial',
  fields: ['year', 'value'],
  bandwidth: 0.1,
  as: ['Year', 'Value']
});

const scale = [{
  dataKey: 'value',
  alias: '市值 (亿美元)'
}, {
  dataKey: 'year',
  type: 'cat'
}, {
  dataKey: 'Year',
  range: [0, 1],
  type: 'timeCat'
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
};

const tickLine = {
  alignWithLabel: false,
  length: 0
};

const title = {
  offset: 50
};

const style = {
  stroke: '#969696',
  lineDash: [3, 3]
};

const guideStyle = {
  fill: '#8c8c8c',
  fontSize: 14,
  fontWeight: 300
};

export default {
  data() {
    return {
      data,
      dv,
      scale,
      label,
      tickLine,
      title,
      style,
      guideStyle,
      pos:['min', 'min'],
      padding:[20, 20, 50, 60],
    };
  }
};
</script>
