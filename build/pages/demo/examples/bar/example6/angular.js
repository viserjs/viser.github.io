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
function getRectPath(points) {
    var path = [];
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        if (point) {
            var action = i === 0 ? 'M' : 'L';
            path.push([action, point.x, point.y]);
        }
    }
    var first = points[0];
    path.push(['L', first.x, first.y]);
    path.push(['z']);
    return path;
}
function getFillAttrs(cfg) {
    var defaultAttrs = viser_ng_1.Global.shape.interval;
    var attrs = Object.assign({}, defaultAttrs, {
        fill: cfg.color,
        stroke: cfg.color,
        fillOpacity: cfg.opacity,
    }, cfg.style);
    return attrs;
}
viser_ng_1.registerShape('interval', 'waterfall', {
    draw: function (cfg, container) {
        var attrs = getFillAttrs(cfg);
        var rectPath = getRectPath(cfg.points);
        rectPath = this.parsePath(rectPath);
        var interval = container.addShape('path', {
            attrs: Object.assign(attrs, {
                path: rectPath
            }),
        });
        if (cfg.nextPoints) {
            var linkPath = [
                ['M', cfg.points[2].x, cfg.points[2].y],
                ['L', cfg.nextPoints[0].x, cfg.nextPoints[0].y]
            ];
            if (cfg.nextPoints[0].y === 0) {
                linkPath[1] = ['L', cfg.nextPoints[1].x, cfg.nextPoints[1].y];
            }
            linkPath = this.parsePath(linkPath);
            container.addShape('path', {
                attrs: {
                    path: linkPath,
                    stroke: '#8c8c8c',
                    lineDash: [4, 2]
                }
            });
        }
        return interval;
    }
});
var data = [
    { type: '日用品', money: 300 },
    { type: '伙食费', money: 900 },
    { type: '交通费', money: 200 },
    { type: '水电费', money: 300 },
    { type: '房租', money: 1200 },
    { type: '商场消费', money: 1000 },
    { type: '应酬交际', money: 2000 },
    { type: '总费用', money: 5900 },
];
for (var i = 0; i < data.length; i++) {
    var item = data[i];
    if (i > 0 && i < data.length - 1) {
        if (Array.isArray(data[i - 1].money)) {
            item.money = [data[i - 1].money[1], item.money + data[i - 1].money[1]];
        }
        else {
            item.money = [data[i - 1].money, item.money + data[i - 1].money];
        }
    }
}
var items = [
    { value: '各项花销', fill: '#1890FF', marker: 'square' },
    { value: '总费用', fill: '#8c8c8c', marker: 'square' },
];
var color = ['type', function (type) {
        if (type === '总费用') {
            return '#8c8c8c';
        }
        return '#1890FF';
    }];
var tooltip = ['type*money', function (type, money) {
        if (Array.isArray(money)) {
            return {
                name: '生活费',
                value: money[1] - money[0],
            };
        }
        return {
            name: '生活费',
            value: money,
        };
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.color = color;
        this.tooltip = tooltip;
        this.items = items;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\">\n      <v-legend custom=\"true\" clickable=\"false\" [items]=\"items\"></v-legend>\n      <v-tooltip></v-tooltip>\n      <v-axis></v-axis>\n      <v-bar position=\"type*money\" shape=\"waterfall\" [color]=\"color\" [tooltip]=\"tooltip\"></v-bar>\n    </v-chart>\n  </div>\n  "
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