<template>
    <v-chart :data="data" :forceFit="true" :height="500" padding="auto">
        <v-tooltip type="mini"/>
        <v-axis />
        <v-point
            position="height*weight"
            :size="4"
            shape="circle"
            :opacity="0.65"
            :label="label"
        />
    </v-chart>
</template>

<script>
import * as $ from 'jquery';


export default {
    mounted(){
        $.getJSON('/assets/data/scatter.json', data => {
            this.$data.data=data;
        });
    },
    data() {
        return {
            data: [],
            label:[
                'weight',
                {
                    type: 'scatter',
                    offset: 0,
                    textStyle: {
                        fill: 'rgba(0, 0, 0, 0.65)',
                        stroke: '#fff',
                        lineWidth: 2
                    }
                }
            ],
        };
    }
};

</script>
