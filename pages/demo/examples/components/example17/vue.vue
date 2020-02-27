<template>
    <v-chart
        :forceFit="true"
        :height="600"
        padding="auto"
        :scale="scale"
    >
        <v-tooltip
            :showTitle="false"
        ></v-tooltip>
        <v-legend
            :name="false"
            :reactive="true"
            sizeType="circle"
        ></v-legend>
        <v-view
            :data="dv"
            :tooltip="false"
        >
            <v-polygon
                position="longitude*latitude"
                color="#ebedf0"
                :vStyle="style1"
                :active="false"
            ></v-polygon>
        </v-view>
        <v-view
            :data="userDv"
        >
            <v-point
                position="longitude*latitude"
                color="#1890ff"
                :opacity=".6"
                :size="size"
                :vStyle="style2"
                shape="circle"
            ></v-point>
        </v-view>
    </v-chart>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

export default {
    mounted(){
        $.getJSON('/assets/data/world.geo.json', (data) => {
            var ds = new DataSet();
            var dv = ds.createView('back').source(data, {
                type: 'GeoJSON'
            });
            var userData = [{
                name: 'Russia',
                value: 86.8
            }, {
                name: 'China',
                value: 106.3
            }, {
                name: 'Japan',
                value: 94.7
            }, {
                name: 'Mongolia',
                value: 98
            }, {
                name: 'Canada',
                value: 98.4
            }, {
                name: 'United Kingdom',
                value: 97.2
            }, {
                name: 'United States of America',
                value: 98.3
            }, {
                name: 'Brazil',
                value: 96.7
            }, {
                name: 'Argentina',
                value: 95.8
            }, {
                name: 'Algeria',
                value: 101.3
            }, {
                name: 'France',
                value: 94.8
            }, {
                name: 'Germany',
                value: 96.6
            }, {
                name: 'Ukraine',
                value: 86.3
            }, {
                name: 'Egypt',
                value: 102.1
            }, {
                name: 'South Africa',
                value: 101.3
            }, {
                name: 'India',
                value: 107.6
            }, {
                name: 'Australia',
                value: 99.9
            }, {
                name: 'Saudi Arabia',
                value: 130.1
            }, {
                name: 'Afghanistan',
                value: 106.5
            }, {
                name: 'Kazakhstan',
                value: 93.4
            }, {
                name: 'Indonesia',
                value: 101.4
            }];
            var userDv = ds.createView().source(userData).transform({
                geoDataView: dv,
                field: 'name',
                type: 'geo.centroid',
                as: ['longitude', 'latitude']
            });
            this.$data.userDv=userDv;
            this.$data.dv=dv;
        });
    },
    data() {
        return {
            userDv: [],
            dv:[],
            style1:{
                lineWidth: 1,
                stroke: '#fafbfc'
            },
            style2:{
                lineWidth: 1,
                stroke: '#1890ff'
            },
            size:[
                    'value',
                    [5, 15]
                ],
            scale:[
                {
                    dataKey: 'longitude',
                    sync: true
                },
                {
                    dataKey: 'latitude',
                    sync: true
                }
            ],
        };
    }
};

</script>
