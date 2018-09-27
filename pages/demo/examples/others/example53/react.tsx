import * as React from 'react';
import * as $ from 'jquery';
import { Axis, Chart, Slider, Plugin, Legend } from 'viser-react';
const DataSet = require('@antv/data-set');

const getJSON = src => new Promise(resolve => $.getJSON(src, data => resolve(data)));

export default class App extends React.Component {
    state = {
        data: [],
    }
    async componentDidMount() {
        const data = await getJSON('/assets/data/rain-flow.json');
    }
    render() {
        return (
            <Chart></Chart>
        )
    }
}