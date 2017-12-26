<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :data-pre="dataPre" :scale="scale">
      <v-tooltip :show-title="false" :item-tpl="itemTpl" />
      <v-coord :type="'theta'" :radius="0.5" />
      <v-pie :position="'percent'" :color="'type'" :label="label" :select="false" :style="style" :tooltip="tooltip" />
      <v-view :view-id="2" :data-pre="viewDataPre" :scale="scale">
        <v-coord :type="'theta'" :radius="0.75" :inner-radius="0.5 / 0.75" />
        <v-pie :position="'percent'" :color="color" :label="'name'" :select="false" :style="style" :tooltip="tooltip" />
      </v-view>
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { value: 251, type: '大事例一', name: '子事例一' },
    { value: 1048, type: '大事例一', name: '子事例二' },
    { value: 610, type: '大事例二', name: '子事例三' },
    { value: 434, type: '大事例二', name: '子事例四' },
    { value: 335, type: '大事例三', name: '子事例五' },
    { value: 250, type: '大事例三', name: '子事例六' },
  ];

  const dataPre = {
    transform: {
      type: 'percent',
      field: 'value',
      dimension: 'type',
      as: 'percent',
    },
  };

  const viewDataPre = {
    transform: {
      type: 'percent',
      field: 'value',
      dimension: 'name',
      as: 'percent',
    },
  };

  const scale = {
    dataType: 'percent',
    formatter: '.2%',
  };

  const itemTpl = '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>';

  const style = {
    lineWidth: 1,
    stroke: '#fff',
  };

  const label = ['type', { offset: -10 }];

  const tooltip = [
    'name*percent', (item, percent) => {
      percent = (percent * 100).toFixed(2) + '%';
      return {
        name: item,
        value: percent,
      };
    },
  ];

  const color = ['name', ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4']];

  export default {
    data() {
      return {
        data,
        dataPre,
        scale,
        viewDataPre,
        height: 400,
        itemTpl,
        tooltip,
        color,
        label,
      };
    }
  };
</script>
