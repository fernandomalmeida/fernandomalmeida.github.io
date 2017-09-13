webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Ações</h4>\n\n          <button type=\"button\" class=\"btn btn-link\" (click)=\"treinarEpoca()\">Executar Épocas</button>\n\n          <input type=\"number\" [(ngModel)]=\"numEpocas\">\n\n          <span id=\"saida\">{{ 'Número de Épocas (' + epocasTreinadas + ')' }}</span>\n          <br/>\n          <button type=\"button\" class=\"btn btn-link\" (click)=\"adicionarRBF()\" [disabled]=\"rbfAdicionada\">Adicionar RBF</button>\n          <input type=\"number\" [(ngModel)]=\"pesoRBF\" [disabled]=\"rbfAdicionada\">\n          <br/>\n          <span>Conjunto de Dado</span>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-primary\" [(ngModel)]=\"baseDeDados\" btnRadio=\"degrau\" (click)=\"initialize()\">Função Degrau</label>\n            <label class=\"btn btn-primary\" [(ngModel)]=\"baseDeDados\" btnRadio=\"parabola\" (click)=\"initialize()\">Função Parábola</label>\n            <label class=\"btn btn-primary\" [(ngModel)]=\"baseDeDados\" btnRadio=\"seno\" (click)=\"initialize()\">Função Seno com falso intruso</label>\n          </div>\n          <br/>\n          <button type=\"button\" class=\"btn btn-link\" (click)=\"initialize()\">Reiniciar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Gráfico de Erro</h4>\n          <grafico-erro #graficoErro></grafico-erro>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Gráfico da Rede Neural</h4>\n          <grafico-rede-neural #graficoRedeNeural [trainData]=\"data.train\" [testData]=\"data.test\" ></grafico-rede-neural>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Histograma dos Erros</h4>\n          <histograma-erro #histogramaErro></histograma-erro>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__histograma_erro_histograma_erro_component__ = __webpack_require__("../../../../../src/app/histograma-erro/histograma-erro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__neural_network__ = __webpack_require__("../../../../../src/app/neural-network.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grafico_rede_neural_grafico_rede_neural_component__ = __webpack_require__("../../../../../src/app/grafico-rede-neural/grafico-rede-neural.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grafico_erro_grafico_erro_component__ = __webpack_require__("../../../../../src/app/grafico-erro/grafico-erro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent() {
        this.data = {
            train: [],
            test: []
        };
        this.baseDeDados = "degrau";
        this.errors = [];
        this.rbfAdicionada = false;
        this.epocasTreinadas = 0;
        this.numEpocas = 1;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.initialize();
    };
    AppComponent.prototype.initialize = function () {
        this.data.train.splice(0, this.data.train.length);
        this.data.test.splice(0, this.data.test.length);
        for (var i = 0; i < 20; i++) {
            var x = Math.random() * 2 - 1;
            var y = void 0;
            switch (this.baseDeDados) {
                case "degrau":
                    y = (x > 0 ? 1 : -1);
                    break;
                case "parabola":
                    y = -1 * ((x * x) + Math.random() * 0.05 - 1);
                    break;
                case "seno":
                    y = Math.sin(x * Math.PI);
                    if (i == 12) {
                        x = 0.6;
                        y = -1;
                    }
                    break;
            }
            if (i > 6) {
                this.data.train.push({ x: x, y: y });
            }
            else {
                this.data.test.push({ x: x, y: y });
            }
        }
        // this.nn = new NeuralNetwork([
        //   // [
        //   //   new Neuron(1, Tgh)
        //   // ]
        //   [
        //     new Neuron(1, Tgh),
        //     new Neuron(1, Tgh),
        //     new Neuron(1, Tgh)
        //   ],
        //   [
        //     new Neuron(3, Tgh)
        //   ]
        // ]);
        this.new_nn = Object(__WEBPACK_IMPORTED_MODULE_1__neural_network__["e" /* buildNetwork */])([1, 3, 1], __WEBPACK_IMPORTED_MODULE_1__neural_network__["a" /* Activations */].TANH, __WEBPACK_IMPORTED_MODULE_1__neural_network__["a" /* Activations */].LINEAR, undefined, ['1'], false);
        // this.new_nn = buildNetwork([1,5,1], Activations.RBF, Activations.LINEAR, undefined, ['1'], false);
        this.graficoRedeNeural.atualizaNN(this.new_nn);
        this.histogramaErro.atualizaHistograma([], []);
        this.graficoErro.clear();
        this.rbfAdicionada = false;
        this.epocasTreinadas = 0;
    };
    AppComponent.prototype.treinarEpoca = function () {
        var _this = this;
        for (var i = 0; i < this.numEpocas; i++) {
            this.data.train.forEach(function (point, i) {
                var input = [point.x];
                Object(__WEBPACK_IMPORTED_MODULE_1__neural_network__["f" /* forwardProp */])(_this.new_nn, input);
                Object(__WEBPACK_IMPORTED_MODULE_1__neural_network__["d" /* backProp */])(_this.new_nn, point.y, __WEBPACK_IMPORTED_MODULE_1__neural_network__["b" /* Errors */].SQUARE);
            });
            Object(__WEBPACK_IMPORTED_MODULE_1__neural_network__["h" /* updateWeights */])(this.new_nn, 0.5, 0);
            // Compute the loss.
            var lossTrain = this.getLoss(this.new_nn, this.data.train);
            var lossTest = this.getLoss(this.new_nn, this.data.test);
            // let erro = this.nn.trainEpoch(this.data.train.map((tuple) => {
            //   return {
            //     input: [tuple.x],
            //     output: [tuple.y]
            //   }
            // }));
            this.graficoErro.adicionaErro(lossTrain, lossTest);
            this.graficoRedeNeural.atualizaNN(this.new_nn);
        }
        var histogramaTreinamento = this.getLossHistogram(this.new_nn, this.data.train);
        var histogramaTeste = this.getLossHistogram(this.new_nn, this.data.test);
        this.histogramaErro.atualizaHistograma(histogramaTreinamento, histogramaTeste);
        this.epocasTreinadas += this.numEpocas;
    };
    AppComponent.prototype.adicionarRBF = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__neural_network__["c" /* adicionaRBF */])(this.new_nn, parseFloat(this.pesoRBF));
        this.graficoRedeNeural.atualizaNN(this.new_nn);
        this.rbfAdicionada = true;
    };
    AppComponent.prototype.getLoss = function (network, dataPoints) {
        var loss = 0;
        for (var i = 0; i < dataPoints.length; i++) {
            var dataPoint = dataPoints[i];
            var input = [dataPoint.x];
            var output = Object(__WEBPACK_IMPORTED_MODULE_1__neural_network__["f" /* forwardProp */])(network, input);
            loss += __WEBPACK_IMPORTED_MODULE_1__neural_network__["b" /* Errors */].SQUARE.error(output, dataPoint.y);
        }
        return loss / dataPoints.length;
    };
    AppComponent.prototype.getLossHistogram = function (network, dataPoints) {
        var losses = [];
        for (var i = 0; i < dataPoints.length; i++) {
            var dataPoint = dataPoints[i];
            var input = [dataPoint.x];
            var output = Object(__WEBPACK_IMPORTED_MODULE_1__neural_network__["f" /* forwardProp */])(network, input);
            losses.push(__WEBPACK_IMPORTED_MODULE_1__neural_network__["b" /* Errors */].SQUARE.error(output, dataPoint.y));
        }
        return losses.sort();
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('graficoErro'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__grafico_erro_grafico_erro_component__["a" /* GraficoErroComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__grafico_erro_grafico_erro_component__["a" /* GraficoErroComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "graficoErro", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('graficoRedeNeural'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__grafico_rede_neural_grafico_rede_neural_component__["a" /* GraficoRedeNeuralComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__grafico_rede_neural_grafico_rede_neural_component__["a" /* GraficoRedeNeuralComponent */]) === "function" && _b || Object)
], AppComponent.prototype, "graficoRedeNeural", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('histogramaErro'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__histograma_erro_histograma_erro_component__["a" /* HistogramaErroComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__histograma_erro_histograma_erro_component__["a" /* HistogramaErroComponent */]) === "function" && _c || Object)
], AppComponent.prototype, "histogramaErro", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_buttons__ = __webpack_require__("../../../../ngx-bootstrap/buttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grafico_erro_grafico_erro_component__ = __webpack_require__("../../../../../src/app/grafico-erro/grafico-erro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grafico_rede_neural_grafico_rede_neural_component__ = __webpack_require__("../../../../../src/app/grafico-rede-neural/grafico-rede-neural.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__histograma_erro_histograma_erro_component__ = __webpack_require__("../../../../../src/app/histograma-erro/histograma-erro.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__grafico_erro_grafico_erro_component__["a" /* GraficoErroComponent */],
            __WEBPACK_IMPORTED_MODULE_8__grafico_rede_neural_grafico_rede_neural_component__["a" /* GraficoRedeNeuralComponent */],
            __WEBPACK_IMPORTED_MODULE_9__histograma_erro_histograma_erro_component__["a" /* HistogramaErroComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/grafico-erro/grafico-erro.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: block;\">\n  <canvas #graficoErro></canvas>\n</div>"

/***/ }),

/***/ "../../../../../src/app/grafico-erro/grafico-erro.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grafico-erro/grafico-erro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficoErroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraficoErroComponent = (function () {
    function GraficoErroComponent() {
        this.config = {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Erro Treinamento',
                        data: [],
                        pointBackgroundColor: '#ee0000',
                        backgroundColor: '#ee4444',
                        borderColor: '#990000',
                        pointBorderColor: '#990000',
                        showLine: true
                    },
                    {
                        label: 'Teste',
                        data: [],
                        pointBackgroundColor: '#00ee00',
                        backgroundColor: '#44ee44',
                        borderColor: '#009900',
                        pointBorderColor: '#009900'
                    },
                ]
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            type: 'linear',
                            position: 'bottom'
                        }
                    ]
                },
                elements: {
                    line: {
                        tension: 0,
                        fill: false
                    }
                },
                showLines: true
            }
        };
    }
    GraficoErroComponent.prototype.ngOnInit = function () {
    };
    GraficoErroComponent.prototype.ngAfterViewInit = function () {
        var ctx = this.canvasElement.nativeElement.getContext('2d');
        this.scatter = new __WEBPACK_IMPORTED_MODULE_1_chart_js__(this.canvasElement.nativeElement.getContext('2d'), this.config);
    };
    GraficoErroComponent.prototype.clear = function () {
        this.config.data.datasets[0].data = [];
        this.config.data.datasets[1].data = [];
        this.scatter.update();
    };
    GraficoErroComponent.prototype.adicionaErro = function (erroTreinamento, erroTeste) {
        this.config.data.datasets[0].data.push({
            y: erroTreinamento,
            x: this.config.data.datasets[0].data.length
        });
        this.config.data.datasets[1].data.push({
            y: erroTeste,
            x: this.config.data.datasets[1].data.length
        });
        this.scatter.update();
    };
    return GraficoErroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('graficoErro'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], GraficoErroComponent.prototype, "canvasElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GraficoErroComponent.prototype, "errors", void 0);
GraficoErroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'grafico-erro',
        template: __webpack_require__("../../../../../src/app/grafico-erro/grafico-erro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/grafico-erro/grafico-erro.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], GraficoErroComponent);

var _a;
//# sourceMappingURL=grafico-erro.component.js.map

/***/ }),

/***/ "../../../../../src/app/grafico-rede-neural/grafico-rede-neural.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: block;\">\n  <canvas #graficoRedeNeural></canvas>\n</div>"

/***/ }),

/***/ "../../../../../src/app/grafico-rede-neural/grafico-rede-neural.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grafico-rede-neural/grafico-rede-neural.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficoRedeNeuralComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__neural_network__ = __webpack_require__("../../../../../src/app/neural-network.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraficoRedeNeuralComponent = (function () {
    function GraficoRedeNeuralComponent() {
        this.trainData = [];
        this.testData = [];
    }
    GraficoRedeNeuralComponent.prototype.ngAfterViewInit = function () {
        var ctx = this.canvasElement.nativeElement.getContext('2d');
        this.config = {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Saída Rede Neural',
                        data: [],
                        pointBackgroundColor: '#0000ee',
                        backgroundColor: '#4444ee',
                        borderColor: '#000099',
                        pointBorderColor: '#000099',
                        showLine: true,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        lineTension: 0.2
                    },
                    {
                        label: 'Treinamento',
                        data: this.trainData,
                        pointBackgroundColor: '#ee0000',
                        backgroundColor: '#ee4444',
                        borderColor: '#990000',
                        pointBorderColor: '#990000',
                        showLine: false
                    },
                    {
                        label: 'Teste',
                        data: this.testData,
                        pointBackgroundColor: '#00ee00',
                        backgroundColor: '#44ee44',
                        borderColor: '#009900',
                        pointBorderColor: '#009900',
                        showLine: false
                    },
                    {
                        label: 'Bias',
                        data: [],
                        pointBackgroundColor: '#444444',
                        backgroundColor: '#444444',
                        borderColor: '#000000',
                        pointBorderColor: '#000000',
                        showLine: true,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        lineTension: 0.2
                    },
                    {
                        label: 'Neurônio 1',
                        data: [],
                        pointBackgroundColor: '#00eeee',
                        backgroundColor: '#44eeee',
                        borderColor: '#009999',
                        pointBorderColor: '#009999',
                        showLine: true,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        lineTension: 0.2
                    },
                    {
                        label: 'Neurônio 2',
                        data: [],
                        pointBackgroundColor: '#ee00ee',
                        backgroundColor: '#ee44ee',
                        borderColor: '#990099',
                        pointBorderColor: '#990099',
                        showLine: true,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        lineTension: 0.2
                    },
                    {
                        label: 'Neurônio 3',
                        data: [],
                        pointBackgroundColor: '#eeee00',
                        backgroundColor: '#eeee44',
                        borderColor: '#999900',
                        pointBorderColor: '#999900',
                        showLine: true,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        lineTension: 0.2
                    },
                    // {
                    //   label: 'Neurônio 4',
                    //   data: [],
                    //   pointBackgroundColor: '#ee0000',
                    //   backgroundColor: '#ee4444',
                    //   borderColor: '#990000',
                    //   pointBorderColor: '#990000',
                    //   showLine: true,
                    //   pointRadius: 0,
                    //   pointHoverRadius: 0,
                    //   lineTension: 0.2
                    // },
                    // {
                    //   label: 'Neurônio 5',
                    //   data: [],
                    //   pointBackgroundColor: '#00ee00',
                    //   backgroundColor: '#44ee44',
                    //   borderColor: '#009900',
                    //   pointBorderColor: '#009900',
                    //   showLine: true,
                    //   pointRadius: 0,
                    //   pointHoverRadius: 0,
                    //   lineTension: 0.2
                    // },
                    {
                        label: 'Neurônio RBF',
                        data: [],
                        pointBackgroundColor: '#eeeeee',
                        backgroundColor: '#eeeeee',
                        borderColor: '#999999',
                        pointBorderColor: '#999999',
                        showLine: true,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        lineTension: 0.2
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: []
                },
                elements: {
                    line: {
                        tension: 0,
                        fill: false
                    }
                },
                showLines: true
            }
        };
        this.scatter = new __WEBPACK_IMPORTED_MODULE_2_chart_js__(this.canvasElement.nativeElement.getContext('2d'), this.config);
    };
    // public atualizaNN(nn: NeuralNetwork) {
    //   let saidaNN = [];
    //   for(let i = -1; i<=1; i+=0.05) {
    //     let out = nn.out([i]);
    //     saidaNN.push({
    //       x: i,
    //       y: out[0]
    //     });
    //   }
    //   this.config.data.datasets[0].data = saidaNN;
    //   this.scatter.update();
    // }
    GraficoRedeNeuralComponent.prototype.atualizaNN = function (nn) {
        var _this = this;
        var saidaNN = [];
        var biasSaidaNN = [];
        var saidasNeuronios = [];
        for (var i = 0; i < nn[1].length; i++) {
            saidasNeuronios.push([]);
        }
        for (var i = -1; i <= 1; i += 0.05) {
            Object(__WEBPACK_IMPORTED_MODULE_0__neural_network__["f" /* forwardProp */])(nn, [i]);
            var out = Object(__WEBPACK_IMPORTED_MODULE_0__neural_network__["g" /* getOutputNode */])(nn).output;
            for (var j = 0; j < nn[1].length; j++) {
                var neuronio = nn[1][j];
                saidasNeuronios[j].push({
                    x: i,
                    y: neuronio.output * neuronio.outputs[0].weight
                });
            }
            saidaNN.push({
                x: i,
                y: out
            });
            biasSaidaNN.push({
                x: i,
                y: Object(__WEBPACK_IMPORTED_MODULE_0__neural_network__["g" /* getOutputNode */])(nn).bias
            });
        }
        this.config.data.datasets[0].data = saidaNN;
        this.config.data.datasets[3].data = biasSaidaNN;
        for (var i = 4; i < this.config.data.datasets.length; i++) {
            this.config.data.datasets[i].data = [];
        }
        saidasNeuronios.forEach(function (saidaNeurionio, index) {
            _this.config.data.datasets[4 + index].data = saidaNeurionio;
        });
        this.scatter.update();
    };
    return GraficoRedeNeuralComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('graficoRedeNeural'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
], GraficoRedeNeuralComponent.prototype, "canvasElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GraficoRedeNeuralComponent.prototype, "trainData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GraficoRedeNeuralComponent.prototype, "testData", void 0);
GraficoRedeNeuralComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'grafico-rede-neural',
        template: __webpack_require__("../../../../../src/app/grafico-rede-neural/grafico-rede-neural.component.html"),
        styles: [__webpack_require__("../../../../../src/app/grafico-rede-neural/grafico-rede-neural.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], GraficoRedeNeuralComponent);

var _a;
//# sourceMappingURL=grafico-rede-neural.component.js.map

/***/ }),

