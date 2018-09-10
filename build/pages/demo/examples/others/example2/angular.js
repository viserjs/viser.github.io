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
viser_ng_1.registerShape('point', 'image', {
    drawShape: function (cfg, container) {
        cfg.points = this.parsePoints(cfg.points);
        var coord = this._coord;
        container.addShape('line', {
            attrs: {
                x1: cfg.points[0].x,
                y1: cfg.points[0].y,
                x2: cfg.points[0].x,
                y2: coord.start.y,
                stroke: '#ccc',
                lineWidth: 1,
                lineDash: [4, 2]
            }
        });
        return container.addShape('image', {
            attrs: {
                x: cfg.points[0].x - (12 * cfg.size / 2),
                y: cfg.points[0].y - 12 * cfg.size,
                width: 12 * cfg.size,
                height: 12 * cfg.size,
                img: cfg.shape[1]
            }
        });
    }
});
var data = [
    { name: 'Internet Explorer', value: 26 },
    { name: 'Chrome', value: 40 },
    { name: 'Firefox', value: 30 },
    { name: 'Safari', value: 24 },
    { name: 'Opera', value: 15 },
    { name: 'Undetectable', value: 8 }
];
var imageMap = {
    'Internet Explorer': 'https://gw.alipayobjects.com/zos/rmsportal/eOYRaLPOmkieVvjyjTzM.png',
    'Chrome': 'https://gw.alipayobjects.com/zos/rmsportal/dWJWRLWfpOEbwCyxmZwu.png',
    'Firefox': 'https://gw.alipayobjects.com/zos/rmsportal/ZEPeDluKmAoTioCABBTc.png',
    'Safari': 'https://gw.alipayobjects.com/zos/rmsportal/eZYhlLzqWLAYwOHQAXmc.png',
    'Opera': 'https://gw.alipayobjects.com/zos/rmsportal/vXiGOWCGZNKuVVpVYQAw.png',
    'Undetectable': 'https://gw.alipayobjects.com/zos/rmsportal/NjApYXminrnhBgOXyuaK.png'
};
var scale = [{
        dataKey: 'value',
        nice: false,
        max: 60,
        min: 0
    }];
var seriesOpts = {
    gemo: 'point',
    position: 'name*value',
    size: 'value',
    color: 'name',
    shape: ['name', function (name) {
            return ['image', imageMap[name]];
        }],
    label: ['value', {
            offset: -20,
            textStyle: {
                fontSize: 16,
            }
        }]
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.seriesOpts = seriesOpts;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip></v-tooltip>\n      <v-axis [dataKey]=\"'value'\" [show]=\"false\"></v-axis>\n      <v-series [gemo]=\"seriesOpts.gemo\" [position]=\"seriesOpts.position\" [size]=\"seriesOpts.size\" [color]=\"seriesOpts.color\" [shape]=\"seriesOpts.shape\" [label]=\"seriesOpts.label\"></v-series>\n    </v-chart>\n  </div>\n  "
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