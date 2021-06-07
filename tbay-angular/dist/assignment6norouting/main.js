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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-lg-6 col-md-10 col-sm-11 mx-auto\">\n  <h3>About</h3>\n  <p>Tbay is a fictitious online marketplace with CRUD functionality to list items for sale.  The front end is written in Angular.  The front end interacts with the back end by way of a REST API service that is written in Express.  Data is persisted in a Mongo database.  Finally, design templates from the Bootstrap framework is used in the front end.</p>\n  <p>Tbay is made by Terry Chau for CSCI E-31: Web Application Development using Node.js.  This course was taught in the Spring of 2019.</p>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navLinks{\n    padding: 0 1rem 1rem 0;\n    margin: 0;\n}\n\n.no-select{\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2TGlua3N7XG4gICAgcGFkZGluZzogMCAxcmVtIDFyZW0gMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5uby1zZWxlY3R7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"text-align:center\" class=\"no-select\">\n    <a routerLink=\"/gallery/\">\n      <img width=\"150\" alt=\"tbay Logo\" src=\"assets/img/tbay.png\">\n    </a>\n    <p>\n      <b>Welcome {{ user }}! </b> (Not {{ user }}?  <a routerLink=\"/login/\">Logout/Login</a>)\n    </p>\n  </div>\n  <div class=\"container no-select\">\n    <div class=\"navLinks\" style=\"text-align:center\" >\n      <a class=\"btn btn-sm btn-outline-secondary\" routerLink=\"/gallery\">Current Listings</a>\n      &nbsp;\n      <a class=\"btn btn-sm btn-outline-secondary\" routerLink=\"/list-sale\">Sell An Item</a>\n      &nbsp;\n      <a class=\"btn btn-sm btn-outline-secondary\" routerLink=\"/purchase-history\">Purchase History</a>\n      &nbsp;\n      <a class=\"btn btn-sm btn-outline-secondary\" routerLink=\"/about\">About</a>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n<br class=\"no-select\">\n<br class=\"no-select\">"

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
/* harmony import */ var _entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entry.service */ "./src/app/entry.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(entryService, cookieService) {
        this.entryService = entryService;
        this.cookieService = cookieService;
        this.user = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.cookieService.check('name')) {
            this.user = this.cookieService.get('name');
        }
        else {
            this.user = this.entryService.user;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _entry_entry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entry/entry.component */ "./src/app/entry/entry.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entrydetail_entrydetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entrydetail/entrydetail.component */ "./src/app/entrydetail/entrydetail.component.ts");
/* harmony import */ var _newentry_newentry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./newentry/newentry.component */ "./src/app/newentry/newentry.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _list_sale_list_sale_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list-sale/list-sale.component */ "./src/app/list-sale/list-sale.component.ts");
/* harmony import */ var _purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./purchase-history/purchase-history.component */ "./src/app/purchase-history/purchase-history.component.ts");
