/***/ "../../../../../src/app/histograma-erro/histograma-erro.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: block;\">\n  <canvas #histogramaErro></canvas>\n</div>"

/***/ }),

/***/ "../../../../../src/app/histograma-erro/histograma-erro.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/histograma-erro/histograma-erro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistogramaErroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistogramaErroComponent = (function () {
    function HistogramaErroComponent() {
        this.config = {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Treinamento',
                        data: [],
                        pointBackgroundColor: '#ee0000',
                        backgroundColor: '#ee4444',
                        borderColor: '#990000',
                        pointBorderColor: '#990000',
                        showLine: true
                    },
                    {
                        label: 'Teste',
                        data: [],
                        pointBackgroundColor: '#0000ee',
                        backgroundColor: '#4444ee',
                        borderColor: '#000099',
                        pointBorderColor: '#000099',
                        showLine: true
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            type: 'linear',
                            position: 'bottom'
                        }
                    ]
                },
                elements: {
                    line: {
                        tension: 0,
                        fill: false
                    }
                },
                showLines: true
            }
        };
    }
    HistogramaErroComponent.prototype.ngOnInit = function () {
    };
    HistogramaErroComponent.prototype.ngAfterViewInit = function () {
        var ctx = this.canvasElement.nativeElement.getContext('2d');
        this.scatter = new __WEBPACK_IMPORTED_MODULE_1_chart_js__(this.canvasElement.nativeElement.getContext('2d'), this.config);
    };
    HistogramaErroComponent.prototype.calculaHistograma = function (erros) {
        var passo = 0.1;
        var limiteAtual = 0;
        var histograma = {};
        histograma[limiteAtual.toString()] = 0;
        erros.forEach(function (erro) {
            while (erro >= limiteAtual) {
                limiteAtual += passo;
                histograma[limiteAtual.toString()] = 0;
            }
            histograma[limiteAtual.toString()] += 1;
        });
        limiteAtual += passo;
        histograma[limiteAtual.toString()] = 0;
        return histograma;
    };
    HistogramaErroComponent.prototype.atualizaHistograma = function (errosTreinamento, errosTeste) {
        var histogramaTreinamento = this.calculaHistograma(errosTreinamento);
        var histogramaTeste = this.calculaHistograma(errosTeste);
        this.config.data.datasets[0].data = Object.keys(histogramaTreinamento)
            .map(function (key) {
            return {
                y: histogramaTreinamento[key],
                x: parseFloat(key)
            };
        });
        this.config.data.datasets[1].data = Object.keys(histogramaTeste)
            .map(function (key) {
            return {
                y: histogramaTeste[key],
                x: parseFloat(key)
            };
        });
        this.scatter.update();
    };
    return HistogramaErroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('histogramaErro'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], HistogramaErroComponent.prototype, "canvasElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], HistogramaErroComponent.prototype, "errors", void 0);
HistogramaErroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'histograma-erro',
        template: __webpack_require__("../../../../../src/app/histograma-erro/histograma-erro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/histograma-erro/histograma-erro.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HistogramaErroComponent);

var _a;
//# sourceMappingURL=histograma-erro.component.js.map

/***/ }),

/***/ "../../../../../src/app/neural-network.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Node */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activations; });
/* unused harmony export RegularizationFunction */
/* unused harmony export Link */
/* harmony export (immutable) */ __webpack_exports__["e"] = buildNetwork;
/* harmony export (immutable) */ __webpack_exports__["c"] = adicionaRBF;
/* harmony export (immutable) */ __webpack_exports__["f"] = forwardProp;
/* harmony export (immutable) */ __webpack_exports__["d"] = backProp;
/* harmony export (immutable) */ __webpack_exports__["h"] = updateWeights;
/* unused harmony export forEachNode */
/* harmony export (immutable) */ __webpack_exports__["g"] = getOutputNode;
/* Copyright 2016 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
/**
 * A node in a neural network. Each node has a state
 * (total input, output, and their respectively derivatives) which changes
 * after every forward and back propagation run.
 */
var Node = (function () {
    /**
     * Creates a new node with the provided id and activation function.
     */
    function Node(id, activation, initZero) {
        /** List of input links. */
        this.inputLinks = [];
        this.bias = 0.1;
        /** List of output links. */
        this.outputs = [];
        /** Error derivative with respect to this node's output. */
        this.outputDer = 0;
        /** Error derivative with respect to this node's total input. */
        this.inputDer = 0;
        /**
         * Accumulated error derivative with respect to this node's total input since
         * the last update. This derivative equals dE/db where b is the node's
         * bias term.
         */
        this.accInputDer = 0;
        /**
         * Number of accumulated err. derivatives with respect to the total input
         * since the last update.
         */
        this.numAccumulatedDers = 0;
        this.sigma = 1;
        this.sigmaDer = 0;
        this.numAccumulatedDersSigma = 0;
        this.id = id;
        this.activation = activation;
        if (this.activation === Activations.RBF) {
            this.sigma = 0.01;
        }
        if (initZero) {
            this.bias = 0;
        }
    }
    /** Recomputes the node's output and returns it. */
    Node.prototype.updateOutput = function () {
        // Stores total input into the node.
        if (this.activation === Activations.RBF) {
            this.totalInput = 0;
            for (var j = 0; j < this.inputLinks.length; j++) {
                var link = this.inputLinks[j];
                var distance = (link.weight - link.source.output);
                this.totalInput += distance * distance;
            }
            var exponencial = this.totalInput / (this.sigma * this.sigma);
            this.output = this.activation.output(exponencial);
        }
        else {
            this.totalInput = this.bias;
            for (var j = 0; j < this.inputLinks.length; j++) {
                var link = this.inputLinks[j];
                this.totalInput += link.weight * link.source.output;
            }
            this.output = this.activation.output(this.totalInput);
        }
        return this.output;
    };
    return Node;
}());

