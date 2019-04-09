import { Chart, Axis, Tooltip, Point } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';



export default class App extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        $.getJSON('/assets/data/scatter.json', data => {
            this.setState({ data });
        });
    }
    render() {

        return (
            <Chart data={this.state.data} forceFit height={500} padding="auto">
                <Tooltip type="mini" />
                <Axis />
                <Point
                    position="height*weight"
                    size={4}
                    shape="circle"
                    opacity={0.65}
                    label={[
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
                    ]}
                />
            </Chart>
        );
    }
}
