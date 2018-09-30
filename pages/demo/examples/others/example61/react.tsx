import * as React from 'react';
import * as $ from 'jquery';
import {Chart,Axis,Brush,View,Point} from 'viser-react';

export default class App extends React.Component{
  state={
    data:[],
  }
  componentDidMount(){
    $.getJSON('/assets/data/cars.json',data=>{
      this.setState({data});
    });
  }
  render(){
    const {data}=this.state;
    return (
      <div>
        <Chart
          forceFit={true}
          height={500}
        >
          <View
            data={data}
            end={{
              x:0.45,
              y:1
            }}
          >
            <Axis />
            <Point position="Horsepower*Miles_per_Gallon"/>
          </View>
          <View
            data={data}
            start={{
              x:0.55,
              y:0
            }}
          >
            <Axis />
            <Point position='Acceleration*Displacement' />
          </View>
          <Brush
            dragable={true}
            onBrushstart={this.onBrushstart}
          />
        </Chart>
      </div>
    );
  }
}