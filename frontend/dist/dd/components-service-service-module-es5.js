function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-service-service-module"], {
  /***/
  "./src/app/components/service/service-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/service/service-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: serviceRoutingModule */

  /***/
  function srcAppComponentsServiceServiceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "serviceRoutingModule", function () {
      return serviceRoutingModule;
    });
    /* harmony import */


    var _service_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./service.component */
    "./src/app/components/service/service.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: "",
      component: _service_component__WEBPACK_IMPORTED_MODULE_0__["ServiceComponent"]
    }];

    var serviceRoutingModule = function serviceRoutingModule() {
      _classCallCheck(this, serviceRoutingModule);
    };

    serviceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: serviceRoutingModule
    });
    serviceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function serviceRoutingModule_Factory(t) {
        return new (t || serviceRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](serviceRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](serviceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/service/service.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/service/service.component.ts ***!
    \*********************************************************/

  /*! exports provided: ServiceComponent */

  /***/
  function srcAppComponentsServiceServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceComponent", function () {
      return ServiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ServiceComponent =
    /*#__PURE__*/
    function () {
      function ServiceComponent() {
        _classCallCheck(this, ServiceComponent);
      }

      _createClass(ServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServiceComponent;
    }();

    ServiceComponent.ɵfac = function ServiceComponent_Factory(t) {
      return new (t || ServiceComponent)();
    };

    ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServiceComponent,
      selectors: [["app-service"]],
      decls: 66,
      vars: 39,
      consts: [[1, "service", "text-center"], [1, "container"], [1, "row"], [1, "col-md-6"], ["src", "../../../assets/New folder/tt.png", "alt", "", 1, "s"], ["src", "../../../assets/Group 154.png", "alt", "", 2, "max-width", "100% !important"], [1, "im", "text-center"], [1, "col-md-7"], ["src", "../../../assets/Group 141.png", "alt", ""], ["src", "../../../assets/New folder/Rectangle 65.jpg", "alt", "", 1, "sp"], ["src", "../../../assets/New folder/ball.png", "alt", "", 1, "sp2"], [1, "furn", "text-center"], [1, "furn-box"], ["src", "../../../assets/New folder/Rectangle 70.png", "alt", ""], ["src", "../../../assets/Group 141.png", "alt", "", 2, "width", "100px"], [1, "row", "dd"], ["src", "../../../assets/New folder/4Z1A0247.png", "alt", ""]],
      template: function ServiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 13, "serviceTitle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 15, "Design"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, "valueD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 19, "orderNow"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 21, "servicet42"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 23, "valueD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 25, "orderNow"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 27, "servicet42"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 29, "valueD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 31, "orderNow"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 33, "servicet42"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 35, "valueD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 37, "orderNow"), " ");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: [".service[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .furn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n}\r\n.service[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 70px;\r\n    margin-top: 150px;\r\n\r\n    font-weight: bold;\r\n    margin-bottom: 50px;\r\n}\r\n.service[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .furn[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 38px;\r\n    color: #58BA47;\r\n    font-weight: bold;\r\n}\r\n.service[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .furn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n.service[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .im[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .furn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    color: white;\r\n    border: none;\r\n    font-size: 18px;\r\n    transition: all .4s ease-in-out;\r\n    font-weight: bold;\r\n    width: 140px;\r\n    padding: 5px ;\r\n    background-color: #58BA47;\r\n}\r\n.service[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .im[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .furn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    border: 2px solid  #58BA47;\r\n    color:  #58BA47;\r\n}\r\n.service[_ngcontent-%COMP%]   img.s[_ngcontent-%COMP%]{vertical-align: middle;\r\n    max-width: 100%;\r\n    position: relative;\r\n    top: 25%;}\r\n.im[_ngcontent-%COMP%]{\r\n    background: #0D5028;\r\n    position: relative;\r\n    height: auto;\r\n    padding-top: 70px;\r\n    padding-bottom: 100px;\r\n\r\n}\r\n.sp[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: -12%;\r\n   \r\n    height: 119%;\r\n    left: 55%;\r\n}\r\n.sp2[_ngcontent-%COMP%]{position: absolute;\r\n    top: 20%;\r\n    left: 62%;\r\n    height: 53%;\r\n    width: 17%;\r\n}\r\n.im[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    color: #58BA47;\r\n}\r\n.im[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    color: white;\r\n}\r\n.furn[_ngcontent-%COMP%]{\r\n    padding-top: 100px;\r\n}\r\n.furn-box[_ngcontent-%COMP%]{\r\n    height: 350px;\r\n    position: relative;\r\n    background-color: #3ED34A;\r\n    width: 63%;\r\n}\r\n.furn-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 32%;\r\n    top: 53px;\r\n    width: 91%;\r\n}\r\n.dd[_ngcontent-%COMP%]{\r\n    margin-top: 60px;\r\n}\r\n@media screen and (max-width:768px) {\r\n.sp[_ngcontent-%COMP%], .sp2[_ngcontent-%COMP%], img.s[_ngcontent-%COMP%]{display: none;}\r\n.service[_ngcontent-%COMP%]{\r\n    padding-bottom: 30px;\r\n}\r\n.service[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .furn[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 23px 0;\r\n}\r\n.furn-box[_ngcontent-%COMP%]{\r\n    margin-bottom: 50px;\r\n}\r\n.im[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 29px 0;\r\n   }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlL3NlcnZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7QUFDQSxlQUFlLHNCQUFzQjtJQUNqQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVEsQ0FBQztBQUNiO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTOztJQUVULFlBQVk7SUFDWixTQUFTO0FBQ2I7QUFDQSxLQUFLLGtCQUFrQjtJQUNuQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7QUFDZDtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7QUFDQSxnQkFBZ0IsYUFBYSxDQUFDO0FBQzlCO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7R0FDZjtBQUNIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlL3NlcnZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlIGltZywuZnVybiBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNlcnZpY2UgaDF7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLnNlcnZpY2UgaDMsLmZ1cm4gaDJ7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBjb2xvcjogIzU4QkE0NztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zZXJ2aWNlIHAsLmZ1cm4gcHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uc2VydmljZSBidXR0b24sLmltIGJ1dHRvbiwuZnVybiBidXR0b257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4QkE0NztcclxufVxyXG4uc2VydmljZSBidXR0b246aG92ZXIsLmltIGJ1dHRvbjpob3ZlciwuZnVybiBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICAjNThCQTQ3O1xyXG4gICAgY29sb3I6ICAjNThCQTQ3O1xyXG59XHJcbi5zZXJ2aWNlIGltZy5ze3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDI1JTt9XHJcbi5pbXtcclxuICAgIGJhY2tncm91bmQ6ICMwRDUwMjg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuXHJcbn1cclxuLnNwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTIlO1xyXG4gICBcclxuICAgIGhlaWdodDogMTE5JTtcclxuICAgIGxlZnQ6IDU1JTtcclxufVxyXG4uc3Aye3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogNjIlO1xyXG4gICAgaGVpZ2h0OiA1MyU7XHJcbiAgICB3aWR0aDogMTclO1xyXG59XHJcbi5pbSBoMntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAjNThCQTQ3O1xyXG59XHJcbi5pbSBwe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5mdXJue1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcbi5mdXJuLWJveHtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0VEMzRBO1xyXG4gICAgd2lkdGg6IDYzJTtcclxufVxyXG4uZnVybi1ib3ggaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzIlO1xyXG4gICAgdG9wOiA1M3B4O1xyXG4gICAgd2lkdGg6IDkxJTtcclxufVxyXG5cclxuLmRke1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4uc3AsIC5zcDIsaW1nLnN7ZGlzcGxheTogbm9uZTt9XHJcbi5zZXJ2aWNle1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLnNlcnZpY2UgaDMsIC5mdXJuIGgyIHtcclxuICAgIG1hcmdpbjogMjNweCAwO1xyXG59XHJcbi5mdXJuLWJveHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLmltIGgyIHtcclxuICAgIG1hcmdpbjogMjlweCAwO1xyXG4gICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-service',
          templateUrl: './service.component.html',
          styleUrls: ['./service.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/service/service.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/service/service.module.ts ***!
    \******************************************************/

  /*! exports provided: serviceModule */

  /***/
  function srcAppComponentsServiceServiceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "serviceModule", function () {
      return serviceModule;
    });
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service.component */
    "./src/app/components/service/service.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service-routing.module */
    "./src/app/components/service/service-routing.module.ts");

    var serviceModule = function serviceModule() {
      _classCallCheck(this, serviceModule);
    };

    serviceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: serviceModule
    });
    serviceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function serviceModule_Factory(t) {
        return new (t || serviceModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["sharedModule"], _service_routing_module__WEBPACK_IMPORTED_MODULE_3__["serviceRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](serviceModule, {
        declarations: [_service_component__WEBPACK_IMPORTED_MODULE_1__["ServiceComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["sharedModule"], _service_routing_module__WEBPACK_IMPORTED_MODULE_3__["serviceRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](serviceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_service_component__WEBPACK_IMPORTED_MODULE_1__["ServiceComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["sharedModule"], _service_routing_module__WEBPACK_IMPORTED_MODULE_3__["serviceRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-service-service-module-es5.js.map