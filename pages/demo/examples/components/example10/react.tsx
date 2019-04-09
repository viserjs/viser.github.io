import { Chart, Polygon, Coord } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');


export default class App extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        $.getJSON('/assets/data/mobile.json', mobiles => {
            const _DataSet = DataSet,
                DataView = _DataSet.DataView;
            // 会通过子节点累加 value 值，所以设置为 0

            mobiles.forEach(function(mobile) {
                mobile.value = null;
            });
            const data = {
                name: 'root',
                children: mobiles
            };
            const dv = new DataView();
            dv.source(data, {
                type: 'hierarchy'
            }).transform({
                field: 'value',
                type: 'hierarchy.treemap',
                tile: 'treemapResquarify',
                as: ['x', 'y']
            });
            const nodes = dv.getAllNodes();
            nodes.map(function(node) {
                node.name = node.data.name;
                if (!node.data.brand && node.parent) {
                    node.brand = node.parent.data.brand;
                } else {
                    node.brand = node.data.brand;
                }
                //node.value = node.data.value;
                return node;
            });
            this.setState({ data: nodes });
        });
    }
    render() {
        const scale = [
            {
                dataKey: 'x',
                nice: false
            },
            {
                dataKey: 'y',
                nice: false
            }
        ];
        return (
            <Chart data={this.state.data} forceFit height={500} padding={0} animate={false} scale={scale}>
                <Coord direction="LT" />
                <Polygon
                    position="x*y"
                    color="brand"
                    style={{
                        lineWidth: 0.5,
                        stroke: 'rgba(255,255,255,0.65)'
                    }}
                    label={[
                        'brand*depth*name',
                        function(brand, depth, name) {
                            if (depth !== 1 || name === '其他') {
                                // 只有第一级显示文本，数值太小时不显示文本
                                return name;
                            }
                        },
                        {
                            type: 'treemap',
                            textStyle: {
                                shadowColor: 'rgba(0,0,0,0.5)',
                                shadowBlur: 3
                            },
                            offset: 0
                        }
                    ]}
                />
            </Chart>
        );
    }
}
