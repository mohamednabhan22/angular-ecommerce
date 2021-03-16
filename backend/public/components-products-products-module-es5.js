function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-products-products-module"], {
  /***/
  "./src/app/components/products/product/product.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/products/product/product.component.ts ***!
    \******************************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppComponentsProductsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../products.service */
    "./src/app/components/products/products.service.ts");
    /* harmony import */


    var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../auth/auth-service.service */
    "./src/app/components/auth/auth-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_20_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.AddToCart(ctx_r68.product.name, ctx_r68.product.price, 1, ctx_r68.product._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_20_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.removeFromCart();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Remove from cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Continue shopping");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r67.quantity, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r67.total, "");
      }
    }

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent(productService, AuthServiceService, route, router) {
        _classCallCheck(this, ProductComponent);

        this.productService = productService;
        this.AuthServiceService = AuthServiceService;
        this.route = route;
        this.router = router;
        this.quantity = 0;
        this.total = 0;
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.AuthServiceService.isAdmin.subscribe(function (s) {
            _this.isAdmin = s;
            console.log(s);
          });
          this.route.params.subscribe(function (params) {
            _this.id = params['id'];
          });
          this.productService.getProduct(this.id).subscribe(function (res) {
            console.log(res.product);
            _this.product = res.product;
          }, function (err) {
            console.log(err);
          });
          this.productService.getCartItem(this.id).subscribe(function (res) {
            console.log(res.item);
            _this.cartItem = res.item;
            _this.quantity = res.item.amount;
            _this.total = res.item.totalPrice;
          }, function (err) {
            console.log(err);
          });
          this.AuthServiceService.isloged.subscribe(function (s) {
            _this.isLoged = s;
            console.log(s);
          });
        }
      }, {
        key: "removeFromCart",
        value: function removeFromCart() {
          var _this2 = this;

          this.productService.deleteCartItem(this.cartItem._id).subscribe(function (res) {
            console.log(res);
            _this2.quantity = 0;
            _this2.total = 0;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "AddToCart",
        value: function AddToCart(name, price, amount, productId) {
          var _this3 = this;

          this.productService.AddToCart(name, price, amount, productId).subscribe(function (res) {
            console.log(res);
            _this3.quantity += 1;
            _this3.total = _this3.total + price * amount;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["productService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      decls: 21,
      vars: 7,
      consts: [[1, "product"], [1, "row"], [1, "col-md-4"], ["alt", "productImg", 2, "max-width", "100%", 3, "src"], [1, "col-md-4", 2, "margin-left", "0px"], [1, "info"], [2, "margin-top", "28px"], ["class", "col-md-3", 4, "ngIf"], [1, "col-md-3"], [1, "price"], [1, "head"], [1, "buttons"], [1, "btn", "btn-success", "s", 3, "click"], [1, "btn", "btn-warning", 3, "click"], ["routerLink", "/products", 1, "btn", "btn-dark"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProductComponent_div_20_Template, 19, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/", ctx.product.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.description, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("price :$ ", ctx.product.price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Product ID : ", ctx.product._id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Category : ", ctx.product.category, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoged && !ctx.isAdmin);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".product[_ngcontent-%COMP%]{\r\n    background-color: #e9ecef;\r\n    padding-top: 9%;\r\n    height: 90vh;\r\n    \r\n}\r\n.info[_ngcontent-%COMP%]{\r\n    padding-top: 30px;\r\n    background-color: white;\r\n    text-align: left;\r\n    padding-left: 40px;\r\n    padding-bottom: 40px;\r\n}\r\n.info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    line-height: 1.1;\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    padding: 10px 20px 10px 20px;\r\n}\r\n.price[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    padding-left: 30px !important;\r\n    padding: 10px;\r\n}\r\n.head[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    margin-top: 7px;\r\n}\r\nbutton.s[_ngcontent-%COMP%]{\r\n    width: 148px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgIHBhZGRpbmctdG9wOiA5JTtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIFxyXG59XHJcbi5pbmZve1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG4uaW5mbyBoMntcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxufVxyXG4ucHJpY2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uaGVhZHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxufVxyXG5idXR0b24uc3tcclxuICAgIHdpZHRoOiAxNDhweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.css']
        }]
      }], function () {
        return [{
          type: _products_service__WEBPACK_IMPORTED_MODULE_1__["productService"]
        }, {
          type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/products/products-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: productsRoutingModule */

  /***/
  function srcAppComponentsProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "productsRoutingModule", function () {
      return productsRoutingModule;
    });
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/components/products/product/product.component.ts");

    var routes = [{
      path: "",
      component: _products_component__WEBPACK_IMPORTED_MODULE_0__["productsComponent"]
    }, {
      path: ":id",
      component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
    }];

    var productsRoutingModule = function productsRoutingModule() {
      _classCallCheck(this, productsRoutingModule);
    };

    productsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: productsRoutingModule
    });
    productsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function productsRoutingModule_Factory(t) {
        return new (t || productsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](productsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](productsRoutingModule, [{
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
  "./src/app/components/products/products.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/products/products.component.ts ***!
    \***********************************************************/

  /*! exports provided: productsComponent */

  /***/
  function srcAppComponentsProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "productsComponent", function () {
      return productsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./products.service */
    "./src/app/components/products/products.service.ts");
    /* harmony import */


    var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../auth/auth-service.service */
    "./src/app/components/auth/auth-service.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function productsComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function productsComponent_li_8_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

          var catogry_r76 = ctx.$implicit;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.filter(catogry_r76.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var catogry_r76 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", catogry_r76.name, " ");
      }
    }

    function productsComponent_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var catogry_r79 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", catogry_r79.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](catogry_r79.name);
      }
    }

    function productsComponent_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var price_r80 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", price_r80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](price_r80);
      }
    }

    function productsComponent_div_20_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function productsComponent_div_20_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

          var product_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.AddToCart(product_r81.name, product_r81.price, 1, product_r81._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Add-to-cart"));
      }
    }

    function productsComponent_div_20_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function productsComponent_div_20_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var i_r82 = ctx_r89.index;
          var product_r81 = ctx_r89.$implicit;

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.deleteProduct(i_r82, product_r81._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "delete product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function productsComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, productsComponent_div_20_button_7_Template, 3, 3, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, productsComponent_div_20_button_11_Template, 2, 0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r81 = ctx.$implicit;

        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/", product_r81.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r81.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("price $ ", product_r81.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.isLoged && !ctx_r74.isAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", product_r81._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "more info"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.isAdmin);
      }
    }

    function productsComponent_button_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function productsComponent_button_22_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.count = ctx_r91.products.length;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "serviceBoxB"));
      }
    }

    var productsComponent =
    /*#__PURE__*/
    function () {
      function productsComponent(productService, AuthServiceService, translate) {
        _classCallCheck(this, productsComponent);

        this.productService = productService;
        this.AuthServiceService = AuthServiceService;
        this.translate = translate;
        this.count = 8;
        this.selectedCatogry = 0;
        this.selectedPrice = 0;
        this.prices = [2.5, 1.5, 6.5, 5.5, 3.5];
        this.catogries = [{
          id: 6,
          name: "fruit"
        }, {
          id: 3,
          name: "dairy"
        }, {
          id: 4,
          name: "meat"
        }, {
          id: 1,
          name: "bakery"
        }, {
          id: 7,
          name: "drinks"
        }, {
          id: 2,
          name: "takeaway"
        }, {
          id: 5,
          name: "seafood"
        }];
        translate.setDefaultLang('en');
      }

      _createClass(productsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.isAdminsubscription = this.AuthServiceService.isAdmin.subscribe(function (s) {
            _this4.isAdmin = s;
            console.log(s);
          });
          this.isLogeddelSubscription = this.AuthServiceService.isloged.subscribe(function (s) {
            _this4.isLoged = s;
            console.log(s);
          });
          this.toggleaddSubscription = this.AuthServiceService.togleShow.subscribe(function (s) {
            _this4.togleShow = s;
            console.log(s);
          });
          this.subscription = this.productService.getProducts().subscribe(function (res) {
            console.log(res.products);
            _this4.products = res.products;
            _this4.filterProducts = res.products;
          }, function (err) {
            console.log(err.error.message);
          });
        }
      }, {
        key: "filter",
        value: function filter(name) {
          this.products = this.filterProducts.filter(function (p) {
            return p.category === name;
          });
          this.selectedCatogry = 0;
          this.selectedPrice = 0;
        }
      }, {
        key: "filterByPrice",
        value: function filterByPrice() {
          var _this5 = this;

          if (this.selectedCatogry !== 0) {
            this.products = this.filterProducts.filter(function (p) {
              return p.price == _this5.selectedPrice && p.category == _this5.selectedCatogry;
            });
          } else {
            this.products = this.filterProducts.filter(function (p) {
              return p.price == _this5.selectedPrice;
            });
          }
        }
      }, {
        key: "filterByCatogry",
        value: function filterByCatogry() {
          var _this6 = this;

          console.log(this.selectedCatogry);

          if (this.selectedPrice > 0) {
            this.products = this.filterProducts.filter(function (p) {
              return p.category == _this6.selectedCatogry && p.price == _this6.selectedPrice;
            });
          } else {
            this.products = this.filterProducts.filter(function (p) {
              return p.category == _this6.selectedCatogry;
            });
          }
        }
      }, {
        key: "AddToCart",
        value: function AddToCart(name, price, amount, productId) {
          this.addSubscription = this.productService.AddToCart(name, price, amount, productId).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(i, id) {
          var _this7 = this;

          this.delSubscription = this.productService.deleteProduct(id).subscribe(function (res) {
            console.log(res);

            _this7.products.splice(i, 1);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();

          if (this.delSubscription) {
            this.delSubscription.unsubscribe();
          }

          if (this.addSubscription) {
            this.addSubscription.unsubscribe();
          }

          this.isAdminsubscription.unsubscribe();
          this.isLogeddelSubscription.unsubscribe();
          this.toggleaddSubscription.unsubscribe();
        }
      }]);

      return productsComponent;
    }();

    productsComponent.ɵfac = function productsComponent_Factory(t) {
      return new (t || productsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["productService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
    };

    productsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: productsComponent,
      selectors: [["app-products"]],
      decls: 23,
      vars: 14,
      consts: [[1, "products", "text-center"], [1, "container"], [1, "d-flex", "flex-column", "flex-lg-row", "list-unstyled"], [3, "click"], [3, "click", 4, "ngFor", "ngForOf"], ["name", "catogry", 3, "ngModel", "ngModelChange", "change"], ["disabled", "", "value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "price", 3, "ngModel", "ngModelChange", "change"], [1, "row"], ["class", "col-md-3 product", 4, "ngFor", "ngForOf"], ["class", "mx-auto more", 3, "click", 4, "ngIf"], [3, "value"], [1, "col-md-3", "product"], [1, "product-box"], ["alt", "", 3, "src"], ["class", "btn b", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "s", 3, "routerLink"], ["class", "btn btn-warning s", 3, "click", 4, "ngIf"], [1, "btn", "b", 3, "click"], [1, "btn", "btn-warning", "s", 3, "click"], [1, "mx-auto", "more", 3, "click"]],
      template: function productsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function productsComponent_Template_li_click_6_listener() {
            ctx.products = ctx.filterProducts;
            ctx.selectedCatogry = 0;
            return ctx.selectedPrice = 0;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, productsComponent_li_8_Template, 2, 1, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function productsComponent_Template_select_ngModelChange_10_listener($event) {
            return ctx.selectedCatogry = $event;
          })("change", function productsComponent_Template_select_change_10_listener() {
            return ctx.filterByCatogry();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "catogry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, productsComponent_option_13_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function productsComponent_Template_select_ngModelChange_15_listener($event) {
            return ctx.selectedPrice = $event;
          })("change", function productsComponent_Template_select_change_15_listener() {
            return ctx.filterByPrice();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, productsComponent_option_18_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, productsComponent_div_20_Template, 12, 9, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, productsComponent_button_22_Template, 3, 3, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, "products"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catogries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCatogry);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catogries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.prices);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](21, 10, ctx.products, 0, ctx.count));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.count < 16 && ctx.selectedCatogry == 0 && ctx.selectedPrice == 0 && ctx.filterProducts.length == ctx.products.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]],
      styles: [".product-box[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding: 10px;margin-bottom: 10px;\r\n       border: 1px solid #E2E2E2;\r\n   }\r\n   .products[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n       font-size: 50px;\r\n       margin-top: 100px;\r\n       font-weight: bold;\r\n   }\r\n   .product-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n      max-width: 100%;\r\n      margin-bottom: 30px;\r\n   }\r\n   button.more[_ngcontent-%COMP%]{\r\n     margin-bottom: 20px;\r\n }\r\n   .products[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n       margin-top: 40px;\r\n   }\r\n   .products[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n       font-size: 16px;\r\n      margin-bottom: 4px;\r\n       margin-left: 24px;\r\n       font-weight: bold;\r\n       padding: 10px 15px 10px 15px;\r\n       transition: all .4s ease-in-out;\r\n   \r\n   }\r\n   .products[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%], .products[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n       background-color: #58BA47;\r\n       color: white;\r\n       cursor: pointer;\r\n   }\r\n   .product-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n       font-size: 20px;\r\n   }\r\n   .product-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n       font-size: 24px;\r\n       font-weight: bold;\r\n       color: #58BA47;\r\n   }\r\n   .products[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n       margin-top: 30px;\r\n       background-color: #58BA47;\r\n       color: white;\r\n       font-size: 18px;\r\n       font-weight: bold;\r\n       width: 178px;\r\n       padding: 7px 0;\r\n       border: none;\r\n       transition: all .4s ease-in-out;\r\n   }\r\n   .product-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-bottom: 40px;\r\n    height: 147px;\r\n   }\r\n   .products[_ngcontent-%COMP%]   button.s[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    background-color: rgb(63 63 191);\r\n    padding: 7px 0;\r\n    margin-bottom: 10px;\r\n}\r\n   .products[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color: white;color: #58BA47;\r\n   border: 1px solid #58BA47;\r\n   }\r\n   select[_ngcontent-%COMP%]{\r\n       width: 160px;\r\n       padding: 3px;\r\n   }\r\n   li[_ngcontent-%COMP%]:last-of-type:hover, li[_ngcontent-%COMP%]:nth-of-type(9):hover{\r\n       background-color: white !important;\r\n   }\r\n   \r\n   @media screen and (min-width:768px) and (max-width:992px){\r\n.special-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 341px;\r\n\r\n}\r\n.product-box[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    margin-left: 22px;\r\n    text-align: left;\r\n    min-width: 360px;\r\n}\r\n\r\n.product-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 150px;}\r\n\r\n    \r\n.products[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n     width: 134px;\r\n    display: block;\r\n\r\n}\r\n\r\n.product-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:first-of-type {\r\n    margin-top: 8px;\r\n    \r\n}\r\n\r\n\r\n.product-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:last-of-type {\r\n \r\n    margin-top: 29px;\r\n   \r\n}\r\n   }\r\n   @media screen and (max-width:768px){\r\n    .product-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px;   \r\n    }\r\n    .product-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n        margin-bottom: 19px;\r\n    }\r\n    .products[_ngcontent-%COMP%]   button.s[_ngcontent-%COMP%] {\r\n     \r\n        display: block;\r\n        margin-top: 0;\r\n        margin-left: 153px;\r\n    }\r\n  .product-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n      margin-bottom: 30;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWEsQ0FBQyxtQkFBbUI7T0FDOUIseUJBQXlCO0dBQzdCO0dBQ0E7T0FDSSxlQUFlO09BQ2YsaUJBQWlCO09BQ2pCLGlCQUFpQjtHQUNyQjtHQUVBO01BQ0csZUFBZTtNQUNmLG1CQUFtQjtHQUN0QjtHQUNGO0tBQ0ksbUJBQW1CO0NBQ3ZCO0dBRUU7T0FDSSxnQkFBZ0I7R0FDcEI7R0FDQTtPQUNJLGVBQWU7TUFDaEIsa0JBQWtCO09BQ2pCLGlCQUFpQjtPQUNqQixpQkFBaUI7T0FDakIsNEJBQTRCO09BQzVCLCtCQUErQjs7R0FFbkM7R0FFQTtPQUNJLHlCQUF5QjtPQUN6QixZQUFZO09BQ1osZUFBZTtHQUNuQjtHQUNBO09BQ0ksZUFBZTtHQUNuQjtHQUNBO09BQ0ksZUFBZTtPQUNmLGlCQUFpQjtPQUNqQixjQUFjO0dBQ2xCO0dBQ0E7T0FDSSxnQkFBZ0I7T0FDaEIseUJBQXlCO09BQ3pCLFlBQVk7T0FDWixlQUFlO09BQ2YsaUJBQWlCO09BQ2pCLFlBQVk7T0FDWixjQUFjO09BQ2QsWUFBWTtPQUNaLCtCQUErQjtHQUNuQztHQUNBO0lBQ0MsbUJBQW1CO0lBQ25CLGFBQWE7R0FDZDtHQUNBO0lBQ0MsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0dBQ0csdUJBQXVCLHVCQUF1QixDQUFDLGNBQWM7R0FDN0QseUJBQXlCO0dBQ3pCO0dBQ0E7T0FDSSxZQUFZO09BQ1osWUFBWTtHQUNoQjtHQUNDO09BQ0csa0NBQWtDO0dBQ3RDO0dBR0gsdUJBQXVCO0dBRXBCO0FBQ0g7SUFDSSxhQUFhOztBQUVqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWSxDQUFDOzs7QUFHakI7S0FDSyxZQUFZO0lBQ2IsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxlQUFlOztBQUVuQjs7O0FBR0E7O0lBRUksZ0JBQWdCOztBQUVwQjtHQUNHO0dBRUE7SUFDQztRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7O1FBRUksY0FBYztRQUNkLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7RUFDRjtNQUNJLGlCQUFpQjtFQUNyQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWJveHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7bWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMkUyRTI7XHJcbiAgIH1cclxuICAgLnByb2R1Y3RzIGgye1xyXG4gICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgfVxyXG4gICBcclxuICAgLnByb2R1Y3QtYm94IGltZ3tcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICB9XHJcbiBidXR0b24ubW9yZXtcclxuICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gfVxyXG4gICBcclxuICAgLnByb2R1Y3RzIHVse1xyXG4gICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgfVxyXG4gICAucHJvZHVjdHMgdWwgbGl7XHJcbiAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xyXG4gICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcclxuICAgXHJcbiAgIH1cclxuICAgXHJcbiAgIC5wcm9kdWN0cyB1bCBsaS5hY3RpdmUsLnByb2R1Y3RzIHVsIGxpOmhvdmVye1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU4QkE0NztcclxuICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgfVxyXG4gICAucHJvZHVjdC1ib3ggcHtcclxuICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgfVxyXG4gICAucHJvZHVjdC1ib3ggaDV7XHJcbiAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgIGNvbG9yOiAjNThCQTQ3O1xyXG4gICB9XHJcbiAgIC5wcm9kdWN0cyBidXR0b257XHJcbiAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU4QkE0NztcclxuICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgd2lkdGg6IDE3OHB4O1xyXG4gICAgICAgcGFkZGluZzogN3B4IDA7XHJcbiAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xyXG4gICB9XHJcbiAgIC5wcm9kdWN0LWJveCBpbWd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAxNDdweDtcclxuICAgfVxyXG4gICAucHJvZHVjdHMgYnV0dG9uLnN7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzIDYzIDE5MSk7XHJcbiAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuICAgLnByb2R1Y3RzIGJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtjb2xvcjogIzU4QkE0NztcclxuICAgYm9yZGVyOiAxcHggc29saWQgIzU4QkE0NztcclxuICAgfVxyXG4gICBzZWxlY3R7XHJcbiAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgIH1cclxuICAgIGxpOmxhc3Qtb2YtdHlwZTpob3ZlcixsaTpudGgtb2YtdHlwZSg5KTpob3ZlcntcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuIFxyXG5cclxuLyogc3RhcnQgbWVkaWEgcXVlcmllcyovXHJcblxyXG4gICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTJweCl7XHJcbi5zcGVjaWFsLWJveCBpbWd7XHJcbiAgICBoZWlnaHQ6IDM0MXB4O1xyXG5cclxufVxyXG4ucHJvZHVjdC1ib3gge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1pbi13aWR0aDogMzYwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWJveCBpbWcge1xyXG4gICAgd2lkdGg6IDE1MHB4O31cclxuXHJcbiAgICBcclxuLnByb2R1Y3RzIGJ1dHRvbiB7XHJcbiAgICAgd2lkdGg6IDEzNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1ib3ggaDU6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5wcm9kdWN0LWJveCBoNTpsYXN0LW9mLXR5cGUge1xyXG4gXHJcbiAgICBtYXJnaW4tdG9wOiAyOXB4O1xyXG4gICBcclxufVxyXG4gICB9XHJcblxyXG4gICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5wcm9kdWN0LWJveCBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7ICAgXHJcbiAgICB9XHJcbiAgICAucHJvZHVjdC1ib3ggaDV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTlweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0cyBidXR0b24ucyB7XHJcbiAgICAgXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTUzcHg7XHJcbiAgICB9XHJcbiAgLnByb2R1Y3QtYm94IGltZ3tcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](productsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [{
          type: _products_service__WEBPACK_IMPORTED_MODULE_1__["productService"]
        }, {
          type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/products/products.module.ts ***!
    \********************************************************/

  /*! exports provided: productsModule */

  /***/
  function srcAppComponentsProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "productsModule", function () {
      return productsModule;
    });
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/components/products/product/product.component.ts");
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/components/products/products-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var productsModule = function productsModule() {
      _classCallCheck(this, productsModule);
    };

    productsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: productsModule
    });
    productsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function productsModule_Factory(t) {
        return new (t || productsModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["sharedModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["productsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](productsModule, {
        declarations: [_products_component__WEBPACK_IMPORTED_MODULE_1__["productsComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_0__["ProductComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["sharedModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["productsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](productsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_products_component__WEBPACK_IMPORTED_MODULE_1__["productsComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_0__["ProductComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["sharedModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["productsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-products-products-module-es5.js.map