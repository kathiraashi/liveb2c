webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<router-outlet>  </router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_tabview__ = __webpack_require__("../../../../primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_scrollpanel__ = __webpack_require__("../../../../primeng/scrollpanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_scrollpanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_scrollpanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_overlaypanel__ = __webpack_require__("../../../../primeng/overlaypanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_overlaypanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_overlaypanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__signin_signup_signin_signup_component__ = __webpack_require__("../../../../../src/app/signin-signup/signin-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__feeds_main_feeds_main_component__ = __webpack_require__("../../../../../src/app/feeds-main/feeds-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__feeds_feeds_left_bar_feeds_left_bar_component__ = __webpack_require__("../../../../../src/app/feeds/feeds-left-bar/feeds-left-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__feeds_feeds_right_bar_feeds_right_bar_component__ = __webpack_require__("../../../../../src/app/feeds/feeds-right-bar/feeds-right-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__feeds_feeds_center_feeds_center_component__ = __webpack_require__("../../../../../src/app/feeds/feeds-center/feeds-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__popups_post_one_post_one_component__ = __webpack_require__("../../../../../src/app/popups/post-one/post-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__popups_post_two_post_two_component__ = __webpack_require__("../../../../../src/app/popups/post-two/post-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__feeds_feeds_highlights_feeds_highlights_component__ = __webpack_require__("../../../../../src/app/feeds/feeds-highlights/feeds-highlights.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__feeds_feeds_questions_feeds_questions_component__ = __webpack_require__("../../../../../src/app/feeds/feeds-questions/feeds-questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__feeds_feeds_trends_feeds_trends_component__ = __webpack_require__("../../../../../src/app/feeds/feeds-trends/feeds-trends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__feeds_feeds_header_feeds_header_component__ = __webpack_require__("../../../../../src/app/feeds/feeds-header/feeds-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__profile_main_profile_main_component__ = __webpack_require__("../../../../../src/app/profile-main/profile-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__profile_profile_left_bar_profile_left_bar_component__ = __webpack_require__("../../../../../src/app/profile/profile-left-bar/profile-left-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__profile_profile_right_bar_profile_right_bar_component__ = __webpack_require__("../../../../../src/app/profile/profile-right-bar/profile-right-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__profile_profile_timeline_profile_timeline_component__ = __webpack_require__("../../../../../src/app/profile/profile-timeline/profile-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__profile_profile_followers_profile_followers_component__ = __webpack_require__("../../../../../src/app/profile/profile-followers/profile-followers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__profile_profile_following_profile_following_component__ = __webpack_require__("../../../../../src/app/profile/profile-following/profile-following.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__profile_profile_settings_profile_settings_component__ = __webpack_require__("../../../../../src/app/profile/profile-settings/profile-settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//Custome Module --------------------------------

//Feture Module

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__signin_signup_signin_signup_component__["a" /* SigninSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__feeds_main_feeds_main_component__["a" /* FeedsMainComponent */],
                __WEBPACK_IMPORTED_MODULE_18__feeds_feeds_left_bar_feeds_left_bar_component__["a" /* FeedsLeftBarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__feeds_feeds_right_bar_feeds_right_bar_component__["a" /* FeedsRightBarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__feeds_feeds_center_feeds_center_component__["a" /* FeedsCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__popups_post_one_post_one_component__["a" /* PostOneComponent */],
                __WEBPACK_IMPORTED_MODULE_22__popups_post_two_post_two_component__["a" /* PostTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_23__feeds_feeds_highlights_feeds_highlights_component__["a" /* FeedsHighlightsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__feeds_feeds_questions_feeds_questions_component__["a" /* FeedsQuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__feeds_feeds_trends_feeds_trends_component__["a" /* FeedsTrendsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__feeds_feeds_header_feeds_header_component__["a" /* FeedsHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_27__profile_main_profile_main_component__["a" /* ProfileMainComponent */],
                __WEBPACK_IMPORTED_MODULE_28__profile_profile_left_bar_profile_left_bar_component__["a" /* ProfileLeftBarComponent */],
                __WEBPACK_IMPORTED_MODULE_29__profile_profile_right_bar_profile_right_bar_component__["a" /* ProfileRightBarComponent */],
                __WEBPACK_IMPORTED_MODULE_30__profile_profile_timeline_profile_timeline_component__["a" /* ProfileTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_31__profile_profile_followers_profile_followers_component__["a" /* ProfileFollowersComponent */],
                __WEBPACK_IMPORTED_MODULE_32__profile_profile_following_profile_following_component__["a" /* ProfileFollowingComponent */],
                __WEBPACK_IMPORTED_MODULE_33__profile_profile_settings_profile_settings_component__["a" /* ProfileSettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_10_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_scrollpanel__["ScrollPanelModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_overlaypanel__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["f" /* MatExpansionModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_21__popups_post_one_post_one_component__["a" /* PostOneComponent */], __WEBPACK_IMPORTED_MODULE_22__popups_post_two_post_two_component__["a" /* PostTwoComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signup_signin_signup_component__ = __webpack_require__("../../../../../src/app/signin-signup/signin-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feeds_main_feeds_main_component__ = __webpack_require__("../../../../../src/app/feeds-main/feeds-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_main_profile_main_component__ = __webpack_require__("../../../../../src/app/profile-main/profile-main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__["a" /* WelcomeComponent */],
        data: {
            animation: { value: 'welcome', }
        }
    },
    { path: 'SignInSignUp',
        component: __WEBPACK_IMPORTED_MODULE_2__signin_signup_signin_signup_component__["a" /* SigninSignupComponent */],
        data: {
            animation: { value: 'SignInSignUp', }
        }
    },
    { path: 'Feeds',
        component: __WEBPACK_IMPORTED_MODULE_4__feeds_main_feeds_main_component__["a" /* FeedsMainComponent */],
        data: {
            animation: { value: 'Feeds', }
        }
    },
    { path: 'Profile',
        component: __WEBPACK_IMPORTED_MODULE_5__profile_main_profile_main_component__["a" /* ProfileMainComponent */],
        data: {
            animation: { value: 'Profile', }
        }
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })],
            providers: [],
            bootstrap: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/feeds-main/feeds-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds-main/feeds-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feedsMain\">\r\n\r\n        <app-feeds-header></app-feeds-header>\r\n\r\n\r\n    <div class=\"feeds mt-20\">\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n            <div fxFlex=\"21%\" style=\"background-color:#ffffff; box-shadow:#66666678 0px 1px 8px 0px\">\r\n                <app-feeds-left-bar></app-feeds-left-bar>\r\n            </div>\r\n            <div fxFlex=\"51%\" style=\"background-color:#ffffff;\">\r\n                <app-feeds-center></app-feeds-center>\r\n            </div>\r\n            <div fxFlex=\"21%\" style=\"background-color:#ffffff; box-shadow:#66666678 0px 1px 8px 0px\">\r\n                <app-feeds-right-bar></app-feeds-right-bar>\r\n            </div>\r\n        </div> <!-- Feeds Flex LayOut -->\r\n\r\n    </div> <!-- feeds -->\r\n\r\n</div> <!-- feedsMain -->\r\n"

/***/ }),

/***/ "../../../../../src/app/feeds-main/feeds-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedsMainComponent = (function () {
    function FeedsMainComponent() {
    }
    FeedsMainComponent.prototype.ngOnInit = function () {
    };
    FeedsMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feeds-main',
            template: __webpack_require__("../../../../../src/app/feeds-main/feeds-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feeds-main/feeds-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedsMainComponent);
    return FeedsMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feeds/feeds-center/feeds-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-center/feeds-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabStyleOne FeedsCenter\">\r\n    <p-tabView (onChange)=\"onTabChange($event)\">\r\n\r\n        <p-tabPanel header=\"Highlights\">\r\n            <app-feeds-highlights></app-feeds-highlights>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Questions\">\r\n            <app-feeds-questions></app-feeds-questions>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Trends\">\r\n                <app-feeds-trends></app-feeds-trends>\r\n        </p-tabPanel>\r\n\r\n      </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-center/feeds-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedsCenterComponent = (function () {
    function FeedsCenterComponent() {
    }
    FeedsCenterComponent.prototype.ngOnInit = function () {
        this.screenHeight = window.screen.height - 305;
        this.scrollHeight = this.screenHeight + "px";
    };
    FeedsCenterComponent.prototype.onTabChange = function (event) {
        console.log(event);
    };
    FeedsCenterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feeds-center',
            template: __webpack_require__("../../../../../src/app/feeds/feeds-center/feeds-center.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feeds/feeds-center/feeds-center.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedsCenterComponent);
    return FeedsCenterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feeds/feeds-header/feeds-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".feedsHeader .headerLogo{\r\n    height: 35px;\r\n    margin: 5px;\r\n}\r\n\r\n.feedsHeader .btn-cutom{\r\n    color: #ffffff;\r\n    background-color: #666666;\r\n    border-color: #666666;\r\n    font-weight: 700;\r\n    letter-spacing: 1.8px;\r\n    font-size: 16px;\r\n    outline: transparent;\r\n    padding: 4px 18px;\r\n    border-radius: 4px;\r\n}\r\n.feedsHeader .btn-cutom:hover{\r\n    color: #fff;\r\n    background-color: #5c5c5c;\r\n    border-color: #5c5c5c;\r\n}\r\n.feedsHeader .headericon{\r\n    height: 30px;\r\n}\r\n\r\n.feedsHeader .SearchStyle{\r\n    width: 95%;\r\n    height: 34px;\r\n    background-color: transparent;\r\n    outline: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid #999999b0;\r\n    font-size: 17px;\r\n    font-weight: 700;\r\n    color: #666666 !important;\r\n    letter-spacing: 1px\r\n}\r\n.feedsHeader .SearchStyle::-webkit-input-placeholder {\r\n    color: #6666665c !important;\r\n    letter-spacing: 1px;\r\n}\r\n     \r\n.feedsHeader .SearchStyle:-moz-placeholder { /* Firefox 18- */\r\n    color: #6666665c !important;\r\n    letter-spacing: 1px;\r\n}\r\n     \r\n.feedsHeader .SearchStyle::-moz-placeholder {  /* Firefox 19+ */\r\n    color: #6666665c !important;\r\n    letter-spacing: 1px; \r\n}\r\n     \r\n.feedsHeader .SearchStyle:-ms-input-placeholder {  \r\n    color: #6666665c !important;\r\n    letter-spacing: 1px;  \r\n}\r\n\r\n.feedsHeader  .searchIncon{\r\n    position: absolute;\r\n    margin-left: -30px;\r\n    top: 10px;\r\n}\r\n.feedsHeader  .searchIncon .icon{\r\n    height: 25px;\r\n}\r\n\r\n.feedsHeader .headeruserimg{\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 40px;\r\n}\r\n\r\n.feedsHeader .username{\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    color: #676767ba;\r\n    letter-spacing: 0.3px;\r\n}\r\n\r\n\r\n\r\n\r\n.notifylist{\r\n    padding: 2px 5px;\r\n    width: 320px;\r\n}\r\n.notifyheader .notifyheadertext {\r\n    margin: -8px 0px 0px 0px;\r\n    font-size: 17px;\r\n    font-weight: 700;\r\n    letter-spacing: 0.4px;\r\n    line-height: 40px;\r\n    padding: 0px 10px;\r\n    background-color: #e9eef3\r\n}\r\n.notifyheader .arrow{\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #e9eef3;\r\n    top: -1px;\r\n    right: 25px;\r\n    -webkit-transform: rotate(45DEG);\r\n            transform: rotate(45DEG);\r\n    z-index: -1;\r\n}\r\n.notifyfooter .notifyfootertext {\r\n    margin: 0px 0px -9px 0px;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    word-spacing: 2.5px;\r\n    line-height: 40px;\r\n    background-color: #e9eef3;\r\n    color: #0c5ac1;\r\n}\r\n.notifylist .userImg{\r\n    height: 35px;\r\n    width: 35px;\r\n    border-radius: 35px;\r\n}\r\n.notifylist .username{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #827f7f;\r\n    letter-spacing: 0.5px;\r\n}\r\n.notifylist .notifycategory{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 12px;\r\n    color: #9c9a9a;\r\n}\r\n.notifylist .notifydate{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    color: #9c9a9a;\r\n    font-size: 11px;\r\n    letter-spacing: 0.4px;\r\n}\r\n\r\n\r\n.userdropd{\r\n    width: 200px;\r\n    padding: 3px 10px;\r\n}\r\n\r\n.userdropd .userdropd_text{\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    letter-spacing: 0.4px;\r\n    color: #666666a3;\r\n    line-height: 40px;\r\n    margin: 0px;\r\n}\r\n\r\n.userdropd .userdropd_icon i{\r\n    color: #666666a3;\r\n    font-size: 26px;\r\n    margin-top: 8px;\r\n}\r\n.userdropdarrow{\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #ffffff;\r\n    top: -3px;\r\n    right: 25px;\r\n    -webkit-transform: rotate(45DEG);\r\n            transform: rotate(45DEG);\r\n    z-index: -1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-header/feeds-header.component.html":
/***/ (function(module, exports) {

module.exports = " <div style=\"height:45px\" class=\"feedsHeader container-fluid bg-primary-color\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" >\r\n          <div fxFlex=\"19%\">\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                  <div routerLink=\"/\" style=\"cursor:pointer\">\r\n                      <img class=\"headerLogo\" src=\"./../../assets/images/logos/logo3mini62.png\" alt=\"\">\r\n                  </div>\r\n                  <div>\r\n                      <button class=\"btn-flat btn btn-cutom\"> Post </button>\r\n                  </div>\r\n              </div>  \r\n          </div><!-- header left -->\r\n\r\n          <div fxFlex=\"52%\">\r\n              <div>\r\n                  <input class=\"SearchStyle\" type=\"text\" placeholder=\"Search...\">\r\n                  <span class=\"searchIncon\"> <img class=\"icon\" src=\"./../../assets/images/icons/search.png\" alt=\"\"> </span>\r\n              </div>\r\n          </div><!-- header center -->\r\n\r\n          <div fxFlex=\"22%\">\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                  <div>\r\n                      <img routerLink=\"/Feeds\" style=\"cursor:pointer\" class=\"headericon\" src=\"./../../assets/images/icons/Picture1.png\" alt=\"\">\r\n                  </div>\r\n                  <div fxFlex=\"30%\" class=\"text-center\" [matMenuTriggerFor]=\"notifictionList\" style=\"line-height:45px\">\r\n                      <img  class=\"headericon\" src=\"./../../assets/images/icons/Picture2.png\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"text-center\" [matMenuTriggerFor]=\"userView\" style=\"line-height:50px\">\r\n                      <img class=\"headeruserimg\" src=\"./../../assets/images/sample/img7.jpg\" alt=\"\">\r\n                      <span class=\"username\">  User Name </span>\r\n                  </div>\r\n              </div> \r\n          </div><!-- header right -->\r\n\r\n      </div>\r\n  </div> <!-- feedsHeader -->\r\n\r\n    <mat-menu #notifictionList=\"matMenu\" yPosition=\"below\" xPosition=\"after\" [overlapTrigger]=\"false\" class=\"MatMenuNotification\" >\r\n        \r\n        <div class=\"notifyheader\">\r\n            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex>\r\n                    <p class=\"notifyheadertext\"> Notifications</p>\r\n                    <div class=\"arrow\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <hr class=\"m-0\">\r\n        <p-scrollPanel style=\"width:100%;\" [style]=\"{height: '250px' }\" styleClass=\"customscroll_1\">\r\n            <div class=\"notifylist\">\r\n                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                    <div fxFlex=\"45px\">\r\n                        <img class=\"userImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"mt-10\" fxFlex>\r\n                        <p class=\"notifycategory\"> <span class=\"username\"> User Name,  </span> Invester Software De... </p>\r\n                        <p class=\"notifydate\"> 2 Months Ago  </p>\r\n                    </div>\r\n                </div>\r\n                <hr class=\"m-0\">\r\n            </div>\r\n            <div class=\"notifylist\">\r\n                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                    <div fxFlex=\"45px\">\r\n                        <img class=\"userImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"mt-10\" fxFlex>\r\n                        <p class=\"notifycategory\"> <span class=\"username\"> User Name,  </span> Invester Software De... </p>\r\n                        <p class=\"notifydate\"> 2 Months Ago  </p>\r\n                    </div>\r\n                </div>\r\n                <hr class=\"m-0\">\r\n            </div>\r\n            <div class=\"notifylist\">\r\n                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                    <div fxFlex=\"45px\">\r\n                        <img class=\"userImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"mt-10\" fxFlex>\r\n                        <p class=\"notifycategory\"> <span class=\"username\"> User Name,  </span> Invester Software De... </p>\r\n                        <p class=\"notifydate\"> 2 Months Ago  </p>\r\n                    </div>\r\n                </div>\r\n                <hr class=\"m-0\">\r\n            </div>\r\n        </p-scrollPanel>\r\n        <div class=\"notifyfooter\">\r\n            <hr class=\"m-0\">\r\n            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                <div fxFlex=\"100%\" class=\"text-center\">\r\n                    <p class=\"notifyfootertext\"> See All... </p>\r\n                </div>\r\n            </div>\r\n            <hr class=\"m-0\">\r\n        </div>\r\n    </mat-menu>\r\n\r\n\r\n\r\n    <mat-menu #userView=\"matMenu\" yPosition=\"below\" xPosition=\"after\" [overlapTrigger]=\"false\" class=\"MatMenuUserView\" >   \r\n        <div routerLink=\"/Profile\" style=\"cursor:pointer\" class=\"userdropd\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div class=\"userdropd_icon\" fxFlex=\"40px\">\r\n                <i class=\"material-icons\">portrait</i>\r\n            </div>\r\n            <div fxFlex>\r\n                <p class=\"userdropd_text\"> View Profile </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"userdropdarrow\"></div>\r\n        <hr class=\"m-0\">\r\n        <div routerLink=\"/Profile\" style=\"cursor:pointer\" class=\"userdropd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\r\n            <div class=\"userdropd_icon\" fxFlex=\"40px\">\r\n                <i class=\"material-icons\">settings</i>\r\n            </div>\r\n            <div fxFlex>\r\n                <p class=\"userdropd_text\"> Settings </p>\r\n            </div>\r\n        </div>\r\n        <hr class=\"m-0\">\r\n        <div routerLink=\"/\" style=\"cursor:pointer\" class=\"userdropd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\r\n            <div class=\"userdropd_icon\" fxFlex=\"40px\">\r\n                <i class=\"material-icons\">power_settings_new</i>\r\n            </div>\r\n            <div fxFlex>\r\n                <p class=\"userdropd_text\"> Log Out </p>\r\n            </div>\r\n        </div>\r\n    </mat-menu>"

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-header/feeds-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedsHeaderComponent = (function () {
    function FeedsHeaderComponent() {
    }
    FeedsHeaderComponent.prototype.ngOnInit = function () {
    };
    FeedsHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feeds-header',
            template: __webpack_require__("../../../../../src/app/feeds/feeds-header/feeds-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feeds/feeds-header/feeds-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedsHeaderComponent);
    return FeedsHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feeds/feeds-highlights/feeds-highlights.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Highlights .headerPost{\r\n    height: 40px;\r\n    background-color: #e6e6e6;\r\n    border-top: 1px solid #dedede;\r\n    border-bottom: 1px solid #e6e6e6;\r\n}\r\n.Highlights .headerPost .leftArea{    \r\n    padding: 0px 10px;\r\n    line-height: 40px;\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    color: #9c9a9a;\r\n}\r\n.Highlights .headerPost .leftArea i{    \r\n    font-size: 19px;\r\n    padding: 0px 10px;\r\n}\r\n.Highlights .headerPost .rightArea{    \r\n    background-color: #cecece;\r\n    height: 38px;\r\n    text-align: center;\r\n}\r\n.Highlights .headerPost .rightArea i{    \r\n    font-size: 33px;\r\n    line-height: 39px;\r\n    color: #e9eef3;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.Highlights .HighlightsPost{\r\n    background-color:#ffffff;\r\n    box-shadow: 0px 0px 5px 1px #607d8b63;\r\n    margin: 3px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n\r\n.Highlights .HighlightsPost .PostHeader{\r\n    padding: 0px 10px;\r\n}\r\n.Highlights .HighlightsPost .leftSide .postuserImg{\r\n    height: 50px;\r\n    width: 50px;\r\n    margin-top: 5px;\r\n    cursor: pointer;\r\n}\r\n.Highlights .HighlightsPost .leftSide .postusername{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: #827f7f;\r\n    letter-spacing: 0.5px;\r\n}\r\n.Highlights .HighlightsPost .leftSide .postusercategory{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 14px;\r\n    color: #9c9a9a;\r\n}\r\n.Highlights .HighlightsPost .leftSide .postuserfollowers{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 13px;\r\n    color: #9c9a9a;\r\n}\r\n\r\n\r\n\r\n.Highlights .HighlightsPost .rightSide .postcategoryicon{\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n.Highlights .HighlightsPost .rightSide .postaction{\r\n    line-height: 18px;\r\n    font-size: 24px;\r\n    margin: 0px;\r\n    color: gray;\r\n}\r\n.Highlights .HighlightsPost .rightSide .postdate{\r\n    margin: 0px;\r\n    line-height: 18px;\r\n    margin-top: 5px;\r\n    color: #9c9a9a;\r\n    font-size: 12px;\r\n    letter-spacing: 0.4px;\r\n}\r\n.Highlights .HighlightsPost .rightSide .posttopic{\r\n    margin: 0px;\r\n    line-height: 18px;\r\n    font-weight: 600;\r\n    color: #9c9a9a;\r\n    letter-spacing: 0.5px;\r\n    font-size: 13px;\r\n}\r\n\r\n\r\n.Highlights .HighlightsPost .postLikes .like{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n.Highlights .HighlightsPost .postLikes {\r\n    padding: 0px 15px;\r\n}\r\n.Highlights .HighlightsPost .postLikes .like i{\r\n    font-size: 32px;\r\n    color: #ffda00;\r\n}\r\n.Highlights .HighlightsPost .postLikes .like .count{\r\n    line-height: 35px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.7px;\r\n    font-weight: 600;\r\n    margin: 0px 5px;\r\n    color: #666666cf;\r\n}\r\n.Highlights .HighlightsPost .postLikes .chat{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n.Highlights .HighlightsPost .postLikes .chat i{\r\n    font-size: 32px;\r\n    color: #1d6d04;\r\n}\r\n.Highlights .HighlightsPost .postLikes .chat .count{\r\n    line-height: 30px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.7px;\r\n    font-weight: 600;\r\n    margin: 0px 5px;\r\n    color: #666666cf;\r\n}\r\n.Highlights .HighlightsPost .postLikes .share{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n.Highlights .HighlightsPost .postLikes .share i{\r\n    font-size: 30px;\r\n    color: #088eb7;\r\n}\r\n.Highlights .HighlightsPost .postLikes .share .count{\r\n    line-height: 35px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.7px;\r\n    font-weight: 600;\r\n    margin: 0px 5px;\r\n    color: #666666cf;\r\n}\r\n\r\n.Highlights .HighlightsPost .postchat {\r\n    padding: 5px;\r\n}\r\n\r\n.Highlights .HighlightsPost .postchat .chatUserImg img{\r\n    width: 40px;\r\n    height: 40px\r\n}\r\n\r\n.Highlights .HighlightsPost .postchat .chatInput input{\r\n    width: 97%;\r\n    height: 38px;\r\n    outline: transparent;\r\n    border: 1px solid #333f4f3b;\r\n    padding: 0px 10px;\r\n    font-size: 15px;\r\n}\r\n\r\n.Highlights .HighlightsPost .postchat .chatsend i{\r\n    font-size: 32px;\r\n    color: #38769f;\r\n    -webkit-transform: rotate(-35deg);\r\n            transform: rotate(-35deg);\r\n}\r\n\r\n\r\n.scrolldiv{\r\n    overflow-Y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n\r\n\r\n\r\n.Highlights .commentPost{\r\n    background-color: #e9eef378;\r\n    box-shadow: 0px 0px 3px 1px #607d8b63;\r\n    margin:4px 10px 15px 10px;\r\n    padding: 4px;\r\n}\r\n\r\n.Highlights .commentPost .commentbody .commenttext{\r\n    font-size: 15px;\r\n    color: gray;\r\n    margin: 2px 10px;\r\n    word-spacing: 2.5px;\r\n    line-height: 20px;\r\n}\r\n.Highlights .commentPost .PostHeader{\r\n    padding: 0px 2px;\r\n}\r\n.Highlights .commentPost .leftSide .postuserImg{\r\n    height: 35px;\r\n    width: 35px;\r\n    border-radius: 35px;\r\n}\r\n.Highlights .commentPost .leftSide .postusername{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #827f7f;\r\n    letter-spacing: 0.5px;\r\n}\r\n.Highlights .commentPost .leftSide .postusercategory{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 12px;\r\n    color: #9c9a9a;\r\n}\r\n.Highlights .commentPost .leftSide .postuserfollowers{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 12px;\r\n    color: #9c9a9a;\r\n}\r\n\r\n.Highlights .commentPost .rightSide .postaction{\r\n    line-height: 10px;\r\n    font-size: 24px;\r\n    margin: 0px;\r\n    color: gray;\r\n}\r\n.Highlights .commentPost .rightSide .postdate{\r\n    margin: 0px;\r\n    line-height: 18px;\r\n    margin-top: 5px;\r\n    color: #9c9a9a;\r\n    font-size: 11px;\r\n    letter-spacing: 0.4px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-highlights/feeds-highlights.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Highlights\">\r\n  <!-- Highlights Header Post Div -->\r\n  <div class=\"headerPost\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n      <div fxFlex (click)=\"OpenModel()\">\r\n          <div class=\"leftArea\">\r\n                  <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>  Write a Post\r\n          </div>\r\n      </div>\r\n      <div fxFlex=\"25%\">\r\n          <div class=\"rightArea\">\r\n                  <i class=\"material-icons\">explore</i>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <!-- Highlights Header Post Div  END-->\r\n\r\n  <p-scrollPanel style=\"width:100%;\" [style]=\"{height: scrollHeight }\" styleClass=\"customscroll_1\">\r\n      <!-- Highlights Post Div -->\r\n      <div class=\"HighlightsPost mt-15\">\r\n          <!-- Highlights Post Info Header Div -->\r\n          <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n              <div fxFlex>\r\n                  <div class=\"leftSide\">\r\n                      <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                          <div fxFlex=\"60px\">\r\n                              <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"mt-10\" fxFlex>\r\n                              <p class=\"postusername\"> User Name </p>\r\n                              <p class=\"postusercategory\"> Invester &nbsp; | &nbsp; Software De... </p>\r\n                              <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div fxFlex=\"35%\">\r\n                  <div class=\"rightSide\">\r\n                      <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                          <div fxFlex class=\"text-right\">\r\n                              <img class=\"postcategoryicon\" src=\"./../../assets/images/icons/caticon1.png\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"text-right\" fxFlex=\"150px\">\r\n                              <p class=\"postaction\"> ... </p>\r\n                              <p class=\"postdate\"> 2 Months Ago </p>\r\n                              <p class=\"posttopic\"> Topic Name </p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <!-- Highlights Post Info Header Div End -->\r\n          <hr class=\"m-5\">\r\n          <!-- Highlights Post -->\r\n          <div class=\"postmain\" fxLayout=\"row\">\r\n              <div fxFlex class=\"text-center\">\r\n                  <img src=\"./../../assets/images/sample/img4.jpg\" alt=\"\">\r\n                  <img src=\"./../../assets/images/sample/img3.jpg\" alt=\"\">\r\n              </div>\r\n          </div>\r\n          <!-- Highlights Post END -->\r\n          <hr class=\"m-5\">\r\n          <!-- Highlights Post Share Like And More -->\r\n          <div class=\"postLikes\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n              <div fxFlex class=\"text-left\">\r\n                  <div class=\"like\"> <i class=\"material-icons\">star_border</i> <p class=\"count\"> 300 </p> </div>\r\n              </div>\r\n              <div fxFlex class=\"text-center\" >\r\n                  <div class=\"chat\" (click)=\"clicked = !clicked\"> <i class=\"material-icons\">chat</i> <p class=\"count\"> 200 </p> </div>\r\n              </div>\r\n              <div fxFlex class=\"text-right\">\r\n                  <div class=\"share\"> <i class=\"material-icons\">share</i> <p class=\"count\"> 100 </p> </div>\r\n              </div>\r\n          </div>\r\n          <!-- Highlights Post Share Like And More  END-->\r\n          <hr class=\"m-5\">\r\n          <!-- Highlights Post Share Like And More -->\r\n          <div class=\"postchat\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n              <div fxFlex=\"60px\" class=\"text-left\">\r\n                  <div class=\"chatUserImg text-center\"> <img src=\"./../../assets/images/icons/user.png\" alt=\"\"> </div>\r\n              </div>\r\n              <div fxFlex class=\"text-center\" >\r\n                  <div class=\"chatInput\"> <input type=\"text\" placeholder=\"Post Your Comment...\"> </div>\r\n              </div>\r\n              <div fxFlex=\"70px\" class=\"text-right\">\r\n                  <div class=\"chatsend text-center\"> <i class=\"material-icons\">send</i> </div>\r\n              </div>\r\n          </div>\r\n          <!-- Highlights Post Share Like And More  END-->\r\n\r\n\r\n          <!-- Highlights Post Comments-->\r\n            <div *ngIf=\"clicked\" class=\"Comments\">\r\n                <div class=\"commentPost\">\r\n                        <div class=\"commentinfo\">\r\n                            <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                <div fxFlex>\r\n                                    <div class=\"leftSide\">\r\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                            <div fxFlex=\"45px\">\r\n                                                <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                            </div>\r\n                                            <div class=\"mt-10\" fxFlex>\r\n                                                <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                                <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div fxFlex=\"25%\">\r\n                                    <div class=\"rightSide\">\r\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                            <div class=\"text-right\" fxFlex>\r\n                                                <p class=\"postaction\"> ... </p>\r\n                                                <p class=\"postdate\"> 2 Months Ago </p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr class=\"m-0\">\r\n                        <div class=\"commentbody\">\r\n                            <p class=\"commenttext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\r\n                        </div> \r\n                </div>\r\n                <div class=\"commentPost\">\r\n                    <div class=\"commentinfo\">\r\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                            <div fxFlex>\r\n                                <div class=\"leftSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <div fxFlex=\"45px\">\r\n                                            <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"mt-10\" fxFlex>\r\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div fxFlex=\"25%\">\r\n                                <div class=\"rightSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                        <div class=\"text-right\" fxFlex>\r\n                                            <p class=\"postaction\"> ... </p>\r\n                                            <p class=\"postdate\"> 2 Months Ago </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"m-0\">\r\n                    <div class=\"commentbody\">\r\n                        <p class=\"commenttext\"> Lorem ipsum dolor</p>\r\n                    </div> \r\n                </div>\r\n            </div>\r\n            <!-- Highlights Post Comments END-->\r\n\r\n\r\n      </div>\r\n      <!-- Highlights Post Div END -->\r\n\r\n\r\n      <!-- Highlights Post Div -->\r\n      <div class=\"HighlightsPost mt-15\">\r\n          <!-- Highlights Post Info Header Div -->\r\n          <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n              <div fxFlex>\r\n                  <div class=\"leftSide\">\r\n                      <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                          <div fxFlex=\"60px\">\r\n                              <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"mt-10\" fxFlex>\r\n                              <p class=\"postusername\"> User Name </p>\r\n                              <p class=\"postusercategory\"> Invester &nbsp; | &nbsp; Software De... </p>\r\n                              <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div fxFlex=\"35%\">\r\n                  <div class=\"rightSide\">\r\n                      <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                          <div fxFlex class=\"text-right\">\r\n                              <img class=\"postcategoryicon\" src=\"./../../assets/images/icons/caticon1.png\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"text-right\" fxFlex=\"150px\">\r\n                              <p class=\"postaction\"> ... </p>\r\n                              <p class=\"postdate\"> 2 Months Ago </p>\r\n                              <p class=\"posttopic\"> Topic Name </p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <!-- Highlights Post Info Header Div End -->\r\n          <hr class=\"m-5\">\r\n          <!-- Highlights Post -->\r\n          <div class=\"postmain\" fxLayout=\"row\">\r\n              <div fxFlex class=\"text-center\">\r\n                  <img src=\"./../../assets/images/sample/img4.jpg\" alt=\"\">\r\n                  <img src=\"./../../assets/images/sample/img3.jpg\" alt=\"\">\r\n              </div>\r\n          </div>\r\n          <!-- Highlights Post END -->\r\n          <hr class=\"m-5\">\r\n          <!-- Highlights Post Share Like And More -->\r\n          <div class=\"postLikes\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n              <div fxFlex class=\"text-left\">\r\n                  <div class=\"like\"> <i class=\"material-icons\">star_border</i> <p class=\"count\"> 300 </p> </div>\r\n              </div>\r\n              <div fxFlex class=\"text-center\" >\r\n                  <div class=\"chat\" (click)=\"clicked2 = !clicked2\"> <i class=\"material-icons\">chat</i> <p class=\"count\"> 200 </p> </div>\r\n              </div>\r\n              <div fxFlex class=\"text-right\">\r\n                  <div class=\"share\"> <i class=\"material-icons\">share</i> <p class=\"count\"> 100 </p> </div>\r\n              </div>\r\n          </div>\r\n          <!-- Highlights Post Share Like And More  END-->\r\n          <hr class=\"m-5\">\r\n          <!-- Highlights Post Share Like And More -->\r\n          <div class=\"postchat\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n              <div fxFlex=\"60px\" class=\"text-left\">\r\n                  <div class=\"chatUserImg text-center\"> <img src=\"./../../assets/images/icons/user.png\" alt=\"\"> </div>\r\n              </div>\r\n              <div fxFlex class=\"text-center\" >\r\n                  <div class=\"chatInput\"> <input type=\"text\" placeholder=\"Post Your Comment...\"> </div>\r\n              </div>\r\n              <div fxFlex=\"70px\" class=\"text-right\">\r\n                  <div class=\"chatsend text-center\"> <i class=\"material-icons\">send</i> </div>\r\n              </div>\r\n          </div>\r\n          <!-- Highlights Post Share Like And More  END-->\r\n\r\n\r\n            <!-- Highlights Post Comments -->\r\n            <div *ngIf=\"clicked2\" class=\"Comments\">\r\n                <div class=\"commentPost\">\r\n                    <div class=\"commentinfo\">\r\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                            <div fxFlex>\r\n                                <div class=\"leftSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <div fxFlex=\"45px\">\r\n                                            <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"mt-10\" fxFlex>\r\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div fxFlex=\"25%\">\r\n                                <div class=\"rightSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                        <div class=\"text-right\" fxFlex>\r\n                                            <p class=\"postaction\"> ... </p>\r\n                                            <p class=\"postdate\"> 2 Months Ago </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"m-0\">\r\n                    <div class=\"commentbody\">\r\n                        <p class=\"commenttext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\r\n                    </div> \r\n                </div>\r\n                <div class=\"commentPost\">\r\n                    <div class=\"commentinfo\">\r\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                            <div fxFlex>\r\n                                <div class=\"leftSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <div fxFlex=\"45px\">\r\n                                            <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"mt-10\" fxFlex>\r\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div fxFlex=\"25%\">\r\n                                <div class=\"rightSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                        <div class=\"text-right\" fxFlex>\r\n                                            <p class=\"postaction\"> ... </p>\r\n                                            <p class=\"postdate\"> 2 Months Ago </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"m-0\">\r\n                    <div class=\"commentbody\">\r\n                        <p class=\"commenttext\"> Lorem ipsum dolor</p>\r\n                    </div> \r\n                </div>\r\n            </div>\r\n            <!-- Highlights Post Comments END-->\r\n\r\n      </div>\r\n      <!-- Highlights Post Div END -->\r\n  </p-scrollPanel>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-highlights/feeds-highlights.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsHighlightsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popups_post_one_post_one_component__ = __webpack_require__("../../../../../src/app/popups/post-one/post-one.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedsHighlightsComponent = (function () {
    function FeedsHighlightsComponent(dialog) {
        this.dialog = dialog;
        this.clicked = false;
        this.clicked2 = false;
    }
    FeedsHighlightsComponent.prototype.ngOnInit = function () {
        this.screenHeight = window.screen.height - 305;
        this.scrollHeight = this.screenHeight + "px";
    };
    FeedsHighlightsComponent.prototype.OpenModel = function () {
        var PostOneDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__popups_post_one_post_one_component__["a" /* PostOneComponent */], { minWidth: '50%', position: { top: '50px' }, data: { Header: 'Highlight Post One Form', type: 'Creat Form' } });
        PostOneDialogRef.afterClosed().subscribe(function (result) { return console.log(result); });
    };
    FeedsHighlightsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feeds-highlights',
            template: __webpack_require__("../../../../../src/app/feeds/feeds-highlights/feeds-highlights.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feeds/feeds-highlights/feeds-highlights.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */]])
    ], FeedsHighlightsComponent);
    return FeedsHighlightsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feeds/feeds-left-bar/feeds-left-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".feedsLefBar .topicheader{\r\n    font-size: 16px;\r\n    padding: 5px 0px;\r\n    font-weight: 600;\r\n    background-color: #e9eef3;\r\n    padding-left: 10px;\r\n    color: #9c9a9a;\r\n}\r\n.feedsLefBar .topicPart{\r\n    min-height: 100px;\r\n    max-height: 100px;\r\n    text-align: center;\r\n    padding-left: 0px;\r\n}\r\n.feedsLefBar .topicimg{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 0px 10px;\r\n    background-color: #66666630;\r\n    padding: 3px;\r\n    border-radius: 55px;\r\n}\r\n\r\n.feedsLefBar .topicname{\r\n    font-size: 12px;\r\n    margin: 0px;\r\n    font-weight: 700;\r\n    letter-spacing: 0.2px;\r\n    color: #666666;\r\n}\r\n\r\n.feedsLefBar .topicfollowers{\r\n    font-size: 11px;\r\n    margin: 0px;\r\n    font-weight: 600;\r\n    color: #999999;\r\n}\r\n\r\n.feedsLefBar .topicAddIcon{\r\n    position: absolute;\r\n    top: -2px;\r\n    right: 10px;\r\n}\r\n\r\n.feedsLefBar .topicAddIcon i{\r\n    color: #66666673;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n}\r\n\r\n.feedsLefBar .moretopics{\r\n    font-size: 12px;\r\n    margin: 0px;\r\n    font-weight: 600;\r\n    color: #66666670;\r\n    position: absolute;\r\n    right: 3px;\r\n    top: -30px;\r\n    letter-spacing: 0.3px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.feedsLefBar .followheader{\r\n    font-size: 16px;\r\n    padding: 5px 0px;\r\n    font-weight: 600;\r\n    background-color: #e9eef3;\r\n    padding-left: 10px;\r\n    color: #9c9a9a;\r\n    margin-top: 20px;\r\n}\r\n.feedsLefBar .followPart{\r\n    height: 70px;\r\n    text-align: center;\r\n    padding-left: 0px;\r\n}\r\n.feedsLefBar .followimg{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 0px 10px;\r\n    background-color: #66666630;\r\n    padding: 3px;\r\n    border-radius: 55px;\r\n}\r\n\r\n.feedsLefBar .followname{\r\n    font-size: 12px;\r\n    margin: 0px;\r\n    font-weight: 700;\r\n    letter-spacing: 0.2px;\r\n    color: #666666;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.feedsLefBar .userlistImg{\r\n    height: 50px;\r\n    padding: 0px;\r\n    background-color: #e2e2e2;\r\n    border-radius: 50px;\r\n    margin: 0px 10px 0px 5px;\r\n}\r\n.feedsLefBar .userlistname {\r\n    margin: 0px;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    line-height: 18px;\r\n    color: #666666;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.feedsLefBar .userlistcategory {\r\n    margin: 0px;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    line-height: 18px;\r\n    color: #666666;\r\n}\r\n\r\n.feedsLefBar .userlistfollowers {\r\n    margin: 0px;\r\n    font-size: 11px;\r\n    font-weight: 600;\r\n    line-height: 15px;\r\n    color: #999999;\r\n}\r\n.feedsLefBar .userAddIcon {\r\n    margin: 0px;\r\n}\r\n.feedsLefBar .userAddIcon i{\r\n    font-size: 30px;\r\n    color: #99999991;\r\n    line-height: 45px;;\r\n}\r\n.feedsLefBar .moreusers{\r\n    font-size: 13px;\r\n    margin: 0px;\r\n    font-weight: 600;\r\n    letter-spacing: 0.3px;\r\n    cursor: pointer;\r\n    line-height: 30px;\r\n    color: #999999;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-left-bar/feeds-left-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feedsLefBar\">\r\n    <div class=\"row m-0\">\r\n        <!-- Topic -->\r\n          <div class=\"col-sm-12 p-0\" > <p class=\"topicheader\"> Topics  </p> </div>\r\n\r\n          <div class=\"col-sm-12 text-right\">\r\n              <p class=\"moretopics\">  More Topics...</p>\r\n          </div>\r\n\r\n          <div class=\"col-sm-4 topicPart \">\r\n              <img class=\"topicimg\" src=\"./../../assets/images/Picture1.png\" alt=\"\">\r\n              <p class=\"topicname\"> Topic Name</p>\r\n              <p class=\"topicfollowers\"> 100 Followers</p>\r\n              <span class=\"topicAddIcon\"> <i class=\"material-icons\">add_circle</i> </span>\r\n          </div>\r\n          <div class=\"col-sm-4 topicPart\">\r\n              <img class=\"topicimg\" src=\"./../../assets/images/Picture2.png\" alt=\"\">\r\n              <p class=\"topicname\"> Topic Name</p>\r\n              <p class=\"topicfollowers\"> 100 Followers</p>\r\n              <span class=\"topicAddIcon\"> <i class=\"material-icons\">add_circle</i> </span>\r\n          </div>\r\n          <div class=\"col-sm-4 topicPart \">\r\n              <img class=\"topicimg\" src=\"./../../assets/images/Picture3.png\" alt=\"\">\r\n              <p class=\"topicname\"> Topic Name</p>\r\n              <p class=\"topicfollowers\"> 100 Followers</p>\r\n              <span class=\"topicAddIcon\"> <i class=\"material-icons\">add_circle</i> </span>\r\n          </div>\r\n          <div class=\"col-sm-4 topicPart \">\r\n              <img class=\"topicimg\" src=\"./../../assets/images/Picture4.png\" alt=\"\">\r\n              <p class=\"topicname\"> Topic Name</p>\r\n              <p class=\"topicfollowers\"> 100 Followers</p>\r\n              <span class=\"topicAddIcon\"> <i class=\"material-icons\">add_circle</i> </span>\r\n          </div>\r\n          <div class=\"col-sm-4 topicPart\">\r\n              <img class=\"topicimg\" src=\"./../../assets/images/Picture5.png\" alt=\"\">\r\n              <p class=\"topicname\"> Topic Name</p>\r\n              <p class=\"topicfollowers\"> 100 Followers</p>\r\n              <span class=\"topicAddIcon\"> <i class=\"material-icons\">add_circle</i> </span>\r\n          </div>\r\n          <div class=\"col-sm-4 topicPart\">\r\n              <img class=\"topicimg\" src=\"./../../assets/images/Picture6.png\" alt=\"\">\r\n              <p class=\"topicname\"> Topic Name</p>\r\n              <p class=\"topicfollowers\"> 100 Followers</p>\r\n              <span class=\"topicAddIcon\"> <i class=\"material-icons\">add_circle</i> </span>\r\n          </div>\r\n          <!-- topic End -->\r\n\r\n          <!-- follow people  -->\r\n\r\n          <div class=\"col-sm-12 p-0\">\r\n              <p class=\"followheader\"> Follow People  </p>\r\n          </div>\r\n          <div class=\"row m-0\">\r\n              <div class=\"col-sm-4 followPart \">\r\n                  <img class=\"followimg\" src=\"./../../assets/images/Picture1.png\" alt=\"\">\r\n                  <p class=\"followname\"> Topic Name</p>\r\n              </div>\r\n              <div class=\"col-sm-4 followPart\">\r\n                  <img class=\"followimg\" src=\"./../../assets/images/Picture2.png\" alt=\"\">\r\n                  <p class=\"followname\"> Topic Name</p>\r\n              </div>\r\n              <div class=\"col-sm-4 followPart \">\r\n                  <img class=\"followimg\" src=\"./../../assets/images/Picture3.png\" alt=\"\">\r\n                  <p class=\"followname\"> Topic Name</p>\r\n              </div>\r\n        </div>\r\n        <!-- follow people End  -->\r\n\r\n        <hr class=\"m-5\">\r\n\r\n        <!-- follow peoples List  -->\r\n        <div class=\"mt-15\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n            <div fxFlex=\"65px\" class=\"text-center\">\r\n              <img class=\"userlistImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n            </div>\r\n            <div fxFlex>\r\n                <p class=\"userlistname\"> User Name </p>\r\n                <p class=\"userlistcategory\"> Invester &nbsp; | &nbsp; Software De... </p>\r\n                <p class=\"userlistfollowers\"> 20 Followers </p>\r\n            </div>\r\n            <div fxFlex=\"45px\" class=\"text-center\">\r\n                <span class=\"userAddIcon\"> <i class=\"material-icons\">person_add</i> </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"mt-15\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n            <div fxFlex=\"65px\" class=\"text-center\">\r\n              <img class=\"userlistImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n            </div>\r\n            <div fxFlex>\r\n                <p class=\"userlistname\"> User Name </p>\r\n                <p class=\"userlistcategory\"> Invester &nbsp; | &nbsp; Software De... </p>\r\n                <p class=\"userlistfollowers\"> 20 Followers </p>\r\n            </div>\r\n            <div fxFlex=\"45px\" class=\"text-center\">\r\n                <span class=\"userAddIcon\"> <i class=\"material-icons\">person_add</i> </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 text-right\">\r\n            <p class=\"moreusers\">  More Users...</p>\r\n        </div>\r\n\r\n        <!-- follow peoples List End -->\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-left-bar/feeds-left-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsLeftBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedsLeftBarComponent = (function () {
    function FeedsLeftBarComponent() {
    }
    FeedsLeftBarComponent.prototype.ngOnInit = function () {
    };
    FeedsLeftBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feeds-left-bar',
            template: __webpack_require__("../../../../../src/app/feeds/feeds-left-bar/feeds-left-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feeds/feeds-left-bar/feeds-left-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedsLeftBarComponent);
    return FeedsLeftBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feeds/feeds-questions/feeds-questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Questions .headerPost{\r\n    height: 40px;\r\n    background-color: #e6e6e6;\r\n    border-top: 1px solid #dedede;\r\n    border-bottom: 1px solid #e6e6e6;\r\n}\r\n.Questions .headerPost .leftArea{    \r\n    padding: 0px 10px;\r\n    line-height: 40px;\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    color: #9c9a9a;\r\n}\r\n.Questions .headerPost .leftArea i{    \r\n    font-size: 19px;\r\n    padding: 0px 10px;\r\n}\r\n.Questions .headerPost .rightArea{    \r\n    background-color: #cecece;\r\n    height: 38px;\r\n    text-align: center;\r\n}\r\n.Questions .headerPost .rightArea i{    \r\n    font-size: 33px;\r\n    line-height: 39px;\r\n    color: #e9eef3;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.Questions .QuestionPost{\r\n    background-color:#ffffff;\r\n    box-shadow: 0px 0px 5px 1px #607d8b63;\r\n    margin: 3px;\r\n}\r\n\r\n\r\n.Questions .QuestionPost .PostHeader{\r\n    padding: 0px 10px;\r\n}\r\n.Questions .QuestionPost .leftSide .postuserImg{\r\n    height: 50px;\r\n    width: 50px;\r\n    margin-top: 5px;\r\n    cursor: pointer;\r\n}\r\n.Questions .QuestionPost .leftSide .postusername{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: #827f7f;\r\n    letter-spacing: 0.5px;\r\n}\r\n.Questions .QuestionPost .leftSide .postusercategory{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 14px;\r\n    color: #9c9a9a;\r\n}\r\n.Questions .QuestionPost .leftSide .postuserfollowers{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 13px;\r\n    color: #9c9a9a;\r\n}\r\n\r\n\r\n\r\n.Questions .QuestionPost .rightSide .postcategoryicon{\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n.Questions .QuestionPost .rightSide .postaction{\r\n    line-height: 18px;\r\n    font-size: 24px;\r\n    margin: 0px;\r\n    color: gray;\r\n}\r\n.Questions .QuestionPost .rightSide .postdate{\r\n    margin: 0px;\r\n    line-height: 18px;\r\n    margin-top: 5px;\r\n    color: #9c9a9a;\r\n    font-size: 12px;\r\n    letter-spacing: 0.4px;\r\n}\r\n.Questions .QuestionPost .rightSide .posttopic{\r\n    margin: 0px;\r\n    line-height: 18px;\r\n    font-weight: 600;\r\n    color: #9c9a9a;\r\n    letter-spacing: 0.5px;\r\n    font-size: 13px;\r\n}\r\n\r\n\r\n.Questions .QuestionPost .postquestion{\r\n    margin: 0px;\r\n    margin-left: 10px;\r\n    color: #666666e6;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    letter-spacing: 0.3px;\r\n    word-spacing: 2px;\r\n}\r\n.Questions .QuestionPost .postLikes .like{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n.Questions .QuestionPost .postLikes {\r\n    padding: 0px 15px;\r\n}\r\n.Questions .QuestionPost .postLikes .like i{\r\n    font-size: 32px;\r\n    color: #ffda00;\r\n}\r\n.Questions .QuestionPost .postLikes .like .count{\r\n    line-height: 35px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.7px;\r\n    font-weight: 600;\r\n    margin: 0px 5px;\r\n    color: #666666cf;\r\n}\r\n.Questions .QuestionPost .postLikes .chat{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n.Questions .QuestionPost .postLikes .chat i{\r\n    font-size: 32px;\r\n    color: #1d6d04;\r\n}\r\n.Questions .QuestionPost .postLikes .chat .count{\r\n    line-height: 30px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.7px;\r\n    font-weight: 600;\r\n    margin: 0px 5px;\r\n    color: #666666cf;\r\n}\r\n.Questions .QuestionPost .postLikes .share{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n.Questions .QuestionPost .postLikes .share i{\r\n    font-size: 30px;\r\n    color: #088eb7;\r\n}\r\n.Questions .QuestionPost .postLikes .share .count{\r\n    line-height: 35px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.7px;\r\n    font-weight: 600;\r\n    margin: 0px 5px;\r\n    color: #666666cf;\r\n}\r\n\r\n.Questions .QuestionPost .postchat {\r\n    padding: 5px 15px;\r\n}\r\n\r\n.Questions .QuestionPost .postchat .chatUserImg img{\r\n    width: 40px;\r\n    height: 40px\r\n}\r\n\r\n.Questions .QuestionPost .postchat .chatInput input{\r\n    width: 97%;\r\n    height: 38px;\r\n    outline: transparent;\r\n    border: 1px solid #333f4f3b;\r\n    padding: 0px 10px;\r\n    font-size: 15px;\r\n}\r\n\r\n.Questions .QuestionPost .postchat .chatsend i{\r\n    font-size: 32px;\r\n    color: #38769f;\r\n    -webkit-transform: rotate(-35deg);\r\n            transform: rotate(-35deg);\r\n}\r\n\r\n\r\n\r\n\r\n.scrolldiv{\r\n    overflow-Y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.Questions .postmain .postquestion {\r\n    margin: 5px 0px 10px 5px\r\n}\r\n.Questions .postAnswer {\r\n    margin: 0px 0px 10px 5%;\r\n    background-color: #e6e6e67a;\r\n}\r\n.Questions .PostAnsHeader .postansuserImg{\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 40px;\r\n}\r\n.Questions .PostAnsHeader .postansusername{\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: #666666ab;\r\n    letter-spacing: 0.4px;\r\n    margin: 0px;\r\n}\r\n.Questions .PostAnsHeader .postansaction{\r\n    font-size: 20px;\r\n    line-height: 10px;\r\n    margin-right: 10px;\r\n    color: #666666;\r\n    margin-bottom: 4px;\r\n}\r\n.Questions .PostAnsHeader .postansdate{\r\n    margin: 0px 10px 0px 0px;\r\n    font-size: 12px;\r\n    color: darkgray;\r\n}\r\n.Questions .PostAnsHeader .postansfollowes{\r\n    font-size: 12px;\r\n    color: darkgray;\r\n}\r\n.Questions .PostAnsHeader .postansuserinfo{\r\n    height: 45px;\r\n    margin: 5px 0px 5px 5px;\r\n}\r\n.Questions .postAnswer .postAns{\r\n    padding: 5px 5px 0px 10px;\r\n}\r\n.Questions .postAnswer .postAns .postAnsText{\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    letter-spacing: 0.2px;\r\n    word-spacing: 2.5px;\r\n    color: #9c9a9a;\r\n    line-height: 20px;\r\n}\r\n.Questions .postmain .readmore{    \r\n    font-size: 13px;\r\n    margin: 0px;\r\n    font-weight: 600;\r\n    letter-spacing: 0.3px;\r\n    cursor: pointer;\r\n    line-height: 30px;\r\n    color: #999999;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.Questions .commentPost{\r\n    background-color: #e9eef378;\r\n    box-shadow: 0px 0px 3px 1px #607d8b63;\r\n    margin:4px 10px 15px 10px;\r\n    padding: 4px;\r\n}\r\n\r\n.Questions .commentPost .commentbody .commenttext{\r\n    font-size: 15px;\r\n    color: gray;\r\n    margin: 2px 10px;\r\n    word-spacing: 2.5px;\r\n    line-height: 20px;\r\n}\r\n.Questions .commentPost .PostHeader{\r\n    padding: 0px 2px;\r\n}\r\n.Questions .commentPost .leftSide .postuserImg{\r\n    height: 35px;\r\n    width: 35px;\r\n    border-radius: 35px;\r\n}\r\n.Questions .commentPost .leftSide .postusername{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #827f7f;\r\n    letter-spacing: 0.5px;\r\n}\r\n.Questions .commentPost .leftSide .postusercategory{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 12px;\r\n    color: #9c9a9a;\r\n}\r\n.Questions .commentPost .leftSide .postuserfollowers{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 12px;\r\n    color: #9c9a9a;\r\n}\r\n\r\n.Questions .commentPost .rightSide .postaction{\r\n    line-height: 10px;\r\n    font-size: 24px;\r\n    margin: 0px;\r\n    color: gray;\r\n}\r\n.Questions .commentPost .rightSide .postdate{\r\n    margin: 0px;\r\n    line-height: 18px;\r\n    margin-top: 5px;\r\n    color: #9c9a9a;\r\n    font-size: 11px;\r\n    letter-spacing: 0.4px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-questions/feeds-questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Questions\">\r\n   <!-- Question Header Post Div -->\r\n    <div class=\"headerPost\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n        <div fxFlex (click)=\"OpenModelQuestion()\">\r\n            <div class=\"leftArea\">\r\n                    <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>  Ask a Question\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"25%\">\r\n            <div class=\"rightArea\">\r\n                    <i class=\"material-icons\">explore</i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Question Header Post Div  END-->\r\n\r\n    <p-scrollPanel style=\"width:100%;\" [style]=\"{height: scrollHeight }\" styleClass=\"customscroll_1\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        \r\n        <!-- Question Post Div -->\r\n        <div class=\"QuestionPost mt-15\">\r\n            <!-- Question Post Info Header Div -->\r\n            <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                <div fxFlex>\r\n                    <div class=\"leftSide\">\r\n                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <div fxFlex=\"60px\">\r\n                                <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"mt-10\" fxFlex>\r\n                                <p class=\"postusername\"> User Name </p>\r\n                                <p class=\"postusercategory\"> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"35%\">\r\n                    <div class=\"rightSide\">\r\n                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                            <div fxFlex>\r\n                            </div>\r\n                            <div class=\"text-right\" fxFlex=\"150px\">\r\n                                <p class=\"postaction\"> ... </p>\r\n                                <p class=\"postdate\"> 2 Months Ago </p>\r\n                                <p class=\"posttopic\"> Topic Name </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Question Post Info Header Div End -->\r\n            <hr class=\"m-5\">\r\n            <!-- Question Post -->\r\n            <div class=\"postmain\" fxLayout=\"row\">\r\n                <div fxFlex class=\"text-left\">\r\n                    <h5 class=\"postquestion\"> What is Blockchain Technology?  </h5>\r\n                    <div class=\"postAnswer\">\r\n                        <div class=\"PostAnsHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                            <div fxFlex>\r\n                                <div class=\"leftSide\">\r\n                                    <div class=\"postansuserinfo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <div fxFlex=\"45px\">\r\n                                            <img class=\"postansuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"mt-10\" fxFlex>\r\n                                            <p class=\"postansusername\"> User Name </p>\r\n                                            <p class=\"postansfollowes\"> 20 followers </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div fxFlex=\"35%\">\r\n                                <div class=\"rightSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                        <div fxFlex>\r\n                                        </div>\r\n                                        <div class=\"text-right\" fxFlex=\"150px\">\r\n                                            <p class=\"postansaction\"> ... </p>\r\n                                            <p class=\"postansdate\"> 2 Months Ago </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr class=\"m-0\" style=\"border-color: #77778729;\">\r\n                        <div class=\"postAns\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                            <div fxFlex>\r\n                                <p class=\"postAnsText\"> &emsp; The blockchain is an incorruptible digital ledger of economic transactions\r\n                                            that can be programmed to record not just financial transactions but virtually everything of value.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"postAnswer\">\r\n                        <div class=\"PostAnsHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                            <div fxFlex>\r\n                                <div class=\"leftSide\">\r\n                                    <div class=\"postansuserinfo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <div fxFlex=\"45px\">\r\n                                            <img class=\"postansuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"mt-10\" fxFlex>\r\n                                            <p class=\"postansusername\"> User Name </p>\r\n                                            <p class=\"postansfollowes\"> 20 followers </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div fxFlex=\"35%\">\r\n                                <div class=\"rightSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                        <div fxFlex>\r\n                                        </div>\r\n                                        <div class=\"text-right\" fxFlex=\"150px\">\r\n                                            <p class=\"postansaction\"> ... </p>\r\n                                            <p class=\"postansdate\"> 2 Months Ago </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr class=\"m-0\" style=\"border-color: #77778729;\">\r\n                        <div class=\"postAns\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                            <div fxFlex>\r\n                                <p class=\"postAnsText\"> &emsp; The blockchain is an incorruptible digital ledger of economic transactions\r\n                                            that can be programmed to record not just financial transactions but virtually everything of value.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"text-right\">\r\n                        <p class=\"readmore\">Read More...</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Question Post END -->\r\n            <hr class=\"m-5\">\r\n            <!-- Question Post Share Like And More -->\r\n            <div class=\"postLikes\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div fxFlex class=\"text-left\">\r\n                    <div class=\"like\"> <i class=\"material-icons\">star_border</i> <p class=\"count\"> 300 </p> </div>\r\n                </div>\r\n                <div fxFlex class=\"text-center\" >\r\n                    <div class=\"chat\" (click)=\"clicked = !clicked\"> <i class=\"material-icons\">chat</i> <p class=\"count\"> 200 </p> </div>\r\n                </div>\r\n                <div fxFlex class=\"text-right\">\r\n                    <div class=\"share\"> <i class=\"material-icons\">share</i> <p class=\"count\"> 100 </p> </div>\r\n                </div>\r\n            </div>\r\n            <!-- Question Post Share Like And More  END-->\r\n            <hr class=\"m-5\">\r\n            <!-- Question Post Share Like And More -->\r\n            <div class=\"postchat\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div fxFlex=\"60px\" class=\"text-left\">\r\n                    <div class=\"chatUserImg text-center\"> <img src=\"./../../assets/images/icons/user.png\" alt=\"\"> </div>\r\n                </div>\r\n                <div fxFlex class=\"text-center\" >\r\n                    <div class=\"chatInput\"> <input type=\"text\" placeholder=\"Post Your Commend...\"> </div>\r\n                </div>\r\n                <div fxFlex=\"70px\" class=\"text-right\">\r\n                    <div class=\"chatsend text-center\"> <i class=\"material-icons\">send</i> </div>\r\n                </div>\r\n            </div>\r\n            <!-- Question Post Share Like And More  END-->\r\n\r\n\r\n            <!-- Question Post Comments -->\r\n            <div *ngIf=\"clicked\" class=\"Comments\">\r\n                <div class=\"commentPost\">\r\n                    <div class=\"commentinfo\">\r\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                            <div fxFlex>\r\n                                <div class=\"leftSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <div fxFlex=\"45px\">\r\n                                            <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"mt-10\" fxFlex>\r\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div fxFlex=\"25%\">\r\n                                <div class=\"rightSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                        <div class=\"text-right\" fxFlex>\r\n                                            <p class=\"postaction\"> ... </p>\r\n                                            <p class=\"postdate\"> 2 Months Ago </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"m-0\">\r\n                    <div class=\"commentbody\">\r\n                        <p class=\"commenttext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\r\n                    </div> \r\n                </div>\r\n                <div class=\"commentPost\">\r\n                    <div class=\"commentinfo\">\r\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                            <div fxFlex>\r\n                                <div class=\"leftSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <div fxFlex=\"45px\">\r\n                                            <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"mt-10\" fxFlex>\r\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div fxFlex=\"25%\">\r\n                                <div class=\"rightSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                        <div class=\"text-right\" fxFlex>\r\n                                            <p class=\"postaction\"> ... </p>\r\n                                            <p class=\"postdate\"> 2 Months Ago </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"m-0\">\r\n                    <div class=\"commentbody\">\r\n                        <p class=\"commenttext\"> Lorem ipsum dolor</p>\r\n                    </div> \r\n                </div>\r\n            </div>\r\n            <!-- Question Post Comments END-->\r\n\r\n\r\n        </div>\r\n        <!-- Question Post Div END -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- Question Post Div -->\r\n        <div class=\"QuestionPost mt-15\">\r\n            <!-- Question Post Info Header Div -->\r\n            <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                <div fxFlex>\r\n                    <div class=\"leftSide\">\r\n                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <div fxFlex=\"60px\">\r\n                                <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"mt-10\" fxFlex>\r\n                                <p class=\"postusername\"> User Name </p>\r\n                                <p class=\"postusercategory\"> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"35%\">\r\n                    <div class=\"rightSide\">\r\n                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                            <div fxFlex class=\"text-right\">\r\n                                <img class=\"postcategoryicon\" src=\"./../../assets/images/icons/caticon1.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"text-right\" fxFlex=\"150px\">\r\n                                <p class=\"postaction\"> ... </p>\r\n                                <p class=\"postdate\"> 2 Months Ago </p>\r\n                                <p class=\"posttopic\"> Topic Name </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Question Post Info Header Div End -->\r\n            <hr class=\"m-5\">\r\n            <!-- Question Post -->\r\n            <div class=\"postmain\" fxLayout=\"row\">\r\n                  <div fxFlex class=\"text-left\">\r\n                      <h5 class=\"postquestion\"> What is Blockchain Technology?  </h5>\r\n                      <div class=\"postAnswer\">\r\n                          <div class=\"PostAnsHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                              <div fxFlex>\r\n                                  <div class=\"leftSide\">\r\n                                      <div class=\"postansuserinfo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                          <div fxFlex=\"45px\">\r\n                                              <img class=\"postansuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                          </div>\r\n                                          <div class=\"mt-10\" fxFlex>\r\n                                              <p class=\"postansusername\"> User Name </p>\r\n                                              <p class=\"postansfollowes\"> 20 followers </p>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                              <div fxFlex=\"35%\">\r\n                                  <div class=\"rightSide\">\r\n                                      <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                          <div fxFlex>\r\n                                          </div>\r\n                                          <div class=\"text-right\" fxFlex=\"150px\">\r\n                                              <p class=\"postansaction\"> ... </p>\r\n                                              <p class=\"postansdate\"> 2 Months Ago </p>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <hr class=\"m-0\" style=\"border-color: #77778729;\">\r\n                          <div class=\"postAns\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                              <div fxFlex>\r\n                                  <p class=\"postAnsText\"> &emsp; The blockchain is an incorruptible digital ledger of economic transactions\r\n                                              that can be programmed to record not just financial transactions but virtually everything of value.</p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          <!-- Question Post END -->\r\n          <hr class=\"m-5\">\r\n          <!-- Question Post Share Like And More -->\r\n          <div class=\"postLikes\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n              <div fxFlex class=\"text-left\">\r\n                  <div class=\"like\"> <i class=\"material-icons\">star_border</i> <p class=\"count\"> 300 </p> </div>\r\n              </div>\r\n              <div fxFlex class=\"text-center\" >\r\n                  <div class=\"chat\" (click)=\"clicked2 = !clicked2\"> <i class=\"material-icons\">chat</i> <p class=\"count\"> 200 </p> </div>\r\n              </div>\r\n              <div fxFlex class=\"text-right\">\r\n                  <div class=\"share\"> <i class=\"material-icons\">share</i> <p class=\"count\"> 100 </p> </div>\r\n              </div>\r\n          </div>\r\n          <!-- Question Post Share Like And More  END-->\r\n          <hr class=\"m-5\">\r\n          <!-- Question Post Share Like And More -->\r\n          <div class=\"postchat\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n              <div fxFlex=\"60px\" class=\"text-left\">\r\n                  <div class=\"chatUserImg text-center\"> <img src=\"./../../assets/images/icons/user.png\" alt=\"\"> </div>\r\n              </div>\r\n              <div fxFlex class=\"text-center\" >\r\n                  <div class=\"chatInput\"> <input type=\"text\" placeholder=\"Post Your Commend...\"> </div>\r\n              </div>\r\n              <div fxFlex=\"70px\" class=\"text-right\">\r\n                  <div class=\"chatsend text-center\"> <i class=\"material-icons\">send</i> </div>\r\n              </div>\r\n          </div>\r\n          <!-- Question Post Share Like And More  END-->\r\n\r\n\r\n            <!-- Question Post Comments -->\r\n            <div *ngIf=\"clicked2\" class=\"Comments\">\r\n                <div class=\"commentPost\">\r\n                    <div class=\"commentinfo\">\r\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                            <div fxFlex>\r\n                                <div class=\"leftSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <div fxFlex=\"45px\">\r\n                                            <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"mt-10\" fxFlex>\r\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div fxFlex=\"25%\">\r\n                                <div class=\"rightSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                        <div class=\"text-right\" fxFlex>\r\n                                            <p class=\"postaction\"> ... </p>\r\n                                            <p class=\"postdate\"> 2 Months Ago </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"m-0\">\r\n                    <div class=\"commentbody\">\r\n                        <p class=\"commenttext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\r\n                    </div> \r\n                </div>\r\n                <div class=\"commentPost\">\r\n                    <div class=\"commentinfo\">\r\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                            <div fxFlex>\r\n                                <div class=\"leftSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <div fxFlex=\"45px\">\r\n                                            <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"mt-10\" fxFlex>\r\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div fxFlex=\"25%\">\r\n                                <div class=\"rightSide\">\r\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                        <div class=\"text-right\" fxFlex>\r\n                                            <p class=\"postaction\"> ... </p>\r\n                                            <p class=\"postdate\"> 2 Months Ago </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"m-0\">\r\n                    <div class=\"commentbody\">\r\n                        <p class=\"commenttext\"> Lorem ipsum dolor</p>\r\n                    </div> \r\n                </div>\r\n            </div>\r\n            <!-- Question Post Comments END-->\r\n\r\n        </div>\r\n        <!-- Question Post Div END -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </p-scrollPanel>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-questions/feeds-questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsQuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popups_post_two_post_two_component__ = __webpack_require__("../../../../../src/app/popups/post-two/post-two.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedsQuestionsComponent = (function () {
    function FeedsQuestionsComponent(dialog) {
        this.dialog = dialog;
        this.clicked = false;
        this.clicked2 = false;
    }
    FeedsQuestionsComponent.prototype.ngOnInit = function () {
        this.screenHeight = window.screen.height - 305;
        this.scrollHeight = this.screenHeight + "px";
    };
    FeedsQuestionsComponent.prototype.OpenModelQuestion = function () {
        var PostTwoDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__popups_post_two_post_two_component__["a" /* PostTwoComponent */], { minWidth: '50%', position: { top: '50px' }, data: { Header: 'Questions Post Two Form', type: 'Creat Form' } });
        PostTwoDialogRef.afterClosed().subscribe(function (result) { return console.log(result); });
    };
    FeedsQuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feeds-questions',
            template: __webpack_require__("../../../../../src/app/feeds/feeds-questions/feeds-questions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feeds/feeds-questions/feeds-questions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */]])
    ], FeedsQuestionsComponent);
    return FeedsQuestionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feeds/feeds-right-bar/feeds-right-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.feedsRightBar .userdiv{\r\n    background-color: #e9eef3;\r\n    margin: 7px;\r\n    padding: 7px;\r\n}\r\n\r\n.feedsRightBar .userimg{\r\n    width: 95px;\r\n    height: 95px;\r\n    border-radius: 100px;\r\n}\r\n.feedsRightBar .username{\r\n    font-size: 17px;\r\n    font-weight: 700;\r\n    color: #777777;\r\n    margin: 0px;\r\n    letter-spacing: 0.5px;\r\n}\r\n.feedsRightBar .userfollowers{\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #999999;\r\n    margin: 0px;\r\n    line-height: 20px;\r\n}\r\n.feedsRightBar .userfollowing{\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #999999;\r\n    margin: 0px;\r\n    line-height: 20px;\r\n}\r\n\r\n\r\n.feedsRightBar .headerstyle{\r\n    text-align: left;\r\n    font-size: 15px;\r\n    padding: 4px 10px;\r\n    font-weight: 600;\r\n    background-color: #e9eef3;\r\n    margin-bottom: 10px;\r\n    color: #9c9a9a;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.feedsRightBar .followPart{\r\n    height: 65px;\r\n    text-align: center;\r\n    padding-left: 0px;\r\n}\r\n.feedsRightBar .followimg{\r\n    width: 45px;\r\n    height: 45px;\r\n    margin: 0px 10px;\r\n    /* background-color: #66666630; */\r\n    padding: 3px;\r\n    /* border-radius: 55px; */\r\n}\r\n\r\n.feedsRightBar .followname{\r\n    font-size: 11px;\r\n    margin: 0px;\r\n    font-weight: 700;\r\n    letter-spacing: 0.2px;\r\n    color: #666666;\r\n}\r\n\r\n\r\n\r\n.feedsRightBar .moreusers{\r\n    font-size: 13px;\r\n    margin: 0px;\r\n    font-weight: 600;\r\n    letter-spacing: 0.3px;\r\n    cursor: pointer;\r\n    line-height: 30px;\r\n    color: #999999;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-right-bar/feeds-right-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feedsRightBar\">\r\n\r\n    <!-- UserDetails -->\r\n    <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n        <div fxFlex=\"100px\" class=\"text-center\">\r\n            <img class=\"userimg\" src=\"./../../assets/images/sample/img7.jpg\" alt=\"\">\r\n        </div>\r\n        <div fxFlex style=\"margin: 10px 0px 0px 10px;\">\r\n            <p class=\"username\"> User Name </p>\r\n            <p class=\"userfollowers\"> 100 Followers </p>\r\n            <p class=\"userfollowing\"> 200 Following </p>\r\n        </div>\r\n    </div>\r\n    <!-- UserDetails End -->\r\n\r\n    <!-- <hr class=\"mt-5 mb-5\"> -->\r\n\r\n    <!-- Followers -->\r\n    <div class=\"row mr-0\">\r\n      <div class=\"col-sm-12\">\r\n          <p class=\"headerstyle\"> Followers ( 200 ) </p>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n          <div class=\"col-sm-3 followPart \">\r\n              <img class=\"followimg\" src=\"./../../assets/images/coins/coin1.png\" alt=\"\">\r\n              <p class=\"followname\"> User Na... </p>\r\n          </div>\r\n          <div class=\"col-sm-3 followPart\">\r\n              <img class=\"followimg\" src=\"./../../assets/images/coins/coin2.png\" alt=\"\">\r\n              <p class=\"followname\"> User Na... </p>\r\n          </div>\r\n          <div class=\"col-sm-3 followPart \">\r\n              <img class=\"followimg\" src=\"../../../assets/images/coins/coin3.png\" alt=\"\">\r\n              <p class=\"followname\"> User Na...</p>\r\n          </div>\r\n          <div class=\"col-sm-3 followPart \">\r\n              <img class=\"followimg\" src=\"./../../assets/images/coins/coin4.png\" alt=\"\">\r\n              <p class=\"followname\"> User Na... </p>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-sm-12 text-right\">\r\n          <p class=\"moreusers\"> More Followers...</p>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Followers End  -->\r\n\r\n\r\n    <!-- Followers -->\r\n    <div class=\"row mr-0\">\r\n      <div class=\"col-sm-12\">\r\n          <p class=\"headerstyle\"> Following People ( 200 ) </p>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n          <div class=\"col-sm-3 followPart \">\r\n              <img class=\"followimg\" src=\"./../../assets/images/coins/coin5.png\" alt=\"\">\r\n              <p class=\"followname\"> User Na... </p>\r\n          </div>\r\n          <div class=\"col-sm-3 followPart\">\r\n              <img class=\"followimg\" src=\"./../../assets/images/coins/coin6.png\" alt=\"\">\r\n              <p class=\"followname\"> User Na... </p>\r\n          </div>\r\n          <div class=\"col-sm-3 followPart \">\r\n              <img class=\"followimg\" src=\"./../../assets/images/coins/coin7.png\" alt=\"\">\r\n              <p class=\"followname\"> User Na...</p>\r\n          </div>\r\n          <div class=\"col-sm-3 followPart \">\r\n              <img class=\"followimg\" src=\"./../../assets/images/coins/coin8.png\" alt=\"\">\r\n              <p class=\"followname\"> User Na... </p>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-sm-12 text-right\">\r\n          <p class=\"moreusers\"> More Peoples...</p>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- Followers End  -->\r\n\r\n\r\n\r\n    <!-- Followers -->\r\n    <div class=\"row mr-0\">\r\n      <div class=\"col-sm-12\">\r\n          <p class=\"headerstyle\"> Following Topics ( 200 ) </p>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n          <div class=\"col-sm-3 followPart \">\r\n              <img class=\"followimg\" src=\"./../../assets/images/coins/coin9.png\" alt=\"\">\r\n              <p class=\"followname\"> User Na... </p>\r\n          </div>\r\n          <div class=\"col-sm-3 followPart\">\r\n              <img class=\"followimg\" src=\"./../../assets/images/coins/coin1.png\" alt=\"\">\r\n              <p class=\"followname\"> User Na... </p>\r\n          </div>\r\n          <div class=\"col-sm-3 followPart \">\r\n              <img class=\"followimg\" src=\"./../../assets/images/coins/coin2.png\" alt=\"\">\r\n              <p class=\"followname\"> User Na...</p>\r\n          </div>\r\n          <div class=\"col-sm-3 followPart \">\r\n              <img class=\"followimg\" src=\"./../../assets/images/coins/coin3.png\" alt=\"\">\r\n              <p class=\"followname\"> User Na... </p>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-sm-12 text-right\">\r\n          <p class=\"moreusers\"> More Topics...</p>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- Followers End  -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-right-bar/feeds-right-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsRightBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedsRightBarComponent = (function () {
    function FeedsRightBarComponent() {
    }
    FeedsRightBarComponent.prototype.ngOnInit = function () {
    };
    FeedsRightBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feeds-right-bar',
            template: __webpack_require__("../../../../../src/app/feeds/feeds-right-bar/feeds-right-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feeds/feeds-right-bar/feeds-right-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedsRightBarComponent);
    return FeedsRightBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feeds/feeds-trends/feeds-trends.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.scrolldiv{\r\n    overflow-Y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.Trends{\r\n    background-color:#ffffff;\r\n    box-shadow: 0px 0px 5px 1px #607d8b63;\r\n    margin: 3px;\r\n}\r\n\r\n.Trends  .coinlistImg{\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 40px;\r\n}\r\n.Trends .coinlistname{\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: #666666ab;\r\n    letter-spacing: 0.4px;\r\n    margin: 0px;\r\n}\r\n\r\n.Trends .coinlistamt{\r\n    font-size: 14px;\r\n    color: darkgray;\r\n}\r\n.Trends .coinlistitem{\r\n    height: 50px;\r\n    margin: 7px 0px 7px 7px;\r\n    background-color: #e2e2e275;\r\n    padding: 3px;\r\n    border: 1px solid #e2e2e2bd;\r\n}\r\n\r\n\r\n.Trends .tabStyleTwo{\r\n    margin-left: 10px;\r\n    margin-top: 7px;\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.Trends .impression .headerPost{\r\n    background-color: #f2f2f2;\r\n    margin: 0px 10px 10px 10px;\r\n}\r\n.Trends .impression .headerPost .leftArea{    \r\n    text-align: center;\r\n    line-height: 35px;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    color: #9c9a9a;\r\n}\r\n.Trends .impression .headerPost .leftArea i{    \r\n    font-size: 19px;\r\n    padding: 0px 10px;\r\n}\r\n\r\n.Trends .impressionPost{\r\n    background-color: #e9eef378;\r\n    box-shadow: 0px 0px 3px 1px #607d8b63;\r\n    margin:4px 4px 15px 4px;\r\n    padding: 4px;\r\n}\r\n\r\n.Trends .impressionPost .impressionbody .impressiontext{\r\n    font-size: 15px;\r\n    color: gray;\r\n    margin: 2px 10px;\r\n    word-spacing: 2.5px;\r\n    line-height: 20px;\r\n}\r\n.Trends .impressionPost .PostHeader{\r\n    padding: 0px 2px;\r\n}\r\n.Trends .impressionPost .leftSide .postuserImg{\r\n    height: 35px;\r\n    width: 35px;\r\n    border-radius: 35px;\r\n}\r\n.Trends .impressionPost .leftSide .postusername{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #827f7f;\r\n    letter-spacing: 0.5px;\r\n}\r\n.Trends .impressionPost .leftSide .postusercategory{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 12px;\r\n    color: #9c9a9a;\r\n}\r\n.Trends .impressionPost .leftSide .postuserfollowers{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 12px;\r\n    color: #9c9a9a;\r\n}\r\n\r\n.Trends .impressionPost .rightSide .postaction{\r\n    line-height: 10px;\r\n    font-size: 24px;\r\n    margin: 0px;\r\n    color: gray;\r\n}\r\n.Trends .impressionPost .rightSide .postdate{\r\n    margin: 0px;\r\n    line-height: 18px;\r\n    margin-top: 5px;\r\n    color: #9c9a9a;\r\n    font-size: 11px;\r\n    letter-spacing: 0.4px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-trends/feeds-trends.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Trends\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n      <div fxFlex=\"30%\">\r\n        <p-scrollPanel  [style]=\"{width: '100%', height: scrollHeight }\" styleClass=\"customscroll_1\">\r\n\r\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex=\"45px\">\r\n                    <img class=\"coinlistImg\" src=\"./../../assets/images/coins/coin1.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"mt-10\" fxFlex>\r\n                    <p class=\"coinlistname\"> Currency Name </p>\r\n                    <p class=\"coinlistamt\"> $ 100000 </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex=\"45px\">\r\n                    <img class=\"coinlistImg\" src=\"./../../assets/images/coins/coin2.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"mt-10\" fxFlex>\r\n                    <p class=\"coinlistname\"> Currency Name </p>\r\n                    <p class=\"coinlistamt\"> $ 100000 </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex=\"45px\">\r\n                    <img class=\"coinlistImg\" src=\"./../../assets/images/coins/coin3.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"mt-10\" fxFlex>\r\n                    <p class=\"coinlistname\"> Currency Name </p>\r\n                    <p class=\"coinlistamt\"> $ 100000 </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex=\"45px\">\r\n                    <img class=\"coinlistImg\" src=\"./../../assets/images/coins/coin4.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"mt-10\" fxFlex>\r\n                    <p class=\"coinlistname\"> Currency Name </p>\r\n                    <p class=\"coinlistamt\"> $ 100000 </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex=\"45px\">\r\n                    <img class=\"coinlistImg\" src=\"./../../assets/images/coins/coin5.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"mt-10\" fxFlex>\r\n                    <p class=\"coinlistname\"> Currency Name </p>\r\n                    <p class=\"coinlistamt\"> $ 100000 </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex=\"45px\">\r\n                    <img class=\"coinlistImg\" src=\"./../../assets/images/coins/coin6.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"mt-10\" fxFlex>\r\n                    <p class=\"coinlistname\"> Currency Name </p>\r\n                    <p class=\"coinlistamt\"> $ 100000 </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex=\"45px\">\r\n                    <img class=\"coinlistImg\" src=\"./../../assets/images/coins/coin1.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"mt-10\" fxFlex>\r\n                    <p class=\"coinlistname\"> Currency Name </p>\r\n                    <p class=\"coinlistamt\"> $ 100000 </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex=\"45px\">\r\n                    <img class=\"coinlistImg\" src=\"./../../assets/images/coins/coin2.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"mt-10\" fxFlex>\r\n                    <p class=\"coinlistname\"> Currency Name </p>\r\n                    <p class=\"coinlistamt\"> $ 100000 </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex=\"45px\">\r\n                    <img class=\"coinlistImg\" src=\"./../../assets/images/coins/coin3.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"mt-10\" fxFlex>\r\n                    <p class=\"coinlistname\"> Currency Name </p>\r\n                    <p class=\"coinlistamt\"> $ 100000 </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex=\"45px\">\r\n                    <img class=\"coinlistImg\" src=\"./../../assets/images/coins/coin4.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"mt-10\" fxFlex>\r\n                    <p class=\"coinlistname\"> Currency Name </p>\r\n                    <p class=\"coinlistamt\"> $ 100000 </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex=\"45px\">\r\n                    <img class=\"coinlistImg\" src=\"./../../assets/images/coins/coin5.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"mt-10\" fxFlex>\r\n                    <p class=\"coinlistname\"> Currency Name </p>\r\n                    <p class=\"coinlistamt\"> $ 100000 </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div fxFlex=\"45px\">\r\n                    <img class=\"coinlistImg\" src=\"./../../assets/images/coins/coin6.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"mt-10\" fxFlex>\r\n                    <p class=\"coinlistname\"> Currency Name </p>\r\n                    <p class=\"coinlistamt\"> $ 100000 </p>\r\n                </div>\r\n            </div>\r\n\r\n        </p-scrollPanel>\r\n    </div>\r\n    <div fxFlex=\"70%\">\r\n        <div class=\"tabStyleTwo\">\r\n            <p-tabView (onChange)=\"onTabChange($event)\">\r\n        \r\n                <p-tabPanel header=\"Charts & Trends\"  leftIcon=\"fa-line-chart\">\r\n                    <img src=\"../../../assets/images/bitcoin_chart.png\" alt=\"\">\r\n                </p-tabPanel>\r\n        \r\n                <p-tabPanel header=\"Write impression\" leftIcon=\"fa-pencil\">\r\n\r\n                    <div class=\"impression\">\r\n\r\n                        <div class=\"headerPost\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                            <div fxFlex >\r\n                                <div class=\"leftArea\">\r\n                                        <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>  Write Impression\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <p-scrollPanel style=\"width:100%;\"  [style]=\"{width: '100%', height: impresionsHeight }\" styleClass=\"customscroll_1\">\r\n                            <div class=\"impressionPost\">\r\n                                <div class=\"impressionbody\">\r\n                                    <p class=\"impressiontext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\r\n                                </div>\r\n                                <hr class=\"m-0\">\r\n                                <div class=\"impressioninfo\">\r\n                                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                                <div fxFlex>\r\n                                                    <div class=\"leftSide\">\r\n                                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                                            <div fxFlex=\"45px\">\r\n                                                                <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                                            </div>\r\n                                                            <div class=\"mt-10\" fxFlex>\r\n                                                                <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                                                <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div fxFlex=\"25%\">\r\n                                                    <div class=\"rightSide\">\r\n                                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                                            <div class=\"text-right\" fxFlex>\r\n                                                                <p class=\"postaction\"> ... </p>\r\n                                                                <p class=\"postdate\"> 2 Months Ago </p>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"impressionPost\">\r\n                                <div class=\"impressionbody\">\r\n                                    <p class=\"impressiontext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\r\n                                </div>\r\n                                <hr class=\"m-0\">\r\n                                <div class=\"impressioninfo\">\r\n                                    <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                        <div fxFlex>\r\n                                            <div class=\"leftSide\">\r\n                                                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                                    <div fxFlex=\"45px\">\r\n                                                        <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                                    </div>\r\n                                                    <div class=\"mt-10\" fxFlex>\r\n                                                        <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                                        <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div fxFlex=\"25%\">\r\n                                            <div class=\"rightSide\">\r\n                                                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                                    <div class=\"text-right\" fxFlex>\r\n                                                        <p class=\"postaction\"> ... </p>\r\n                                                        <p class=\"postdate\"> 2 Months Ago </p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"impressionPost\">\r\n                                <div class=\"impressionbody\">\r\n                                    <p class=\"impressiontext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\r\n                                </div>\r\n                                <hr class=\"m-0\">\r\n                                <div class=\"impressioninfo\">\r\n                                    <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                        <div fxFlex>\r\n                                            <div class=\"leftSide\">\r\n                                                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                                    <div fxFlex=\"45px\">\r\n                                                        <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                                    </div>\r\n                                                    <div class=\"mt-10\" fxFlex>\r\n                                                        <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                                        <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div fxFlex=\"25%\">\r\n                                            <div class=\"rightSide\">\r\n                                                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                                    <div class=\"text-right\" fxFlex>\r\n                                                        <p class=\"postaction\"> ... </p>\r\n                                                        <p class=\"postdate\"> 2 Months Ago </p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"impressionPost\">\r\n                                <div class=\"impressionbody\">\r\n                                    <p class=\"impressiontext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\r\n                                </div>\r\n                                <hr class=\"m-0\">\r\n                                <div class=\"impressioninfo\">\r\n                                    <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                        <div fxFlex>\r\n                                            <div class=\"leftSide\">\r\n                                                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                                    <div fxFlex=\"45px\">\r\n                                                        <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                                    </div>\r\n                                                    <div class=\"mt-10\" fxFlex>\r\n                                                        <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                                        <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div fxFlex=\"25%\">\r\n                                            <div class=\"rightSide\">\r\n                                                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                                    <div class=\"text-right\" fxFlex>\r\n                                                        <p class=\"postaction\"> ... </p>\r\n                                                        <p class=\"postdate\"> 2 Months Ago </p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </p-scrollPanel>\r\n                    </div>\r\n                        \r\n                </p-tabPanel>\r\n        \r\n            </p-tabView>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-trends/feeds-trends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsTrendsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedsTrendsComponent = (function () {
    function FeedsTrendsComponent() {
    }
    FeedsTrendsComponent.prototype.ngOnInit = function () {
        this.screenHeight = window.screen.height - 270;
        this.impresionscreenHeight = window.screen.height - 380;
        this.scrollHeight = this.screenHeight + "px";
        this.impresionsHeight = this.impresionscreenHeight + "px";
    };
    FeedsTrendsComponent.prototype.onTabChange = function (event) {
        console.log(event);
    };
    FeedsTrendsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feeds-trends',
            template: __webpack_require__("../../../../../src/app/feeds/feeds-trends/feeds-trends.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feeds/feeds-trends/feeds-trends.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedsTrendsComponent);
    return FeedsTrendsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/popups/post-one/post-one.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".postOne .postheader{\r\n   margin-left: -14px;\r\n   margin-top: -14px;\r\n}\r\n.postOne .userimg{\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 45px;\r\n}\r\n.postOne .posttype{\r\n    line-height: 45px;\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n    color: #666666;\r\n    letter-spacing: 0.7px;\r\n}\r\n\r\n.postOne .posttext{\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    min-height: 100px;\r\n    padding: 5px;\r\n    border-color: #dedede;\r\n    color: #a1a1a1;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    letter-spacing: 0.7px;\r\n}\r\n\r\n.postOne .postaddon_icon i{\r\n    font-size: 30px;\r\n    color: #808080;\r\n}\r\n\r\n\r\n.postOne .cat-img-item img{\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n.postOne .cat-img-item span{\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n}\r\n.postOne .cat-img-item{\r\n    width: 40px;\r\n    height: 40px;\r\n    text-align: center;\r\n    border-radius: 50px;\r\n    margin-right: 15px;\r\n    opacity: 0.6;\r\n}\r\n\r\n.postOne .cat-img-item.selected{\r\n    opacity: 1;\r\n}\r\n.postOne .cat-img-item.selected span{\r\n    color: #666666;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popups/post-one/post-one.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"postOne\">\r\n  <div class=\"postheader\" fxLayout=\"row\" fxLayoutAlign=\"start\" >\r\n    <div fxFlex=\"65px\" class=\"text-center\">\r\n      <img class=\"userimg\" src=\"./../../assets/images/sample/img7.jpg\" alt=\"\">\r\n    </div>\r\n    <div fxFlex class=\"text-left\">\r\n      <h5 class=\"m-0 posttype\"> Write a Post </h5>\r\n    </div>\r\n    <div fxFlex class=\"text-left\">\r\n        <h5 class=\"m-0 posttype text-right\" >\r\n          <span style=\"cursor:pointer\" (click)=\"close()\"> X </span>\r\n        </h5>\r\n      </div>\r\n  </div>\r\n\r\n  <hr style=\"margin-top:10px;\">\r\n\r\n  <mat-dialog-content class=\"postbody\">\r\n\r\n    <textarea class=\"posttext\" placeholder=\"Write Something....\"></textarea>\r\n\r\n    <div class=\"postaddon mt-5\" fxLayout=\"row\" fxLayoutAlign=\"start\" >\r\n      <div fxFlex=\"50px\" class=\"text-center postaddon_icon\">\r\n          <i class=\"material-icons\">burst_mode</i>\r\n      </div>\r\n      <div fxFlex=\"50px\" class=\"text-center postaddon_icon\">\r\n          <i class=\"material-icons\" style=\"transform:rotate(90deg)\">local_movies</i>\r\n      </div>\r\n      <div fxFlex=\"50px\" class=\"text-center postaddon_icon\">\r\n          <i class=\"material-icons\">insert_link</i>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div fxLayout fxLayoutAlign=\"space-between\">\r\n      <div fxFlex=\"85%\">\r\n          <div class=\"mt-10\" fxLayout fxLayoutAlign=\"start\">\r\n            <div class=\"cat-img-item selected\">\r\n              <img src=\"./../../../assets/images/category icons/Picture1.png\" alt=\"\">\r\n              <span> Story </span>\r\n            </div>\r\n            <div class=\"cat-img-item\">\r\n                <img src=\"./../../../assets/images/category icons/Picture2.png\" alt=\"\">\r\n              <span> News </span>\r\n            </div>\r\n            <div class=\"cat-img-item\">\r\n                <img src=\"./../../../assets/images/category icons/Picture3.png\" alt=\"\">\r\n              <span> Trend </span>\r\n            </div>\r\n            <div class=\"cat-img-item\">\r\n                <img src=\"./../../../assets/images/category icons/Picture4.png\" alt=\"\">\r\n              <span> Blog </span>\r\n            </div>\r\n            <div class=\"cat-img-item\">\r\n                <img src=\"./../../../assets/images/category icons/Picture5.png\" alt=\"\">\r\n              <span> Opinion </span>\r\n            </div>\r\n            <div class=\"cat-img-item\">\r\n                <img src=\"./../../../assets/images/category icons/Picture6.png\" alt=\"\">\r\n              <span> Idea </span>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div fxFlex=\"15%\" style=\"line-height:75px;\">\r\n          <button type=\"button\" mat-raised-button (click)=\"close()\" color=\"primary\"> Post </button>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/popups/post-one/post-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PostOneComponent = (function () {
    function PostOneComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PostOneComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    PostOneComponent.prototype.close = function () {
        this.dialogRef.close(this.data);
    };
    PostOneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-one',
            template: __webpack_require__("../../../../../src/app/popups/post-one/post-one.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popups/post-one/post-one.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], PostOneComponent);
    return PostOneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/popups/post-two/post-two.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".postTwo .postheader{\r\n    margin-left: -14px;\r\n    margin-top: -14px;\r\n }\r\n .postTwo .userimg{\r\n     width: 45px;\r\n     height: 45px;\r\n     border-radius: 45px;\r\n }\r\n .postTwo .posttype{\r\n     line-height: 45px;\r\n     font-size: 19px;\r\n     font-weight: 700;\r\n     color: #666666;\r\n     letter-spacing: 0.7px;\r\n }\r\n \r\n .postTwo .posttext{\r\n     border-radius: 5px;\r\n     width: 100%;\r\n     min-height: 100px;\r\n     padding: 5px;\r\n     border-color: #dedede;\r\n     color: #a1a1a1;\r\n     font-weight: 600;\r\n     font-size: 14px;\r\n     letter-spacing: 0.7px;\r\n }\r\n \r\n .postTwo .postaddon_icon i{\r\n     font-size: 30px;\r\n     color: #808080;\r\n }\r\n \r\n .postTwo .postinput{\r\n    border-radius: 3px;\r\n    width: 80%;\r\n    color: #a1a1a1;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    letter-spacing: 0.7px;\r\n    outline-color: transparent;\r\n    border: 1px solid #dedede;\r\n    height: 35px;\r\n    padding: 0px 5px;\r\n }\r\n\r\n\r\n \r\n .postTwo .cat-img-item img{\r\n     width: 40px;\r\n     height: 40px;\r\n }\r\n .postTwo .cat-img-item span{\r\n     font-size: 12px;\r\n     font-weight: 600;\r\n }\r\n .postTwo .cat-img-item{\r\n     width: 40px;\r\n     height: 40px;\r\n     text-align: center;\r\n     border-radius: 50px;\r\n     margin-right: 15px;\r\n     opacity: 0.6;\r\n }\r\n \r\n .postTwo .cat-img-item.selected{\r\n     opacity: 1;\r\n }\r\n .postTwo .cat-img-item.selected span{\r\n     color: #666666;\r\n     font-size: 13px;\r\n     font-weight: 700;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popups/post-two/post-two.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"postTwo\">\r\n    <div class=\"postheader\" fxLayout=\"row\" fxLayoutAlign=\"start\" >\r\n      <div fxFlex=\"65px\" class=\"text-center\">\r\n        <img class=\"userimg\" src=\"./../../assets/images/sample/img7.jpg\" alt=\"\">\r\n      </div>\r\n      <div fxFlex class=\"text-left\">\r\n        <h5 class=\"m-0 posttype\"> Ask a Question </h5>\r\n      </div>\r\n      <div fxFlex class=\"text-left\">\r\n          <h5 class=\"m-0 posttype text-right\" >\r\n            <span style=\"cursor:pointer\" (click)=\"close()\"> X </span>\r\n          </h5>\r\n        </div>\r\n    </div>\r\n  \r\n    <hr style=\"margin-top:10px;\">\r\n  \r\n    <mat-dialog-content class=\"postbody\">\r\n  \r\n      <textarea class=\"posttext\" placeholder=\"Ask Your Question ...\"></textarea>\r\n  \r\n      <div class=\"postaddon mt-5\" fxLayout=\"row\" fxLayoutAlign=\"start\" >\r\n        <div fxFlex=\"50px\" class=\"text-center postaddon_icon\">\r\n            <i class=\"material-icons\">burst_mode</i>\r\n        </div>\r\n        <div fxFlex=\"50px\" class=\"text-center postaddon_icon\">\r\n            <i class=\"material-icons\" style=\"transform:rotate(90deg)\">local_movies</i>\r\n        </div>\r\n        <div fxFlex=\"50px\" class=\"text-center postaddon_icon\">\r\n            <i class=\"material-icons\">insert_link</i>\r\n        </div>\r\n      </div>\r\n  \r\n      <input class=\"postinput\" type=\"text\" placeholder=\"Which topic best suits this question (text box) or choose below \">\r\n  \r\n      <div fxLayout fxLayoutAlign=\"space-between\">\r\n        <div fxFlex=\"85%\">\r\n            <div class=\"mt-10\" fxLayout fxLayoutAlign=\"start\">\r\n              <div class=\"cat-img-item selected\">\r\n                <img src=\"./../../../assets/images/speaker.png\" alt=\"\">\r\n                <span> Story </span>\r\n              </div>\r\n              <div class=\"cat-img-item\">\r\n                  <img src=\"./../../../assets/images/investing.png\" alt=\"\">\r\n                <span> News </span>\r\n              </div>\r\n              <div class=\"cat-img-item\">\r\n                  <img src=\"./../../../assets/images/userpin.png\" alt=\"\">\r\n                <span> Trend </span>\r\n              </div>\r\n              <div class=\"cat-img-item\">\r\n                  <img src=\"./../../../assets/images/building.png\" alt=\"\">\r\n                <span> Blog </span>\r\n              </div>\r\n              <div class=\"cat-img-item\">\r\n                  <img src=\"./../../../assets/images/expert.png\" alt=\"\">\r\n                <span> Opinion </span>\r\n              </div>\r\n              <div class=\"cat-img-item\">\r\n                  <img src=\"./../../../assets/images/programmer.png\" alt=\"\">\r\n                <span> Idea </span>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"15%\" style=\"line-height:75px;\">\r\n            <button type=\"button\" mat-raised-button (click)=\"close()\" color=\"primary\"> Post </button>\r\n        </div>\r\n      </div>\r\n  \r\n    </mat-dialog-content>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/popups/post-two/post-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PostTwoComponent = (function () {
    function PostTwoComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PostTwoComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    PostTwoComponent.prototype.close = function () {
        this.dialogRef.close(this.data);
    };
    PostTwoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-two',
            template: __webpack_require__("../../../../../src/app/popups/post-two/post-two.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popups/post-two/post-two.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], PostTwoComponent);
    return PostTwoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile-main/profile-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-main/profile-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feedsMain\">\r\n\r\n    <app-feeds-header></app-feeds-header>\r\n\r\n\r\n    <div class=\"feeds mt-20\">\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n            <div fxFlex=\"21%\" style=\"background-color:#ffffff; box-shadow:#66666678 0px 1px 8px 0px\">\r\n                <app-profile-left-bar></app-profile-left-bar>\r\n            </div>\r\n            <div fxFlex=\"72%\" >\r\n                <app-profile-right-bar></app-profile-right-bar>\r\n            </div>\r\n        </div> <!-- Feeds Flex LayOut -->\r\n\r\n    </div> <!-- feeds -->\r\n\r\n</div> <!-- feedsMain -->"

/***/ }),

/***/ "../../../../../src/app/profile-main/profile-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileMainComponent = (function () {
    function ProfileMainComponent() {
    }
    ProfileMainComponent.prototype.ngOnInit = function () {
    };
    ProfileMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-main',
            template: __webpack_require__("../../../../../src/app/profile-main/profile-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile-main/profile-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileMainComponent);
    return ProfileMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile-followers/profile-followers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".followers{\r\n    background-color: #ffffff;\r\n    box-shadow: rgba(102, 102, 102, 0.47) 0px 1px 8px 0px;\r\n    padding: 5px;\r\n}\r\n\r\n.userdiv{\r\n    background-color: #e9eef3;\r\n    padding: 5px;\r\n    margin: 8px;\r\n    box-shadow: rgba(0, 0, 0, 0.36) 2px 2px 2px 0px;\r\n    min-height: 100px;\r\n}\r\n\r\n.userimg{\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100px;\r\n}\r\n.username{\r\n    font-size: 17px;\r\n    font-weight: 700;\r\n    color: #777777;\r\n    margin: 0px;\r\n    letter-spacing: 0.5px;\r\n}\r\n.userfollowers{\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #999999;\r\n    margin: 0px;\r\n    line-height: 20px;\r\n}\r\n.userfollowing{\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #999999;\r\n    margin: 0px;\r\n    line-height: 20px;\r\n}\r\n.Action{\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    height: 30px;\r\n    width: 30px;\r\n    text-align: center;\r\n    color: #6666664d;\r\n    cursor: pointer;\r\n}\r\n.Action i{\r\n    line-height: 30px;\r\n\r\n}\r\n\r\n\r\n.arrow{\r\n    height: 17px;\r\n    width: 30px;\r\n    position: absolute;\r\n    background-color: white;\r\n    z-index: -1;\r\n    -webkit-transform: rotate(45DEG);\r\n            transform: rotate(45DEG);\r\n    left: 5px;\r\n    top: -1px;\r\n}\r\n.followuserdd_icon{\r\n    text-align: center;\r\n}\r\n.followuserdd_icon i{\r\n    font-size: 28px;\r\n    margin-top: 4px;\r\n    color: #666666b3;\r\n}\r\n.followuserdd_text{\r\n    font-size: 15px;\r\n    margin: 0px;\r\n    line-height: 35px;\r\n    width: 175px;\r\n    font-weight: 700;\r\n    color: #666666b3;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile-followers/profile-followers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"followers\">\r\n  <div class=\"row m-0\">\r\n    <div class=\"col-sm-4 p-0\">\r\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n        <div fxFlex=\"85px\" class=\"text-center\">\r\n            <img class=\"userimg\" src=\"./../../assets/images/sample/img1.jpg\" alt=\"\">\r\n        </div>\r\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n            <p class=\"username\"> User Name </p>\r\n            <p class=\"userfollowers\"> 100 Followers </p>\r\n            <p class=\"userfollowing\"> 200 Following </p>\r\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4 p-0\">\r\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n        <div fxFlex=\"85px\" class=\"text-center\">\r\n            <img class=\"userimg\" src=\"./../../assets/images/sample/img2.jpg\" alt=\"\">\r\n        </div>\r\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n            <p class=\"username\"> User Name </p>\r\n            <p class=\"userfollowers\"> 100 Followers </p>\r\n            <p class=\"userfollowing\"> 200 Following </p>\r\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4 p-0\">\r\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n        <div fxFlex=\"85px\" class=\"text-center\">\r\n            <img class=\"userimg\" src=\"./../../assets/images/sample/img3.jpg\" alt=\"\">\r\n        </div>\r\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n            <p class=\"username\"> User Name </p>\r\n            <p class=\"userfollowers\"> 100 Followers </p>\r\n            <p class=\"userfollowing\"> 200 Following </p>\r\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4 p-0\">\r\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n        <div fxFlex=\"85px\" class=\"text-center\">\r\n            <img class=\"userimg\" src=\"./../../assets/images/sample/img4.jpg\" alt=\"\">\r\n        </div>\r\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n            <p class=\"username\"> User Name </p>\r\n            <p class=\"userfollowers\"> 100 Followers </p>\r\n            <p class=\"userfollowing\"> 200 Following </p>\r\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4 p-0\">\r\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n        <div fxFlex=\"85px\" class=\"text-center\">\r\n            <img class=\"userimg\" src=\"./../../assets/images/sample/img5.jpg\" alt=\"\">\r\n        </div>\r\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n            <p class=\"username\"> User Name </p>\r\n            <p class=\"userfollowers\"> 100 Followers </p>\r\n            <p class=\"userfollowing\"> 200 Following </p>\r\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4 p-0\">\r\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n        <div fxFlex=\"85px\" class=\"text-center\">\r\n            <img class=\"userimg\" src=\"./../../assets/images/sample/img6.jpg\" alt=\"\">\r\n        </div>\r\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n            <p class=\"username\"> User Name </p>\r\n            <p class=\"userfollowers\"> 100 Followers </p>\r\n            <p class=\"userfollowing\"> 200 Following </p>\r\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4 p-0\">\r\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n        <div fxFlex=\"85px\" class=\"text-center\">\r\n            <img class=\"userimg\" src=\"./../../assets/images/sample/img7.jpg\" alt=\"\">\r\n        </div>\r\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n            <p class=\"username\"> User Name </p>\r\n            <p class=\"userfollowers\"> 100 Followers </p>\r\n            <p class=\"userfollowing\"> 200 Following </p>\r\n            <div class=\"Action\"  [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4 p-0\">\r\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n        <div fxFlex=\"85px\" class=\"text-center\">\r\n            <img class=\"userimg\" src=\"./../../assets/images/sample/img1.jpg\" alt=\"\">\r\n        </div>\r\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n            <p class=\"username\"> User Name </p>\r\n            <p class=\"userfollowers\"> 100 Followers </p>\r\n            <p class=\"userfollowing\"> 200 Following </p>\r\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<mat-menu #followersAction=\"matMenu\" yPosition=\"below\" xPosition=\"after\" [overlapTrigger]=\"false\" class=\"followersAction\" >\r\n  <div class=\"arrow\"></div>\r\n  <div class=\"followuserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div class=\"followuserdd_icon\" fxFlex=\"40px\">\r\n      <i class=\"material-icons\">remove_circle_outline</i>\r\n    </div>\r\n    <div fxFlex>\r\n        <p class=\"followuserdd_text\"> Un Follow </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"userdropdarrow\"></div>\r\n  <hr class=\"m-0\">\r\n  <div class=\"followuserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\r\n      <div class=\"followuserdd_icon\" fxFlex=\"40px\">\r\n        <i class=\"material-icons\">do_not_disturb</i>\r\n      </div>\r\n      <div fxFlex>\r\n          <p class=\"followuserdd_text\">Do Not Show User </p>\r\n      </div>\r\n  </div>\r\n  <hr class=\"m-0\">\r\n  <div class=\"followuserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\r\n      <div class=\"followuserdd_icon\" fxFlex=\"40px\">\r\n        <i class=\"material-icons\">speaker_notes_off</i>\r\n      </div>\r\n      <div fxFlex>\r\n          <p class=\"followuserdd_text\"> Do Not Show User Posts </p>\r\n      </div>\r\n  </div>\r\n  <hr class=\"m-0\">\r\n  <div class=\"followuserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\r\n    <div class=\"followuserdd_icon\" fxFlex=\"40px\">\r\n      <i class=\"material-icons\">report</i>\r\n    </div>\r\n    <div fxFlex>\r\n        <p class=\"followuserdd_text\"> Report User To Admin </p>\r\n    </div>\r\n</div>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile-followers/profile-followers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileFollowersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileFollowersComponent = (function () {
    function ProfileFollowersComponent() {
    }
    ProfileFollowersComponent.prototype.ngOnInit = function () {
    };
    ProfileFollowersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-followers',
            template: __webpack_require__("../../../../../src/app/profile/profile-followers/profile-followers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile-followers/profile-followers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileFollowersComponent);
    return ProfileFollowersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile-following/profile-following.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".followingPeople{\r\n    background-color: #ffffff;\r\n    box-shadow: rgba(102, 102, 102, 0.47) 0px 1px 8px 0px;\r\n    padding: 5px;\r\n}\r\n\r\n.followingPeople .userdiv{\r\n    background-color: #e9eef3;\r\n    padding: 5px;\r\n    margin: 8px;\r\n    box-shadow: rgba(0, 0, 0, 0.36) 2px 2px 2px 0px;\r\n    min-height: 100px;\r\n}\r\n\r\n.followingPeople .userimg{\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100px;\r\n}\r\n.followingPeople .username{\r\n    font-size: 17px;\r\n    font-weight: 700;\r\n    color: #777777;\r\n    margin: 0px;\r\n    letter-spacing: 0.5px;\r\n}\r\n.followingPeople .userfollowers{\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #999999;\r\n    margin: 0px;\r\n    line-height: 20px;\r\n}\r\n.followingPeople .userfollowing{\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #999999;\r\n    margin: 0px;\r\n    line-height: 20px;\r\n}\r\n.followingPeople .Action{\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    height: 30px;\r\n    width: 30px;\r\n    text-align: center;\r\n    color: #6666664d;\r\n    cursor: pointer;\r\n}\r\n.followingPeople .Action i{\r\n    line-height: 30px;\r\n\r\n}\r\n\r\n.folloewinguserdd_icon{\r\n    text-align: center;\r\n}\r\n.folloewinguserdd_icon i{\r\n    font-size: 28px;\r\n    margin-top: 4px;\r\n    color: #666666b3;\r\n}\r\n.folloewinguserdd_text{\r\n    font-size: 15px;\r\n    margin: 0px;\r\n    line-height: 35px;\r\n    width: 175px;\r\n    font-weight: 700;\r\n    color: #666666b3;\r\n}\r\n\r\n\r\n.arrow{\r\n    height: 17px;\r\n    width: 30px;\r\n    position: absolute;\r\n    background-color: white;\r\n    z-index: -1;\r\n    -webkit-transform: rotate(45DEG);\r\n            transform: rotate(45DEG);\r\n    left: 5px;\r\n    top: -1px;\r\n}\r\n.folloewingtopicdd_icon{\r\n    text-align: center;\r\n}\r\n.folloewingtopicdd_icon i{\r\n    font-size: 28px;\r\n    margin-top: 4px;\r\n    color: #666666b3;\r\n}\r\n.folloewingtopicdd_text{\r\n    font-size: 15px;\r\n    margin: 0px;\r\n    line-height: 35px;\r\n    width: 175px;\r\n    font-weight: 700;\r\n    color: #666666b3;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.followingTopics{\r\n    background-color: #ffffff;\r\n    box-shadow: rgba(102, 102, 102, 0.47) 0px 1px 8px 0px;\r\n    padding: 5px;\r\n}\r\n.followingTopics .userdiv{\r\n    background-color: #e9eef3;\r\n    padding: 5px;\r\n    margin: 8px;\r\n    box-shadow: rgba(0, 0, 0, 0.36) 2px 2px 2px 0px;\r\n    min-height: 100px;\r\n}\r\n\r\n.followingTopics .userimg{\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100px;\r\n}\r\n.followingTopics .username{\r\n    font-size: 17px;\r\n    font-weight: 700;\r\n    color: #777777;\r\n    margin: 0px;\r\n    letter-spacing: 0.5px;\r\n}\r\n.followingTopics .userfollowers{\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #999999;\r\n    margin: 0px;\r\n    line-height: 20px;\r\n}\r\n.followingTopics .userfollowing{\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #999999;\r\n    margin: 0px;\r\n    line-height: 20px;\r\n}\r\n.followingTopics .Action{\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    height: 30px;\r\n    width: 30px;\r\n    text-align: center;\r\n    color: #6666664d;\r\n    cursor: pointer;\r\n}\r\n.followingTopics .Action i{\r\n    line-height: 30px;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile-following/profile-following.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabStyleTwo\" style=\"padding:0px 10px;\">\r\n  <p-tabView (onChange)=\"onTabChange($event)\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <p-tabPanel header=\"Following People\"  >\r\n        <div class=\"followingPeople\">\r\n          <div class=\"row m-0\">\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/sample/img1.jpg\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> User Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/sample/img2.jpg\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> User Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/sample/img3.jpg\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> User Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/sample/img4.jpg\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> User Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/sample/img5.jpg\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> User Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/sample/img6.jpg\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> User Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/sample/img7.jpg\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> User Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/sample/img1.jpg\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> User Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </p-tabPanel>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <p-tabPanel header=\"Following Topics\" >\r\n        <div class=\"followingTopics\">\r\n          <div class=\"row m-0\">\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/coins/coin1.png\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> Topic Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/coins/coin2.png\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> Topic Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/coins/coin3.png\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> Topic Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/coins/coin4.png\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> Topic Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/coins/coin5.png\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> Topic Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/coins/coin6.png\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> Topic Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/coins/coin7.png\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> Topic Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 p-0\">\r\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n                <div fxFlex=\"85px\" class=\"text-center\">\r\n                    <img class=\"userimg\" src=\"./../../assets/images/coins/coin8.png\" alt=\"\">\r\n                </div>\r\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\r\n                    <p class=\"username\"> Topic Name </p>\r\n                    <p class=\"userfollowers\"> 100 Followers </p>\r\n                    <p class=\"userfollowing\"> 200 Following </p>\r\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </p-tabPanel>\r\n\r\n  </p-tabView>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<mat-menu #followingAction=\"matMenu\" yPosition=\"below\" xPosition=\"after\" [overlapTrigger]=\"false\" class=\"followingAction\" >\r\n    <div class=\"arrow\"></div>\r\n  <div class=\"folloewinguserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div class=\"folloewinguserdd_icon\" fxFlex=\"40px\">\r\n      <i class=\"material-icons\">remove_circle_outline</i>\r\n    </div>\r\n    <div fxFlex>\r\n        <p class=\"folloewinguserdd_text\"> Un Follow </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"userdropdarrow\"></div>\r\n  <hr class=\"m-0\">\r\n  <div class=\"folloewinguserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\r\n      <div class=\"folloewinguserdd_icon\" fxFlex=\"40px\">\r\n        <i class=\"material-icons\">do_not_disturb</i>\r\n      </div>\r\n      <div fxFlex>\r\n          <p class=\"folloewinguserdd_text\">Do Not Show User </p>\r\n      </div>\r\n  </div>\r\n  <hr class=\"m-0\">\r\n  <div class=\"folloewinguserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\r\n      <div class=\"folloewinguserdd_icon\" fxFlex=\"40px\">\r\n        <i class=\"material-icons\">speaker_notes_off</i>\r\n      </div>\r\n      <div fxFlex>\r\n          <p class=\"folloewinguserdd_text\"> Do Not Show User Posts </p>\r\n      </div>\r\n  </div>\r\n  <hr class=\"m-0\">\r\n  <div class=\"folloewinguserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\r\n    <div class=\"folloewinguserdd_icon\" fxFlex=\"40px\">\r\n      <i class=\"material-icons\">report</i>\r\n    </div>\r\n    <div fxFlex>\r\n        <p class=\"folloewinguserdd_text\"> Report User To Admin </p>\r\n    </div>\r\n</div>\r\n</mat-menu>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<mat-menu #followingTopicAction=\"matMenu\" yPosition=\"below\" xPosition=\"after\" [overlapTrigger]=\"false\" class=\"followingTopicAction\" >\r\n    <div class=\"arrow\"></div>\r\n  <div class=\"folloewingtopicdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div class=\"folloewingtopicdd_icon\" fxFlex=\"40px\">\r\n      <i class=\"material-icons\">remove_circle_outline</i>\r\n    </div>\r\n    <div fxFlex>\r\n        <p class=\"folloewingtopicdd_text\"> Un Follow Topic </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"userdropdarrow\"></div>\r\n  <hr class=\"m-0\">\r\n  <div class=\"folloewingtopicdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\r\n      <div class=\"folloewingtopicdd_icon\" fxFlex=\"40px\">\r\n        <i class=\"material-icons\">do_not_disturb</i>\r\n      </div>\r\n      <div fxFlex>\r\n          <p class=\"folloewingtopicdd_text\">Do Not Show Topic </p>\r\n      </div>\r\n  </div>\r\n  <hr class=\"m-0\">\r\n  <div class=\"folloewingtopicdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\r\n      <div class=\"folloewingtopicdd_icon\" fxFlex=\"40px\">\r\n        <i class=\"material-icons\">speaker_notes_off</i>\r\n      </div>\r\n      <div fxFlex>\r\n          <p class=\"folloewingtopicdd_text\"> Do Not Show Topic Posts </p>\r\n      </div>\r\n  </div>\r\n  <hr class=\"m-0\">\r\n  <div class=\"folloewingtopicdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\r\n    <div class=\"folloewingtopicdd_icon\" fxFlex=\"40px\">\r\n      <i class=\"material-icons\">report</i>\r\n    </div>\r\n    <div fxFlex>\r\n        <p class=\"folloewingtopicdd_text\"> Report Topic To Admin </p>\r\n    </div>\r\n</div>\r\n</mat-menu>"

/***/ }),

/***/ "../../../../../src/app/profile/profile-following/profile-following.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileFollowingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileFollowingComponent = (function () {
    function ProfileFollowingComponent() {
    }
    ProfileFollowingComponent.prototype.ngOnInit = function () {
    };
    ProfileFollowingComponent.prototype.onTabChange = function (event) {
        console.log(event);
    };
    ProfileFollowingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-following',
            template: __webpack_require__("../../../../../src/app/profile/profile-following/profile-following.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile-following/profile-following.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileFollowingComponent);
    return ProfileFollowingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile-left-bar/profile-left-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.profileRightBar .userdiv{\r\n    background-color: #e9eef3;\r\n    margin: 7px;\r\n    padding: 7px;\r\n    border: 1px solid #dee4ea;\r\n    border-bottom: 2px solid #dee4ea;\r\n}\r\n\r\n.profileRightBar .userimg{\r\n    width: 90px;\r\n    height: 90px;\r\n    border-radius: 100px;\r\n}\r\n.profileRightBar .username{\r\n    font-size: 19px;\r\n    font-weight: 900;\r\n    color: #777777;\r\n    margin: -5px 0px 0px 0px;\r\n    letter-spacing: 0.5px;\r\n    word-spacing: 4px;\r\n}\r\n.profileRightBar .follow{\r\n    text-align: center;\r\n    font-size: 13px;\r\n    padding: 0px;\r\n    font-weight: 600;\r\n    margin-bottom: 0px;\r\n    color: #9c9a9a;\r\n    margin: 0px;\r\n    line-height: 21px;\r\n}\r\n.textLine{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    min-height: 40px;\r\n    /* background-color: #e9eef3; */\r\n    margin: 3px 5px;\r\n    width: 96%;\r\n    border: 1px solid #dee4ea;\r\n    border-bottom: 2px solid #dee4ea;\r\n}\r\n.textTitle{\r\n    margin: 0px 0px 0px 10px;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    letter-spacing: 0.4px;\r\n    color: #66666687;\r\n    line-height: 39px;\r\n}\r\n.textCount{\r\n    margin: 0px 0px 0px 5px;\r\n    font-size: 14px;\r\n    font-weight: 800;\r\n    letter-spacing: 0.4px;\r\n    color: #666666f0;\r\n    line-height: 22px;\r\n    margin-top: 6px;\r\n    zoom: 110%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile-left-bar/profile-left-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profileRightBar\">\r\n\r\n    <!-- UserDetails -->\r\n    <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n        <div fxFlex=\"90px\" class=\"text-center\">\r\n            <img class=\"userimg\" src=\"./../../assets/images/sample/img7.jpg\" alt=\"\">\r\n        </div>\r\n        <div fxFlex class=\"text-center\">\r\n            <p class=\"username\"> User Name </p>\r\n            <p class=\"follow\">100 Followers </p>\r\n            <p class=\"follow\"> 100 Following Users</p>\r\n            <p class=\"follow\"> 100 Following Topics </p>\r\n        </div>\r\n    </div>\r\n    <!-- UserDetails End -->\r\n\r\n\r\n    <div class=\"row mr-0\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"textLine\"> \r\n                <p class=\"textTitle\"> E-mail :</p> \r\n                <p class=\"textCount\"> Username@usermail.com </p>\r\n            </div>\r\n            <div class=\"textLine\"> \r\n                <p class=\"textTitle\"> Profession : </p> \r\n                <p class=\"textCount\"> User Profession </p>\r\n            </div>\r\n            <div class=\"textLine\"> \r\n                <p class=\"textTitle\"> Company : </p> \r\n                <p class=\"textCount\"> User Working Company </p>\r\n            </div>\r\n            <div class=\"textLine\"> \r\n                <p class=\"textTitle\"> Gender : </p> \r\n                <p class=\"textCount\"> Male </p>\r\n            </div>\r\n            <div class=\"textLine\"> \r\n                <p class=\"textTitle\"> Date Of Birth : </p> \r\n                <p class=\"textCount\"> 01/01/1995</p>\r\n            </div>\r\n            <div class=\"textLine\"> \r\n                <p class=\"textTitle\"> Location : </p> \r\n                <p class=\"textCount\"> Country Name <br> State Name <br> City Name</p>\r\n            </div>\r\n            <div class=\"textLine\"> \r\n                    <p class=\"textTitle\"> Selected Category : </p> \r\n                    <p class=\"textCount\"> Blogger </p>\r\n                </div>\r\n            <div class=\"textLine\"> \r\n                <p class=\"textTitle\"> Account Create Date : </p> \r\n                <p class=\"textCount\"> 01/01/2018 </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile-left-bar/profile-left-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileLeftBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileLeftBarComponent = (function () {
    function ProfileLeftBarComponent() {
    }
    ProfileLeftBarComponent.prototype.ngOnInit = function () {
    };
    ProfileLeftBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-left-bar',
            template: __webpack_require__("../../../../../src/app/profile/profile-left-bar/profile-left-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile-left-bar/profile-left-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileLeftBarComponent);
    return ProfileLeftBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile-right-bar/profile-right-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile-right-bar/profile-right-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabStyleThree FeedsCenter\">\r\n    <p-tabView (onChange)=\"onTabChange($event)\">\r\n\r\n        <p-tabPanel header=\"Timeline\">\r\n            <app-profile-timeline></app-profile-timeline>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Followers\">\r\n            <app-profile-followers></app-profile-followers>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Following\">\r\n                <app-profile-following></app-profile-following>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Settings\">\r\n                <app-profile-settings></app-profile-settings>\r\n        </p-tabPanel>\r\n\r\n      </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile-right-bar/profile-right-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRightBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileRightBarComponent = (function () {
    function ProfileRightBarComponent() {
    }
    ProfileRightBarComponent.prototype.ngOnInit = function () {
    };
    ProfileRightBarComponent.prototype.onTabChange = function (event) {
        console.log(event);
    };
    ProfileRightBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-right-bar',
            template: __webpack_require__("../../../../../src/app/profile/profile-right-bar/profile-right-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile-right-bar/profile-right-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileRightBarComponent);
    return ProfileRightBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile-settings/profile-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profileSettings{\r\n    padding: 0px 15px;\r\n}\r\n.settingsdiv{\r\n    padding: 0px;\r\n    height: 180px;\r\n}\r\n.settingsBox{\r\n    background-color: white;\r\n    height: 160px;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    box-shadow: rgba(102, 102, 102, 0.47) 0px 1px 8px 0px;\r\n    cursor: pointer\r\n}\r\n\r\n.settingsBox .boxIcon{\r\n    text-align: center;\r\n    margin: 0px;\r\n}\r\n\r\n.settingsBox .boxIcon i{\r\n    color: #666666;\r\n    font-size: 45px;\r\n}\r\n\r\n.settingsBox .boxHeading{\r\n    margin: 0px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    letter-spacing: 0.5px;\r\n    word-spacing: 4px;\r\n    color: #666666bf;\r\n}\r\n\r\n.settingsBox .boxDescription{\r\n    margin: 0px;\r\n    text-align: center;\r\n    line-height: 20px;\r\n    margin-top: 15px;\r\n    font-size: 15px;\r\n    color: #66666673;\r\n    letter-spacing: 0.3px;\r\n    word-spacing: 2px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile-settings/profile-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profileSettings\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 settingsdiv\">\r\n      <div class=\"settingsBox\">\r\n        <p class=\"boxIcon\"> <i class=\"material-icons\">border_color</i> </p>\r\n        <p class=\"boxHeading\"> Edit Profile</p>\r\n        <p class=\"boxDescription\"> Edit Your Name Email and More...</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4 settingsdiv\">\r\n      <div class=\"settingsBox\">\r\n        <p class=\"boxIcon\"><i class=\"material-icons\">mode_edit</i> </p>\r\n        <p class=\"boxHeading\"> Change Password </p>\r\n        <p class=\"boxDescription\"> Change Your Password Also Inset a Current Password...</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4 settingsdiv\">\r\n      <div class=\"settingsBox\">\r\n        <p class=\"boxIcon\"> <i class=\"material-icons\">security</i> </p>\r\n        <p class=\"boxHeading\"> Privacy Settings </p>\r\n        <p class=\"boxDescription\"> Change Your Notification Details and More ...</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4 settingsdiv\">\r\n      <div class=\"settingsBox\">\r\n        <p class=\"boxIcon\"> <i class=\"material-icons\">delete_sweep</i> </p>\r\n        <p class=\"boxHeading\"> Account Settings </p>\r\n        <p class=\"boxDescription\"> Inactive Or Delete Your Account...</p>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile-settings/profile-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileSettingsComponent = (function () {
    function ProfileSettingsComponent() {
    }
    ProfileSettingsComponent.prototype.ngOnInit = function () {
    };
    ProfileSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-settings',
            template: __webpack_require__("../../../../../src/app/profile/profile-settings/profile-settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile-settings/profile-settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileSettingsComponent);
    return ProfileSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile-timeline/profile-timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.HighlightsPost{\r\n    background-color:#ffffff;\r\n    box-shadow: 0px 0px 5px 1px #607d8b63;\r\n    margin: 3px;\r\n    padding-bottom: 5px;\r\n}\r\n.HighlightsPost .PostHeader{\r\n    padding: 0px 10px;\r\n}\r\n.HighlightsPost .leftSide .postusername{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: #827f7f;\r\n    letter-spacing: 0.5px;\r\n}\r\n.HighlightsPost .leftSide .postusercategory{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 14px;\r\n    color: #9c9a9a;\r\n}\r\n\r\n.HighlightsPost .rightSide .postcategoryicon{\r\n    margin-top: 8px;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n.HighlightsPost .rightSide .postaction{\r\n    line-height: 18px;\r\n    font-size: 24px;\r\n    margin: 0px;\r\n    color: gray;\r\n}\r\n.HighlightsPost .rightSide .postdate{\r\n    margin: 0px;\r\n    line-height: 18px;\r\n    margin-top: 5px;\r\n    color: #9c9a9a;\r\n    font-size: 12px;\r\n    letter-spacing: 0.4px;\r\n}\r\n\r\n\r\n.HighlightsPost .postLikes .like{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n.HighlightsPost .postLikes {\r\n    padding: 0px 15px;\r\n}\r\n.HighlightsPost .postLikes .like i{\r\n    font-size: 32px;\r\n    color: #ffda00;\r\n}\r\n.HighlightsPost .postLikes .like .count{\r\n    line-height: 35px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.7px;\r\n    font-weight: 600;\r\n    margin: 0px 5px;\r\n    color: #666666cf;\r\n}\r\n.HighlightsPost .postLikes .chat{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n.HighlightsPost .postLikes .chat i{\r\n    font-size: 32px;\r\n    color: #1d6d04;\r\n}\r\n.HighlightsPost .postLikes .chat .count{\r\n    line-height: 30px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.7px;\r\n    font-weight: 600;\r\n    margin: 0px 5px;\r\n    color: #666666cf;\r\n}\r\n.HighlightsPost .postLikes .share{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n.HighlightsPost .postLikes .share i{\r\n    font-size: 30px;\r\n    color: #088eb7;\r\n}\r\n.HighlightsPost .postLikes .share .count{\r\n    line-height: 35px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.7px;\r\n    font-weight: 600;\r\n    margin: 0px 5px;\r\n    color: #666666cf;\r\n}\r\n\r\n.HighlightsPost .postchat {\r\n    padding: 5px;\r\n}\r\n\r\n.HighlightsPost .postchat .chatUserImg img{\r\n    width: 40px;\r\n    height: 40px\r\n}\r\n\r\n.HighlightsPost .postchat .chatInput input{\r\n    width: 97%;\r\n    height: 38px;\r\n    outline: transparent;\r\n    border: 1px solid #333f4f3b;\r\n    padding: 0px 10px;\r\n    font-size: 15px;\r\n}\r\n\r\n.HighlightsPost .postchat .chatsend i{\r\n    font-size: 32px;\r\n    color: #38769f;\r\n    -webkit-transform: rotate(-35deg);\r\n            transform: rotate(-35deg);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n .QuestionPost{\r\n    background-color:#ffffff;\r\n    box-shadow: 0px 0px 5px 1px #607d8b63;\r\n    margin: 3px;\r\n}\r\n\r\n\r\n .QuestionPost .PostHeader{\r\n    padding: 0px 10px;\r\n}\r\n .QuestionPost .leftSide .postuserImg{\r\n    height: 50px;\r\n    width: 50px;\r\n    margin-top: 5px;\r\n    cursor: pointer;\r\n}\r\n .QuestionPost .leftSide .postusername{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: #827f7f;\r\n    letter-spacing: 0.5px;\r\n}\r\n .QuestionPost .leftSide .postusercategory{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 14px;\r\n    color: #9c9a9a;\r\n}\r\n .QuestionPost .leftSide .postuserfollowers{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 13px;\r\n    color: #9c9a9a;\r\n}\r\n\r\n\r\n\r\n .QuestionPost .rightSide .postcategoryicon{\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n .QuestionPost .rightSide .postaction{\r\n    line-height: 18px;\r\n    font-size: 24px;\r\n    margin: 0px;\r\n    color: gray;\r\n}\r\n .QuestionPost .rightSide .postdate{\r\n    margin: 0px;\r\n    line-height: 18px;\r\n    margin-top: 5px;\r\n    color: #9c9a9a;\r\n    font-size: 12px;\r\n    letter-spacing: 0.4px;\r\n}\r\n .QuestionPost .rightSide .posttopic{\r\n    margin: 0px;\r\n    line-height: 18px;\r\n    font-weight: 600;\r\n    color: #9c9a9a;\r\n    letter-spacing: 0.5px;\r\n    font-size: 13px;\r\n}\r\n\r\n\r\n .QuestionPost .postquestion{\r\n    margin: 0px;\r\n    margin-left: 10px;\r\n    color: #666666e6;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    letter-spacing: 0.3px;\r\n    word-spacing: 2px;\r\n}\r\n .QuestionPost .postLikes .like{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n .QuestionPost .postLikes {\r\n    padding: 0px 15px;\r\n}\r\n .QuestionPost .postLikes .like i{\r\n    font-size: 32px;\r\n    color: #ffda00;\r\n}\r\n .QuestionPost .postLikes .like .count{\r\n    line-height: 35px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.7px;\r\n    font-weight: 600;\r\n    margin: 0px 5px;\r\n    color: #666666cf;\r\n}\r\n .QuestionPost .postLikes .chat{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n .QuestionPost .postLikes .chat i{\r\n    font-size: 32px;\r\n    color: #1d6d04;\r\n}\r\n .QuestionPost .postLikes .chat .count{\r\n    line-height: 30px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.7px;\r\n    font-weight: 600;\r\n    margin: 0px 5px;\r\n    color: #666666cf;\r\n}\r\n .QuestionPost .postLikes .share{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n .QuestionPost .postLikes .share i{\r\n    font-size: 30px;\r\n    color: #088eb7;\r\n}\r\n .QuestionPost .postLikes .share .count{\r\n    line-height: 35px;\r\n    font-size: 15px;\r\n    letter-spacing: 0.7px;\r\n    font-weight: 600;\r\n    margin: 0px 5px;\r\n    color: #666666cf;\r\n}\r\n\r\n .QuestionPost .postchat {\r\n    padding: 5px 15px;\r\n}\r\n\r\n .QuestionPost .postchat .chatUserImg img{\r\n    width: 40px;\r\n    height: 40px\r\n}\r\n\r\n .QuestionPost .postchat .chatInput input{\r\n    width: 97%;\r\n    height: 38px;\r\n    outline: transparent;\r\n    border: 1px solid #333f4f3b;\r\n    padding: 0px 10px;\r\n    font-size: 15px;\r\n}\r\n\r\n .QuestionPost .postchat .chatsend i{\r\n    font-size: 32px;\r\n    color: #38769f;\r\n    -webkit-transform: rotate(-35deg);\r\n            transform: rotate(-35deg);\r\n}\r\n\r\n\r\n\r\n\r\n.scrolldiv{\r\n    overflow-Y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n .postmain .postquestion {\r\n    margin: 5px 0px 10px 5px\r\n}\r\n .postAnswer {\r\n    margin: 0px 0px 10px 5%;\r\n    background-color: #e6e6e67a;\r\n}\r\n .PostAnsHeader .postansuserImg{\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 40px;\r\n}\r\n .PostAnsHeader .postansusername{\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: #666666ab;\r\n    letter-spacing: 0.4px;\r\n    margin: 0px;\r\n}\r\n .PostAnsHeader .postansaction{\r\n    font-size: 20px;\r\n    line-height: 10px;\r\n    margin-right: 10px;\r\n    color: #666666;\r\n    margin-bottom: 4px;\r\n}\r\n .PostAnsHeader .postansdate{\r\n    margin: 0px 10px 0px 0px;\r\n    font-size: 12px;\r\n    color: darkgray;\r\n}\r\n .PostAnsHeader .postansfollowes{\r\n    font-size: 12px;\r\n    color: darkgray;\r\n}\r\n .PostAnsHeader .postansuserinfo{\r\n    height: 45px;\r\n    margin: 5px 0px 5px 5px;\r\n}\r\n .postAnswer .postAns{\r\n    padding: 5px 5px 0px 10px;\r\n}\r\n .postAnswer .postAns .postAnsText{\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    letter-spacing: 0.2px;\r\n    word-spacing: 2.5px;\r\n    color: #9c9a9a;\r\n    line-height: 20px;\r\n}\r\n .postmain .readmore{    \r\n    font-size: 13px;\r\n    margin: 0px;\r\n    font-weight: 600;\r\n    letter-spacing: 0.3px;\r\n    cursor: pointer;\r\n    line-height: 30px;\r\n    color: #999999;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.commentPost{\r\n    background-color: #e9eef378;\r\n    box-shadow: 0px 0px 3px 1px #607d8b63;\r\n    margin:4px 10px 15px 10px;\r\n    padding: 4px;\r\n}\r\n\r\n.commentPost .commentbody .commenttext{\r\n    font-size: 15px;\r\n    color: gray;\r\n    margin: 2px 10px;\r\n    word-spacing: 2.5px;\r\n    line-height: 20px;\r\n}\r\n.commentPost .PostHeader{\r\n    padding: 0px 2px;\r\n}\r\n.commentPost .leftSide .postuserImg{\r\n    height: 35px;\r\n    width: 35px;\r\n    border-radius: 35px;\r\n}\r\n.commentPost .leftSide .postusername{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: #827f7f;\r\n    letter-spacing: 0.5px;\r\n}\r\n.commentPost .leftSide .postusercategory{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 12px;\r\n    color: #9c9a9a;\r\n}\r\n.commentPost .leftSide .postuserfollowers{\r\n    margin: 0px;\r\n    line-height: 17px;\r\n    font-size: 12px;\r\n    color: #9c9a9a;\r\n}\r\n\r\n.commentPost .rightSide .postaction{\r\n    line-height: 10px;\r\n    font-size: 24px;\r\n    margin: 0px;\r\n    color: gray;\r\n}\r\n.commentPost .rightSide .postdate{\r\n    margin: 0px;\r\n    line-height: 18px;\r\n    margin-top: 5px;\r\n    color: #9c9a9a;\r\n    font-size: 11px;\r\n    letter-spacing: 0.4px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile-timeline/profile-timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Timeline\">\r\n  <p-scrollPanel style=\"width:90%;\" [style]=\"{height: scrollHeight }\" styleClass=\"customscroll_1\">\r\n    <ul class=\"cbp_tmtimeline\">\r\n      <li>\r\n          <time class=\"cbp_tmtime\"><span>23/01/2018</span> <span>06:30 AM</span></time>\r\n          <div class=\"cbp_tmicon\"><i class=\"material-icons\">visibility</i></div>\r\n          <div class=\"cbp_tmlabel\">\r\n            <div class=\"HighlightsPost mt-15\">\r\n                <!-- Highlights Post Info Header Div -->\r\n                <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                    <div fxFlex>\r\n                        <div class=\"leftSide\">\r\n                            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <div class=\"mt-10\" fxFlex>\r\n                                    <p class=\"postusername\"> Higlights Post</p>\r\n                                    <p class=\"postusercategory\"> Topic Name </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div fxFlex=\"35%\">\r\n                        <div class=\"rightSide\">\r\n                            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                <div fxFlex class=\"text-right\">\r\n                                    <img class=\"postcategoryicon\" src=\"./../../assets/images/icons/caticon1.png\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"text-right\" fxFlex=\"150px\">\r\n                                    <p class=\"postaction\"> ... </p>\r\n                                    <p class=\"postdate\"> 2 Months Ago </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Highlights Post Info Header Div End -->\r\n                <hr class=\"m-5\">\r\n                <!-- Highlights Post -->\r\n                <div class=\"postmain\" fxLayout=\"row\">\r\n                    <div fxFlex class=\"text-center\">\r\n                        <img src=\"./../../assets/images/sample/img4.jpg\" alt=\"\">\r\n                        <img src=\"./../../assets/images/sample/img3.jpg\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n                <!-- Highlights Post END -->\r\n                <hr class=\"m-5\">\r\n                <!-- Highlights Post Share Like And More -->\r\n                <div class=\"postLikes\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex class=\"text-left\">\r\n                        <div class=\"like\"> <i class=\"material-icons\">star_border</i> <p class=\"count\"> 300 </p> </div>\r\n                    </div>\r\n                    <div fxFlex class=\"text-center\" >\r\n                        <div class=\"chat\" (click)=\"clicked = !clicked\"> <i class=\"material-icons\">chat</i> <p class=\"count\"> 200 </p> </div>\r\n                    </div>\r\n                    <div fxFlex class=\"text-right\">\r\n                        <div class=\"share\"> <i class=\"material-icons\">share</i> <p class=\"count\"> 100 </p> </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Highlights Post Share Like And More  END-->\r\n      \r\n      \r\n                <!-- Highlights Post Comments-->\r\n                  <div *ngIf=\"clicked\" class=\"Comments\">\r\n                      <div class=\"commentPost\">\r\n                              <div class=\"commentinfo\">\r\n                                  <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                      <div fxFlex>\r\n                                          <div class=\"leftSide\">\r\n                                              <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                                  <div fxFlex=\"45px\">\r\n                                                      <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                                  </div>\r\n                                                  <div class=\"mt-10\" fxFlex>\r\n                                                      <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                                      <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                                  </div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                      <div fxFlex=\"25%\">\r\n                                          <div class=\"rightSide\">\r\n                                              <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                                  <div class=\"text-right\" fxFlex>\r\n                                                      <p class=\"postaction\"> ... </p>\r\n                                                      <p class=\"postdate\"> 2 Months Ago </p>\r\n                                                  </div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                              <hr class=\"m-0\">\r\n                              <div class=\"commentbody\">\r\n                                  <p class=\"commenttext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\r\n                              </div> \r\n                      </div>\r\n                      <div class=\"commentPost\">\r\n                          <div class=\"commentinfo\">\r\n                              <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                  <div fxFlex>\r\n                                      <div class=\"leftSide\">\r\n                                          <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                              <div fxFlex=\"45px\">\r\n                                                  <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                              </div>\r\n                                              <div class=\"mt-10\" fxFlex>\r\n                                                  <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                                  <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                  <div fxFlex=\"25%\">\r\n                                      <div class=\"rightSide\">\r\n                                          <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                              <div class=\"text-right\" fxFlex>\r\n                                                  <p class=\"postaction\"> ... </p>\r\n                                                  <p class=\"postdate\"> 2 Months Ago </p>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <hr class=\"m-0\">\r\n                          <div class=\"commentbody\">\r\n                              <p class=\"commenttext\"> Lorem ipsum dolor</p>\r\n                          </div> \r\n                      </div>\r\n                  </div>\r\n                  <!-- Highlights Post Comments END-->\r\n      \r\n      \r\n            </div>\r\n            <!-- Highlights Post Div END -->\r\n          </div>\r\n      </li>\r\n      <li>\r\n          <time class=\"cbp_tmtime\"><span>23/01/2018</span> <span>07:30 PM</span></time>\r\n          <div class=\"cbp_tmicon\"><i class=\"material-icons\">help_outline</i></div>\r\n          <div class=\"cbp_tmlabel\">\r\n             <!-- Question Post Div -->\r\n            <div class=\"QuestionPost mt-15\">\r\n                <!-- Question Post Info Header Div -->\r\n                <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                    <div fxFlex>\r\n                        <div class=\"leftSide\">\r\n                            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <div class=\"mt-10\" fxFlex>\r\n                                    <p class=\"postusername\"> Questions Post </p>\r\n                                    <p class=\"postusercategory\"> Topic Name </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div fxFlex=\"35%\">\r\n                        <div class=\"rightSide\">\r\n                            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                <div fxFlex>\r\n                                </div>\r\n                                <div class=\"text-right\" fxFlex=\"150px\">\r\n                                    <p class=\"postaction\"> ... </p>\r\n                                    <p class=\"postdate\"> 2 Months Ago </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Question Post Info Header Div End -->\r\n                <hr class=\"m-5\">\r\n                <!-- Question Post -->\r\n                <div class=\"postmain\" fxLayout=\"row\">\r\n                    <div fxFlex class=\"text-left\">\r\n                        <h5 class=\"postquestion\"> What is Blockchain Technology?  </h5>\r\n                        <div class=\"postAnswer\">\r\n                            <div class=\"PostAnsHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                <div fxFlex>\r\n                                    <div class=\"leftSide\">\r\n                                        <div class=\"postansuserinfo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                            <div fxFlex=\"45px\">\r\n                                                <img class=\"postansuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                            </div>\r\n                                            <div class=\"mt-10\" fxFlex>\r\n                                                <p class=\"postansusername\"> User Name </p>\r\n                                                <p class=\"postansfollowes\"> 20 followers </p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div fxFlex=\"35%\">\r\n                                    <div class=\"rightSide\">\r\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                            <div fxFlex>\r\n                                            </div>\r\n                                            <div class=\"text-right\" fxFlex=\"150px\">\r\n                                                <p class=\"postansaction\"> ... </p>\r\n                                                <p class=\"postansdate\"> 2 Months Ago </p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <hr class=\"m-0\" style=\"border-color: #77778729;\">\r\n                            <div class=\"postAns\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                                <div fxFlex>\r\n                                    <p class=\"postAnsText\"> &emsp; The blockchain is an incorruptible digital ledger of economic transactions\r\n                                                that can be programmed to record not just financial transactions but virtually everything of value.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"postAnswer\">\r\n                            <div class=\"PostAnsHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                <div fxFlex>\r\n                                    <div class=\"leftSide\">\r\n                                        <div class=\"postansuserinfo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                            <div fxFlex=\"45px\">\r\n                                                <img class=\"postansuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                            </div>\r\n                                            <div class=\"mt-10\" fxFlex>\r\n                                                <p class=\"postansusername\"> User Name </p>\r\n                                                <p class=\"postansfollowes\"> 20 followers </p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div fxFlex=\"35%\">\r\n                                    <div class=\"rightSide\">\r\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                            <div fxFlex>\r\n                                            </div>\r\n                                            <div class=\"text-right\" fxFlex=\"150px\">\r\n                                                <p class=\"postansaction\"> ... </p>\r\n                                                <p class=\"postansdate\"> 2 Months Ago </p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <hr class=\"m-0\" style=\"border-color: #77778729;\">\r\n                            <div class=\"postAns\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n                                <div fxFlex>\r\n                                    <p class=\"postAnsText\"> &emsp; The blockchain is an incorruptible digital ledger of economic transactions\r\n                                                that can be programmed to record not just financial transactions but virtually everything of value.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"text-right\">\r\n                            <p class=\"readmore\">Read More...</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Question Post END -->\r\n                <hr class=\"m-5\">\r\n                <!-- Question Post Share Like And More -->\r\n                <div class=\"postLikes\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex class=\"text-left\">\r\n                        <div class=\"like\"> <i class=\"material-icons\">star_border</i> <p class=\"count\"> 300 </p> </div>\r\n                    </div>\r\n                    <div fxFlex class=\"text-center\" >\r\n                        <div class=\"chat\" (click)=\"clicked2 = !clicked2\"> <i class=\"material-icons\">chat</i> <p class=\"count\"> 200 </p> </div>\r\n                    </div>\r\n                    <div fxFlex class=\"text-right\">\r\n                        <div class=\"share\"> <i class=\"material-icons\">share</i> <p class=\"count\"> 100 </p> </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Question Post Share Like And More  END-->\r\n                <hr class=\"m-5\">\r\n\r\n                <!-- Question Post Comments -->\r\n                <div *ngIf=\"clicked2\" class=\"Comments\">\r\n                    <div class=\"commentPost\">\r\n                        <div class=\"commentinfo\">\r\n                            <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                <div fxFlex>\r\n                                    <div class=\"leftSide\">\r\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                            <div fxFlex=\"45px\">\r\n                                                <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                            </div>\r\n                                            <div class=\"mt-10\" fxFlex>\r\n                                                <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                                <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div fxFlex=\"25%\">\r\n                                    <div class=\"rightSide\">\r\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                            <div class=\"text-right\" fxFlex>\r\n                                                <p class=\"postaction\"> ... </p>\r\n                                                <p class=\"postdate\"> 2 Months Ago </p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr class=\"m-0\">\r\n                        <div class=\"commentbody\">\r\n                            <p class=\"commenttext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\r\n                        </div> \r\n                    </div>\r\n                    <div class=\"commentPost\">\r\n                        <div class=\"commentinfo\">\r\n                            <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                <div fxFlex>\r\n                                    <div class=\"leftSide\">\r\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                            <div fxFlex=\"45px\">\r\n                                                <img class=\"postuserImg\" src=\"./../../assets/images/icons/user.png\" alt=\"\">\r\n                                            </div>\r\n                                            <div class=\"mt-10\" fxFlex>\r\n                                                <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\r\n                                                <p class=\"postuserfollowers\"> 20 Followers </p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div fxFlex=\"25%\">\r\n                                    <div class=\"rightSide\">\r\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                            <div class=\"text-right\" fxFlex>\r\n                                                <p class=\"postaction\"> ... </p>\r\n                                                <p class=\"postdate\"> 2 Months Ago </p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr class=\"m-0\">\r\n                        <div class=\"commentbody\">\r\n                            <p class=\"commenttext\"> Lorem ipsum dolor</p>\r\n                        </div> \r\n                    </div>\r\n                </div>\r\n                <!-- Question Post Comments END-->\r\n\r\n            </div>\r\n            <!-- Question Post Div END -->\r\n          </div>\r\n      </li>\r\n    </ul>\r\n  </p-scrollPanel>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile-timeline/profile-timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileTimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileTimelineComponent = (function () {
    function ProfileTimelineComponent() {
        this.clicked = false;
        this.clicked2 = false;
    }
    ProfileTimelineComponent.prototype.ngOnInit = function () {
        this.screenHeight = window.screen.height - 280;
        this.scrollHeight = this.screenHeight + "px";
    };
    ProfileTimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-timeline',
            template: __webpack_require__("../../../../../src/app/profile/profile-timeline/profile-timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile-timeline/profile-timeline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileTimelineComponent);
    return ProfileTimelineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signin-signup/signin-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.SignInSignUp .text-color{\r\n        color: #666666\r\n    }\r\n    \r\n    /* Index Page Header Design  */\r\n    \r\n.SignInSignUp .logoDesign-1{\r\n        height: 50px;\r\n        margin-top: -5px;\r\n    }\r\n.SignInSignUp .logoTextDesign-1{\r\n        margin-top: 12px;\r\n    }\r\n.SignInSignUp .TextDesign-1{\r\n        position: absolute;\r\n        top: -4px;\r\n        font-size: 18px;\r\n        margin: 0px;\r\n        font-weight: 600;\r\n        line-height: 23px;\r\n        /* color: #FFDA00; */\r\n    }\r\n.SignInSignUp .TextDesign-2{\r\n        font-size: 25px;\r\n        margin: 0px;\r\n        font-weight: 800;\r\n        line-height: 40px;\r\n        margin-left: 10px;\r\n        /* color: #FFDA00; */\r\n    }\r\n.SignInSignUp .TextDesign-3{\r\n        font-size: 25px;\r\n        margin: 0px;\r\n        font-weight: 800;\r\n        line-height: 40px;\r\n        /* color: #FFDA00; */\r\n    }\r\n.SignInSignUp .linkStyle-1{\r\n        font-weight: 700;\r\n        font-size: 16px;\r\n        margin-right: 20px;\r\n        border: 1px solid #ffffff;\r\n        padding: 2px 12px;\r\n        letter-spacing: 1px;\r\n    }\r\n.SignInSignUp .linkStyle-1:hover,\r\n.SignInSignUp .linkStyle-1:active,\r\n.SignInSignUp .linkStyle-1:focus{\r\n    background-color: #ffffff;\r\n    color: #FFDA00;\r\n    }\r\n\r\n.SignInSignUp .form-header{\r\n    font-size: 25px;\r\n    font-weight: 800;\r\n    color: #666666;\r\n}\r\n\r\n.SignInSignUp .form-header.inActive{\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n    line-height: 40px;\r\n}\r\n\r\n.SignInSignUp .inputStyle-1{\r\n    margin-bottom: 15px;\r\n    height: 42px;\r\n    width: 85%;\r\n    border: none;\r\n    box-shadow: 0px 2px 4px #383636b5;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.SignInSignUp .cat-img-item img{\r\n    width: 35px;\r\n    height: 35px;\r\n    margin-top: 6px;\r\n}\r\n.SignInSignUp .cat-img-item span{\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n}\r\n.SignInSignUp .cat-img-item{\r\n    width: 50px;\r\n    height: 50px;\r\n    text-align: center;\r\n    background-color: #c1bb9640;\r\n    line-height: 40px;\r\n    border-radius: 50px;\r\n}\r\n\r\n.SignInSignUp .cat-img-item.selected{\r\n    background-color: #ffffff;\r\n}\r\n.SignInSignUp .cat-img-item.selected span{\r\n    color: #666666;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n}\r\n\r\n.SignInSignUp .inputStyle-2{\r\n    margin-bottom: 5px;\r\n    height: 38px;\r\n    width: 100%;\r\n    border: none;\r\n    box-shadow: 0px 2px 4px #383636b5;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.SignInSignUp .gender-select{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    margin-top: 7px;\r\n}\r\n.SignInSignUp .gender-select .tick{\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    letter-spacing: 0.6px;\r\n    color: #888888;\r\n}\r\n.SignInSignUp .gender-select .tick img{\r\n    width: 26px;\r\n    height: 26px;\r\n    padding: 4px;\r\n    background: #fff;\r\n    margin-right: 5px;\r\n}\r\n.SignInSignUp .gender-select .tick img.p-13{\r\n    padding: 13px;\r\n}\r\n.SignInSignUp .btn-cutom{\r\n    color: #ffffff;\r\n    background-color: #333333;\r\n    border-color: #333333;\r\n    font-weight: 700;\r\n    letter-spacing: 0.8px;\r\n    font-size: 16px;\r\n    outline: transparent;\r\n}\r\n.SignInSignUp .btn-cutom:hover{\r\n    color: #fff;\r\n    background-color: #5c5c5c;\r\n    border-color: #5c5c5c;\r\n}\r\n.height-60{\r\n    height: 60px\r\n}\r\n\r\n\r\n.SignInSignUp .textStyle-2{\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    color: #777777;\r\n    word-spacing: 2px;\r\n    margin-top: 10px;\r\n    font-family: unset;\r\n    text-align: justify;\r\n    text-align-last: center;\r\n}\r\n.SignInSignUp .imgStyle-2{\r\n    width: 90px;\r\n}\r\n\r\n\r\n\r\n.SignInSignUp .linkStyle-4{\r\n    margin: 5px;\r\n    width: 45px;\r\n    height: 45px;\r\n    border: 3px solid royalblue;\r\n    border-radius: 40px;\r\n    background-color: #fff;\r\n}\r\n.SignInSignUp .linkStyle-4 i{\r\n    background-color: royalblue;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 35px;\r\n    line-height: 35px;\r\n    font-size: 17px;\r\n    margin-top: 2px;\r\n    color: #ffffff;\r\n}\r\n.SignInSignUp .linkStyle-4.facebook i{\r\n    background-color: #3B5999 !important;\r\n}\r\n.SignInSignUp .linkStyle-4.twitter i{\r\n    background-color: #1DA1F2 !important;\r\n}\r\n.SignInSignUp .linkStyle-4.linkedin i{\r\n    background-color: #0077B5 !important;\r\n}\r\n.SignInSignUp .linkStyle-4.googlePlus i{\r\n    background-color: #DC4437 !important;\r\n}\r\n\r\n\r\n.SignInSignUp .linkStyle-4.facebook{\r\n    border-color: #3B5999 !important;\r\n}\r\n.SignInSignUp .linkStyle-4.twitter{\r\n    border-color: #1DA1F2 !important;\r\n}\r\n.SignInSignUp .linkStyle-4.linkedin{\r\n    border-color: #0077B5 !important;\r\n}\r\n.SignInSignUp .linkStyle-4.googlePlus{\r\n    border-color: #DC4437 !important;\r\n}\r\n\r\n\r\n.SignInSignUp .linkStyle-3{\r\n    text-decoration: none;\r\n    color: #666666;\r\n    font-size: 16px;\r\n    font-weight: 800;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.SignInSignUp .textStyle-1{\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: gray;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin-signup/signin-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"SignInSignUp\">\r\n\r\n\r\n\r\n  <div class=\"\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"5%\" fxLayoutGap.sm=\"0\">\r\n\r\n\r\n    <!-- Left Bar -->\r\n    <div fxFlex=\"45%\" class=\"\">\r\n\r\n\r\n      <div class=\"mb-20 height-60\" fxLayout=\"row\" fxLayoutAlign=\"start\" style=\"margin-left:-13%\" >\r\n        <div fxFlex=\"250px\" routerLink=\"/\" style=\"cursor:pointer\">\r\n          <div class=\"row\" style=\"padding:15px 0px;\" >\r\n            <div class=\"col-sm-12\" style=\"display:inline-flex;\">\r\n              <img class=\"logoDesign-1 mr-5\" src=\"./../assets/images/logos/logo3mini62.png\" alt=\"\" >\r\n              <span class=\"logoTextDesign-1\" routerLink=\"/\" style=\"cursor:pointer\">\r\n                <sup class=\"TextDesign-1\"> The </sup>\r\n                <span class=\"TextDesign-2\"> Crypto </span>\r\n                <span class=\"TextDesign-3\"> Network </span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div style=\"height:500px\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly center\" >\r\n\r\n          <div class=\"right-part mb-30\" fxLayout fxLayoutAlign=\"center\" >\r\n              <div fxFlex=\"140px\" class=\"text-center\">\r\n                <img class=\"imgStyle-2\" src=\"../../assets/images/Picture7.png\" alt=\"\">\r\n              </div>\r\n              <div>\r\n                <h4 class=\"textStyle-2\"> SHARE stories, opinions and news about crypto currencies and markets </h4>\r\n              </div>\r\n          </div>\r\n          <div class=\"right-part mb-30\" fxLayout fxLayoutAlign=\"center\">\r\n              <div fxFlex=\"140px\" class=\"text-center\">\r\n                <img class=\"imgStyle-2\" src=\"../../assets/images/Picture8.png\" alt=\"\">\r\n              </div>\r\n              <div>\r\n                <h4 class=\"textStyle-2\"> CONNECT with experts and ask any questions related to the topic </h4>\r\n              </div>\r\n          </div>\r\n          <div class=\"right-part\"  fxLayout fxLayoutAlign=\"center\">\r\n              <div fxFlex=\"140px\" class=\"text-center\">\r\n                <img class=\"imgStyle-2\" src=\"../../assets/images/Picture9.png\" alt=\"\">\r\n              </div >\r\n              <div>\r\n                <h4 class=\"textStyle-2\"> CHECK the current rates and be up-to-date with the trends  </h4>\r\n              </div>\r\n          </div>\r\n        \r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <!-- Right Bar -->\r\n    <div class=\"mt-50\" fxFlex=\"34%\">\r\n\r\n\r\n        <!-- action Tabs  -->\r\n        <div class=\"pb-10 bg-primary-color\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\r\n          <div fxFlex=\"40%\" class=\"text-right\" (click)=\"onclick()\" style=\"cursor:pointer\" >\r\n            <h4 class=\"form-header\" [ngClass]=\"{ 'inActive': !SingUpActive }\" > Sign Up </h4>\r\n          </div>\r\n          <div fxFlex=\"10%\" class=\"text-center\">\r\n            <h4 class=\"form-header\"> | </h4>\r\n          </div>\r\n          <div fxFlex=\"40%\" class=\"text-left\" (click)=\"onclick()\" style=\"cursor:pointer\">\r\n            <h4 class=\"form-header \" [ngClass]=\"{ 'inActive': !SingInActive }\" > Sign In </h4>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"bg-primary-color\" *ngIf=\"SingUpActive\">\r\n            <!-- input Name -->\r\n            <div class=\"text-center\">\r\n              <input type=\"text\" class=\"inputStyle-1\" placeholder=\"Name\">\r\n            </div>\r\n  \r\n            <!-- input Email -->\r\n            <div class=\"text-center\">\r\n              <input type=\"email\" class=\"inputStyle-1 bg-color-D1D1D1\" placeholder=\"Sample.mail@mail.com\" readonly>\r\n            </div>\r\n  \r\n            <!-- input Password -->\r\n            <div class=\"text-center\">\r\n              <input type=\"password\" class=\"inputStyle-1\" placeholder=\"Password\">\r\n            </div>\r\n  \r\n            <!-- Topic Selection -->\r\n            <div class=\"mt-10 mb-30\" fxLayout fxLayoutAlign=\"space-between\" style=\"width:84%;margin-left:8%\">\r\n              <div class=\"cat-img-item selected\">\r\n                <img src=\"./../../assets/images/speaker.png\" alt=\"\">\r\n                <span> Media </span>\r\n              </div>\r\n              <div class=\"cat-img-item\">\r\n                <img src=\"./../../assets/images/investing.png\" alt=\"\">\r\n                <span> Invester </span>\r\n              </div>\r\n              <div class=\"cat-img-item\">\r\n                <img src=\"./../../assets/images/userpin.png\" alt=\"\">\r\n                <span> Enthusiast </span>\r\n              </div>\r\n              <div class=\"cat-img-item\">\r\n                <img src=\"./../../assets/images/building.png\" alt=\"\">\r\n                <span> Company </span>\r\n              </div>\r\n              <div class=\"cat-img-item\">\r\n                <img src=\"./../../assets/images/expert.png\" alt=\"\">\r\n                <span> Expert </span>\r\n              </div>\r\n              <div class=\"cat-img-item\">\r\n                <img src=\"./../../assets/images/programmer.png\" alt=\"\">\r\n                <span> Blogger </span>\r\n              </div>\r\n            </div>\r\n  \r\n            <!-- Input Company And Professioin -->\r\n            <div class=\"mt-40 mb-10\" fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">\r\n              <div fxFlex=\"41%\">\r\n                <input type=\"text\" class=\"inputStyle-2\" placeholder=\"Company\">\r\n              </div>\r\n              <div fxFlex=\"41%\">\r\n                <input type=\"text\" class=\"inputStyle-2\" placeholder=\"Profession\">\r\n              </div>\r\n            </div>\r\n  \r\n            <!-- Input Date oF Birth And Gender -->\r\n            <div class=\"mt-10 mb-10\" fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">\r\n              <div fxFlex=\"41%\">\r\n                <input type=\"text\" class=\"inputStyle-2\" placeholder=\"Date Of Birth\">\r\n              </div>\r\n              <div fxFlex=\"41%\">\r\n                <div class=\"gender-select\">\r\n                  <div class=\"tick ml-10\" (click)=\"genderSelect()\" style=\"cursor:pointer\">\r\n                    <img  [ngClass]=\"{ 'p-13': !MaleActive }\" src=\"./../../assets/images/tick.png\" alt=\"\"> Male </div>\r\n                  <div class=\"tick ml-20\" (click)=\"genderSelect()\" style=\"cursor:pointer\">\r\n                    <img class=\"p-13\" [ngClass]=\"{ 'p-13': !FemaleActive }\" src=\"./../../assets/images/tick.png\" alt=\"\"> Female </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <!-- Input Country State And City -->\r\n            <div class=\"mt-10 mb-10\" fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"5px\">\r\n              <div fxFlex=\"28%\">\r\n                <input type=\"text\" class=\"inputStyle-2\" placeholder=\"Country\">\r\n              </div>\r\n              <div fxFlex=\"27%\">\r\n                <input type=\"text\" class=\"inputStyle-2\" placeholder=\"State\">\r\n              </div>\r\n              <div fxFlex=\"27%\">\r\n                <input type=\"text\" class=\"inputStyle-2\" placeholder=\"City\">\r\n              </div>\r\n            </div>\r\n  \r\n            <!--  Submi Button -->\r\n            <div class=\"text-center mt-10 pb-10\">\r\n              <button routerLink=\"/Feeds\" class=\"btn-flat btn btn-cutom\"> Register </button>\r\n            </div>\r\n  \r\n        </div>\r\n        \r\n        <div class=\"bg-primary-color\" *ngIf=\"SingInActive\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start\" style=\"height:100%\">\r\n  \r\n                <!-- input Email -->\r\n                <div class=\"text-center mt-10\" >\r\n                  <input type=\"email\" class=\"inputStyle-1 bg-color-D1D1D1 mb-20\" placeholder=\"Sample.mail@mail.com\" readonly>\r\n                </div>\r\n  \r\n                <!-- input Password -->\r\n                <div class=\"text-center\">\r\n                  <input type=\"password\" class=\"inputStyle-1\" placeholder=\"Password\">\r\n                </div>\r\n  \r\n                <!--  Submi Button -->\r\n                <div class=\"text-center mt-10 mb-10\">\r\n                    <button routerLink=\"/Feeds\" class=\"btn-flat btn btn-cutom\"> Sign In </button>\r\n                </div>\r\n  \r\n                <div class=\"col-sm-12 text-center\">\r\n                    <p class=\"textStyle-1\"> Forgot Password !!  </p>\r\n                </div>\r\n  \r\n  \r\n                <div class=\"row mt-40 mb-30\">\r\n                    <div class=\"col-sm-12 text-center\">\r\n                            <p class=\"textStyle-1 mb-0\"> <small>  Or Sign In Using </small> </p>\r\n                        <div style=\"display:inline-flex\">\r\n                            <a href=\"#\" class=\"linkStyle-4 facebook\">\r\n                                <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                            <a href=\"#\" class=\"linkStyle-4 twitter\">\r\n                                <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                            <a href=\"#\" class=\"linkStyle-4 googlePlus\">\r\n                                <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                            <a href=\"#\" class=\"linkStyle-4 linkedin\">\r\n                                <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n  \r\n            </div>\r\n        </div>\r\n  \r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/signin-signup/signin-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SigninSignupComponent = (function () {
    function SigninSignupComponent() {
        this.SingUpActive = true;
        this.SingInActive = false;
        this.MaleActive = true;
        this.FemaleActive = false;
    }
    SigninSignupComponent.prototype.ngOnInit = function () {
    };
    SigninSignupComponent.prototype.onclick = function () {
        this.SingUpActive = !this.SingUpActive;
        this.SingInActive = !this.SingInActive;
    };
    SigninSignupComponent.prototype.genderSelect = function () {
        this.MaleActive = !this.MaleActive;
        this.FemaleActive = !this.FemaleActive;
    };
    SigninSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin-signup',
            template: __webpack_require__("../../../../../src/app/signin-signup/signin-signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signin-signup/signin-signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninSignupComponent);
    return SigninSignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".welcome{\r\n    background-color: #FFDA00 !important;\r\n}\r\n.welcome .text-color{\r\n        color: #666666;\r\n    }\r\n    \r\n    /* Index Page Header Design  */\r\n    \r\n.welcome .logoDesign-1{\r\n        height: 50px;\r\n        margin-top: -5px;\r\n    }\r\n.welcome .logoTextDesign-1{\r\n        margin-top: 12px;\r\n    }\r\n.welcome .TextDesign-1{\r\n        position: absolute;\r\n        top: -4px;\r\n        font-size: 18px;\r\n        margin: 0px;\r\n        font-weight: 600;\r\n        line-height: 23px;\r\n    }\r\n.welcome .TextDesign-2{\r\n        font-size: 25px;\r\n        margin: 0px;\r\n        font-weight: 800;\r\n        line-height: 40px;\r\n        margin-left: 10px;\r\n    }\r\n.welcome .TextDesign-3{\r\n        font-size: 25px;\r\n        margin: 0px;\r\n        font-weight: 800;\r\n        line-height: 40px;\r\n    }\r\n.welcome .linkStyle-1{\r\n        font-weight: 700;\r\n        font-size: 16px;\r\n        margin-right: 20px;\r\n        border: 1px solid white;\r\n        padding: 2px 12px;\r\n        letter-spacing: 1px;\r\n        color: #ffffff;\r\n    }\r\n.welcome .linkStyle-1:hover,\r\n.welcome .linkStyle-1:active,\r\n.welcome .linkStyle-1:focus{\r\n        background-color: #ffffff;\r\n        color: #FFDA00;\r\n    }\r\n.welcome .index-style-1{\r\n        max-width: 550px;\r\n        margin-bottom: 10px;\r\n        width: 74%;\r\n        background-color: gray;\r\n        padding: 10px;\r\n        box-shadow: 3px 3px 3px #6b5d5da1;\r\n    }\r\n.welcome .input-style-1{\r\n        height: 45px;\r\n        width: 85%;\r\n        border: none;\r\n        box-shadow: 0px 3px 3px #383636b5;\r\n        font-size: 18px;\r\n        font-weight: 600;\r\n        letter-spacing: 1px;\r\n        padding-left: 10px;\r\n    }\r\n    \r\n.welcome .linkStyle-2{\r\n        width: 15%;\r\n        text-align: center;\r\n    }\r\n.welcome .linkStyle-2 a{\r\n       text-decoration: none;\r\n    }\r\n.welcome .iconStyle-1{\r\n        font-size: 39px !important; \r\n        width: 47px;\r\n        height: 47px;\r\n        line-height: 42px !important;\r\n        background-color: #ffda00;\r\n        color: #808080;\r\n        border-radius: 50px;\r\n    }\r\n    \r\n.welcome .textStyle-1{\r\n        font-size: 15px;\r\n        font-weight: 600;\r\n        color: gray;\r\n    }\r\n.welcome .linkStyle-3{\r\n        text-decoration: none;\r\n        color: #666666;\r\n        font-size: 16px;\r\n        font-weight: 800;\r\n        letter-spacing: 1px;\r\n    }\r\n.welcome .linkStyle-4{\r\n        margin: 5px;\r\n        width: 45px;\r\n        height: 45px;\r\n        border: 3px solid royalblue;\r\n        border-radius: 40px;\r\n        background-color: #fff;\r\n    }\r\n.welcome .linkStyle-4 i{\r\n        background-color: royalblue;\r\n        width: 35px;\r\n        height: 35px;\r\n        border-radius: 35px;\r\n        line-height: 35px;\r\n        font-size: 17px;\r\n        margin-top: 2px;\r\n        color: #ffffff;\r\n    }\r\n.welcome .linkStyle-4.facebook i{\r\n        background-color: #3B5999 !important;\r\n    }\r\n.welcome .linkStyle-4.twitter i{\r\n        background-color: #1DA1F2 !important;\r\n    }\r\n.welcome .linkStyle-4.linkedin i{\r\n        background-color: #0077B5 !important;\r\n    }\r\n.welcome .linkStyle-4.googlePlus i{\r\n        background-color: #DC4437 !important;\r\n    }\r\n    \r\n    \r\n.welcome .linkStyle-4.facebook{\r\n        border-color: #3B5999 !important;\r\n    }\r\n.welcome .linkStyle-4.twitter{\r\n        border-color: #1DA1F2 !important;\r\n    }\r\n.welcome .linkStyle-4.linkedin{\r\n        border-color: #0077B5 !important;\r\n    }\r\n.welcome .linkStyle-4.googlePlus{\r\n        border-color: #DC4437 !important;\r\n    }\r\n    \r\n.welcome .fixed-row{\r\n        position: fixed;\r\n        top: 93%;\r\n        width: 102%;\r\n    }\r\n.welcome .fixed-row .menudiv{\r\n        height: 45px;\r\n        line-height: 45px;\r\n        background-color: #ffffff;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n.welcome .linkStyle-5{\r\n        color: #666666;\r\n        font-weight: 700;\r\n        font-size: 15px;\r\n        text-decoration: none;\r\n        margin: 0px 15px;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    <div class=\"welcome\">\r\n        <!-- Start main-content -->\r\n        <div class=\"main-content\">\r\n          <!-- Section: home -->\r\n          <section id=\"home\" class=\"divider parallax\">\r\n            <div class=\"display-table\">\r\n              <div class=\"display-table-cell\">\r\n                  <div class=\"row\" style=\"padding:15px 20px;\">\r\n                      <div class=\"col-sm-6\" style=\"display:inline-flex;\">\r\n                          <img class=\"logoDesign-1 mr-5\" src=\"./../assets/images/logos/logo3mini62.png\" alt=\"\"> \r\n                          <span class=\"logoTextDesign-1\"> \r\n                              <sup class=\"TextDesign-1\"> The </sup>\r\n                              <span class=\"TextDesign-2\"> Crypto </span>\r\n                              <span class=\"TextDesign-3\"> Network </span> \r\n                          </span>\r\n                      </div>\r\n                      <div class=\"col-sm-6 text-right\" >\r\n                          <div style=\"display:inline-flex;\"> \r\n                              <a routerLink=\"/SignInSignUp\" class=\"linkStyle-1\"> Sign Up</a>\r\n                              <a routerLink=\"/SignInSignUp\" class=\"linkStyle-1\"> Sign In</a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-sm-12 mt-40 mb-40\">\r\n                          <h2 class=\"text-center text-color\">\r\n                              Join the world’s first social network dedicated to crypto currencies\r\n                          </h2>\r\n                          <h1 class=\"text-center text-white\"> \r\n                              ASK, CONNECT AND ENGAGE\r\n                          </h1>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-sm-12 mt-10 text-center\">\r\n                          <div class=\"index-style-1\" style=\"display:inline-flex\"> \r\n                              <input class=\"input-style-1\" type=\"text\" placeholder=\"Enter Your E-mail Address\">\r\n                              <div class=\"linkStyle-2\"> <a href=\"#\">  <i class=\"material-icons iconStyle-1\">person_outline</i> </a> </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-sm-12 text-center\">\r\n                          <p class=\"textStyle-1\"> Already have an Account? &nbsp; <a href=\"#\" class=\"linkStyle-3\"> Sign In </a> </p>\r\n                      </div>\r\n                  </div>\r\n      \r\n                  <div class=\"row mt-40 mb-30\">\r\n                      <div class=\"col-sm-12 text-center\">\r\n                              <p class=\"textStyle-1 mb-0\"> <small>  Or Sign In Using </small> </p>\r\n                          <div style=\"display:inline-flex\">\r\n                              <a href=\"#\" class=\"linkStyle-4 facebook\">\r\n                                  <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                              </a>\r\n                              <a href=\"#\" class=\"linkStyle-4 twitter\">\r\n                                  <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                              </a>\r\n                              <a href=\"#\" class=\"linkStyle-4 googlePlus\">\r\n                                  <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\r\n                              </a>\r\n                              <a href=\"#\" class=\"linkStyle-4 linkedin\">\r\n                                  <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n                              </a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n      \r\n                  <div class=\"row fixed-row\">\r\n                      <div class=\"col-sm-12 menudiv\">\r\n                          <div style=\"display:inline-flex\">\r\n                              <a href=\"#\" class=\"linkStyle-5\"> About Us </a>\r\n                              <a href=\"#\" class=\"linkStyle-5\"> Career </a>\r\n                              <a href=\"#\" class=\"linkStyle-5\"> Terms </a>\r\n                              <a href=\"#\" class=\"linkStyle-5\"> Privacy </a>\r\n                              <a href=\"#\" class=\"linkStyle-5\"> Advertise </a>\r\n                              <a href=\"#\" class=\"linkStyle-5\"> Contact </a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n      \r\n              </div>\r\n            </div>\r\n          </section> \r\n        </div>  \r\n      <!-- end main-content -->\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map