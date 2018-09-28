import * as React from 'react';
import * as $ from 'jquery';
import { Axis, Chart, Slider, Plugin, Legend } from 'viser-react';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    $.getJSON('/assets/data/rain-flow.json', data => {});
  }
  render() {
    return <Chart />;
  }
}