/** Built-in error functions */
var Errors = (function () {
    function Errors() {
    }
    return Errors;
}());

Errors.SQUARE = {
    error: function (output, target) {
        return 0.5 * Math.pow(output - target, 2);
    },
    der: function (output, target) { return output - target; }
};
/** Polyfill for TANH */
Math.tanh = Math.tanh || function (x) {
    if (x === Infinity) {
        return 1;
    }
    else if (x === -Infinity) {
        return -1;
    }
    else {
        var e2x = Math.exp(2 * x);
        return (e2x - 1) / (e2x + 1);
    }
};
/** Built-in activation functions */
var Activations = (function () {
    function Activations() {
    }
    return Activations;
}());

Activations.TANH = {
    output: function (x) { return Math.tanh(x); },
    der: function (x) {
        var output = Activations.TANH.output(x);
        return 1 - output * output;
    }
};
Activations.RELU = {
    output: function (x) { return Math.max(0, x); },
    der: function (x) { return x <= 0 ? 0 : 1; }
};
Activations.SIGMOID = {
    output: function (x) { return 1 / (1 + Math.exp(-x)); },
    der: function (x) {
        var output = Activations.SIGMOID.output(x);
        return output * (1 - output);
    }
};
Activations.LINEAR = {
    output: function (x) { return x; },
    der: function (x) { return 1; }
};
Activations.RBF = {
    output: function (x) { return Math.exp(-0.5 * x); },
    der: function (x) { return Activations.RBF.output(x); }
};
/** Build-in regularization functions */
var RegularizationFunction = (function () {
    function RegularizationFunction() {
    }
    return RegularizationFunction;
}());

