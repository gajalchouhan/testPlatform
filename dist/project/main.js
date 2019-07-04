(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _challenges_challenges_challenges_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./challenges/challenges/challenges.component */ "./src/app/challenges/challenges/challenges.component.ts");






var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'challenges', component: _challenges_challenges_challenges_component__WEBPACK_IMPORTED_MODULE_5__["ChallengesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <header>\n    <div>\n      <img src=\"./assets/icons/exam.svg\" alt=\"logo\" class=\"logo\" />\n      <nav>\n        <ul>\n          <li><a routerLink=\"/home\">Home</a></li>\n          <li><a routerLink=\"/challenges\">Challenges</a></li>\n          <li><a href=\"#\">Practice</a></li>\n          <li><a href=\"#\">Compete</a></li>\n          <li><a href=\"#\">Result</a></li>\n          <li><a href=\"#\">Support</a></li>\n          <li><a routerLink=\"/login\">SignUp/Login</a></li>\n        </ul>\n      </nav>\n    </div>\n  </header>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 100; }\n\nheader {\n  background: #efefbb;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#d4d3dd), to(#efefbb));\n  background: linear-gradient(to right, #d4d3dd, #efefbb);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding: 0; }\n\nheader .logo {\n    float: left;\n    height: 50px;\n    width: 50px;\n    margin-left: 2vw; }\n\nheader nav {\n    float: right;\n    margin-right: 2vw; }\n\nheader nav ul {\n      list-style: none;\n      margin: 0;\n      padding: 0; }\n\nheader nav ul li {\n        display: inline-block;\n        margin-left: 2vw;\n        padding-top: 2vh;\n        position: relative; }\n\nheader nav ul li a {\n          color: #444;\n          text-decoration: none;\n          text-transform: uppercase;\n          font-size: 14px; }\n\nheader nav ul li a:hover {\n          color: #000; }\n\nheader nav ul li a::before {\n          content: \"\";\n          display: block;\n          height: 3px;\n          background-color: #444;\n          width: 0%;\n          position: absolute;\n          top: 0;\n          -webkit-transition: all ease-in-out 250ms;\n          transition: all ease-in-out 250ms; }\n\nheader nav ul li a:hover::before {\n          width: 100%; }\n\nheader::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhamFsL3Byb2plY3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU87RUFDUCxZQUFZLEVBQUE7O0FBc0JkO0VBQ0UsbUJBQW1CO0VBQUUsOEJBQUE7RUFDNEMsK0JBQUE7RUFDakUscUZBSUM7RUFKRCx1REFJQztFQUFFLHFFQUFBO0VBQ0gsVUFBVSxFQUFBOztBQVJaO0lBV0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBZHBCO0lBa0JJLFlBQVk7SUFDWixpQkFBaUIsRUFBQTs7QUFuQnJCO01BcUJNLGdCQUFnQjtNQUNoQixTQUFTO01BQ1QsVUFBVSxFQUFBOztBQXZCaEI7UUEwQlEscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsa0JBQWtCLEVBQUE7O0FBN0IxQjtVQWdDVSxXQUFXO1VBQ1gscUJBQXFCO1VBQ3JCLHlCQUF5QjtVQUN6QixlQUFlLEVBQUE7O0FBbkN6QjtVQXVDVSxXQUFXLEVBQUE7O0FBdkNyQjtVQTJDVSxXQUFXO1VBQ1gsY0FBYztVQUNkLFdBQVc7VUFDWCxzQkFBc0I7VUFDdEIsU0FBUztVQUNULGtCQUFrQjtVQUNsQixNQUFNO1VBQ04seUNBQWlDO1VBQWpDLGlDQUFpQyxFQUFBOztBQWxEM0M7VUFzRFUsV0FBVyxFQUFBOztBQU9yQjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3AgOiAwO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbiRjb2xvcnM6IChcbiAgcHJpbWFyeTogIzBhNzlkZixcbiAgYWNjZW50OiAjMjZhZTYwLFxuICBleGFtX2JveF9jb2xvcjogI2ZmZixcbiAgc2VjXzJfYmFja2dyb3VuZF9jb2xvcjogIzE5MmE1NixcbiAgc2VjXzJfZm9udF9jb2xvcjogd2hpdGVcbik7XG5cbiRmb250czogKFxuICBmb250X2ZhbWlseTogb3BlbiBzYW5zLXNlcmlmLFxuICBmb250X3ByaW1hcnlfc2l6ZTogMS4ycmVtLFxuICBmb250X3NlY29uZGFyeV9zaXplOiAydncsXG4gIHRleHRfdHJhbnNmb3JtOiBjYXBpdGFsaXplXG4pO1xuXG4kY2FyZDogKFxuICByYWRpdXM6IDVweFxuKTtcblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2VmZWZiYjsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Q0ZDNkZCwgI2VmZWZiYik7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICAjZDRkM2RkLFxuICAgICNlZmVmYmJcbiAgKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICBwYWRkaW5nOiAwO1xuXG4gIC5sb2dvIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgfVxuXG4gIG5hdiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMnZ3O1xuICAgIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgICAgICAgcGFkZGluZy10b3A6IDJ2aDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYTo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDI1MG1zO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5oZWFkZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.value = false;
        this.title = 'project';
    }
    AppComponent.prototype.showLogin = function () {
        this.value = false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _challenges_challenges_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./challenges/challenges.module */ "./src/app/challenges/challenges.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_8__["LoginModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
                _challenges_challenges_module__WEBPACK_IMPORTED_MODULE_9__["ChallengesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/challenges/challenges.module.ts":
/*!*************************************************!*\
  !*** ./src/app/challenges/challenges.module.ts ***!
  \*************************************************/
/*! exports provided: ChallengesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesModule", function() { return ChallengesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./challenges/challenges.component */ "./src/app/challenges/challenges/challenges.component.ts");




var ChallengesModule = /** @class */ (function () {
    function ChallengesModule() {
    }
    ChallengesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_challenges_challenges_component__WEBPACK_IMPORTED_MODULE_3__["ChallengesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], ChallengesModule);
    return ChallengesModule;
}());



/***/ }),

