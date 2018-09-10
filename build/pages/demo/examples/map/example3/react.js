"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var viser_react_1 = require("viser-react");
var React = require("react");
var $ = require("jquery");
var _ = require("lodash");
var DataSet = require('@antv/data-set');
var colors = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            geoData: {},
            data: [],
            name: '',
            currentAreaNode: null,
            districtExplorer: null,
        };
        //切换区域后刷新显示内容
        _this.refreshAreaNode = function (areaNode) {
            var districtExplorer = _this.state.districtExplorer;
            districtExplorer.setHoverFeature(null);
            _this.renderAreaPolygons(areaNode);
        };
        //加载区域
        _this.loadAreaNode = function (adcode, callback) {
            var self = _this;
            var _a = _this.state, currentAreaNode = _a.currentAreaNode, districtExplorer = _a.districtExplorer;
            districtExplorer.loadAreaNode(adcode, function (error, areaNode) {
                if (error) {
                    if (callback) {
                        callback(error);
                    }
                    return;
                }
                var adcode = areaNode.getAdcode();
                var geoJSON = areaNode.getSubFeatures(); // 获取 geoJSON 数据
                var name = areaNode.getName();
                if (!geoJSON || currentAreaNode && ('' + currentAreaNode.getAdcode() === '' + adcode)) {
                    return;
                }
                var mapData = {
                    type: 'FeatureCollection',
                    features: geoJSON
                };
                // 构造虚拟数据
                var userData = [];
                for (var i = 0; i < geoJSON.length; i++) {
                    var name_1 = geoJSON[i].properties.name;
                    userData.push({
                        name: name_1,
                        value: Math.round(Math.random() * 1000),
                    });
                }
                var ds = new DataSet();
                var geoDataView = ds.createView().source(mapData, {
                    type: 'GeoJSON',
                }); // geoJSON 经纬度数据
                // 用户数据
                var dvData = ds.createView().source(userData);
                dvData.transform({
                    type: 'geo.region',
                    field: 'name',
                    geoDataView: geoDataView,
                    as: ['longitude', 'lantitude'],
                });
                self.setState({ geoData: geoDataView, data: dvData, name: name });
                if (callback) {
                    callback(null, areaNode);
                }
            });
        };
        //绘制某个区域的边界
        _this.renderAreaPolygons = function (areaNode) {
            var districtExplorer = _this.state.districtExplorer;
            var node = _.cloneDeep(areaNode);
            districtExplorer.clearFeaturePolygons();
            districtExplorer.renderSubFeatures(node, function (feature, i) {
                var fillColor = colors[i % colors.length];
                var strokeColor = colors[colors.length - 1 - i % colors.length];
                return {
                    cursor: 'default',
                    bubble: true,
                    strokeColor: strokeColor,
                    strokeOpacity: 1,
                    strokeWeight: 1,
                    fillColor: fillColor,
                    fillOpacity: 0.35,
                };
            });
            //绘制父区域
            districtExplorer.renderParentFeature(node, {
                cursor: 'default',
                bubble: true,
                strokeColor: 'black',
                strokeOpacity: 1,
                strokeWeight: 1,
                fillColor: null,
                fillOpacity: 0.35,
            });
        };
        //切换区域
        _this.switch2AreaNode = function (adcode, callback) {
            if (callback === void 0) { callback = null; }
            var self = _this;
            var currentAreaNode = _this.state.currentAreaNode;
            if (currentAreaNode && ('' + currentAreaNode.getAdcode() === '' + adcode)) {
                return;
            }
            _this.loadAreaNode(adcode, function (error, areaNode) {
                if (error) {
                    if (callback) {
                        callback(error);
                    }
                    return;
                }
                window.currentAreaNode = areaNode;
                self.setState({ currentAreaNode: areaNode });
                self.refreshAreaNode(areaNode);
                if (callback) {
                    callback(null, areaNode);
                }
            });
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var self = this;
        $('#mount').append('<div id="china" style="width: 50%;height:400px;position: absolute;left: 0;top: 0;"></div>');
        $.when($.getScript('https://webapi.amap.com/maps?v=1.4.1&key=0d78256ea89beeb8c25d1cd047549d1f'), $.getScript('https://webapi.amap.com/ui/1.0/main.js?v=1.0.11')).then(function () {
            // 调用高德 api 绘制底图以及获取 geo 数据
            var map = new window.AMap.Map('china', {
                zoom: 4
            });
            window.AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], function (DistrictExplorer) {
                // 创建一个实例
                var districtExplorer = window.districtExplorer = new DistrictExplorer({
                    eventSupport: true,
                    map: map
                });
                // feature被点击
                districtExplorer.on('featureClick', function (e, feature) {
                    var props = feature.properties;
                    //如果存在子节点
                    if (props.childrenNum > 0) {
                        //切换聚焦区域
                        self.switch2AreaNode(props.adcode);
                    }
                });
                //外部区域被点击
                districtExplorer.on('outsideClick', function (e) {
                    districtExplorer.locatePosition(e.originalEvent.lnglat, function (error, routeFeatures) {
                        if (routeFeatures && routeFeatures.length > 1) {
                            //切换到省级区域
                            self.switch2AreaNode(routeFeatures[1].properties.adcode);
                        }
                        else {
                            //切换到全国
                            self.switch2AreaNode(100000);
                        }
                    }, {
                        evelLimit: 2
                    });
                });
                self.setState({ districtExplorer: districtExplorer });
                // 浙江
                self.switch2AreaNode(330000);
            });
        });
    };
    App.prototype.render = function () {
        var _a = this.state, geoData = _a.geoData, data = _a.data, name = _a.name;
        return (React.createElement("div", { id: "province", style: { width: '50%', height: '400px', position: 'absolute', right: 0, top: 0, } },
            React.createElement("div", null,
                React.createElement(viser_react_1.Chart, { forceFit: true, height: 600, padding: [55, 20], data: geoData },
                    React.createElement(viser_react_1.Tooltip, { showTitle: false }),
                    React.createElement(viser_react_1.View, { data: geoData },
                        React.createElement("div", null)),
                    React.createElement(viser_react_1.View, { data: data },
                        React.createElement(viser_react_1.Polygon, { position: 'longitude*lantitude', label: ['name', {
                                    textStyle: {
                                        fill: '#fff',
                                        fontSize: 10,
                                        shadowBlur: 2,
                                        shadowColor: 'rgba(0, 0, 0, .45)'
                                    },
                                }], style: ['name', {
                                    textStyle: {
                                        fill: '#fff',
                                        fontSize: 10,
                                        shadowBlur: 2,
                                        shadowColor: 'rgba(0, 0, 0, .45)'
                                    },
                                }], color: ['value', '#BAE7FF-#1890FF-#0050B3'] }))))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map