RegularizationFunction.L1 = {
    output: function (w) { return Math.abs(w); },
    der: function (w) { return w < 0 ? -1 : (w > 0 ? 1 : 0); }
};
RegularizationFunction.L2 = {
    output: function (w) { return 0.5 * w * w; },
    der: function (w) { return w; }
};
/**
 * A link in a neural network. Each link has a weight and a source and
 * destination node. Also it has an internal state (error derivative
 * with respect to a particular input) which gets updated after
 * a run of back propagation.
 */
var Link = (function () {
    /**
     * Constructs a link in the neural network initialized with random weight.
     *
     * @param source The source node.
     * @param dest The destination node.
     * @param regularization The regularization function that computes the
     *     penalty for this weight. If null, there will be no regularization.
     */
    function Link(source, dest, regularization, initZero) {
        this.weight = Math.random() - 0.5;
        this.isDead = false;
        /** Error derivative with respect to this weight. */
        this.errorDer = 0;
        /** Accumulated error derivative since the last update. */
        this.accErrorDer = 0;
        /** Number of accumulated derivatives since the last update. */
        this.numAccumulatedDers = 0;
        this.id = source.id + "-" + dest.id;
        this.source = source;
        this.dest = dest;
        this.regularization = regularization;
        if (initZero) {
            this.weight = 0;
        }
    }
    return Link;
}());

