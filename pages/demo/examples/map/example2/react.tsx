import { Chart, Tooltip, Legend, View, Polygon, Point } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';

const scale = [{
  dataKey: 'longitude',
  sync: true,
}, {
  dataKey: 'latitude',
  sync: true,
}];

const bgDataPre = {
  connector: {
    type: 'GeoJSON'
  }
};

const userDataScale = [{
  dataKey: 'trend',
  alias: '每100位女性对应的男性数量',
}]
const userDataPre = (dv) => {
  const geo = dv['111'];
  return {
    transform: [{
      geoDataView: geo,
      field: 'name',
      type: 'geo.region',
      as: [ 'longitude', 'latitude' ],
    },
    {
      type: 'map',
      callback: function(obj) {
        obj.trend = (obj.value > 100) ? '男性更多' : '女性更多';
        return obj;
      }
    }
    ],
  };
};
const view1Opts = {
  quickType: 'polygon',
  position: 'longitude*latitude',
  style: {
    fill: '#fff',
    stroke: '#ccc',
    lineWidth: 1
  },
  tooltip: false,
};
const view2Opts = {
  quickType: 'polygon',
  position: 'longitude*latitude',
  opacity: 'value',
  color: ['trend', [ '#F51D27', '#0A61D7' ]],
  tooltip: 'name*trend',
  animate: {
    leave: {
      animation: 'fadeOut'
    }
  },
};

class App extends React.Component {
  state = {
    geoData: {},
    data: [],
  };

  componentDidMount() {
    $.when($.getJSON('/data/worldGeo.json'),$.getJSON('/data/map-2.json')).then((geoData, data) => {
      this.setState({geoData: geoData[0], data: data[0]});
    });
  }

  render() {
    const {geoData, data} = this.state;
    if (!geoData || !data.length) {
      return (<div>Loading ...</div>);
    }

    return (
      <div>
        <Chart forceFit height={600} padding={[55, 20]} data={geoData} dataPre={bgDataPre} scale={scale}>
          <Tooltip showTitle={false}/>
          <Legend dataKey={'trend'} position={'left'}/>
          <View viewId='111' data={geoData} dataPre={bgDataPre} scale={scale}>
            <Polygon {...view1Opts}/>
          </View>
          <View viewId='122' data={data} dataPre={userDataPre} scale={userDataScale}>
            <Polygon {...view2Opts}/>
          </View>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
