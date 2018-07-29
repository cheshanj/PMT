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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<!--<flash-messages></flash-messages>-->\n\n<div style=\"text-align:center\">\n  <!--<flash-messages></flash-messages>-->\n  <router-outlet></router-outlet>\n\n\n\n</div>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/auth/login/login.component */ "./src/app/component/auth/login/login.component.ts");
/* harmony import */ var _component_auth_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/auth/auth-block/auth-block.component */ "./src/app/component/auth/auth-block/auth-block.component.ts");
/* harmony import */ var _component_auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/auth/register/register.component */ "./src/app/component/auth/register/register.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "./src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/profile/profile.component */ "./src/app/component/profile/profile.component.ts");
/* harmony import */ var _component_dashboard_project_project_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/dashboard/project/project.component */ "./src/app/component/dashboard/project/project.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import { FlashMessagesModule } from 'angular2-flash-messages/module';
var appRoutes = [
    { path: 'login', component: _component_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _component_auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'dashboard', component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'profile', component: _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"] },
    { path: 'project', component: _component_dashboard_project_project_component__WEBPACK_IMPORTED_MODULE_16__["ProjectComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _component_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _component_auth_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_8__["AuthBlockComponent"],
                _component_auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _component_dashboard_project_project_component__WEBPACK_IMPORTED_MODULE_16__["ProjectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                // FlashMessagesModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_12__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _services_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/auth/auth-block/auth-block.component.css":
/*!********************************************************************!*\
  !*** ./src/app/component/auth/auth-block/auth-block.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/auth/auth-block/auth-block.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/component/auth/auth-block/auth-block.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  auth-block works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/auth/auth-block/auth-block.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/component/auth/auth-block/auth-block.component.ts ***!
  \*******************************************************************/
/*! exports provided: AuthBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthBlockComponent", function() { return AuthBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthBlockComponent = /** @class */ (function () {
    function AuthBlockComponent() {
    }
    AuthBlockComponent.prototype.ngOnInit = function () {
    };
    AuthBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-block',
            template: __webpack_require__(/*! ./auth-block.component.html */ "./src/app/component/auth/auth-block/auth-block.component.html"),
            styles: [__webpack_require__(/*! ./auth-block.component.css */ "./src/app/component/auth/auth-block/auth-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthBlockComponent);
    return AuthBlockComponent;
}());



/***/ }),

/***/ "./src/app/component/auth/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/component/auth/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/auth/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/auth/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<p>-->\n  <!--login works!-->\n<!--</p>-->\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<!--\n    you can substitue the span of reauth email for a input with the email and\n    include the remember me checkbox\n    -->\n<div class=\"container\">\n  <div class=\"card card-container\">\n    <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n    <h2 class=\"title\">SIGN IN TO PMT</h2>\n\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n    <form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"Username\" required autofocus>\n      <input type=\"password\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n      <div id=\"remember\" class=\"checkbox\">\n        <label>\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\n        </label>\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\n    </form><!-- /form -->\n    <a class=\"forgot-password\" routerLink=\"/request-password\">\n      Forgot the password?\n    </a>&nbsp;\n    <a class=\"forgot-password\" [routerLink]=\"[ '/register']\" routerLinkActive=\"active\">\n      New User?\n    </a>\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ "./src/app/component/auth/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/auth/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // console.log("function workig");
        //     console.log(this.username);
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.router.navigate(['/dashboard']);
                _this.authService.storeUserData(data.token, data.user);
            }
            else {
                console.log("Cannot login.Please try again" + data);
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/component/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/component/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/auth/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/component/auth/register/register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signup #inputEmail,\r\n.form-signup #inputPassword,\r\n.form-signup #firstName,\r\n.form-signup #lastName,\r\n.form-signup #username,\r\n.form-signup #inputConfirmPassword,\r\n.form-signup #role{\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/auth/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/component/auth/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<!--\n    you can substitue the span of reauth email for a input with the email and\n    include the remember me checkbox\n    -->\n<div class=\"container\">\n  <div class=\"card card-container\">\n    <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n    <h2 class=\"title\">SIGN UP TO PMT</h2>\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n    <form class=\"form-signup\" (submit)=\"registerData()\">\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n\n      <input type=\"text\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"firstname\" class=\"form-control\" placeholder=\"First Name\" required autofocus>\n      &nbsp;\n\n      <input type=\"text\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"lastname\" class=\"form-control\" placeholder=\"Last Name\" required autofocus> &nbsp;\n\n      <input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"Username\" required autofocus> &nbsp;\n\n      <input type=\"email\" id=\"inputEmail\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email address\" required autofocus> &nbsp;\n\n      <input type=\"password\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required autofocus> &nbsp;\n\n      <input type=\"password\" id=\"inputConfirmPassword\" name=\"inputConfirmPassword\" class=\"form-control\" placeholder=\"Confirm Password\" required> &nbsp;\n\n      <input type=\"text\" id=\"role\" name=\"role\" [(ngModel)]=\"role\" class=\"form-control\" placeholder=\"Role\" required autofocus> &nbsp;\n\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign Up</button> &nbsp;\n    </form><!-- /form -->\n    <a [routerLink]=\"['/login']\" class=\"forgot-password\">\n      Already Have an Account ?\n    </a>\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ "./src/app/component/auth/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/auth/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { FlashMessagesService } from 'angular2-flash-messages';
//import {FlashMessagesModule} from 'angular2-flash-messages/module';
//import {FlashMessagesModule} from "angular2-flash-messages";
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, validateService, authService) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role
        };
        if (!this.validateService.validateRegister(user)) {
            //  this.flashMessage.show('All fields required!', { cssClass: 'alert-danger', timeout: 1000 });
            console.log("All fields required!");
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            console.log("Please input email with right format!");
            return false;
        }
        //register user
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data);
            // console.log("data");
            if (data) {
                console.log("You are now registered!");
                _this.router.navigate(['/login']);
            }
            else {
                console.log("Something went wrong!");
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/component/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/component/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.cov{\r\n  width: 170vh;\r\n\r\n}\r\n\r\n\r\n\r\n/* Create three equal columns that floats next to each other */\r\n\r\n\r\n\r\n.column2 {\r\n\r\n  margin-left :-42px ;\r\n\r\n}\r\n\r\n\r\n\r\n.column {\r\n\r\n\r\n  background-color:#0066ff;\r\n}\r\n\r\n\r\n\r\n/* set margin  */\r\n\r\n\r\n\r\n.Mycv{\r\n\r\n  margin-left: -8.5%;\r\n  margin-right: -80.5px;\r\n  margin-top: -1%;\r\n}\r\n\r\n\r\n\r\n.column1 {\r\n\r\n\r\n  margin-left :15px ;\r\n}\r\n\r\n\r\n\r\n.column3{\r\n  margin-left:27px;\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-3\">Project Management Tool</h1>\n  <p class=\"lead\">This is a simple tool for manage data of ongoing projects.</p>\n  <hr class=\"my-4\">\n  <p>This tool is developed using MEAN stack.this can handle basic crud operations in \"User\" routes.</p>\n  <!--<p class=\"lead\">-->\n    <!--<a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>-->\n  <!--</p>-->\n</div>\n<div>\n<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" [routerLink]=\"['/project']\">Create a new project</button>\n</div>\n&nbsp;\n<!--<div>-->\n  <!--<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Update a project</button>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            // console.log("ng on it");
            // console.log(profile);
            _this.user = profile.user;
            console.log(_this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/component/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/component/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/component/dashboard/project/project.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/dashboard/project/project.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signup #inputEmail,\r\n.form-signup #inputPassword,\r\n.form-signup #firstName,\r\n.form-signup #lastName,\r\n.form-signup #username,\r\n.form-signup #inputConfirmPassword,\r\n.form-signup #role{\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/dashboard/project/project.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/dashboard/project/project.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<!--\n    you can substitue the span of reauth email for a input with the email and\n    include the remember me checkbox\n    -->\n<div class=\"container\">\n  <div class=\"card card-container\">\n    <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n    <h2 class=\"title\">Create a Project</h2>\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n    <form class=\"form-signup\" (submit)=\"registerProjectData()\">\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n\n      <input type=\"text\" id=\"projectname\" name=\"projectname\" [(ngModel)]=\"projectname\" class=\"form-control\" placeholder=\"Project Name\" required autofocus>\n      &nbsp;\n\n      <input type=\"text\" id=\"description\" name=\"description\" [(ngModel)]=\"description\" class=\"form-control\" placeholder=\"Description\" required autofocus> &nbsp;\n\n      <input type=\"text\" id=\"projectleader\" name=\"projectleader\" [(ngModel)]=\"projectleader\" class=\"form-control\" placeholder=\"Project Leader\" required autofocus> &nbsp;\n\n      <input type=\"email\" id=\"category\" name=\"category\" [(ngModel)]=\"category\" class=\"form-control\" placeholder=\"Category\" required autofocus> &nbsp;\n\n\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Create</button> &nbsp;\n    </form><!-- /form -->\n    <a [routerLink]=\"['/login']\" class=\"forgot-password\">\n      Need to update details of existing project ?\n    </a>\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ "./src/app/component/dashboard/project/project.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/dashboard/project/project.component.ts ***!
  \******************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(router, validateService, authService) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent.prototype.registerProjectData = function () {
        var _this = this;
        var project = {
            projectname: this.projectname,
            description: this.description,
            projectleader: this.projectleader,
            category: this.category
        };
        if (!this.validateService.validateProjectDetails(project)) {
            //  this.flashMessage.show('All fields required!', { cssClass: 'alert-danger', timeout: 1000 });
            console.log("All fields required!");
            return false;
        }
        this.authService.registerProject(project).subscribe(function (data) {
            console.log(data);
            // console.log("data");
            if (data) {
                console.log("Your project successfully created!");
                _this.router.navigate(['/dashboard']);
            }
            else {
                console.log("Something went wrong!");
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/component/dashboard/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/component/dashboard/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/component/navbar/navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">Project Management Tool</a>\n  <button class=\"navbar-toggler\" aria-expanded=\"false\" aria-controls=\"navbarColor01\" aria-label=\"Toggle navigation\" type=\"button\" data-target=\"#navbarColor01\" data-toggle=\"collapse\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"nav-item\" *ngIf =\"authService.loggedIn()\" ><a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n      <li class=\"nav-item\" *ngIf =\"authService.loggedIn()\" ><a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a></li>\n      <li class=\"nav-item\" *ngIf =\"!authService.loggedIn()\" ><a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a></li>\n      <li class=\"nav-item\" *ngIf =\"!authService.loggedIn()\" ><a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a></li>\n      <li class=\"nav-item\" *ngIf =\"authService.loggedIn()\" ><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\" \">Logout</a></li>\n      <!--<li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\" \">Logout</a></li>-->\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        console.log("You are logged out!");
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/component/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/component/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/component/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signup #inputEmail,\r\n.form-signup #inputPassword,\r\n.form-signup #firstName,\r\n.form-signup #lastName,\r\n.form-signup #username,\r\n.form-signup #inputConfirmPassword,\r\n.form-signup #role{\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<!--\n    you can substitue the span of reauth email for a input with the email and\n    include the remember me checkbox\n    -->\n<div class=\"container\">\n  <div class=\"card card-container\">\n    <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n    <h2 class=\"title\">Update User</h2>\n\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n    <form class=\"form-signup\" (submit)=\"registerData()\">\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <input type=\"text\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"firstname\" class=\"form-control\" placeholder=\"First Name\" required autofocus>\n     &nbsp;\n      <input type=\"text\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"lastname\" class=\"form-control\" placeholder=\"Last Name\" required autofocus> &nbsp;\n\n      <input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"Username\" required autofocus> &nbsp;\n\n      <input type=\"email\" id=\"inputEmail\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email address\" required autofocus> &nbsp;\n\n      <input type=\"password\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required autofocus> &nbsp;\n\n      <input type=\"password\" id=\"inputConfirmPassword\" name=\"inputConfirmPassword\" class=\"form-control\" placeholder=\"Confirm Password\" required> &nbsp;\n\n      <input type=\"text\" id=\"role\" name=\"role\" [(ngModel)]=\"role\" class=\"form-control\" placeholder=\"Role\" required autofocus> &nbsp;\n\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" (click)=\"updateUser()\" type=\"submit\">Update</button> &nbsp;\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" (click)=\"deleteUser()\" type=\"submit\">Delete</button> &nbsp;\n    </form><!-- /form -->\n\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ "./src/app/component/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            // console.log("ng on it");
            // console.log(profile);
            _this.user = profile.user;
            console.log(_this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        if (this.user.firstname == "" || this.user.firstname == null) {
            window.alert("First Name is required!");
            return false;
        }
        if (this.user.username == "" || this.user.username == null) {
            window.alert("Username is required!");
            return false;
        }
        //temp user details
        this.tempuser = {
            id: this.user.id,
            firstname: this.user.firstname,
            username: this.user.username
        };
        this.authService.updateUser(this.tempuser).subscribe(function (data) {
            _this.user = data;
            window.alert("User details updated!");
        });
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        var userid = JSON.parse(localStorage.getItem('user')).id;
        this.authService.deleteUser(userid).subscribe(function (data) {
            console.log(data);
            _this.authService.logout();
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/component/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/component/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
// auth-guard.service.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['unauthorized']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(httpcl, http) {
        this.httpcl = httpcl;
        this.http = http;
    }
    //register the user
    AuthService.prototype.registerUser = function (user) {
        //console.log("this is reg user meth");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //authenticate the user when login,consider the header token also
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/users/login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //update the user
    AuthService.prototype.updateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8000/users/update', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //deleting the user
    AuthService.prototype.deleteUser = function (user) {
        return this.http.delete('http://localhost:8000/users/delete' + user)
            .map(function (res) { return res.json(); });
    };
    //get profile details
    AuthService.prototype.getProfile = function () {
        console.log("get profile");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //store user data and token from json
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    //user token load from user header
    AuthService.prototype.loadToken = function () {
        console.log("load token");
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    //logout function
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    //angular2 jwt logged in function.use for controling views on routes.
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["tokenNotExpired"])('id_token');
    };
    //register the project
    AuthService.prototype.registerProject = function (project) {
        //console.log("this is reg user meth");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/projects/createProject', project, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    //validate user registration information before regiter
    ValidateService.prototype.validateRegister = function (user) {
        if (user.firstname == undefined || user.lastname == undefined || user.username == undefined || user.email == undefined || user.password == undefined || user.role == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    //validate user email
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    //validate user passwords
    ValidateService.prototype.validatePassword = function (ac) {
        var password = ac.get('password').value;
        var confirmPassword = ac.get('inputConfirmPassword').value;
        if (password != confirmPassword) {
            console.log('false');
            ac.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    //validate project details before submit
    ValidateService.prototype.validateProjectDetails = function (project) {
        if (project.projectname == undefined || project.description == undefined || project.projectleader == undefined || project.category == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! K:\Education\New folder\aaf\aaf\angular-cli\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map