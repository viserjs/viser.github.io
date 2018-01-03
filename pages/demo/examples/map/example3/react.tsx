import { Chart, Tooltip, Legend, View, Polygon, Guide } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';
import * as _ from 'lodash';

const bgDataPre = {
  connector: {
    type: 'GeoJSON'
  }
};

const userDataPre = (dv) => {
  const geo = dv['111'];
  return {
    transform: [{
      type: 'geo.region',
      field: 'name',
      geoDataView: geo,
      as: ['longitude', 'lantitude'],
    }
    ],
  };
};

const colors = [ "#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac" ];

class App extends React.Component {
  state = {
    geoData: {},
    data: [],
    name: '',
    currentAreaNode: null,
    districtExplorer: null,
  };

  componentDidMount() {
    const self = this;
    $('#mount').append('<div id="china" style="width: 50%;height:400px;position: absolute;left: 0;top: 0;"></div>');
    $.when(
      $.getScript('https://webapi.amap.com/maps?v=1.4.1&key=0d78256ea89beeb8c25d1cd047549d1f'),
      $.getScript('https://webapi.amap.com/ui/1.0/main.js?v=1.0.11')).then(() => {
      // 调用高德 api 绘制底图以及获取 geo 数据
      const map = new (window as any).AMap.Map('china', {
        zoom: 4
      });

      (window as any).AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], function(DistrictExplorer) {
        // 创建一个实例
        const districtExplorer = (window as any).districtExplorer = new DistrictExplorer({
          eventSupport: true, //打开事件支持
          map: map
        });

        // feature被点击
        districtExplorer.on('featureClick', function(e, feature) {
          var props = feature.properties;
          //如果存在子节点
          if (props.childrenNum > 0) {
            //切换聚焦区域
            self.switch2AreaNode(props.adcode);
          }
        });

        //外部区域被点击
        districtExplorer.on('outsideClick', function(e) {
          districtExplorer.locatePosition(e.originalEvent.lnglat, function(error, routeFeatures) {
            if (routeFeatures && routeFeatures.length > 1) {
              //切换到省级区域
              self.switch2AreaNode(routeFeatures[1].properties.adcode);
            } else {
              //切换到全国
              self.switch2AreaNode(100000);
            }
          }, {
            evelLimit: 2
          });
        });
        self.setState({ districtExplorer });
        // 浙江
        self.switch2AreaNode(330000);
      });
    });

  }

  //切换区域后刷新显示内容
  refreshAreaNode = (areaNode) => {
    const { districtExplorer } = this.state;
    districtExplorer.setHoverFeature(null);
    this.renderAreaPolygons(areaNode);
  }

  //加载区域
  loadAreaNode = (adcode, callback) => {
    const self = this;
    const { currentAreaNode, districtExplorer } = this.state;
    districtExplorer.loadAreaNode(adcode, function(error, areaNode) {
      if (error) {
        if (callback) {
          callback(error);
        }
        return;
      }

      const adcode = areaNode.getAdcode();
      const geoJSON = areaNode.getSubFeatures(); // 获取 geoJSON 数据
      const name = areaNode.getName();
      if (!geoJSON || currentAreaNode && ('' + currentAreaNode.getAdcode() === '' + adcode)) {
        return;
      }

      const mapData = {
        type: 'FeatureCollection',
        features: geoJSON
      };
      // 构造虚拟数据
      const userData = [];
      for (let i = 0; i < geoJSON.length; i++) {
        const name = geoJSON[i].properties.name;
        userData.push({
          name: name,
          value: Math.round(Math.random() * 1000),
        });
      }

      self.setState({geoData: mapData, data: userData, name});

      if (callback) {
        callback(null, areaNode);
      }
    });
  }

  //绘制某个区域的边界
  renderAreaPolygons = (areaNode) => {
    const { districtExplorer } = this.state;
    const node = _.cloneDeep(areaNode);
    districtExplorer.clearFeaturePolygons();
    districtExplorer.renderSubFeatures(node, function(feature, i) {
      const fillColor = colors[i % colors.length];
      const strokeColor = colors[colors.length - 1 - i % colors.length];

      return {
        cursor: 'default',
        bubble: true,
        strokeColor: strokeColor, //线颜色
        strokeOpacity: 1, //线透明度
        strokeWeight: 1, //线宽
        fillColor: fillColor, //填充色
        fillOpacity: 0.35, //填充透明度
      };
    });

    //绘制父区域
    districtExplorer.renderParentFeature(node, {
      cursor: 'default',
      bubble: true,
      strokeColor: 'black', //线颜色
      strokeOpacity: 1, //线透明度
      strokeWeight: 1, //线宽
      fillColor: null, //填充色
      fillOpacity: 0.35, //填充透明度
    });
  }

  //切换区域
  switch2AreaNode = (adcode, callback = null) => {
    const self = this;
    const { currentAreaNode } = this.state;
    if (currentAreaNode && ('' + currentAreaNode.getAdcode() === '' + adcode)) {
      return;
    }

    this.loadAreaNode(adcode, function(error, areaNode) {
      if (error) {
        if (callback) {
          callback(error);
        }
        return;
      }
      (window as any).currentAreaNode = areaNode;
      self.setState({ currentAreaNode: areaNode });
      self.refreshAreaNode(areaNode);
      if (callback) {
        callback(null, areaNode);
      }
    });
  }

  render() {
    const {geoData, data, name} = this.state;
    if (!geoData || !data.length) {
      return (<div>Loading ...</div>);
    }

    return (
      <div id="province" style={{width: '50%', height:'400px',position: 'absolute', right: 0,top: 0,}}>
        <div>
          <Chart forceFit height={600} padding={[55, 20]} data={geoData} dataPre={bgDataPre}>
            <Tooltip showTitle={false}/>
            <View viewId='111' data={geoData} dataPre={bgDataPre}><div></div></View>
            <View viewId='122' data={data} dataPre={userDataPre} >
              <Polygon position='longitude*lantitude' label={['name', {
                textStyle: {
                  fill: '#fff',
                  fontSize: 10,
                  shadowBlur: 2,
                  shadowColor: 'rgba(0, 0, 0, .45)'
                },
              }]} style={['name', {
                textStyle: {
                  fill: '#fff',
                  fontSize: 10,
                  shadowBlur: 2,
                  shadowColor: 'rgba(0, 0, 0, .45)'
                },
              }]} color={['value', '#BAE7FF-#1890FF-#0050B3']}/>
            </View>
          </Chart>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