var routes = [
    { path: '', redirectTo: 'gallery', pathMatch: 'full' },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"] },
    { path: 'detail/:id', component: _entrydetail_entrydetail_component__WEBPACK_IMPORTED_MODULE_9__["EntrydetailComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'list-sale', component: _list_sale_list_sale_component__WEBPACK_IMPORTED_MODULE_14__["ListSaleComponent"] },
    { path: 'purchase-history', component: _purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_15__["PurchaseHistoryComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _entry_entry_component__WEBPACK_IMPORTED_MODULE_5__["EntryComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
                _entrydetail_entrydetail_component__WEBPACK_IMPORTED_MODULE_9__["EntrydetailComponent"],
                _newentry_newentry_component__WEBPACK_IMPORTED_MODULE_10__["NewentryComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _list_sale_list_sale_component__WEBPACK_IMPORTED_MODULE_14__["ListSaleComponent"],
                _purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_15__["PurchaseHistoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/entry.service.ts":
/*!**********************************!*\
  !*** ./src/app/entry.service.ts ***!
  \**********************************/
/*! exports provided: EntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryService", function() { return EntryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var EntryService = /** @class */ (function () {
    function EntryService(http) {
        this.http = http;
        this.apiurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl;
        this.imageBaseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].imageBaseURL;
        this.user = 'John Smith';
    }
    /**
     * Get all entries/doc in DB
     * @returns JSON
     */
    EntryService.prototype.listEntries = function () {
        return this.http.get(this.apiurl + 'api/list');
    };
    /**
     * Get all entries/doc in DB for a buyer
     * @returns JSON
     */
    EntryService.prototype.listBuyerEntries = function (buyer) {
        return this.http.get(this.apiurl + 'api/list_buyer/' + buyer);
    };
    /**
     * Get all entries/doc in DB excluding entries for author
     * @returns JSON
     */
    EntryService.prototype.listExclude = function (author) {
        return this.http.get(this.apiurl + 'api/list_exclude/' + author);
    };
    /**
     * Get all entries/doc in DB for author
     * @returns JSON
     */
    EntryService.prototype.listOnly = function (author) {
        return this.http.get(this.apiurl + 'api/list_only/' + author);
    };
    /**
     * Get all unsold entries/doc
     * @returns JSON
     */
    EntryService.prototype.listUnsold = function () {
        return this.http.get(this.apiurl + 'api/list_unsold/');
    };
    EntryService.prototype.getEntry = function (id) {
        return this.http.get(this.apiurl + 'api/find/' + id);
    };
    EntryService.prototype.createEntry = function (entry) {
        return this.http.post(this.apiurl + 'api/post/', entry);
    };
    EntryService.prototype.updateEntry = function (id, entryData) {
        return this.http.put(this.apiurl + 'api/put/' + id, entryData);
    };
    EntryService.prototype.deleteEntry = function (id) {
        return this.http.delete(this.apiurl + 'api/delete/' + id);
    };
    EntryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EntryService);
    return EntryService;
}());



/***/ }),

/***/ "./src/app/entry/entry.component.css":
/*!*******************************************!*\
  !*** ./src/app/entry/entry.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*see https://stackoverflow.com/questions/37287153/how-to-get-images-in-bootstraps-card-to-be-the-same-height-width*/\n\n.container{\n  margin: 0 auto;\n}\n\n.card-img-top {\n  width: 100%;\n  height: 16rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: 0;\n}\n\n.card-title {\n  font-weight: bold;\n  padding: .25rem 0 0 0;\n  margin: 0;\n}\n\n.card-text {\n  padding: .25rem 1rem;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnkvZW50cnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvSEFBb0g7O0FBRXBIO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvZW50cnkvZW50cnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3Mjg3MTUzL2hvdy10by1nZXQtaW1hZ2VzLWluLWJvb3RzdHJhcHMtY2FyZC10by1iZS10aGUtc2FtZS1oZWlnaHQtd2lkdGgqL1xuXG4uY29udGFpbmVye1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcmQtaW1nLXRvcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2cmVtO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAuMjVyZW0gMCAwIDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xuICBtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/entry/entry.component.html":
/*!********************************************!*\
  !*** ./src/app/entry/entry.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-light\">\n  <a routerLink=\"/detail/{{ entry._id }}\">\n    <img class=\"card-img-top\" src=\"{{ entry.displayurl }}\" />\n    <div class=\"card-title\" style=\"text-align: center\">{{ entry.title }}</div>\n    <div class=\"card-text\">\n      <b>Price: </b>${{ entry.listPrice.toFixed(2) }}<br />\n      <b>Seller: </b>{{ entry.author }}<br />\n      <b>List Date: </b>{{ entry.listDate | date:'medium'}}<br />\n    </div>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/entry/entry.component.ts":
/*!******************************************!*\
  !*** ./src/app/entry/entry.component.ts ***!
  \******************************************/
/*! exports provided: EntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryComponent", function() { return EntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EntryComponent = /** @class */ (function () {
    function EntryComponent() {
    }
    EntryComponent.prototype.ngOnInit = function () {
        this.entry.displayurl = this.baseURL + this.entry.image;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EntryComponent.prototype, "entry", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EntryComponent.prototype, "baseURL", void 0);
    EntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entry',
            template: __webpack_require__(/*! ./entry.component.html */ "./src/app/entry/entry.component.html"),
            styles: [__webpack_require__(/*! ./entry.component.css */ "./src/app/entry/entry.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EntryComponent);
    return EntryComponent;
}());



/***/ }),

/***/ "./src/app/entrydetail/entrydetail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/entrydetail/entrydetail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entryphoto img{\n  width: 400px;\n  padding: 1rem 0;\n}\n\n/* ensures that new lines are shown */\n\n.new-lines{\n  white-space: pre-wrap;\n  overflow-wrap: break-word;\n}\n\n.no-select{\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnlkZXRhaWwvZW50cnlkZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLHFDQUFxQzs7QUFDckM7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZW50cnlkZXRhaWwvZW50cnlkZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbnRyeXBob3RvIGltZ3tcbiAgd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiAxcmVtIDA7XG59XG5cbi8qIGVuc3VyZXMgdGhhdCBuZXcgbGluZXMgYXJlIHNob3duICovXG4ubmV3LWxpbmVze1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5uby1zZWxlY3R7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/entrydetail/entrydetail.component.html":
/*!********************************************************!*\
  !*** ./src/app/entrydetail/entrydetail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div *ngIf=\"entry; then thenBlock1 else elseBlock1\"></div>\n  <ng-template #thenBlock1>\n    <h3>{{ entry.title }}</h3>\n    <div class=\"entryphoto\"><img src=\"{{ entrydisplayurl }}\" /></div>\n    <div><b>Price: </b>${{ entry.listPrice.toFixed(2) }}</div>\n    <div><b>Seller: </b> {{ entry.author }}</div>\n    <div><b>Seller List Date: </b>{{ entry.listDate | date:'medium' }}</div>\n\n    <!-- For case when item is sold-->\n    <div *ngIf=\"isItemSold\" >\n      <div><b>Buyer: </b> {{ entry.buyer }}</div>\n      <div><b>Purchase Date: </b>{{ entry.buyDate | date:'medium' }}</div>\n    </div>\n\n    <div><b>Description:</b></div>\n    <div class=\"new-lines\">{{ entry.description }}</div>\n\n    <div class=\"no-select\">\n    <br>\n\n    <div *ngIf=\"isItemSold; then thenBlock2 else elseBlock2\"></div>\n    <!-- For case when item is sold-->\n    <ng-template #thenBlock2>\n      <div *ngIf=\"userSameAsEntryBuyer; then thenBlock3 else elseBlock3\"></div>\n      <!-- list buttons here for userSameAsEntryBuyer-->\n      <ng-template #thenBlock3>\n        <div class=\"alert alert-info col-md-10 col-lg-8\">\n          Congratulations on your purchase!\n        </div>\n        <button class=\"btn btn-danger\" (click)=\"deleteEntry()\">Delete From Purchase History</button>\n        &nbsp;\n        <button class=\"btn btn-secondary\" (click)=\"backClicked()\">Cancel</button>\n      </ng-template>\n\n      <!-- list buttons here for !userSameAsEntryBuyer-->\n      <ng-template #elseBlock3>\n        <div class=\"alert alert-info col-md-10 col-lg-8\">\n          You did not purchase this item.\n        </div>\n        <button class=\"btn btn-secondary\" (click)=\"backClicked()\">Cancel</button>\n      </ng-template>\n    </ng-template>\n\n    <!-- For case when item is not sold-->\n    <ng-template #elseBlock2>\n      <div *ngIf=\"userSameAsEntrySeller; then thenBlock4 else elseBlock4\"></div>\n      <!-- list buttons here for userSameAsEntrySeller-->\n      <ng-template #thenBlock4>\n        <div class=\"alert alert-info col-md-10 col-lg-8\">\n          This item is unsold at the moment.  'Edit Listing' or 'Delete' item.\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"toggleEditMode()\">Edit Listing</button>\n        &nbsp;\n        <button class=\"btn btn-danger\" (click)=\"deleteEntry()\">Delete</button>\n        &nbsp;\n        <button class=\"btn btn-secondary\" (click)=\"backClicked()\">Cancel</button>\n      </ng-template>\n\n      <!-- list buttons here for !userSameAsEntrySeller-->\n      <ng-template #elseBlock4>\n        <button class=\"btn btn-success\" (click)=\"buyItem()\">Buy</button>\n        &nbsp;\n        <button class=\"btn btn-secondary\" (click)=\"backClicked()\">Cancel</button>\n      </ng-template>\n    </ng-template>\n\n    </div>\n  </ng-template>\n\n  <!-- for case when entry does not exists in DB -->\n  <ng-template #elseBlock1>\n    <div *ngIf=\"getEntryComplete\" class=\"alert alert-danger\">\n      There is an error with this entry.  Please proceed back to the <a routerLink=\"/gallery\">home page</a>!\n    </div>\n  </ng-template>\n\n  <!-- when the Edit button is pressed -->\n  <div *ngIf=\"editDropDown\">\n    <br>\n    <h3>Edit Listing</h3>\n    <form #createListingForm=\"ngForm\" (ngSubmit)=\"update(createListingForm)\">\n      <div class=\"form-group row\">\n        <div class=\"col-lg-6 col-md-8 col-sm-9\">\n          <label for=\"title\" class=\"col-form-label\"><b>Title:</b>\n          </label>\n          <input required minlength=\"2\" #title=\"ngModel\" placeholder=\"title\" name=\"title\" class=\"form-control\"\n            [(ngModel)]=\"entryEdit.title\" />\n  \n          <div *ngIf=\"title.invalid && (title.dirty || title.touched) && title.errors.minlength\"\n            class=\"alert alert-danger\">\n            Title must be at least 2 characters long.\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"form-group row\">\n        <div class=\"col-lg-6 col-md-8 col-sm-9\">\n          <label for=\"listPrice\" class=\"col-form-label\"><b>Price ($):</b>\n          </label>\n          <input required min=\"0\" #listPrice=\"ngModel\" placeholder=\"1\" name=\"listPrice\" class=\"form-control\"\n            [(ngModel)]=\"entryEdit.listPrice\" type=\"number\" />\n        </div>\n      </div>\n  \n      <div class=\"form-group row\">\n        <div class=\"col-lg-6 col-md-8 col-sm-9\">\n          <label for=\"description\" class=\"col-form-label\"><b>Description:</b>\n          </label>\n          <textarea placeholder=\"description\" name=\"description\" class=\"form-control\" [(ngModel)]=\"entryEdit.description\"\n            rows=\"5\"></textarea>\n        </div>\n      </div>\n  \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!createListingForm.valid\">\n        Update Listing\n      </button>\n      &nbsp;\n      <button class=\"btn btn-secondary\" (click)=\"toggleEditMode()\">Cancel</button>\n    </form>\n    {{goToBottom()}}\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/entrydetail/entrydetail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/entrydetail/entrydetail.component.ts ***!
  \******************************************************/
/*! exports provided: EntrydetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrydetailComponent", function() { return EntrydetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entry.service */ "./src/app/entry.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var EntrydetailComponent = /** @class */ (function () {
    function EntrydetailComponent(route, router, entryService, cookieService, _location) {
        this.route = route;
        this.router = router;
        this.entryService = entryService;
        this.cookieService = cookieService;
        this._location = _location;
        this.entry = null; // mongo doc
        this.entrydisplayurl = ''; //basepath + path to photo
        this.user = "";
        this.userSameAsEntrySeller = false;
        this.userSameAsEntryBuyer = false;
        this.getEntryComplete = false; // to prevent flickering
        this.entryEdit = null; // a copy of entry for editing.
        this.editDropDown = false;
        this.isItemSold = false;
        this.goToBottom = function () {
            try {
                window.scrollTo({
                    top: 1000,
                    left: 0,
                    behavior: 'smooth'
                });
            }
            catch (e) {
                window.scrollTo(0, document.body.scrollHeight);
            }
        };
        if (this.cookieService.check('name')) {
            this.user = this.cookieService.get('name');
        }
        else {
            this.user = this.entryService.user;
        }
        this.getEntry();
    }
    EntrydetailComponent.prototype.ngOnInit = function () {
        //runs on init after Angular is done creating component
    };
    EntrydetailComponent.prototype.getEntry = function () {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id'); //get id in url from routes in app.modules.ts
        this.entryService.getEntry(param)
            .subscribe(function (entry) {
            _this.entry = entry;
            try {
                _this.entrydisplayurl = _this.entryService.imageBaseURL + _this.entry.image;
                if (_this.entry.author == _this.user) {
                    _this.userSameAsEntrySeller = true;
                }
                if (_this.entry.buyer == _this.user) {
                    _this.userSameAsEntryBuyer = true;
                }
                if (_this.entry.buyer) {
                    _this.isItemSold = true;
                }
                // make copy of entry for editing
                _this.entryEdit = JSON.parse(JSON.stringify(entry));
            }
            catch (error) {
                _this.entry = null;
            }
            finally {
                _this.getEntryComplete = true;
            }
        }, function (error) {
            // for 404 errors
            _this.entry = null;
            _this.getEntryComplete = true;
        });
        return;
    };
    EntrydetailComponent.prototype.toggleEditMode = function () {
        // toggle the Edit Form
        this.editDropDown = (this.editDropDown ? false : true);
    };
    EntrydetailComponent.prototype.backClicked = function () {
        this._location.back();
    };
    EntrydetailComponent.prototype.deleteEntry = function () {
        var _this = this;
        if (confirm("Delete this entry?")) {
            this.entryService.deleteEntry(this.entry._id)
                .subscribe(function (result) {
                _this._location.back();
            });
        }
    };
    EntrydetailComponent.prototype.buyItem = function () {
        var _this = this;
        if (confirm("Buy this item?")) {
            this.entry.buyer = this.user;
            this.entryService.updateEntry(this.entry._id, this.entry)
                .subscribe(function (entry) {
                _this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                    return _this.router.navigate(["/detail/" + entry._id]);
                });
            });
        }
    };
    EntrydetailComponent.prototype.update = function (createListingForm) {
        var _this = this;
        this.entryService.updateEntry(this.entry._id, this.entryEdit)
            .subscribe(function (entry) {
            _this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                return _this.router.navigate(["/detail/" + entry._id]);
            });
        });
    };
    EntrydetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entrydetail',
            template: __webpack_require__(/*! ./entrydetail.component.html */ "./src/app/entrydetail/entrydetail.component.html"),
            styles: [__webpack_require__(/*! ./entrydetail.component.css */ "./src/app/entrydetail/entrydetail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _entry_service__WEBPACK_IMPORTED_MODULE_3__["EntryService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], EntrydetailComponent);
    return EntrydetailComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-margin{\n    margin: 0 0 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLW1hcmdpbntcbiAgICBtYXJnaW46IDAgMCAycmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--app-entry is defined in entry/entry.component.ts-->\n<div class=\"container\">\n  <h3>Listing by All Users</h3>\n  <p>Items: {{ getNumberOfEntries() }}</p>\n  <div class=\"row\">\n    <div class=\"card-deck col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 card-margin\" *ngFor=\"let entryUnit of entries\">\n      <app-entry [entry]=\"entryUnit\" [baseURL]=\"imageBaseURL\"> </app-entry>\n    </div>\n  </div>\n  <br>\n\n  <!-- present warning to sell items when there are no items for sale. -->\n  <div *ngIf=\"!numEntries\" class=\"alert alert-warning\">\n    There are no items to display. Be the first to <a routerLink=\"/list-sale\">sell an item</a>!\n    <br>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entry.service */ "./src/app/entry.service.ts");



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(entryService) {
        this.entryService = entryService;
        this.entries = null;
        this.numEntries = 1;
        this.imageBaseURL = '';
        this.updateEntryList();
        this.imageBaseURL = this.entryService.imageBaseURL;
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.getNumberOfEntries = function () {
        return this.numEntries;
    };
    GalleryComponent.prototype.updateEntryList = function () {
        var _this = this;
        this.entryService.listUnsold().subscribe(function (entries) {
            _this.entries = entries;
            _this.numEntries = _this.entries.length;
        });
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            providers: [_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]],
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/list-sale/list-sale.component.css":
/*!***************************************************!*\
  !*** ./src/app/list-sale/list-sale.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-margin{\n    margin: 0 0 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1zYWxlL2xpc3Qtc2FsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1zYWxlL2xpc3Qtc2FsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtbWFyZ2lue1xuICAgIG1hcmdpbjogMCAwIDJyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/list-sale/list-sale.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-sale/list-sale.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--app-entry is defined in entry/entry.component.ts-->\n\n<app-newentry (newEntry)=\"updateEntryList()\"></app-newentry>\n<br />\n<br />\n\n<div class=\"container\" id=\"sale_items_jump\">\n  <h3>Items for Sale / Sold by {{ user }}</h3>\n  <p>Items: {{ getNumberOfEntries() }}</p>\n  <div class=\"row\">\n    <div class=\"card-deck col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 card-margin\" *ngFor=\"let entryUnit of entries\">\n      <app-entry [entry]=\"entryUnit\" [baseURL]=\"imageBaseURL\"> </app-entry>\n    </div>\n  </div>\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/list-sale/list-sale.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-sale/list-sale.component.ts ***!
  \**************************************************/
/*! exports provided: ListSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSaleComponent", function() { return ListSaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entry.service */ "./src/app/entry.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




var ListSaleComponent = /** @class */ (function () {
    function ListSaleComponent(entryService, cookieService) {
        this.entryService = entryService;
        this.cookieService = cookieService;
        this.user = '';
        this.entries = null;
        this.numEntries = 0;
        this.imageBaseURL = '';
        if (this.cookieService.check('name')) {
            this.user = this.cookieService.get('name');
        }
        else {
            this.user = this.entryService.user;
        }
    }
    ListSaleComponent.prototype.getNumberOfEntries = function () {
        return this.numEntries;
    };
    ListSaleComponent.prototype.ngOnInit = function () {
        this.updateEntryList();
        this.imageBaseURL = this.entryService.imageBaseURL;
    };
    ListSaleComponent.prototype.updateEntryList = function () {
        var _this = this;
        this.entryService.listOnly(this.user).subscribe(function (entries) {
            _this.entries = entries;
            _this.numEntries = _this.entries.length;
        });
    };
    ListSaleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-sale',
            template: __webpack_require__(/*! ./list-sale.component.html */ "./src/app/list-sale/list-sale.component.html"),
            styles: [__webpack_require__(/*! ./list-sale.component.css */ "./src/app/list-sale/list-sale.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], ListSaleComponent);
    return ListSaleComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6 col-sm-10 my-auto\">\n  <form #editForm=\"ngForm\" (ngSubmit)=\"ChangeName(editForm.value)\">\n    <div class=\"form-group row\">\n      <label for=\"nameField\" class=\"col-form-label\"><b>New Name:</b></label>\n      <div class=\"col-lg-6 col-md-8 col-sm-9\"></div>\n        <!-- <div class=\"col-sm-6\"> -->\n        <input required minlength=\"2\" #title=\"ngModel\" type=\"text\" name=\"nameField\" class=\"form-control\" [ngModel]=\"nameField\">\n        <div *ngIf=\"title.invalid && (title.dirty || title.touched) && title.errors.minlength\" class=\"alert alert-danger\">\n            Title must be at least 2 characters long.\n      </div>\n      <br>\n    </div>\n    <div class=\"form-group row\">\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.valid\">Change</button>\n      &nbsp;&nbsp;\n      <button type=\"button\" routerLink=\"/\" class=\"btn btn-secondary\">Cancel</button>\n    </div>\n    <div class=\"form-group row\">\n      <p><b>Note:</b> Currently, login just changes the user name.  The name of the seller or buyer is the same as the user name.</p>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(cookieService) {
        this.cookieService = cookieService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ChangeName = function (obj) {
        if (confirm("Change Name?")) {
            this.cookieService.set('name', obj.nameField);
            // must use following to refresh page instead of Router
            location.href = '/';
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/newentry/newentry.component.css":
/*!*************************************************!*\
  !*** ./src/app/newentry/newentry.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld2VudHJ5L25ld2VudHJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/newentry/newentry.component.html":
/*!**************************************************!*\
  !*** ./src/app/newentry/newentry.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>List Something to Sell!</h3>\n  <form #createListingForm=\"ngForm\" (ngSubmit)=\"save(createListingForm)\">\n    <div class=\"form-group row\">\n      <div class=\"col-lg-6 col-md-8 col-sm-9\">\n        <label for=\"title\" class=\"col-form-label\"><b>Title:</b>\n        </label>\n        <input required minlength=\"2\" #title=\"ngModel\" placeholder=\"title\" name=\"title\" class=\"form-control\"\n          [(ngModel)]=\"entry.title\" />\n\n        <div *ngIf=\"title.invalid && (title.dirty || title.touched) && title.errors.minlength\"\n          class=\"alert alert-danger\">\n          Title must be at least 2 characters long.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-lg-6 col-md-8 col-sm-9\">\n        <label for=\"listPrice\" class=\"col-form-label\"><b>Price ($):</b>\n        </label>\n        <input required min=\"0\" #listPrice=\"ngModel\" placeholder=\"1\" name=\"listPrice\" class=\"form-control\"\n          [(ngModel)]=\"entry.listPrice\" type=\"number\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-lg-6 col-md-8 col-sm-9\">\n        <label for=\"description\" class=\"col-form-label\"><b>Description:</b>\n        </label>\n        <textarea placeholder=\"description\" name=\"description\" class=\"form-control\" [(ngModel)]=\"entry.description\"\n          rows=\"5\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-lg-6 col-md-8 col-sm-9\">\n        <label for=\"file\" class=\"col-form-label\"><b>Select an Image File:</b>\n        </label>\n        <br>\n        <input type=\"file\" name=\"file\" (change)=\"handleFileInput($event.target)\" />\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!createListingForm.valid\">\n      Sell\n    </button>\n    &nbsp;\n    <button class=\"btn btn-secondary\" (click)=\"backClicked()\">Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/newentry/newentry.component.ts":
/*!************************************************!*\
  !*** ./src/app/newentry/newentry.component.ts ***!
  \************************************************/
/*! exports provided: NewentryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewentryComponent", function() { return NewentryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entry.service */ "./src/app/entry.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var NewentryComponent = /** @class */ (function () {
    function NewentryComponent(entryService, cookieService, router, _location) {
        this.entryService = entryService;
        this.cookieService = cookieService;
        this.router = router;
        this._location = _location;
        this.newEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //send a refresh list event, when new entry is made
        this.user = '';
        this.entry = {}; //entry from newentry.component.html
        this.fileToUpload = null; //fileToUpload set in an event change
        if (this.cookieService.check('name')) {
            this.user = this.cookieService.get('name');
        }
        else {
            this.user = this.entryService.user;
        }
    }
    NewentryComponent.prototype.handleFileInput = function (target) {
        this.fileToUpload = target.files.item(0);
    };
    NewentryComponent.prototype.ngOnInit = function () {
    };
    NewentryComponent.prototype.save = function (createListingForm) {
        var _this = this;
        //FormData is alternative to JSON
        var formData = new FormData();
        formData.append('title', this.entry.title);
        formData.append('author', this.user);
        formData.append('listPrice', this.entry.listPrice);
        formData.append('description', this.entry.description ? this.entry.description : "No description is provided for \"" + this.entry.title + "\".");
        if (this.fileToUpload != null) {
            formData.append('image', this.fileToUpload, this.fileToUpload.name);
        }
        console.log("submitting new entry");
        this.entryService.createEntry(formData)
            .subscribe(function (entry) {
            _this.newEntry.emit();
            createListingForm.reset();
            _this.router.navigate(["/detail/" + entry._id]);
        });
    };
    NewentryComponent.prototype.backClicked = function () {
        this._location.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewentryComponent.prototype, "newEntry", void 0);
    NewentryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newentry',
            template: __webpack_require__(/*! ./newentry.component.html */ "./src/app/newentry/newentry.component.html"),
            styles: [__webpack_require__(/*! ./newentry.component.css */ "./src/app/newentry/newentry.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], NewentryComponent);
    return NewentryComponent;
}());



/***/ }),

/***/ "./src/app/purchase-history/purchase-history.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/purchase-history/purchase-history.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-margin{\n    margin: 0 0 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVyY2hhc2UtaGlzdG9yeS9wdXJjaGFzZS1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wdXJjaGFzZS1oaXN0b3J5L3B1cmNoYXNlLWhpc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLW1hcmdpbntcbiAgICBtYXJnaW46IDAgMCAycmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/purchase-history/purchase-history.component.html":
/*!******************************************************************!*\
  !*** ./src/app/purchase-history/purchase-history.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Purchases Made by {{ user }}</h3>\n  <p>Items: {{ getNumberOfEntries() }}</p>\n  <div class=\"row\">\n    <div class=\"card-deck col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 card-margin\" *ngFor=\"let entryUnit of entries\">\n      <app-entry [entry]=\"entryUnit\" [baseURL]=\"imageBaseURL\"> </app-entry>\n    </div>\n  </div>\n\n  <!-- present warning to sell items when there are no purchased items. -->\n  <div *ngIf=\"!numEntries\" class=\"alert alert-warning\">\n    You did not buy anything.  Click on an <a routerLink=\"/gallery\">item listed for sale</a> and buy item!\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/purchase-history/purchase-history.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/purchase-history/purchase-history.component.ts ***!
  \****************************************************************/
/*! exports provided: PurchaseHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseHistoryComponent", function() { return PurchaseHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entry.service */ "./src/app/entry.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




var PurchaseHistoryComponent = /** @class */ (function () {
    function PurchaseHistoryComponent(entryService, cookieService) {
        this.entryService = entryService;
        this.cookieService = cookieService;
        this.user = '';
        this.entries = null;
        this.numEntries = 1;
        this.imageBaseURL = '';
        if (this.cookieService.check('name')) {
            this.user = this.cookieService.get('name');
        }
        else {
            this.user = this.entryService.user;
        }
        this.updateEntryList();
        this.imageBaseURL = this.entryService.imageBaseURL;
    }
    PurchaseHistoryComponent.prototype.getNumberOfEntries = function () {
        return this.numEntries;
    };
    PurchaseHistoryComponent.prototype.ngOnInit = function () {
    };
    PurchaseHistoryComponent.prototype.updateEntryList = function () {
        var _this = this;
        this.entryService.listBuyerEntries(this.user).subscribe(function (entries) {
            _this.entries = entries;
            _this.numEntries = _this.entries.length;
        });
    };
    PurchaseHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-history',
            template: __webpack_require__(/*! ./purchase-history.component.html */ "./src/app/purchase-history/purchase-history.component.html"),
            styles: [__webpack_require__(/*! ./purchase-history.component.css */ "./src/app/purchase-history/purchase-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], PurchaseHistoryComponent);
    return PurchaseHistoryComponent;
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
    production: false,
    apiurl: 'http://localhost:8080/',
    imageBaseURL: 'http://localhost:8080'
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

module.exports = __webpack_require__(/*! /home/tc/Desktop/Harvard/Resume_Uploads/Tbay_Online_MarketPlace/tbay-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map