/**
 * Builds a neural network.
 *
 * @param networkShape The shape of the network. E.g. [1, 2, 3, 1] means
 *   the network will have one input node, 2 nodes in first hidden layer,
 *   3 nodes in second hidden layer and 1 output node.
 * @param activation The activation function of every hidden node.
 * @param outputActivation The activation function for the output nodes.
 * @param regularization The regularization function that computes a penalty
 *     for a given weight (parameter) in the network. If null, there will be
 *     no regularization.
 * @param inputIds List of ids for the input nodes.
 */
function buildNetwork(networkShape, activation, outputActivation, regularization, inputIds, initZero) {
    var numLayers = networkShape.length;
    var id = 1;
    /** List of layers, with each layer being a list of nodes. */
    var network = [];
    for (var layerIdx = 0; layerIdx < numLayers; layerIdx++) {
        var isOutputLayer = layerIdx === numLayers - 1;
        var isInputLayer = layerIdx === 0;
        var currentLayer = [];
        network.push(currentLayer);
        var numNodes = networkShape[layerIdx];
        for (var i = 0; i < numNodes; i++) {
            var nodeId = id.toString();
            if (isInputLayer) {
                nodeId = inputIds[i];
            }
            else {
                id++;
            }
            var node = new Node(nodeId, isOutputLayer ? outputActivation : activation, initZero);
            currentLayer.push(node);
            if (layerIdx >= 1) {
                // Add links from nodes in the previous layer to this node.
                for (var j = 0; j < network[layerIdx - 1].length; j++) {
                    var prevNode = network[layerIdx - 1][j];
                    var link = new Link(prevNode, node, regularization, initZero);
                    prevNode.outputs.push(link);
                    node.inputLinks.push(link);
                }
            }
        }
    }
    return network;
}
function adicionaRBF(network, weight) {
    if (network.length >= 3) {
        var layerIdx = 1;
        var currentLayer = network[layerIdx];
        var node = new Node('0', Activations.RBF, false);
        currentLayer.push(node);
        for (var j = 0; j < network[layerIdx - 1].length; j++) {
            var prevNode_1 = network[layerIdx - 1][j];
            var link_1 = new Link(prevNode_1, node, undefined, false);
            link_1.weight = weight;
            prevNode_1.outputs.push(link_1);
            node.inputLinks.push(link_1);
        }
        var prevNode = node;
        var currentNode = network[layerIdx + 1][0];
        var link = new Link(prevNode, currentNode, undefined, false);
        prevNode.outputs.push(link);
        currentNode.inputLinks.push(link);
    }
}
/**
 * Runs a forward propagation of the provided input through the provided
 * network. This method modifies the internal state of the network - the
 * total input and output of each node in the network.
 *
 * @param network The neural network.
 * @param inputs The input array. Its length should match the number of input
 *     nodes in the network.
 * @return The final output of the network.
 */
function forwardProp(network, inputs) {
    var inputLayer = network[0];
    // inputs.push((inputs[0]*inputs[0])*2-1);
    if (inputs.length !== inputLayer.length) {
        throw new Error("The number of inputs must match the number of nodes in" +
            " the input layer");
    }
    // Update the input layer.
    for (var i = 0; i < inputLayer.length; i++) {
        var node = inputLayer[i];
        node.output = inputs[i];
    }
    for (var layerIdx = 1; layerIdx < network.length; layerIdx++) {
        var currentLayer = network[layerIdx];
        // Update all the nodes in this layer.
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            node.updateOutput();
        }
    }
    return network[network.length - 1][0].output;
}
/**
 * Runs a backward propagation using the provided target and the
 * computed output of the previous call to forward propagation.
 * This method modifies the internal state of the network - the error
 * derivatives with respect to each node, and each weight
 * in the network.
 */
