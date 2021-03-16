(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-about-about-module"],{

/***/ "./src/app/components/about/about-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/about/about-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: aboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutRoutingModule", function() { return aboutRoutingModule; });
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    { path: "", component: _about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"] },
];
class aboutRoutingModule {
}
aboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: aboutRoutingModule });
aboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function aboutRoutingModule_Factory(t) { return new (t || aboutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](aboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](aboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth-service.service */ "./src/app/components/auth/auth-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





function AboutComponent_h1_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "successT4"), "");
} }
function AboutComponent_h2_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "successT4"), "");
} }
class AboutComponent {
    constructor(AuthServiceService) {
        this.AuthServiceService = AuthServiceService;
        this.togleShow = true;
    }
    ngOnInit() {
        this.AuthServiceService.togleShow.subscribe((s) => {
            this.togleShow = s;
            console.log(s);
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 74, vars: 47, consts: [[1, "about"], [1, "container"], [1, "vision"], [1, "row"], [1, "col-md-6"], ["src", "../../../assets/New folder/cup.png", "alt", ""], [1, "vision-box"], [1, "value", "text-center"], [1, "col-md-4"], [1, "value-box"], ["src", "../../../assets/Group 132.png", "alt", ""], ["src", "../../../assets/Group 122.png", "alt", ""], ["src", "../../../assets/Group 129.png", "alt", ""], [1, "redfine"], [1, "success"], [4, "ngIf"], [1, "photos"], ["src", "../../../assets/New folder/Group 27.png", "alt", ""]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AboutComponent_h1_70_Template, 3, 3, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, AboutComponent_h2_71_Template, 3, 3, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 17, "aboutT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 19, "aboutD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 21, "missionT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 23, "visionD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 25, "visionT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 27, "visionD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 29, "valueT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 31, "valueT4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 33, "valueD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 35, "valueBT4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 37, "valueD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 39, "valueBT42"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 41, "valueD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 43, "redfineT2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 45, "redfineB"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.togleShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.togleShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".about[_ngcontent-%COMP%]{\r\n    background-position: 118%;\r\n    padding-top: 124px;\r\n    color: white;\r\n    height: 572px;\r\n    background-image: url('homeBg.png');\r\n    }\r\n    .about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 80px;\r\n        font-weight: bold;\r\n        margin-bottom: 10px;\r\n    }\r\n    .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 17px;\r\n    }\r\n    \r\n    .vision[_ngcontent-%COMP%]{\r\n        background-color: #0C8A44;\r\n        padding-top: 102px;\r\n        padding-bottom: 70px;\r\n        color: white;\r\n    }\r\n    .vision[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        max-width: 100%;\r\n    }\r\n    .vision-box[_ngcontent-%COMP%]{\r\n        margin-left: 70px;\r\n    }\r\n    .vision-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 60px;\r\n        font-weight: bold;\r\n    }\r\n    .vision-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n    }\r\n    \r\n    \r\n    .value[_ngcontent-%COMP%]{\r\n        margin-top: 60px;\r\n    }\r\n    .value[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size: 60px;\r\n        margin-bottom: 65px;\r\n        font-size: 60px;\r\n        color: black;\r\n        font-weight: bold;\r\n        text-shadow: 5px 50px 3px #d6d2d2;\r\n    }\r\n    .value-box[_ngcontent-%COMP%]{\r\n       \r\n        padding: 40px 15px 45px 30px;\r\n        margin-bottom: 4px;\r\n    }\r\n    .value-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n        color: #58BA47;\r\n        font-weight: bold;\r\n        margin-top: 29px  ;\r\n    }\r\n    .value-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n        color: gray;\r\n    }\r\n    .value-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 40px;\r\n    \r\n    }\r\n    \r\n    \r\n    .redfine[_ngcontent-%COMP%]{\r\n        background-image: url('s.png');\r\n        padding-top: 75px;\r\n        text-align: left;\r\n        padding-left: 70px;\r\n    background-position: center;\r\n    height: 346px;\r\n    color: white;\r\n    }\r\n    .redfine[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n     font-size: 55px;   \r\n    }\r\n    .redfine[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n        font-weight: bold;\r\n        margin-left: 30px;\r\n        color: black;\r\n    }\r\n    \r\n    \r\n    .success[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 60px;position: relative;\r\n        font-weight: bold;\r\n        margin-top: 101px;\r\n    }\r\n    .success[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after{\r\n        position: absolute;\r\n        top: 40px;\r\n        left: -30px;\r\n        font-size: 90px;\r\n        content: 'Our success partners';\r\n        color: #e2dbdb;\r\n    }\r\n    .success[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        max-width: 100%;\r\n        margin-top: 86px;\r\n        margin-bottom: 30px;\r\n    }\r\n    \r\n    \r\n    @media screen and (max-width:992px){\r\n        .success[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after{display: none !important;}\r\n        .redfine[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n            font-size: 37px;\r\n        }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFpRDtJQUNqRDtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFFQSxnQkFBZ0I7SUFDaEI7UUFDSSx5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQSxjQUFjO0lBRWQsZUFBZTtJQUVmO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0EsVUFBVSxlQUFlO1FBQ3JCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixpQ0FBaUM7SUFDckM7SUFDQTs7UUFFSSw0QkFBNEI7UUFDNUIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFFQTtRQUNJLGVBQWU7UUFDZixXQUFXO0lBQ2Y7SUFFQTtRQUNJLFdBQVc7O0lBRWY7SUFDSSxhQUFhO0lBRVQsa0JBQWtCO0lBRTFCO1FBQ0ksOEJBQTRDO1FBQzVDLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsWUFBWTtJQUNaO0lBQ0E7S0FDQyxlQUFlO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixZQUFZO0lBQ2hCO0lBQ0ksZ0JBQWdCO0lBRVosaUJBQWlCO0lBRXpCO1FBQ0ksZUFBZSxDQUFDLGtCQUFrQjtRQUNsQyxpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFdBQVc7UUFDWCxlQUFlO1FBQ2YsK0JBQStCO1FBQy9CLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0ksZUFBZTtJQUluQix1QkFBdUI7SUFFdkI7UUFDSSxtQkFBbUIsd0JBQXdCLENBQUM7UUFDNUM7WUFDSSxlQUFlO1FBQ25CO0lBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXR7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMTglO1xyXG4gICAgcGFkZGluZy10b3A6IDEyNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA1NzJweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaG9tZUJnLnBuZyk7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQgcHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogc3RhcnQgdmlzaW9uKi9cclxuICAgIC52aXNpb257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBDOEE0NDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAycHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDcwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnZpc2lvbiBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnZpc2lvbi1ib3h7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAudmlzaW9uLWJveCBoMXtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAudmlzaW9uLWJveCBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC8qIGVuZCB2aXNpb24qL1xyXG5cclxuICAgIC8qIHN0YXJ0IHZhbHVlKi9cclxuXHJcbiAgICAudmFsdWV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIH1cclxuICAgIC52YWx1ZSBoMXtmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjVweDtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiA1cHggNTBweCAzcHggI2Q2ZDJkMjtcclxuICAgIH1cclxuICAgIC52YWx1ZS1ib3h7XHJcbiAgICAgICBcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDE1cHggNDVweCAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIH1cclxuICAgIC52YWx1ZS1ib3ggaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNThCQTQ3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI5cHggIDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZhbHVlLWJveCBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgIH1cclxuICAgXHJcbiAgICAudmFsdWUtYm94IGltZ3tcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgICAgIC8qIGVuZCB2YWx1ZSovXHJcblxyXG4gICAgICAgICAgICAvKiBzdGFydCByZWRlZmluZSovXHJcblxyXG4gICAgLnJlZGZpbmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9zLnBuZyk7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDc1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDM0NnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnJlZGZpbmUgaDJ7XHJcbiAgICAgZm9udC1zaXplOiA1NXB4OyAgIFxyXG4gICAgfVxyXG4gICAgLnJlZGZpbmUgcHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgICAgIC8qIGVuZCByZWRlZmluZSovXHJcblxyXG4gICAgICAgICAgICAvKiBzdGFydCBzdWNjZXNzKi9cclxuXHJcbiAgICAuc3VjY2VzcyBoMSAsLnN1Y2Nlc3MgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDFweDtcclxuICAgIH1cclxuICAgIC5zdWNjZXNzIGgxOjphZnRlcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0MHB4O1xyXG4gICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOTBweDtcclxuICAgICAgICBjb250ZW50OiAnT3VyIHN1Y2Nlc3MgcGFydG5lcnMnO1xyXG4gICAgICAgIGNvbG9yOiAjZTJkYmRiO1xyXG4gICAgfVxyXG4gICAgLnN1Y2Nlc3MgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4NnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAgICAgLyogZW5kIHN1Y2Nlc3MqL1xyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICAvKiBzdGFydCBtZWRpYSBxdWVyaWVzKi9cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCl7XHJcbiAgICAgICAgLnN1Y2Nlc3MgaDE6OmFmdGVye2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudDt9XHJcbiAgICAgICAgLnJlZGZpbmUgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzdweDtcclxuICAgICAgICB9XHJcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-about",
                templateUrl: "./about.component.html",
                styleUrls: ["./about.component.css"],
            }]
    }], function () { return [{ type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/about/about.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/about/about.module.ts ***!
  \**************************************************/
/*! exports provided: aboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutModule", function() { return aboutModule; });
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/components/about/about-routing.module.ts");





class aboutModule {
}
aboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: aboutModule });
aboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function aboutModule_Factory(t) { return new (t || aboutModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["sharedModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["aboutRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](aboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["sharedModule"],
        _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["aboutRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](aboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["sharedModule"],
                    _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["aboutRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-about-about-module-es2015.js.map