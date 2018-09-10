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
viser_ng_1.registerShape('interval', 'radiusPie', {
    draw: function (cfg, container) {
        // 将归一化后的数据转换为画布上的坐标
        var points = cfg.origin.points;
        var path = [];
        for (var i = 0; i < cfg.origin.points.length; i += 4) {
            path.push(['M', points[i].x, points[i].y]);
            path.push(['L', points[i + 1].x, points[i + 1].y]);
            path.push(['L', points[i + 2].x, points[i + 2].y]);
            path.push(['L', points[i + 3].x, points[i + 3].y]);
            path.push(['L', points[i].x, points[i].y]);
            path.push(['z']);
        }
        path = this.parsePath(path, true);
        var rect = container.addShape('path', {
            attrs: {
                fill: cfg.color || '#00D9DF',
                path: path
            }
        });
        var minH = Math.min(path[1][7], path[2][2]);
        var minW = Math.min(path[1][6], path[2][1]);
        var diffH = Math.abs(path[1][7] - path[2][2]);
        var diffW = Math.abs(path[1][6] - path[2][1]);
        container.addShape('circle', {
            attrs: {
                x: minW + diffW / 2,
                y: minH + diffH / 2,
                fill: cfg.color,
                radius: diffH / 2
            }
        });
        var minHH = Math.min(path[3][7], path[4][2]);
        var minWW = Math.min(path[3][6], path[4][1]);
        var diffHH = Math.abs(path[3][7] - path[4][2]);
        var diffWW = Math.abs(path[3][6] - path[4][1]);
        container.addShape('circle', {
            attrs: {
                x: minWW + diffWW / 2,
                y: minHH + diffHH / 2,
                fill: cfg.color,
                radius: diffH / 2
            }
        });
        return rect;
    }
});
var COLORS = ['#1890ff', '#f04864'];
var data = [
    { sex: '男', sold: 0.45 },
    { sex: '女', sold: 0.55 }
];
var opts = {
    position: "sold",
    shape: "radiusPie",
    color: ['sex', COLORS],
    label: ['sold', {
            custom: true,
            htmlTemplate: function (text, item) {
                var isFemale = item.point.sex === '女';
                var src = isFemale ? 'https://gw.alipayobjects.com/zos/rmsportal/mweUsJpBWucJRixSfWVP.png'
                    : 'https://gw.alipayobjects.com/zos/rmsportal/oeCxrAewtedMBYOETCln.png';
                var color = isFemale ? COLORS[1] : COLORS[0];
                var IMG = "<img style=\"width:40px\" src=\"" + src + "\" /><br/>";
                return "<div style=\"text-align:center;color:" + color + "\">" + IMG + (text * 100).toFixed(0) + "%</div>";
            }
        }]
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.opts = opts;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[ 20, 30, 30, 20 ]\" [data]=\"data\">\n      <v-tooltip [showTitle]=\"false\"></v-tooltip>\n      <v-coord type=\"theta\" [radius]=\"0.8\"></v-coord>\n      <v-stack-interval [position]=\"opts.position\" [shape]=\"opts.shape\" [color]=\"opts.color\" [label]=\"opts.label\"></v-stack-interval>\n    </v-chart>\n  </div>\n  "
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