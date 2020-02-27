import { Chart, Legend, Polygon } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');
import * as $ from 'jquery';



export default class App extends React.Component {
    state = {
        worldMap: [],
    };
    componentDidMount() {
        $.getJSON('/assets/data/world.geo.json', mapData => {
            const worldMap = new DataSet.View().source(mapData, {
                type: 'GeoJSON'
            });
            this.setState({
                worldMap
            });
        });
    }
    render() {
        return (
            <Chart forceFit height={window.innerHeight} padding={[55, 20]} data={this.state.worldMap}>
                <Legend dataKey="trend" position="left" />
                <Polygon position="longitude*latitude" label={['name', {
                    type: 'map',
                    offset: 0,
                    textStyle: {
                        fill: 'black',
                        stroke: '#fff',
                        lineWidth: 2
                    },
                }]}
                    style={{
                        fill: '#ced4d9',
                        stroke: '#f2f4f5',
                        lineWidth: 0.5
                    }}
                />
            </Chart>
        );
    }
}