/***/ "./src/app/challenges/challenges/challenges.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/challenges/challenges/challenges.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Working On it</div>"

/***/ }),

/***/ "./src/app/challenges/challenges/challenges.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/challenges/challenges/challenges.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy9jaGFsbGVuZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/challenges/challenges/challenges.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/challenges/challenges/challenges.component.ts ***!
  \***************************************************************/
/*! exports provided: ChallengesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesComponent", function() { return ChallengesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChallengesComponent = /** @class */ (function () {
    function ChallengesComponent() {
    }
    ChallengesComponent.prototype.ngOnInit = function () {
    };
    ChallengesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-challenges',
            template: __webpack_require__(/*! ./challenges.component.html */ "./src/app/challenges/challenges/challenges.component.html"),
            styles: [__webpack_require__(/*! ./challenges.component.scss */ "./src/app/challenges/challenges/challenges.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChallengesComponent);
    return ChallengesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <section>\n      <div class=\"sec_1\">\n        <div class=\"sec_11\">\n          <p>Test Yourself Among Millions of Students Preparing for the same Exam as Your!</p>\n          <div>\n            <img src=\"../assets/icons/google_store.webp\" />\n            <img src=\"../assets/icons/ios_store.webp\" />\n          </div>\n        </div>\n        <div class=\"sec_12\">\n          <p>Active Now</p>\n          <ul>\n            <li>SSC</li>\n            <li>RRB</li>\n            <li>CGl</li>\n            <li>more Items...</li>\n          </ul>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class=\"sec_2\">\n        <div class=\"sec_21\">\n          <img src=\"../assets/image_icons/award.webp\" />\n          <p>Award Winning</p>\n        </div>\n        <div class=\"sec_22\">\n          <img src=\"../assets/image_icons/progress.webp\" />\n          <p>Progress Tracking</p>\n        </div>\n        <div class=\"sec_23\">\n          <img src=\"../assets/image_icons/easy_to_use.webp\" />\n          <p>Easy to Use</p>\n        </div>\n        <div class=\"sec_24\">\n          <img src=\"../assets/image_icons/interactive.webp\" />\n          <p>Interactive and Intutive</p>\n        </div>\n        <div class=\"sec_25\">\n          <img src=\"../assets/image_icons/high_quality.webp\" />\n          <p>High-Quality</p>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"sec_4\">\n      <h4>Award-Winning</h4>\n      <div class=\"sec_41\">\n        <div class=\"sec_411\">\n          <img src=\"../assets/image_icons/winning.webp\" />\n          <p>Rank: 1 Aayush Vardhan</p>\n        </div>\n        <div class=\"sec_412\">\n          <img src=\"../assets/image_icons/winning.webp\" />\n          <p>Rank: 2 Rohan Sharma</p>\n        </div>\n        <div class=\"sec_413\">\n          <img src=\"../assets/image_icons/winning.webp\" />\n          <p>Rank: 3 Kabir Singh</p>\n        </div>\n        <div class=\"sec_414\">\n          <img src=\"../assets/image_icons/winning.webp\" />\n          <p>Rank: 4 Kashish jain</p>\n        </div>\n      </div>\n\n    </section>\n\n    <section class=\"sec_3\">\n      <div>\n        <h4>Exam Performance!</h4>\n        <div class=\"sec_31\">\n          <div class=\"sec_311\">\n            <img src=\"../assets/image_icons/sec3_fimg.webp\" />\n          </div>\n          <div class=\"sec_312\">\n            <img src=\"../assets/icons/quote_icon.webp\" />\n            <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                  <blockquote>“I'm a testimonial. Click to edit me and add text that\n                    says something nice about you and your services.\n                    Let your customers review you and tell their friends how great you are.”\n                  </blockquote>\n                </div>\n                <div class=\"carousel-item\">\n                  <blockquote>“I'm a testimonial. Click to edit me and add text that\n                    says something nice about you and your services.\n                    Let your customers review you and tell their friends how great you are.”\n                  </blockquote>\n                </div>\n                <div class=\"carousel-item\">\n                  <blockquote>“I'm a testimonial. Click to edit me and add text that\n                    says something nice about you and your services.\n                    Let your customers review you and tell their friends how great you are.”\n                  </blockquote>\n                </div>\n              </div>\n              <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n              <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </section>\n\n\n    <section class=\"sec_5\">\n      <div class=\"sec_51\">\n        <div class=\"sec_511\">\n          <div>Home | Blog | About | Contact</div>\n          <div>@ 2019 exam.com pvt ltd</div>\n        </div>\n\n        <div class=\"sec_512\">\n          <div class=\"sec_5121\"><i class=\"fa fa-map-marker\"></i> Indira Nagar , Bangalore </div>\n          <div class=\"sec_5121\"><i class=\"fa fa-phone\"></i> +91 9079781576</div>\n          <div class=\"sec_5121\"><i class=\"fa fa-envelope\"></i> exam@gmail.com</div>\n        </div>\n\n\n        <div class=\"sec_513\">\n          <h4>About the Company</h4>\n          <p>We are providing a platform where student can give the various exam and scale themself.</p>\n          <div class=\"sec_5131\">\n            <span><i class=\"fa fa-facebook\"></i></span>\n            <span><i class=\"fa fa-twitter\"></i></span>\n            <span><i class=\"fa fa-instagram\"></i></span>\n            <span><i class=\"fa fa-youtube\"></i></span>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sec_1 {\n  display: -webkit-box;\n  display: flex; }\n  .sec_1 .sec_11 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 2;\n            order: 1;\n    text-align: center; }\n  .sec_1 .sec_11 p {\n      padding: 5vh 8vw;\n      font-size: 2vw;\n      font-family: open sans-serif; }\n  .sec_1 .sec_12 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 3;\n            order: 2;\n    padding: 5vh 2vw 1vh 12vw; }\n  .sec_1 .sec_12 p {\n      font-size: 2vw; }\n  .sec_1 .sec_12 ul {\n      list-style: none;\n      padding: 0; }\n  .sec_1 .sec_12 ul li {\n        display: inline-block;\n        margin: 1vh 2vw 1vh 0;\n        position: relative;\n        background: #0f0c29;\n        /* fallback for old browsers */\n        /* Chrome 10-25, Safari 5.1-6 */\n        background: -webkit-gradient(linear, left top, right top, from(#24243e), color-stop(#302b63), to(#0f0c29));\n        background: linear-gradient(to right, #24243e, #302b63, #0f0c29);\n        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n        padding: 0.5vw 1vw;\n        color: #fff;\n        cursor: pointer; }\n  .sec_2 {\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  margin-top: 15vh;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: 3vh; }\n  .sec_2 .sec_21 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 2;\n            order: 1;\n    padding: 3vh 0;\n    margin: 0.5vh 1vw 0.5vh 7vw;\n    border-radius: 5px;\n    background-color: #192a56; }\n  .sec_2 .sec_21 p {\n      color: white;\n      font-size: 1.2rem;\n      text-transform: capitalize; }\n  .sec_2 .sec_22 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 3;\n            order: 2;\n    padding: 3vh 0;\n    margin: 0.5vh 0.5vw;\n    border-radius: 5px;\n    background-color: #192a56; }\n  .sec_2 .sec_22 p {\n      color: white;\n      font-size: 1.2rem;\n      text-transform: capitalize; }\n  .sec_2 .sec_23 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 4;\n            order: 3;\n    padding: 3vh 0;\n    margin: 0.5vh 0.5vw;\n    border-radius: 5px;\n    background-color: #192a56; }\n  .sec_2 .sec_23 p {\n      color: white;\n      font-size: 1.2rem;\n      text-transform: capitalize; }\n  .sec_2 .sec_24 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 5;\n            order: 4;\n    padding: 3vh 0;\n    margin: 0.5vh 0.5vw;\n    border-radius: 5px;\n    background-color: #192a56; }\n  .sec_2 .sec_24 p {\n      color: white;\n      font-size: 1.2rem;\n      text-transform: capitalize; }\n  .sec_2 .sec_25 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 6;\n            order: 5;\n    padding: 3vh 0;\n    margin: 0.5vh 7vw 0.5vh 1vw;\n    border-radius: 5px;\n    background-color: #192a56; }\n  .sec_2 .sec_25 p {\n      color: white;\n      font-size: 1.2rem;\n      text-transform: capitalize; }\n  .sec_3 {\n  margin-top: 20vh 5vw 0 5vw; }\n  .sec_3 h4 {\n    margin-top: 15vh;\n    text-align: center;\n    font-size: 2vw; }\n  .sec_3 .sec_31 {\n    display: -webkit-box;\n    display: flex; }\n  .sec_3 .sec_31 .sec_311 {\n      margin: 2vh 2vw 2vh 7vw;\n      padding: 5vh 0;\n      -webkit-box-flex: 1;\n              flex: 1;\n      -webkit-box-ordinal-group: 2;\n              order: 1;\n      text-align: center;\n      border-radius: 5px;\n      background-color: #192a56; }\n  .sec_3 .sec_31 .sec_312 {\n      -webkit-box-flex: 1;\n              flex: 1;\n      -webkit-box-ordinal-group: 3;\n              order: 2;\n      text-align: center;\n      margin: 2vh 7vw 2vh 2vw;\n      padding: 5vh 0;\n      border-radius: 5px;\n      background-color: #192a56; }\n  .sec_3 .sec_31 blockquote {\n      color: white;\n      font-size: 1vw;\n      padding: 5vh 7vw; }\n  .sec_4 h4 {\n  margin-top: 15vh;\n  text-align: center;\n  font-size: 2vw; }\n  .sec_4 .sec_41 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  text-align: center;\n  margin: 2vh 7vw 2vh 7vw;\n  padding: 5vh 0;\n  background-color: #192a56; }\n  .sec_4 .sec_41 .sec_411 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 2;\n            order: 1; }\n  .sec_4 .sec_41 .sec_411 p {\n      color: white;\n      margin-top: 2vh;\n      font-family: open sans-serif;\n      font-weight: 600; }\n  .sec_4 .sec_41 .sec_412 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 3;\n            order: 2; }\n  .sec_4 .sec_41 .sec_412 p {\n      color: white;\n      margin-top: 2vh;\n      font-family: open sans-serif;\n      font-weight: 600; }\n  .sec_4 .sec_41 .sec_413 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 4;\n            order: 3; }\n  .sec_4 .sec_41 .sec_413 p {\n      color: white;\n      margin-top: 2vh;\n      font-family: open sans-serif;\n      font-weight: 600; }\n  .sec_4 .sec_41 .sec_414 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 5;\n            order: 4; }\n  .sec_4 .sec_41 .sec_414 p {\n      color: white;\n      margin-top: 2vh;\n      font-family: open sans-serif;\n      font-weight: 600; }\n  .sec_51 {\n  margin: 15vh 7vw 2vh 7vw;\n  display: -webkit-box;\n  display: flex;\n  background-color: #192a56;\n  color: white;\n  padding: 2vw; }\n  .sec_51 .sec_511 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n  .sec_51 .sec_511 div {\n      margin-top: 1vh;\n      cursor: pointer; }\n  .sec_51 .sec_512 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n  .sec_51 .sec_512 div {\n      margin-top: 1vh; }\n  .sec_51 .sec_513 {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n  .sec_51 .sec_513 .sec_5131 span {\n      padding: 5px 5px;\n      background-color: black;\n      margin: 2px;\n      border-radius: 1px;\n      opacity: 0.7;\n      cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhamFsL3Byb2plY3Qvc3JjL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkE7RUFDRSxvQkFBYTtFQUFiLGFBQWEsRUFBQTtFQURmO0lBSUksbUJBQU87WUFBUCxPQUFPO0lBQ1AsNEJBQVE7WUFBUixRQUFRO0lBQ1Isa0JBQWtCLEVBQUE7RUFOdEI7TUFTTSxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLDRCQXRCd0IsRUFBQTtFQVc5QjtJQWdCSSxtQkFBTztZQUFQLE9BQU87SUFDUCw0QkFBUTtZQUFSLFFBQVE7SUFDUix5QkFBeUIsRUFBQTtFQWxCN0I7TUFxQk0sY0FBYyxFQUFBO0VBckJwQjtNQXlCTSxnQkFBZ0I7TUFDaEIsVUFBVSxFQUFBO0VBMUJoQjtRQTZCUSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFBRSw4QkFBQTtRQUNxRCwrQkFBQTtRQUMxRSwwR0FLQztRQUxELGdFQUtDO1FBQUUscUVBQUE7UUFDSCxrQkFBa0I7UUFDbEIsV0ExRGM7UUEyRGQsZUFBZSxFQUFBO0VBTXZCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBRTlCLG1CQUFtQixFQUFBO0VBTnJCO0lBVUksbUJBQU87WUFBUCxPQUFPO0lBQ1AsNEJBQVE7WUFBUixRQUFRO0lBQ1IsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixrQkFsRVM7SUFtRVQseUJBL0U2QixFQUFBO0VBZ0VqQztNQWtCTSxZQWpGbUI7TUFrRm5CLGlCQTdFcUI7TUE4RXJCLDBCQUEwQixFQUFBO0VBcEJoQztJQXlCSSxtQkFBTztZQUFQLE9BQU87SUFDUCw0QkFBUTtZQUFSLFFBQVE7SUFDUixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQWpGUztJQWtGVCx5QkE5RjZCLEVBQUE7RUFnRWpDO01BaUNNLFlBaEdtQjtNQWlHbkIsaUJBNUZxQjtNQTZGckIsMEJBQTBCLEVBQUE7RUFuQ2hDO0lBd0NJLG1CQUFPO1lBQVAsT0FBTztJQUNQLDRCQUFRO1lBQVIsUUFBUTtJQUNSLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBaEdTO0lBaUdULHlCQTdHNkIsRUFBQTtFQWdFakM7TUFnRE0sWUEvR21CO01BZ0huQixpQkEzR3FCO01BNEdyQiwwQkFBMEIsRUFBQTtFQWxEaEM7SUF1REksbUJBQU87WUFBUCxPQUFPO0lBQ1AsNEJBQVE7WUFBUixRQUFRO0lBQ1IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkEvR1M7SUFnSFQseUJBNUg2QixFQUFBO0VBZ0VqQztNQStETSxZQTlIbUI7TUErSG5CLGlCQTFIcUI7TUEySHJCLDBCQUEwQixFQUFBO0VBakVoQztJQXNFSSxtQkFBTztZQUFQLE9BQU87SUFDUCw0QkFBUTtZQUFSLFFBQVE7SUFDUixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLGtCQTlIUztJQStIVCx5QkEzSTZCLEVBQUE7RUFnRWpDO01BOEVNLFlBN0ltQjtNQThJbkIsaUJBeklxQjtNQTBJckIsMEJBQTBCLEVBQUE7RUFLaEM7RUFDRSwwQkFBMEIsRUFBQTtFQUQ1QjtJQUlJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FwSnNCLEVBQUE7RUE4STFCO0lBVUksb0JBQWE7SUFBYixhQUFhLEVBQUE7RUFWakI7TUFZTSx1QkFBdUI7TUFDdkIsY0FBYztNQUNkLG1CQUFPO2NBQVAsT0FBTztNQUNQLDRCQUFRO2NBQVIsUUFBUTtNQUNSLGtCQUFrQjtNQUNsQixrQkExSk87TUEySlAseUJBdksyQixFQUFBO0VBcUpqQztNQXNCTSxtQkFBTztjQUFQLE9BQU87TUFDUCw0QkFBUTtjQUFSLFFBQVE7TUFDUixrQkFBa0I7TUFDbEIsdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCxrQkFwS087TUFxS1AseUJBakwyQixFQUFBO0VBcUpqQztNQWdDTSxZQUFZO01BQ1osY0FBYztNQUNkLGdCQUFnQixFQUFBO0VBS3RCO0VBRUksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQXpMc0IsRUFBQTtFQXFMMUI7RUFRSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx5QkF6TTZCLEVBQUE7RUE0TGpDO0lBZ0JNLG1CQUFPO1lBQVAsT0FBTztJQUNQLDRCQUFRO1lBQVIsUUFBUSxFQUFBO0VBakJkO01Bb0JRLFlBQVk7TUFDWixlQUFlO01BQ2YsNEJBN01zQjtNQThNdEIsZ0JBQWdCLEVBQUE7RUF2QnhCO0lBNEJNLG1CQUFPO1lBQVAsT0FBTztJQUNQLDRCQUFRO1lBQVIsUUFBUSxFQUFBO0VBN0JkO01BZ0NRLFlBQVk7TUFDWixlQUFlO01BQ2YsNEJBek5zQjtNQTBOdEIsZ0JBQWdCLEVBQUE7RUFuQ3hCO0lBd0NNLG1CQUFPO1lBQVAsT0FBTztJQUNQLDRCQUFRO1lBQVIsUUFBUSxFQUFBO0VBekNkO01BNENRLFlBQVk7TUFDWixlQUFlO01BQ2YsNEJBck9zQjtNQXNPdEIsZ0JBQWdCLEVBQUE7RUEvQ3hCO0lBb0RNLG1CQUFPO1lBQVAsT0FBTztJQUNQLDRCQUFRO1lBQVIsUUFBUSxFQUFBO0VBckRkO01Bd0RRLFlBQVk7TUFDWixlQUFlO01BQ2YsNEJBalBzQjtNQWtQdEIsZ0JBQWdCLEVBQUE7RUFNeEI7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBaFErQjtFQWlRL0IsWUFBYTtFQUNiLFlBQWEsRUFBQTtFQUxmO0lBUUksbUJBQU87WUFBUCxPQUFPO0lBQ1AsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0IsRUFBQTtFQVQxQjtNQVlNLGVBQWdCO01BQ2hCLGVBQWUsRUFBQTtFQWJyQjtJQWtCSSxtQkFBTztZQUFQLE9BQU87SUFDUCw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQixFQUFBO0VBbkIxQjtNQXNCTSxlQUFnQixFQUFBO0VBdEJ0QjtJQTJCSSxtQkFBTztZQUFQLE9BQU87SUFDUCw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQixFQUFBO0VBNUIxQjtNQWlDUSxnQkFBaUI7TUFDakIsdUJBQXVCO01BQ3ZCLFdBQVk7TUFDWixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxuICBwcmltYXJ5OiAjMGE3OWRmLFxuICBhY2NlbnQ6ICMyNmFlNjAsXG4gIGV4YW1fYm94X2NvbG9yOiAjZmZmLFxuICBzZWNfMl9iYWNrZ3JvdW5kX2NvbG9yOiAjMTkyYTU2LFxuICBzZWNfMl9mb250X2NvbG9yOiB3aGl0ZVxuKTtcblxuJGZvbnRzOiAoXG4gIGZvbnRfZmFtaWx5OiBvcGVuIHNhbnMtc2VyaWYsXG4gIGZvbnRfcHJpbWFyeV9zaXplOiAxLjJyZW0sXG4gIGZvbnRfc2Vjb25kYXJ5X3NpemU6IDJ2dyxcbiAgdGV4dF90cmFuc2Zvcm06IGNhcGl0YWxpemVcbik7XG5cbiRjYXJkOiAoXG4gIHJhZGl1czogNXB4XG4pO1xuXG5cbi5zZWNfMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLnNlY18xMSB7XG4gICAgZmxleDogMTtcbiAgICBvcmRlcjogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBwIHtcbiAgICAgIHBhZGRpbmc6IDV2aCA4dnc7XG4gICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRmb250cywgZm9udF9mYW1pbHkpO1xuICAgIH1cbiAgfVxuXG4gIC5zZWNfMTIge1xuICAgIGZsZXg6IDE7XG4gICAgb3JkZXI6IDI7XG4gICAgcGFkZGluZzogNXZoIDJ2dyAxdmggMTJ2dztcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDF2aCAydncgMXZoIDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzBmMGMyOTsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0MjQzZSwgIzMwMmI2MywgIzBmMGMyOSk7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICB0byByaWdodCxcbiAgICAgICAgICAjMjQyNDNlLFxuICAgICAgICAgICMzMDJiNjMsXG4gICAgICAgICAgIzBmMGMyOVxuICAgICAgICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgICAgIHBhZGRpbmc6IDAuNXZ3IDF2dztcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcDogJGNvbG9ycywgJGtleTogZXhhbV9ib3hfY29sb3IpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zZWNfMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTV2aDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFMEUyO1xuICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xuICAvLyBmbGV4LWJhc2lzOiAyNyU7XG5cbiAgLnNlY18yMSB7XG4gICAgZmxleDogMTtcbiAgICBvcmRlcjogMTtcbiAgICBwYWRkaW5nOiAzdmggMDtcbiAgICBtYXJnaW46IDAuNXZoIDF2dyAwLjV2aCA3dnc7XG4gICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkbWFwOiAkY2FyZCwgJGtleTogcmFkaXVzKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRtYXA6ICRjb2xvcnMsICRrZXk6IHNlY18yX2JhY2tncm91bmRfY29sb3IpO1xuXG4gICAgcCB7XG4gICAgICBjb2xvcjogbWFwLWdldCgkbWFwOiAkY29sb3JzLCAka2V5OiBzZWNfMl9mb250X2NvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkbWFwOiAkZm9udHMsICRrZXk6IGZvbnRfcHJpbWFyeV9zaXplKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgfVxuXG4gIC5zZWNfMjIge1xuICAgIGZsZXg6IDE7XG4gICAgb3JkZXI6IDI7XG4gICAgcGFkZGluZzogM3ZoIDA7XG4gICAgbWFyZ2luOiAwLjV2aCAwLjV2dztcbiAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRtYXA6ICRjYXJkLCAka2V5OiByYWRpdXMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJG1hcDogJGNvbG9ycywgJGtleTogc2VjXzJfYmFja2dyb3VuZF9jb2xvcik7XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiBtYXAtZ2V0KCRtYXA6ICRjb2xvcnMsICRrZXk6IHNlY18yX2ZvbnRfY29sb3IpO1xuICAgICAgZm9udC1zaXplOiBtYXAtZ2V0KCRtYXA6ICRmb250cywgJGtleTogZm9udF9wcmltYXJ5X3NpemUpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICB9XG5cbiAgLnNlY18yMyB7XG4gICAgZmxleDogMTtcbiAgICBvcmRlcjogMztcbiAgICBwYWRkaW5nOiAzdmggMDtcbiAgICBtYXJnaW46IDAuNXZoIDAuNXZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJG1hcDogJGNhcmQsICRrZXk6IHJhZGl1cyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkbWFwOiAkY29sb3JzLCAka2V5OiBzZWNfMl9iYWNrZ3JvdW5kX2NvbG9yKTtcblxuICAgIHAge1xuICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcDogJGNvbG9ycywgJGtleTogc2VjXzJfZm9udF9jb2xvcik7XG4gICAgICBmb250LXNpemU6IG1hcC1nZXQoJG1hcDogJGZvbnRzLCAka2V5OiBmb250X3ByaW1hcnlfc2l6ZSk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gIH1cblxuICAuc2VjXzI0IHtcbiAgICBmbGV4OiAxO1xuICAgIG9yZGVyOiA0O1xuICAgIHBhZGRpbmc6IDN2aCAwO1xuICAgIG1hcmdpbjogMC41dmggMC41dnc7XG4gICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkbWFwOiAkY2FyZCwgJGtleTogcmFkaXVzKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRtYXA6ICRjb2xvcnMsICRrZXk6IHNlY18yX2JhY2tncm91bmRfY29sb3IpO1xuXG4gICAgcCB7XG4gICAgICBjb2xvcjogbWFwLWdldCgkbWFwOiAkY29sb3JzLCAka2V5OiBzZWNfMl9mb250X2NvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkbWFwOiAkZm9udHMsICRrZXk6IGZvbnRfcHJpbWFyeV9zaXplKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgfVxuXG4gIC5zZWNfMjUge1xuICAgIGZsZXg6IDE7XG4gICAgb3JkZXI6IDU7XG4gICAgcGFkZGluZzogM3ZoIDA7XG4gICAgbWFyZ2luOiAwLjV2aCA3dncgMC41dmggMXZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJG1hcDogJGNhcmQsICRrZXk6IHJhZGl1cyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkbWFwOiAkY29sb3JzLCAka2V5OiBzZWNfMl9iYWNrZ3JvdW5kX2NvbG9yKTtcblxuICAgIHAge1xuICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcDogJGNvbG9ycywgJGtleTogc2VjXzJfZm9udF9jb2xvcik7XG4gICAgICBmb250LXNpemU6IG1hcC1nZXQoJG1hcDogJGZvbnRzLCAka2V5OiBmb250X3ByaW1hcnlfc2l6ZSk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gIH1cbn1cblxuLnNlY18zIHtcbiAgbWFyZ2luLXRvcDogMjB2aCA1dncgMCA1dnc7XG5cbiAgaDQge1xuICAgIG1hcmdpbi10b3A6IDE1dmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkbWFwOiAkZm9udHMsICRrZXk6IGZvbnRfc2Vjb25kYXJ5X3NpemUpO1xuICB9XG5cbiAgLnNlY18zMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuc2VjXzMxMSB7XG4gICAgICBtYXJnaW46IDJ2aCAydncgMnZoIDd2dztcbiAgICAgIHBhZGRpbmc6IDV2aCAwO1xuICAgICAgZmxleDogMTtcbiAgICAgIG9yZGVyOiAxO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkbWFwOiAkY2FyZCwgJGtleTogcmFkaXVzKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJG1hcDogJGNvbG9ycywgJGtleTogc2VjXzJfYmFja2dyb3VuZF9jb2xvcik7XG4gICAgfVxuXG4gICAgLnNlY18zMTIge1xuICAgICAgZmxleDogMTtcbiAgICAgIG9yZGVyOiAyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAydmggN3Z3IDJ2aCAydnc7XG4gICAgICBwYWRkaW5nOiA1dmggMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJG1hcDogJGNhcmQsICRrZXk6IHJhZGl1cyk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRtYXA6ICRjb2xvcnMsICRrZXk6IHNlY18yX2JhY2tncm91bmRfY29sb3IpO1xuICAgIH1cblxuICAgIGJsb2NrcXVvdGUge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxdnc7XG4gICAgICBwYWRkaW5nOiA1dmggN3Z3O1xuICAgIH1cbiAgfVxufVxuXG4uc2VjXzQge1xuICBoNCB7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCRtYXA6ICRmb250cywgJGtleTogZm9udF9zZWNvbmRhcnlfc2l6ZSk7XG4gIH1cblxuICAuc2VjXzQxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMnZoIDd2dyAydmggN3Z3O1xuICAgIHBhZGRpbmc6IDV2aCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJG1hcDogJGNvbG9ycywgJGtleTogc2VjXzJfYmFja2dyb3VuZF9jb2xvcik7XG5cbiAgICAuc2VjXzQxMSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgb3JkZXI6IDE7XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1hcC1nZXQoJGZvbnRzLCBmb250X2ZhbWlseSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlY180MTIge1xuICAgICAgZmxleDogMTtcbiAgICAgIG9yZGVyOiAyO1xuXG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAydmg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRmb250cywgZm9udF9mYW1pbHkpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWNfNDEzIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBvcmRlcjogMztcblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xuICAgICAgICBmb250LWZhbWlseTogbWFwLWdldCgkZm9udHMsIGZvbnRfZmFtaWx5KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VjXzQxNCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgb3JkZXI6IDQ7XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1hcC1nZXQoJGZvbnRzLCBmb250X2ZhbWlseSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zZWNfNTEge1xuICBtYXJnaW46IDE1dmggN3Z3IDJ2aCA3dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJG1hcDogJGNvbG9ycywgJGtleTogc2VjXzJfYmFja2dyb3VuZF9jb2xvcik7XG4gIGNvbG9yIDogd2hpdGU7XG4gIHBhZGRpbmcgOiAydnc7XG5cbiAgLnNlY181MTEge1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGRpdntcbiAgICAgIG1hcmdpbi10b3AgOiAxdmg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLnNlY181MTIge1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGRpdntcbiAgICAgIG1hcmdpbi10b3AgOiAxdmg7XG4gICAgfVxuICB9XG5cbiAgLnNlY181MTMge1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5zZWNfNTEzMXtcblxuICAgICAgc3BhbntcbiAgICAgICAgcGFkZGluZyA6IDVweCA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBtYXJnaW4gOiAycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");




var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='bg-modal'>\n  <div class=\"modal-content\">\n    <div class=\"close\" (click)=\"closeLogin()\"> <a>+</a></div>\n    <!-- <img src=\"./../assets/image_icons/award.webp\" alt=\"icon image\" /> -->\n\n    <div class=\"forms\">\n\n      <form (submit)=\"signUpUser()\" class=\"signup_class\">\n        <div class=\"signup_with\">\n          <div class=\"google\">\n            <i class=\"fa fa-google\"></i>\n            | Google\n          </div>\n          <div class=\"facebook\">\n            <i class=\"fa fa-facebook\"></i>\n            | Facebook\n          </div>\n        </div>\n        <div>\n          <div class=\"user_name\">\n            <input type=\"text\" placeholder=\"First Name\" />\n            <input type=\"text\" placeholder=\"Last Name\" />\n          </div>\n          <div>\n            <input type=\"tel\" placeholder=\"Mobile Number\" />\n          </div>\n          <div>\n            <input type=\"email\" placeholder=\"Email\" />\n          </div>\n          <div>\n            <input type=\"password\" placeholder=\"Password\" />\n          </div>\n          <div>\n            <input type=\"password\" placeholder=\"Confirm Password\" />\n          </div>\n          <div class=\"signup_btn\">\n            <input type=\"submit\" value=\"Sign Up\" />\n          </div>\n        </div>\n      </form>\n\n      <form action=\"\" class=\"login_class\">\n        <h4> Login </h4>\n        <div>\n          <div>\n            <input type=\"email\" placeholder=\"email\" />\n          </div>\n          <div>\n            <input type=\"password\" placeholder=\"password\" />\n          </div>\n          <div class=\"login_btn\">\n            <a>Forgot Password?</a>\n            <button type=\"button\">Login</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-modal {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 4px; }\n\n.modal-content {\n  width: 70%;\n  height: auto;\n  background-color: #fff;\n  border-radius: 4px;\n  position: relative;\n  -webkit-transition-delay: 2s;\n          transition-delay: 2s;\n  padding: 2vw;\n  background-color: #0f745c; }\n\n.close {\n  position: absolute;\n  top: 0;\n  right: 14px;\n  font-size: 2vw;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  cursor: pointer;\n  font-family: open sans-serif;\n  color: white;\n  font-weight: solid; }\n\ninput {\n  width: 100%;\n  display: block;\n  margin: 2vh 0;\n  padding: 1vh 1vw;\n  border: 1px solid lightgray;\n  border-radius: 5px; }\n\ninput:focus {\n  box-shadow: 3px 3px 3px lightgray; }\n\n.signup_with {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.signup_with .google {\n    background-color: #e71c23;\n    color: white;\n    padding: 5px;\n    margin: 1vw;\n    cursor: pointer;\n    padding: 0.3vh 0.5vw;\n    border-radius: 4px;\n    box-shadow: 3px 3px 3px lightgray; }\n\n.signup_with .facebook {\n    background-color: #2475b0;\n    color: white;\n    padding: 5px;\n    margin: 1vw;\n    cursor: pointer;\n    padding: 0.3vh 0.5vw;\n    border-radius: 4px;\n    box-shadow: 3px 3px 3px lightgray; }\n\n.forms {\n  display: -webkit-box;\n  display: flex; }\n\n.forms .signup_class {\n    -webkit-box-flex: 1.5;\n            flex: 1.5;\n    background-color: #fff;\n    padding: 1vw; }\n\n.forms .signup_class .signup_btn {\n      width: 100%; }\n\n.forms .signup_class .signup_btn input {\n        width: 100%;\n        padding: 0.3vh 0.5vw;\n        border-radius: 4px;\n        box-shadow: 3px 3px 3px lightgray;\n        background-color: #e71c23;\n        color: white;\n        border: 0px solid lightgray; }\n\n.forms .login_class {\n    -webkit-box-flex: 1;\n            flex: 1;\n    background-color: #0a3d62;\n    padding: 5vh 2vw 1vw 1vw; }\n\n.forms .login_class h4 {\n      text-align: center;\n      color: white;\n      text-transform: capitalize; }\n\n.forms .login_class .login_btn a {\n      color: white;\n      float: left; }\n\n.forms .login_class .login_btn button {\n      background-color: #e71c23;\n      color: white;\n      border: 0px solid lightgray;\n      float: right;\n      padding: 0.3vh 0.5vw;\n      border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhamFsL3Byb2plY3Qvc3JjL2FwcC9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBRWxCLGtCQUFrQjtFQUNsQiw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWix5QkFBa0MsRUFBQTs7QUFHcEM7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFFaEIsMkJBQTJCO0VBQzNCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFdBQVc7RUFDWCx3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFKckI7SUFPSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUNBQWlDLEVBQUE7O0FBZHJDO0lBa0JJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQ0FBaUMsRUFBQTs7QUFJckM7RUFDRSxvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFEZjtJQUlJLHFCQUFTO1lBQVQsU0FBUztJQUNULHNCQUFzQjtJQUN0QixZQUFZLEVBQUE7O0FBTmhCO01BU00sV0FBVyxFQUFBOztBQVRqQjtRQVdRLFdBQVc7UUFDWCxvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLDJCQUEyQixFQUFBOztBQWpCbkM7SUF1QkksbUJBQU87WUFBUCxPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLHdCQUF3QixFQUFBOztBQXpCNUI7TUE0Qk0sa0JBQWtCO01BQ2xCLFlBQVk7TUFDWiwwQkFBMEIsRUFBQTs7QUE5QmhDO01BbUNRLFlBQVk7TUFDWixXQUFXLEVBQUE7O0FBcENuQjtNQXdDUSx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLDJCQUEyQjtNQUMzQixZQUFZO01BQ1osb0JBQW9CO01BQ3BCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctbW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMnM7XG4gIHBhZGRpbmc6IDJ2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxMTYsIDkyKTtcbn1cblxuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAxNHB4O1xuICBmb250LXNpemU6IDJ2dztcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBvcGVuIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IHNvbGlkO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAydmggMDtcbiAgcGFkZGluZzogMXZoIDF2dztcbiAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IGxpZ2h0Z3JheTtcbn1cblxuLnNpZ251cF93aXRoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5nb29nbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzFjMjM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDF2dztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMC4zdmggMC41dnc7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IGxpZ2h0Z3JheTtcbiAgfVxuXG4gIC5mYWNlYm9vayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NzViMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMXZ3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwLjN2aCAwLjV2dztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggbGlnaHRncmF5O1xuICB9XG59XG5cbi5mb3JtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLnNpZ251cF9jbGFzcyB7XG4gICAgZmxleDogMS41O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMXZ3O1xuXG4gICAgLnNpZ251cF9idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwLjN2aCAwLjV2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCBsaWdodGdyYXk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzFjMjM7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5sb2dpbl9jbGFzcyB7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEzZDYyO1xuICAgIHBhZGRpbmc6IDV2aCAydncgMXZ3IDF2dztcblxuICAgIGg0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cblxuICAgIC5sb2dpbl9idG4ge1xuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzFjMjM7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IDAuM3ZoIDAuNXZ3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route) {
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signUpUser = function (event) {
        event.preventDefault();
        console.log(event);
    };
    LoginComponent.prototype.closeLogin = function () {
        this.route.navigate(['/home']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gajal/project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map