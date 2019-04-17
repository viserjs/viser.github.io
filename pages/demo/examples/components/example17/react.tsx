import { Chart, Tooltip, View, Legend, Polygon, Point } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');


export default class App extends React.Component {
    state = {
        userDv: [],
        dv: [],
    }
    componentDidMount() {
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
            this.setState({
                userDv,
                dv,
            });
        });
    }

    render() {
        const scale = [
            {
                dataKey: 'longitude',
                sync: true
            },
            {
                dataKey: 'latitude',
                sync: true
            }
        ];
        return (
            <Chart forceFit height={600} padding={'auto'} scale={scale}>
                <Tooltip showTitle={false} />
                <Legend
                    name={false}
                    reactive={true}
                    sizeType="circle"
                />
                <View
                    data={this.state.dv}
                    tooltip={false}
                >
                    <Polygon
                        position="longitude*latitude"
                        color="#ebedf0"
                        style={{
                            lineWidth: 1,
                            stroke: '#fafbfc'
                        }}
                        active={false}
                    />
                </View>
                <View
                    data={this.state.userDv}
                >
                    <Point
                        position="longitude*latitude"
                        color="#1890ff"
                        opacity={.6}
                        size={[
                            'value',
                            [5, 15]
                        ]}
                        style={{
                            lineWidth: 1,
                            stroke: '#1890ff'
                        }}
                        shape="circle"
                    />
                </View>
            </Chart>
        );
    }
}
