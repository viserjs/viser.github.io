import { Chart, Point, Tooltip, Line, Legend } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

var valueMap = {};
export default class App extends React.Component {
    state = {
        data: [],
        dv: []
    }
    componentDidMount() {
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
            this.setState({
                data,
                dv
            });
        });
    }

    render() {
        if (!this.state.dv.length && !this.state.data.length) {
            return null;
        }
        return (
            <Chart forceFit height={600} padding={[10, 200, 50, 50]} data={this.state.data}>
                <Tooltip />
                <Legend
                    attachLast={true}
                />
                <Line
                    position="year*value"
                    color="country"
                    size={[
                        'country',
                        function(country) {
                            if (country === 'China') return 5;
                            return 2;
                        }
                    ]}
                    label={[
                        'country*value*year',
                        (country, value, year) => {
                            var result = null;
                            for (var i = 0; i < this.state.dv.length; i++) {
                                if (this.state.dv[i].country === country) {
                                    if (this.state.dv[i].min === value && !valueMap[country + 'min']) {
                                        valueMap[country + 'min'] = year;
                                        result = value;
                                        break;
                                    }

                                    if (this.state.dv[i].max === value && !valueMap[country + 'max']) {
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
                    ]}
                    style={{
                        lineCap: 'round'
                    }}
                />
                <Point
                    position="year*value"
                    color="country"
                    style={{
                        lineWidth: 2
                    }}
                    size={[
                        'country*value*year',
                        (country, value, year) => {
                            if (valueMap[country + 'min'] === year || valueMap[country + 'max'] === year) {
                                return 3;
                            }
                            return 0;
                        }
                    ]}
                />
            </Chart>
        );
    }
}
