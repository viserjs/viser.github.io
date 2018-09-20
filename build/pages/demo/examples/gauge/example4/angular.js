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
var scale = [{
        dataKey: 'type',
        range: [0, 1],
    }, {
        dataKey: 'value',
        sync: true,
    }];
var dataBackground = [];
for (var i = 0; i < 50; i++) {
    dataBackground.push({
        type: i + '',
        value: 10,
    });
}
var dataFront = [];
for (var i = 0; i < 50; i++) {
    var item = {
        type: i + '',
        value: 10,
    };
    if (i === 25) {
        item.value = 14;
    }
    if (i > 25) {
        item.value = 0;
    }
    dataFront.push(item);
}
var insideScale = [{
        dataKey: 'type',
        tickCount: 3
    }];
var insideAxisLabel = {
    offset: -15,
    textStyle: {
        textAlign: 'center',
        fill: '#CBCBCB',
        fontSize: 18
    },
    formatter: function (val) {
        if (val === '49') {
            return 50;
        }
        return val;
    }
};
var frontIntervalColor = ['value', '#3023AE-#53A0FD'];
var frontGuidePosition = ['50%', '65%'];
var frontGuideStyle = {
    fill: '#CBCBCB',
    fontSize: 64,
    textAlign: 'center',
    textBaseline: 'middle',
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.show = false;
        this.scale = scale;
        this.dataBackground = dataBackground;
        this.dataFront = dataFront;
        this.insideScale = insideScale;
        this.insideAxisLabel = insideAxisLabel;
        this.frontIntervalColor = frontIntervalColor;
        this.frontGuidePosition = frontGuidePosition;
        this.frontGuideStyle = frontGuideStyle;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" height=\"400\" [scale]=\"scale\" [animate]=\"false\">\n      <v-view [data]=\"dataBackground\">\n        <v-coord\n          type=\"polar\"\n          [startAngle]=\"-202.5\"\n          [endAngle]=\"22.5\"\n          [innerRadius]=\"0.75\"\n          [radius]=\"0.8\"\n        ></v-coord>\n        <v-interval\n          position=\"type*value\"\n          color=\"#CBCBCB\"\n          [size]=\"6\"\n        ></v-interval>\n      </v-view>\n      <v-view [data]=\"dataBackground\" [scale]=\"insideScale\">\n        <v-axis dataKey=\"value\" [show]=\"show\"></v-axis>\n        <v-axis\n          dataKey=\"type\"\n          [grid]=\"null\"\n          [line]=\"null\"\n          [tickLine]=\"null\"\n          [label]=\"insideAxisLabel\"\n        ></v-axis>\n        <v-coord\n          type=\"polar\"\n          [startAngle]=\"-202.5\"\n          [endAngle]=\"22.5\"\n          [innerRadius]=\"0.95\"\n          [radius]=\"0.55\"\n        ></v-coord>\n        <v-interval\n          position=\"type*value\"\n          color=\"#CBCBCB\"\n          [size]=\"6\"\n        ></v-interval>\n      </v-view>\n      <v-view [data]=\"dataFront\">\n        <v-coord\n          type=\"polar\"\n          [startAngle]=\"-202.5\"\n          [endAngle]=\"22.5\"\n          [innerRadius]=\"0.75\"\n          [radius]=\"0.8\"\n        ></v-coord>\n        <v-interval\n          position=\"type*value\"\n          [color]=\"frontIntervalColor\"\n          [opacity]=\"1\"\n          [size]=\"6\"\n        ></v-interval>\n        <v-guide\n          type=\"text\"\n          [position]=\"frontGuidePosition\"\n          content=\"26\u00B0\"\n          [style]=\"frontGuideStyle\"\n        ></v-guide>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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