<template>
    <v-chart
        :data="data"
        :forceFit="true"
        :height="500"
        :padding="padding"
        :plotBackground="plotbg"
        :scale="scale"
    >
        <v-tooltip
            :shared="false"
            :crosshairs="false"
        ></v-tooltip>
        <v-legend
            :useHtml="true"
            :flipPage="true"
            position="right"
            :title="title"
        ></v-legend>
        <v-axis
            dataKey="year"
            :title="null"
            :line="null"
            :tickLine="null"
        ></v-axis>
        <v-axis
            dataKey="count"
            :title="null"
            :line="null"
            :tickLine="tickLine"
            :subTickCount="10"
            :subTickLine="subtick"
            :grid="null"
        ></v-axis>
        <v-area
            position="year*count"
            :adjust="adjust"
            color="name"
            shape="smooth"
            :opacity="1"
        ></v-area>
    </v-chart>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

export default {
    mounted(){
        $.getJSON('/assets/data/baby-names.json', (data) => {
            var ds = new DataSet();
            var dv = ds.createView('demo').source(data).transform({
                type: 'fill-rows',
                groupBy: ['name'],
                orderBy: ['year']
            }).transform({
                type: 'impute',
                field: 'n',
                method: 'value',
                value: 0
            }).transform({
                type: 'aggregate',
                fields: ['n'],
                operations: ['sum'],
                groupBy: ['year', 'name'],
                orderBy: ['year'],
                as: ['count']
            });
            this.$data.data=dv;
        });
    },
    data() {
        return {
            data: [],
            padding:[20,180,50,50],
            adjust:['stack', 'symmetric'],
            plotbg:{ stroke: '#ccc' },
            title:{text:'图例可滚动'},
            subtick:{ lineWidth: 1, stroke: '#ddd', length: 5 },
            tickLine:{length:8},
            scale:[
                {
                    dataKey: 'year',
                    tickInterval: 10,
                    nice: false
                },
                {
                    dataKey: 'count',
                    nice: false
                }
            ],
        };
    }
};

</script>