function backProp(network, target, errorFunc) {
    // The output node is a special case. We use the user-defined error
    // function for the derivative.
    var outputNode = network[network.length - 1][0];
    outputNode.outputDer = errorFunc.der(outputNode.output, target);
    // Go through the layers backwards.
    for (var layerIdx = network.length - 1; layerIdx >= 1; layerIdx--) {
        var currentLayer = network[layerIdx];
        // Compute the error derivative of each node with respect to:
        // 1) its total input
        // 2) each of its input weights.
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            node.inputDer = node.outputDer * node.activation.der(node.totalInput);
            node.accInputDer += node.inputDer;
            node.numAccumulatedDers++;
        }
        // Error derivative with respect to each weight coming into the node.
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            for (var j = 0; j < node.inputLinks.length; j++) {
                var link = node.inputLinks[j];
                if (link.isDead) {
                    continue;
                }
                if (node.activation === Activations.RBF) {
                    // ti * - zi/2*sigma*sigma * 2 * (wij - xj)
                    // link.errorDer = 
                    //   node.outputs[0].weight *
                    //   -1 *
                    //   node.output/(2*node.sigma*node.sigma) *
                    //   (2*(link.weight - node.inputDer)) *
                    //   link.source.output;
                    // link.errorDer = node.inputDer * link.source.output;
                    link.errorDer = 0;
                    // link.errorDer = node.outputs[0].weight * -1 * node.output/(2*node.sigma*node.sigma) * (2*(link.weight - node.inputDer));
                    // ti * (di*di*zi)/sigma*sigma*sigma
                    node.sigmaDer = (node.outputs[0].weight * (((link.weight - node.inputDer) * (link.weight - node.inputDer) * node.output) / (node.sigma * node.sigma * node.sigma)));
                    node.sigmaDer = 0;
                    node.numAccumulatedDersSigma++;
                }
                else {
                    // xj * gammai
                    link.errorDer = node.inputDer * link.source.output;
                }
                link.accErrorDer += link.errorDer;
                link.numAccumulatedDers++;
            }
        }
        if (layerIdx === 1) {
            continue;
        }
        var prevLayer = network[layerIdx - 1];
        for (var i = 0; i < prevLayer.length; i++) {
            var node = prevLayer[i];
            // Compute the error derivative with respect to each node's output.
            node.outputDer = 0;
            for (var j = 0; j < node.outputs.length; j++) {
                var output = node.outputs[j];
                node.outputDer += output.weight * output.dest.inputDer;
            }
        }
    }
}
/**
 * Updates the weights of the network using the previously accumulated error
 * derivatives.
 */
function updateWeights(network, learningRate, regularizationRate) {
    for (var layerIdx = 1; layerIdx < network.length; layerIdx++) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            // Update the node's bias.
            if (node.numAccumulatedDers > 0) {
                node.bias -= learningRate * node.accInputDer / node.numAccumulatedDers;
                node.accInputDer = 0;
                node.numAccumulatedDers = 0;
            }
            if (node.activation === Activations.RBF) {
                var newSigma = node.sigma - (learningRate) * node.sigmaDer / node.numAccumulatedDersSigma;
                node.sigma = newSigma;
                node.sigmaDer = 0;
                node.numAccumulatedDersSigma = 0;
            }
            // Update the weights coming into this node.
            for (var j = 0; j < node.inputLinks.length; j++) {
                var link = node.inputLinks[j];
                if (link.isDead) {
                    continue;
                }
                var regulDer = link.regularization ?
                    link.regularization.der(link.weight) : 0;
                if (link.numAccumulatedDers > 0) {
                    // Update the weight based on dE/dw.
                    link.weight = link.weight -
                        (learningRate / link.numAccumulatedDers) * link.accErrorDer;
                    // Further update the weight based on regularization.
                    var newLinkWeight = link.weight -
                        (learningRate * regularizationRate) * regulDer;
                    if (link.regularization === RegularizationFunction.L1 &&
                        link.weight * newLinkWeight < 0) {
                        // The weight crossed 0 due to the regularization term. Set it to 0.
                        link.weight = 0;
                        link.isDead = true;
                    }
                    else {
                        link.weight = newLinkWeight;
                    }
                    link.accErrorDer = 0;
                    link.numAccumulatedDers = 0;
                }
            }
        }
    }
}
/** Iterates over every node in the network/ */
function forEachNode(network, ignoreInputs, accessor) {
    for (var layerIdx = ignoreInputs ? 1 : 0; layerIdx < network.length; layerIdx++) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            accessor(node);
        }
    }
}
/** Returns the output node in the network. */
function getOutputNode(network) {
    return network[network.length - 1][0];
}
//# sourceMappingURL=neural-network.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map