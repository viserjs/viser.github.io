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
var data = [
    { action: '访问', visitor: 500, site: '站点1' },
    { action: '浏览', visitor: 400, site: '站点1' },
    { action: '交互', visitor: 300, site: '站点1' },
    { action: '下单', visitor: 200, site: '站点1' },
    { action: '完成', visitor: 100, site: '站点1' },
    { action: '访问', visitor: 550, site: '站点2' },
    { action: '浏览', visitor: 420, site: '站点2' },
    { action: '交互', visitor: 280, site: '站点2' },
    { action: '下单', visitor: 150, site: '站点2' },
    { action: '完成', visitor: 80, site: '站点2' }
];
data.sort(function (obj1, obj2) {
    return obj1.visitor - obj2.visitor;
});
var scale = [{
        dataKey: 'percent',
        formatter: function (val) {
            return val * 100 + '%';
        }
    }];
var tooltipOpts = {
    crosshairs: false,
    showTitle: false,
    itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}<br/>'
        + '<span style="padding-left: 16px">{value}</span>'
        + '</li>'
};
var facetOpts = {
    type: 'mirror',
    fields: ['site'],
    transpose: true,
    padding: 0,
    eachView: function (view, facet) {
        view.interval()
            .position('action*visitor')
            .color('action', ['#BAE7FF', '#69C0FF', '#40A9FF', '#1890FF', '#0050B3'])
            .shape('funnel')
            .tooltip('site*action*visitor', function (site, action, visitor) {
            return {
                name: site,
                value: action + ': ' + visitor
            };
        })
            .style({
            lineWidth: 1,
            stroke: '#fff'
        });
        data.map(function (obj) {
            if (obj.site === facet.colValue) {
                view.guide().text({
                    top: true,
                    position: [obj.action, 'min'],
                    content: obj.visitor,
                    style: {
                        fill: '#fff',
                        fontSize: '12',
                        textAlign: facet.colIndex ? 'start' : 'end',
                        shadowBlur: 2,
                        shadowColor: 'rgba(0, 0, 0, .45)'
                    },
                    offsetX: facet.colIndex ? 10 : -10
                });
            }
        });
    }
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.tooltipOpts = tooltipOpts;
        this.facetOpts = facetOpts;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"80\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip [crosshairs]=\"tooltipOpts.crosshairs\" [showTitle]=\"tooltipOpts.showTitle\" [itemTpl]=\"tooltipOpts.itemTpl\"></v-tooltip>\n      <v-coord type=\"theta\" [radius]=\"0.8\" [innerRadius]=\"0.7\"></v-coord>\n      <v-legend [reversed]=\"true\"></v-legend>\n      <v-facet [type]=\"facetOpts.type\"\n        [fields]=\"facetOpts.fields\"\n        [transpose]=\"facetOpts.transpose\"\n        [padding]=\"facetOpts.padding\"\n        [eachView]=\"facetOpts.eachView\">\n      </v-facet>\n    </v-chart>\n  </div>\n  "
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