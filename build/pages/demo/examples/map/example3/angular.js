"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js");
require("reflect-metadata");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var viser_ng_1 = require("viser-ng");
var $ = require("jquery");
var _ = require("lodash");
var DataSet = require('@antv/data-set');
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.showTitle = false;
        this.forceFit = true;
        this.height = 600;
        this.padding = [55, 20];
        this.data = [];
        this.geoData = {};
        this.colors = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];
        this.polygonOpts = {
            position: 'longitude*lantitude',
            label: ['name', {
                    textStyle: {
                        fill: '#fff',
                        fontSize: 10,
                        shadowBlur: 2,
                        shadowColor: 'rgba(0, 0, 0, .45)'
                    },
                }],
            style: ['name', {
                    textStyle: {
                        fill: '#fff',
                        fontSize: 10,
                        shadowBlur: 2,
                        shadowColor: 'rgba(0, 0, 0, .45)'
                    },
                }],
            color: ['value', '#BAE7FF-#1890FF-#0050B3'],
        };
        this.name = '';
        this.currentAreaNode = null;
        this.districtExplorer = null;
        //切换区域后刷新显示内容
        this.refreshAreaNode = function (areaNode) {
            var districtExplorer = _this.districtExplorer;
            districtExplorer.setHoverFeature(null);
            _this.renderAreaPolygons(areaNode);
        };
        //加载区域
        this.loadAreaNode = function (adcode, callback) {
            var self = _this;
            var currentAreaNode = _this.currentAreaNode;
            var districtExplorer = _this.districtExplorer;
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
                self.geoData = geoDataView;
                self.data = dvData;
                self.name = name;
                if (callback) {
                    callback(null, areaNode);
                }
            });
        };
        //绘制某个区域的边界
        this.renderAreaPolygons = function (areaNode) {
            var districtExplorer = _this.districtExplorer;
            var colors = _this.colors;
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
        this.switch2AreaNode = function (adcode, callback) {
            if (callback === void 0) { callback = null; }
            var self = _this;
            var currentAreaNode = self.currentAreaNode;
            if (currentAreaNode && ('' + currentAreaNode.getAdcode() === '' + adcode)) {
                return;
            }
            self.loadAreaNode(adcode, function (error, areaNode) {
                if (error) {
                    if (callback) {
                        callback(error);
                    }
                    return;
                }
                window.currentAreaNode = areaNode;
                self.currentAreaNode = areaNode;
                self.refreshAreaNode(areaNode);
                if (callback) {
                    callback(null, areaNode);
                }
            });
        };
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
                self.districtExplorer = districtExplorer;
                // 浙江
                self.switch2AreaNode(330000);
            });
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div style=\"width: 50%; height: 400px; position: absolute; right: 0px; top: 0px;\">\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"padding\" [data]=\"geoData\">\n      <v-tooltip [showTitle]=\"showTitle\"></v-tooltip>\n      <v-view [data]=\"geoData\">\n        <div></div>\n      </v-view>\n      <v-view [data]=\"data\">\n        <v-polygon [position]=\"polygonOpts.position\" [label]=\"polygonOpts.label\" [style]=\"polygonOpts.style\" [color]=\"polygonOpts.color\"></v-polygon>\n      </v-view>\n    </v-chart>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                viser_ng_1.ViserModule
            ],
            providers: [],
            bootstrap: [
                AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.default = AppModule;
//# sourceMappingURL=angular.js.map