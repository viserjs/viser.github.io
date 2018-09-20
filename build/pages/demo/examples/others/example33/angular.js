"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js");
require("reflect-metadata");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var viser_ng_1 = require("viser-ng");
viser_ng_1.registerShape('interval', 'borderRadius', {
    draw: function (cfg, container) {
        var points = cfg.points;
        var path = [];
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', points[1].x, points[1].y]);
        path.push(['L', points[2].x, points[2].y]);
        path.push(['L', points[3].x, points[3].y]);
        path.push('Z');
        path = this.parsePath(path); // 将 0 - 1 转化为画布坐标
        return container.addShape('rect', {
            attrs: {
                x: path[1][1],
                y: path[1][2],
                width: path[2][1] - path[1][1],
                height: path[0][2] - path[1][2],
                fill: cfg.color,
                radius: (path[2][1] - path[1][1]) / 2,
            }
        });
    }
});
var activeData = [
    { date: '2017年3月2日', actual: 175, expected: 900 },
    { date: '2017年3月3日', actual: 137, expected: 900 },
    { date: '2017年3月4日', actual: 240, expected: 900 },
    { date: '2017年3月5日', actual: 726, expected: 900 },
    { date: '2017年3月6日', actual: 968, expected: 900 },
    { date: '2017年3月7日', actual: 702, expected: 900 },
    { date: '2017年3月8日', actual: 655, expected: 900 },
    { date: '2017年3月9日', actual: 463, expected: 900 },
    { date: '2017年3月10日', actual: 464, expected: 900 },
    { date: '2017年3月12日', actual: 0, expected: 900 },
    { date: '2017年3月13日', actual: 638, expected: 900 },
    { date: '2017年3月14日', actual: 0, expected: 900 },
    { date: '2017年3月15日', actual: 0, expected: 900 },
    { date: '2017年3月16日', actual: 509, expected: 900 },
    { date: '2017年3月17日', actual: 269, expected: 900 },
    { date: '2017年3月18日', actual: 321, expected: 900 },
    { date: '2017年3月19日', actual: 0, expected: 900 },
    { date: '2017年3月20日', actual: 399, expected: 900 },
    { date: '2017年3月21日', actual: 662, expected: 900 },
    { date: '2017年3月22日', actual: 689, expected: 900 },
    { date: '2017年3月23日', actual: 347, expected: 900 },
    { date: '2017年3月24日', actual: 0, expected: 900 },
    { date: '2017年3月26日', actual: 428, expected: 900 },
    { date: '2017年3月27日', actual: 749, expected: 900 },
    { date: '2017年3月28日', actual: 0, expected: 900 },
    { date: '2017年3月29日', actual: 0, expected: 900 },
    { date: '2017年3月30日', actual: 69.1, expected: 900 },
];
var scale = [{
        dataKey: 'expected',
        ticks: [0, 900, 1200]
    }];
var axisOpts = {
    dataKey: 'expected',
    line: null,
    tickLine: null,
    position: 'right',
    label: {
        formatter: function (val) {
            if (val === '1200') {
                return '';
            }
            return val;
        }
    }
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = activeData;
        this.scale = scale;
        this.axisOpts = axisOpts;
        this.shape = ['date*actual', function (date, val) {
                if (val === 0) {
                    return;
                }
                else {
                    return 'borderRadius';
                }
            }];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[20, 80, 80, 80]\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip></v-tooltip>\n      <v-axis dataKey=\"date\" [show]=\"false\"></v-axis>\n      <v-axis dataKey=\"actual\" [show]=\"false\"></v-axis>\n      <v-axis [dataKey]=\"axisOpts.dataKey\" [line]=\"axisOpts.line\" [tickLine]=\"axisOpts.tickLine\"\n        [position]=\"axisOpts.position\" [label]=\"axisOpts.label\"></v-axis>\n      <v-interval position=\"date*expected\" color=\"#752136\" shape=\"borderRadius\"\n        tooltip=\"expected\" opacity=\"0.6\"></v-interval>\n      <v-interval position=\"date*actual\" color=\"#db0d2d\" tooltip=\"actual\"\n        [shape]=\"shape\"></v-interval>\n      <v-guide type=\"text\" [position]=\"['min', 'max']\" content=\"\u6D3B\u52A8\"\n        [style]=\"{\n          fill: '#ff2c55',\n          fontSize: 20,\n          fontWeight: 'bold',\n          textBaseline: 'top'\n        }\"></v-guide>\n      <v-guide type=\"text\" [position]=\"['max', 'max']\" content=\"67 / 900 \u5343\u5361\"\n        [style]=\"{\n          fill: '#cbcbcb',\n          fontSize: 20,\n          textAlign: 'end',\n          textBaseline: 'top'\n        }\"></v-guide>\n    </v-chart>\n  </div>\n  "
        })
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