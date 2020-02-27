<template>
    <div v-if="dv.length||data.length">
        <v-chart
            :forceFit="true"
            :height="600"
            :padding="padding"
            :data="data"
        >
            <v-tooltip></v-tooltip>
            <v-legend
                :attachLast="true"
            ></v-legend>
            <v-line
               position="year*value"
                color="country" 
                :size="sizeLine"
                :label="labelLine"
                :vStyle="styleLine"
            ></v-line>
            <v-point
                position="year*value"
                color="country"
                :vStyle="stylePoint"
                :size="sizePoint"
            ></v-point>
        </v-chart>
    </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');
var valueMap={};
export default {
    mounted(){
        $.getJSON('/assets/data/fertility2.json', data => {
            var dv = new DataSet.View().source(data).transform({
                type: 'aggregate',
                fields: ['value', 'value'],
                operations: ['min', 'max'],
                as: ['min', 'max'],
                groupBy: ['country'],
                orderBy: ['year']
            }).rows;

            data = new DataSet.View().source(data).transform({
                type: 'sort-by',
                field: 'year',
                orderBy: 'ASC'
            });
            this.$data.data=data;
            this.$data.dv=dv;
        });
    },
    data() {
        return {
            data: [],
            dv:[],
            padding:[10,200,50,50],
            sizeLine:[
                'country',
                function(country) {
                    if (country === 'China') return 5;
                    return 2;
                }
            ],
            labelLine:[
                'country*value*year',
                (country, value, year) => {
                    var result = null;
                    for (var i = 0; i < this.$data.dv.length; i++) {
                        if (this.$data.dv[i].country === country) {
                            if (this.$data.dv[i].min === value && !valueMap[country + 'min']) {
                                valueMap[country + 'min'] = year;
                                result = value;
                                break;
                            }

                            if (this.$data.dv[i].max === value && !valueMap[country + 'max']) {
                                valueMap[country + 'max'] = year;
                                result = value;
                                break;
                            }
                        }
                    }
                    return result;
                },
                {
                    labelLine: false,
                    offset: 10,
                    textStyle: {
                        stroke: '#fff',
                        lineWidth: 2
                    }
                }
            ],
            styleLine:{
                lineCap: 'round'
            },
            stylePoint:{
                lineWidth: 2
            },
            sizePoint:[
                'country*value*year',
                (country, value, year) => {
                    if (valueMap[country + 'min'] === year || valueMap[country + 'max'] === year) {
                        return 3;
                    }
                    return 0;
                }
            ],
        };
    }
};

</script>
