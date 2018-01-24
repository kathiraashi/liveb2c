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

module.exports = "\n\n<router-outlet>  </router-outlet>"

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

module.exports = "<div class=\"feedsMain\">\n\n        <app-feeds-header></app-feeds-header>\n\n\n    <div class=\"feeds mt-20\">\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n            <div fxFlex=\"21%\" style=\"background-color:#ffffff; box-shadow:#66666678 0px 1px 8px 0px\">\n                <app-feeds-left-bar></app-feeds-left-bar>\n            </div>\n            <div fxFlex=\"51%\" style=\"background-color:#ffffff;\">\n                <app-feeds-center></app-feeds-center>\n            </div>\n            <div fxFlex=\"21%\" style=\"background-color:#ffffff; box-shadow:#66666678 0px 1px 8px 0px\">\n                <app-feeds-right-bar></app-feeds-right-bar>\n            </div>\n        </div> <!-- Feeds Flex LayOut -->\n\n    </div> <!-- feeds -->\n\n</div> <!-- feedsMain -->\n"

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
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-center/feeds-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabStyleOne FeedsCenter\">\n    <p-tabView (onChange)=\"onTabChange($event)\">\n\n        <p-tabPanel header=\"Highlights\">\n            <app-feeds-highlights></app-feeds-highlights>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Questions\">\n            <app-feeds-questions></app-feeds-questions>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Trends\">\n                <app-feeds-trends></app-feeds-trends>\n        </p-tabPanel>\n\n      </p-tabView>\n</div>\n"

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
exports.push([module.i, ".feedsHeader .headerLogo{\n    height: 35px;\n    margin: 5px;\n}\n\n.feedsHeader .btn-cutom{\n    color: #ffffff;\n    background-color: #666666;\n    border-color: #666666;\n    font-weight: 700;\n    letter-spacing: 1.8px;\n    font-size: 16px;\n    outline: transparent;\n    padding: 4px 18px;\n    border-radius: 4px;\n}\n.feedsHeader .btn-cutom:hover{\n    color: #fff;\n    background-color: #5c5c5c;\n    border-color: #5c5c5c;\n}\n.feedsHeader .headericon{\n    height: 30px;\n}\n\n.feedsHeader .SearchStyle{\n    width: 95%;\n    height: 34px;\n    background-color: transparent;\n    outline: transparent;\n    border: none;\n    border-bottom: 1px solid #999999b0;\n    font-size: 17px;\n    font-weight: 700;\n    color: #666666 !important;\n    letter-spacing: 1px\n}\n.feedsHeader .SearchStyle::-webkit-input-placeholder {\n    color: #6666665c !important;\n    letter-spacing: 1px;\n}\n     \n.feedsHeader .SearchStyle:-moz-placeholder { /* Firefox 18- */\n    color: #6666665c !important;\n    letter-spacing: 1px;\n}\n     \n.feedsHeader .SearchStyle::-moz-placeholder {  /* Firefox 19+ */\n    color: #6666665c !important;\n    letter-spacing: 1px; \n}\n     \n.feedsHeader .SearchStyle:-ms-input-placeholder {  \n    color: #6666665c !important;\n    letter-spacing: 1px;  \n}\n\n.feedsHeader  .searchIncon{\n    position: absolute;\n    margin-left: -30px;\n    top: 10px;\n}\n.feedsHeader  .searchIncon .icon{\n    height: 25px;\n}\n\n.feedsHeader .headeruserimg{\n    width: 35px;\n    height: 35px;\n    border-radius: 40px;\n}\n\n.feedsHeader .username{\n    font-size: 15px;\n    font-weight: 700;\n    color: #676767ba;\n    letter-spacing: 0.3px;\n}\n\n\n\n\n.notifylist{\n    padding: 2px 5px;\n    width: 320px;\n}\n.notifyheader .notifyheadertext {\n    margin: -8px 0px 0px 0px;\n    font-size: 17px;\n    font-weight: 700;\n    letter-spacing: 0.4px;\n    line-height: 40px;\n    padding: 0px 10px;\n    background-color: #e9eef3\n}\n.notifyheader .arrow{\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    background-color: #e9eef3;\n    top: -1px;\n    right: 25px;\n    -webkit-transform: rotate(45DEG);\n            transform: rotate(45DEG);\n    z-index: -1;\n}\n.notifyfooter .notifyfootertext {\n    margin: 0px 0px -9px 0px;\n    font-size: 16px;\n    font-weight: 700;\n    word-spacing: 2.5px;\n    line-height: 40px;\n    background-color: #e9eef3;\n    color: #0c5ac1;\n}\n.notifylist .userImg{\n    height: 35px;\n    width: 35px;\n    border-radius: 35px;\n}\n.notifylist .username{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 13px;\n    font-weight: 600;\n    color: #827f7f;\n    letter-spacing: 0.5px;\n}\n.notifylist .notifycategory{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 12px;\n    color: #9c9a9a;\n}\n.notifylist .notifydate{\n    margin: 0px;\n    line-height: 17px;\n    color: #9c9a9a;\n    font-size: 11px;\n    letter-spacing: 0.4px;\n}\n\n\n.userdropd{\n    width: 200px;\n    padding: 3px 10px;\n}\n\n.userdropd .userdropd_text{\n    font-size: 15px;\n    font-weight: 700;\n    letter-spacing: 0.4px;\n    color: #666666a3;\n    line-height: 40px;\n    margin: 0px;\n}\n\n.userdropd .userdropd_icon i{\n    color: #666666a3;\n    font-size: 26px;\n    margin-top: 8px;\n}\n.userdropdarrow{\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    background-color: #ffffff;\n    top: -3px;\n    right: 25px;\n    -webkit-transform: rotate(45DEG);\n            transform: rotate(45DEG);\n    z-index: -1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-header/feeds-header.component.html":
/***/ (function(module, exports) {

module.exports = " <div style=\"height:45px\" class=\"feedsHeader container-fluid bg-primary-color\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" >\n          <div fxFlex=\"19%\">\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\n                  <div routerLink=\"/\" style=\"cursor:pointer\">\n                      <img class=\"headerLogo\" src=\"assets/images/logos/logo3mini62.png\" alt=\"\">\n                  </div>\n                  <div>\n                      <button class=\"btn-flat btn btn-cutom\"> Post </button>\n                  </div>\n              </div>  \n          </div><!-- header left -->\n\n          <div fxFlex=\"52%\">\n              <div>\n                  <input class=\"SearchStyle\" type=\"text\" placeholder=\"Search...\">\n                  <span class=\"searchIncon\"> <img class=\"icon\" src=\"assets/images/icons/search.png\" alt=\"\"> </span>\n              </div>\n          </div><!-- header center -->\n\n          <div fxFlex=\"22%\">\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\n                  <div>\n                      <img routerLink=\"/Feeds\" style=\"cursor:pointer\" class=\"headericon\" src=\"assets/images/icons/Picture1.png\" alt=\"\">\n                  </div>\n                  <div fxFlex=\"30%\" class=\"text-center\" [matMenuTriggerFor]=\"notifictionList\" style=\"line-height:45px\">\n                      <img  class=\"headericon\" src=\"assets/images/icons/Picture2.png\" alt=\"\">\n                  </div>\n                  <div class=\"text-center\" [matMenuTriggerFor]=\"userView\" style=\"line-height:50px\">\n                      <img class=\"headeruserimg\" src=\"assets/images/sample/img7.jpg\" alt=\"\">\n                      <span class=\"username\">  User Name </span>\n                  </div>\n              </div> \n          </div><!-- header right -->\n\n      </div>\n  </div> <!-- feedsHeader -->\n\n    <mat-menu #notifictionList=\"matMenu\" yPosition=\"below\" xPosition=\"after\" [overlapTrigger]=\"false\" class=\"MatMenuNotification\" >\n        \n        <div class=\"notifyheader\">\n            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex>\n                    <p class=\"notifyheadertext\"> Notifications</p>\n                    <div class=\"arrow\"></div>\n                </div>\n            </div>\n        </div>\n        <hr class=\"m-0\">\n        <p-scrollPanel style=\"width:100%;\" [style]=\"{height: '250px' }\" styleClass=\"customscroll_1\">\n            <div class=\"notifylist\">\n                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div fxFlex=\"45px\">\n                        <img class=\"userImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                    </div>\n                    <div class=\"mt-10\" fxFlex>\n                        <p class=\"notifycategory\"> <span class=\"username\"> User Name,  </span> Invester Software De... </p>\n                        <p class=\"notifydate\"> 2 Months Ago  </p>\n                    </div>\n                </div>\n                <hr class=\"m-0\">\n            </div>\n            <div class=\"notifylist\">\n                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div fxFlex=\"45px\">\n                        <img class=\"userImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                    </div>\n                    <div class=\"mt-10\" fxFlex>\n                        <p class=\"notifycategory\"> <span class=\"username\"> User Name,  </span> Invester Software De... </p>\n                        <p class=\"notifydate\"> 2 Months Ago  </p>\n                    </div>\n                </div>\n                <hr class=\"m-0\">\n            </div>\n            <div class=\"notifylist\">\n                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div fxFlex=\"45px\">\n                        <img class=\"userImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                    </div>\n                    <div class=\"mt-10\" fxFlex>\n                        <p class=\"notifycategory\"> <span class=\"username\"> User Name,  </span> Invester Software De... </p>\n                        <p class=\"notifydate\"> 2 Months Ago  </p>\n                    </div>\n                </div>\n                <hr class=\"m-0\">\n            </div>\n        </p-scrollPanel>\n        <div class=\"notifyfooter\">\n            <hr class=\"m-0\">\n            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\n                <div fxFlex=\"100%\" class=\"text-center\">\n                    <p class=\"notifyfootertext\"> See All... </p>\n                </div>\n            </div>\n            <hr class=\"m-0\">\n        </div>\n    </mat-menu>\n\n\n\n    <mat-menu #userView=\"matMenu\" yPosition=\"below\" xPosition=\"after\" [overlapTrigger]=\"false\" class=\"MatMenuUserView\" >   \n        <div routerLink=\"/Profile\" style=\"cursor:pointer\" class=\"userdropd\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div class=\"userdropd_icon\" fxFlex=\"40px\">\n                <i class=\"material-icons\">portrait</i>\n            </div>\n            <div fxFlex>\n                <p class=\"userdropd_text\"> View Profile </p>\n            </div>\n        </div>\n        <div class=\"userdropdarrow\"></div>\n        <hr class=\"m-0\">\n        <div routerLink=\"/Profile\" style=\"cursor:pointer\" class=\"userdropd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\n            <div class=\"userdropd_icon\" fxFlex=\"40px\">\n                <i class=\"material-icons\">settings</i>\n            </div>\n            <div fxFlex>\n                <p class=\"userdropd_text\"> Settings </p>\n            </div>\n        </div>\n        <hr class=\"m-0\">\n        <div routerLink=\"/\" style=\"cursor:pointer\" class=\"userdropd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\n            <div class=\"userdropd_icon\" fxFlex=\"40px\">\n                <i class=\"material-icons\">power_settings_new</i>\n            </div>\n            <div fxFlex>\n                <p class=\"userdropd_text\"> Log Out </p>\n            </div>\n        </div>\n    </mat-menu>"

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
exports.push([module.i, ".Highlights .headerPost{\n    height: 40px;\n    background-color: #e6e6e6;\n    border-top: 1px solid #dedede;\n    border-bottom: 1px solid #e6e6e6;\n}\n.Highlights .headerPost .leftArea{    \n    padding: 0px 10px;\n    line-height: 40px;\n    font-size: 17px;\n    font-weight: 500;\n    color: #9c9a9a;\n}\n.Highlights .headerPost .leftArea i{    \n    font-size: 19px;\n    padding: 0px 10px;\n}\n.Highlights .headerPost .rightArea{    \n    background-color: #cecece;\n    height: 38px;\n    text-align: center;\n}\n.Highlights .headerPost .rightArea i{    \n    font-size: 33px;\n    line-height: 39px;\n    color: #e9eef3;\n}\n\n\n\n\n\n\n.Highlights .HighlightsPost{\n    background-color:#ffffff;\n    box-shadow: 0px 0px 5px 1px #607d8b63;\n    margin: 3px;\n    padding-bottom: 5px;\n}\n\n\n.Highlights .HighlightsPost .PostHeader{\n    padding: 0px 10px;\n}\n.Highlights .HighlightsPost .leftSide .postuserImg{\n    height: 50px;\n    width: 50px;\n    margin-top: 5px;\n    cursor: pointer;\n}\n.Highlights .HighlightsPost .leftSide .postusername{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 15px;\n    font-weight: 600;\n    color: #827f7f;\n    letter-spacing: 0.5px;\n}\n.Highlights .HighlightsPost .leftSide .postusercategory{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 14px;\n    color: #9c9a9a;\n}\n.Highlights .HighlightsPost .leftSide .postuserfollowers{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 13px;\n    color: #9c9a9a;\n}\n\n\n\n.Highlights .HighlightsPost .rightSide .postcategoryicon{\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    cursor: pointer;\n}\n.Highlights .HighlightsPost .rightSide .postaction{\n    line-height: 18px;\n    font-size: 24px;\n    margin: 0px;\n    color: gray;\n}\n.Highlights .HighlightsPost .rightSide .postdate{\n    margin: 0px;\n    line-height: 18px;\n    margin-top: 5px;\n    color: #9c9a9a;\n    font-size: 12px;\n    letter-spacing: 0.4px;\n}\n.Highlights .HighlightsPost .rightSide .posttopic{\n    margin: 0px;\n    line-height: 18px;\n    font-weight: 600;\n    color: #9c9a9a;\n    letter-spacing: 0.5px;\n    font-size: 13px;\n}\n\n\n.Highlights .HighlightsPost .postLikes .like{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n}\n.Highlights .HighlightsPost .postLikes {\n    padding: 0px 15px;\n}\n.Highlights .HighlightsPost .postLikes .like i{\n    font-size: 32px;\n    color: #ffda00;\n}\n.Highlights .HighlightsPost .postLikes .like .count{\n    line-height: 35px;\n    font-size: 15px;\n    letter-spacing: 0.7px;\n    font-weight: 600;\n    margin: 0px 5px;\n    color: #666666cf;\n}\n.Highlights .HighlightsPost .postLikes .chat{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n}\n.Highlights .HighlightsPost .postLikes .chat i{\n    font-size: 32px;\n    color: #1d6d04;\n}\n.Highlights .HighlightsPost .postLikes .chat .count{\n    line-height: 30px;\n    font-size: 15px;\n    letter-spacing: 0.7px;\n    font-weight: 600;\n    margin: 0px 5px;\n    color: #666666cf;\n}\n.Highlights .HighlightsPost .postLikes .share{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n}\n.Highlights .HighlightsPost .postLikes .share i{\n    font-size: 30px;\n    color: #088eb7;\n}\n.Highlights .HighlightsPost .postLikes .share .count{\n    line-height: 35px;\n    font-size: 15px;\n    letter-spacing: 0.7px;\n    font-weight: 600;\n    margin: 0px 5px;\n    color: #666666cf;\n}\n\n.Highlights .HighlightsPost .postchat {\n    padding: 5px;\n}\n\n.Highlights .HighlightsPost .postchat .chatUserImg img{\n    width: 40px;\n    height: 40px\n}\n\n.Highlights .HighlightsPost .postchat .chatInput input{\n    width: 97%;\n    height: 38px;\n    outline: transparent;\n    border: 1px solid #333f4f3b;\n    padding: 0px 10px;\n    font-size: 15px;\n}\n\n.Highlights .HighlightsPost .postchat .chatsend i{\n    font-size: 32px;\n    color: #38769f;\n    -webkit-transform: rotate(-35deg);\n            transform: rotate(-35deg);\n}\n\n\n.scrolldiv{\n    overflow-Y: auto;\n    overflow-x: hidden;\n}\n\n\n\n\n.Highlights .commentPost{\n    background-color: #e9eef378;\n    box-shadow: 0px 0px 3px 1px #607d8b63;\n    margin:4px 10px 15px 10px;\n    padding: 4px;\n}\n\n.Highlights .commentPost .commentbody .commenttext{\n    font-size: 15px;\n    color: gray;\n    margin: 2px 10px;\n    word-spacing: 2.5px;\n    line-height: 20px;\n}\n.Highlights .commentPost .PostHeader{\n    padding: 0px 2px;\n}\n.Highlights .commentPost .leftSide .postuserImg{\n    height: 35px;\n    width: 35px;\n    border-radius: 35px;\n}\n.Highlights .commentPost .leftSide .postusername{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 13px;\n    font-weight: 600;\n    color: #827f7f;\n    letter-spacing: 0.5px;\n}\n.Highlights .commentPost .leftSide .postusercategory{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 12px;\n    color: #9c9a9a;\n}\n.Highlights .commentPost .leftSide .postuserfollowers{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 12px;\n    color: #9c9a9a;\n}\n\n.Highlights .commentPost .rightSide .postaction{\n    line-height: 10px;\n    font-size: 24px;\n    margin: 0px;\n    color: gray;\n}\n.Highlights .commentPost .rightSide .postdate{\n    margin: 0px;\n    line-height: 18px;\n    margin-top: 5px;\n    color: #9c9a9a;\n    font-size: 11px;\n    letter-spacing: 0.4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-highlights/feeds-highlights.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Highlights\">\n  <!-- Highlights Header Post Div -->\n  <div class=\"headerPost\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n      <div fxFlex (click)=\"OpenModel()\">\n          <div class=\"leftArea\">\n                  <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>  Write a Post\n          </div>\n      </div>\n      <div fxFlex=\"25%\">\n          <div class=\"rightArea\">\n                  <i class=\"material-icons\">explore</i>\n          </div>\n      </div>\n  </div>\n  <!-- Highlights Header Post Div  END-->\n\n  <p-scrollPanel style=\"width:100%;\" [style]=\"{height: scrollHeight }\" styleClass=\"customscroll_1\">\n      <!-- Highlights Post Div -->\n      <div class=\"HighlightsPost mt-15\">\n          <!-- Highlights Post Info Header Div -->\n          <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n              <div fxFlex>\n                  <div class=\"leftSide\">\n                      <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                          <div fxFlex=\"60px\">\n                              <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                          </div>\n                          <div class=\"mt-10\" fxFlex>\n                              <p class=\"postusername\"> User Name </p>\n                              <p class=\"postusercategory\"> Invester &nbsp; | &nbsp; Software De... </p>\n                              <p class=\"postuserfollowers\"> 20 Followers </p>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div fxFlex=\"35%\">\n                  <div class=\"rightSide\">\n                      <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                          <div fxFlex class=\"text-right\">\n                              <img class=\"postcategoryicon\" src=\"assets/images/icons/caticon1.png\" alt=\"\">\n                          </div>\n                          <div class=\"text-right\" fxFlex=\"150px\">\n                              <p class=\"postaction\"> ... </p>\n                              <p class=\"postdate\"> 2 Months Ago </p>\n                              <p class=\"posttopic\"> Topic Name </p>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <!-- Highlights Post Info Header Div End -->\n          <hr class=\"m-5\">\n          <!-- Highlights Post -->\n          <div class=\"postmain\" fxLayout=\"row\">\n              <div fxFlex class=\"text-center\">\n                  <img src=\"assets/images/sample/img4.jpg\" alt=\"\">\n                  <img src=\"assets/images/sample/img3.jpg\" alt=\"\">\n              </div>\n          </div>\n          <!-- Highlights Post END -->\n          <hr class=\"m-5\">\n          <!-- Highlights Post Share Like And More -->\n          <div class=\"postLikes\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n              <div fxFlex class=\"text-left\">\n                  <div class=\"like\"> <i class=\"material-icons\">star_border</i> <p class=\"count\"> 300 </p> </div>\n              </div>\n              <div fxFlex class=\"text-center\" >\n                  <div class=\"chat\" (click)=\"clicked = !clicked\"> <i class=\"material-icons\">chat</i> <p class=\"count\"> 200 </p> </div>\n              </div>\n              <div fxFlex class=\"text-right\">\n                  <div class=\"share\"> <i class=\"material-icons\">share</i> <p class=\"count\"> 100 </p> </div>\n              </div>\n          </div>\n          <!-- Highlights Post Share Like And More  END-->\n          <hr class=\"m-5\">\n          <!-- Highlights Post Share Like And More -->\n          <div class=\"postchat\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n              <div fxFlex=\"60px\" class=\"text-left\">\n                  <div class=\"chatUserImg text-center\"> <img src=\"assets/images/icons/user.png\" alt=\"\"> </div>\n              </div>\n              <div fxFlex class=\"text-center\" >\n                  <div class=\"chatInput\"> <input type=\"text\" placeholder=\"Post Your Comment...\"> </div>\n              </div>\n              <div fxFlex=\"70px\" class=\"text-right\">\n                  <div class=\"chatsend text-center\"> <i class=\"material-icons\">send</i> </div>\n              </div>\n          </div>\n          <!-- Highlights Post Share Like And More  END-->\n\n\n          <!-- Highlights Post Comments-->\n            <div *ngIf=\"clicked\" class=\"Comments\">\n                <div class=\"commentPost\">\n                        <div class=\"commentinfo\">\n                            <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                                <div fxFlex>\n                                    <div class=\"leftSide\">\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                            <div fxFlex=\"45px\">\n                                                <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                            </div>\n                                            <div class=\"mt-10\" fxFlex>\n                                                <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                                <p class=\"postuserfollowers\"> 20 Followers </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div fxFlex=\"25%\">\n                                    <div class=\"rightSide\">\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                            <div class=\"text-right\" fxFlex>\n                                                <p class=\"postaction\"> ... </p>\n                                                <p class=\"postdate\"> 2 Months Ago </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"m-0\">\n                        <div class=\"commentbody\">\n                            <p class=\"commenttext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\n                        </div> \n                </div>\n                <div class=\"commentPost\">\n                    <div class=\"commentinfo\">\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                            <div fxFlex>\n                                <div class=\"leftSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <div fxFlex=\"45px\">\n                                            <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                        </div>\n                                        <div class=\"mt-10\" fxFlex>\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div fxFlex=\"25%\">\n                                <div class=\"rightSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                        <div class=\"text-right\" fxFlex>\n                                            <p class=\"postaction\"> ... </p>\n                                            <p class=\"postdate\"> 2 Months Ago </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr class=\"m-0\">\n                    <div class=\"commentbody\">\n                        <p class=\"commenttext\"> Lorem ipsum dolor</p>\n                    </div> \n                </div>\n            </div>\n            <!-- Highlights Post Comments END-->\n\n\n      </div>\n      <!-- Highlights Post Div END -->\n\n\n      <!-- Highlights Post Div -->\n      <div class=\"HighlightsPost mt-15\">\n          <!-- Highlights Post Info Header Div -->\n          <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n              <div fxFlex>\n                  <div class=\"leftSide\">\n                      <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                          <div fxFlex=\"60px\">\n                              <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                          </div>\n                          <div class=\"mt-10\" fxFlex>\n                              <p class=\"postusername\"> User Name </p>\n                              <p class=\"postusercategory\"> Invester &nbsp; | &nbsp; Software De... </p>\n                              <p class=\"postuserfollowers\"> 20 Followers </p>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div fxFlex=\"35%\">\n                  <div class=\"rightSide\">\n                      <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                          <div fxFlex class=\"text-right\">\n                              <img class=\"postcategoryicon\" src=\"assets/images/icons/caticon1.png\" alt=\"\">\n                          </div>\n                          <div class=\"text-right\" fxFlex=\"150px\">\n                              <p class=\"postaction\"> ... </p>\n                              <p class=\"postdate\"> 2 Months Ago </p>\n                              <p class=\"posttopic\"> Topic Name </p>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <!-- Highlights Post Info Header Div End -->\n          <hr class=\"m-5\">\n          <!-- Highlights Post -->\n          <div class=\"postmain\" fxLayout=\"row\">\n              <div fxFlex class=\"text-center\">\n                  <img src=\"assets/images/sample/img4.jpg\" alt=\"\">\n                  <img src=\"assets/images/sample/img3.jpg\" alt=\"\">\n              </div>\n          </div>\n          <!-- Highlights Post END -->\n          <hr class=\"m-5\">\n          <!-- Highlights Post Share Like And More -->\n          <div class=\"postLikes\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n              <div fxFlex class=\"text-left\">\n                  <div class=\"like\"> <i class=\"material-icons\">star_border</i> <p class=\"count\"> 300 </p> </div>\n              </div>\n              <div fxFlex class=\"text-center\" >\n                  <div class=\"chat\" (click)=\"clicked2 = !clicked2\"> <i class=\"material-icons\">chat</i> <p class=\"count\"> 200 </p> </div>\n              </div>\n              <div fxFlex class=\"text-right\">\n                  <div class=\"share\"> <i class=\"material-icons\">share</i> <p class=\"count\"> 100 </p> </div>\n              </div>\n          </div>\n          <!-- Highlights Post Share Like And More  END-->\n          <hr class=\"m-5\">\n          <!-- Highlights Post Share Like And More -->\n          <div class=\"postchat\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n              <div fxFlex=\"60px\" class=\"text-left\">\n                  <div class=\"chatUserImg text-center\"> <img src=\"assets/images/icons/user.png\" alt=\"\"> </div>\n              </div>\n              <div fxFlex class=\"text-center\" >\n                  <div class=\"chatInput\"> <input type=\"text\" placeholder=\"Post Your Comment...\"> </div>\n              </div>\n              <div fxFlex=\"70px\" class=\"text-right\">\n                  <div class=\"chatsend text-center\"> <i class=\"material-icons\">send</i> </div>\n              </div>\n          </div>\n          <!-- Highlights Post Share Like And More  END-->\n\n\n            <!-- Highlights Post Comments -->\n            <div *ngIf=\"clicked2\" class=\"Comments\">\n                <div class=\"commentPost\">\n                    <div class=\"commentinfo\">\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                            <div fxFlex>\n                                <div class=\"leftSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <div fxFlex=\"45px\">\n                                            <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                        </div>\n                                        <div class=\"mt-10\" fxFlex>\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div fxFlex=\"25%\">\n                                <div class=\"rightSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                        <div class=\"text-right\" fxFlex>\n                                            <p class=\"postaction\"> ... </p>\n                                            <p class=\"postdate\"> 2 Months Ago </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr class=\"m-0\">\n                    <div class=\"commentbody\">\n                        <p class=\"commenttext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\n                    </div> \n                </div>\n                <div class=\"commentPost\">\n                    <div class=\"commentinfo\">\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                            <div fxFlex>\n                                <div class=\"leftSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <div fxFlex=\"45px\">\n                                            <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                        </div>\n                                        <div class=\"mt-10\" fxFlex>\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div fxFlex=\"25%\">\n                                <div class=\"rightSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                        <div class=\"text-right\" fxFlex>\n                                            <p class=\"postaction\"> ... </p>\n                                            <p class=\"postdate\"> 2 Months Ago </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr class=\"m-0\">\n                    <div class=\"commentbody\">\n                        <p class=\"commenttext\"> Lorem ipsum dolor</p>\n                    </div> \n                </div>\n            </div>\n            <!-- Highlights Post Comments END-->\n\n      </div>\n      <!-- Highlights Post Div END -->\n  </p-scrollPanel>\n</div>"

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
exports.push([module.i, ".feedsLefBar .topicheader{\n    font-size: 16px;\n    padding: 5px 0px;\n    font-weight: 600;\n    background-color: #e9eef3;\n    padding-left: 10px;\n    color: #9c9a9a;\n}\n.feedsLefBar .topicPart{\n    min-height: 100px;\n    max-height: 100px;\n    text-align: center;\n    padding-left: 0px;\n}\n.feedsLefBar .topicimg{\n    width: 50px;\n    height: 50px;\n    margin: 0px 10px;\n    background-color: #66666630;\n    padding: 3px;\n    border-radius: 55px;\n}\n\n.feedsLefBar .topicname{\n    font-size: 12px;\n    margin: 0px;\n    font-weight: 700;\n    letter-spacing: 0.2px;\n    color: #666666;\n}\n\n.feedsLefBar .topicfollowers{\n    font-size: 11px;\n    margin: 0px;\n    font-weight: 600;\n    color: #999999;\n}\n\n.feedsLefBar .topicAddIcon{\n    position: absolute;\n    top: -2px;\n    right: 10px;\n}\n\n.feedsLefBar .topicAddIcon i{\n    color: #66666673;\n    cursor: pointer;\n    font-size: 22px;\n}\n\n.feedsLefBar .moretopics{\n    font-size: 12px;\n    margin: 0px;\n    font-weight: 600;\n    color: #66666670;\n    position: absolute;\n    right: 3px;\n    top: -30px;\n    letter-spacing: 0.3px;\n    cursor: pointer;\n}\n\n\n\n\n\n\n\n\n\n\n\n.feedsLefBar .followheader{\n    font-size: 16px;\n    padding: 5px 0px;\n    font-weight: 600;\n    background-color: #e9eef3;\n    padding-left: 10px;\n    color: #9c9a9a;\n    margin-top: 20px;\n}\n.feedsLefBar .followPart{\n    height: 70px;\n    text-align: center;\n    padding-left: 0px;\n}\n.feedsLefBar .followimg{\n    width: 50px;\n    height: 50px;\n    margin: 0px 10px;\n    background-color: #66666630;\n    padding: 3px;\n    border-radius: 55px;\n}\n\n.feedsLefBar .followname{\n    font-size: 12px;\n    margin: 0px;\n    font-weight: 700;\n    letter-spacing: 0.2px;\n    color: #666666;\n}\n\n\n\n\n\n\n\n\n\n\n\n.feedsLefBar .userlistImg{\n    height: 50px;\n    padding: 0px;\n    background-color: #e2e2e2;\n    border-radius: 50px;\n    margin: 0px 10px 0px 5px;\n}\n.feedsLefBar .userlistname {\n    margin: 0px;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 18px;\n    color: #666666;\n    letter-spacing: 0.5px;\n}\n\n.feedsLefBar .userlistcategory {\n    margin: 0px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 18px;\n    color: #666666;\n}\n\n.feedsLefBar .userlistfollowers {\n    margin: 0px;\n    font-size: 11px;\n    font-weight: 600;\n    line-height: 15px;\n    color: #999999;\n}\n.feedsLefBar .userAddIcon {\n    margin: 0px;\n}\n.feedsLefBar .userAddIcon i{\n    font-size: 30px;\n    color: #99999991;\n    line-height: 45px;;\n}\n.feedsLefBar .moreusers{\n    font-size: 13px;\n    margin: 0px;\n    font-weight: 600;\n    letter-spacing: 0.3px;\n    cursor: pointer;\n    line-height: 30px;\n    color: #999999;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-left-bar/feeds-left-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feedsLefBar\">\n    <div class=\"row m-0\">\n        <!-- Topic -->\n          <div class=\"col-sm-12 p-0\" > <p class=\"topicheader\"> Topics  </p> </div>\n\n          <div class=\"col-sm-12 text-right\">\n              <p class=\"moretopics\">  More Topics...</p>\n          </div>\n\n          <div class=\"col-sm-4 topicPart \">\n              <img class=\"topicimg\" src=\"assets/images/Picture1.png\" alt=\"\">\n              <p class=\"topicname\"> Topic Name</p>\n              <p class=\"topicfollowers\"> 100 Followers</p>\n              <span class=\"topicAddIcon\"> <i class=\"material-icons\">add_circle</i> </span>\n          </div>\n          <div class=\"col-sm-4 topicPart\">\n              <img class=\"topicimg\" src=\"assets/images/Picture2.png\" alt=\"\">\n              <p class=\"topicname\"> Topic Name</p>\n              <p class=\"topicfollowers\"> 100 Followers</p>\n              <span class=\"topicAddIcon\"> <i class=\"material-icons\">add_circle</i> </span>\n          </div>\n          <div class=\"col-sm-4 topicPart \">\n              <img class=\"topicimg\" src=\"assets/images/Picture3.png\" alt=\"\">\n              <p class=\"topicname\"> Topic Name</p>\n              <p class=\"topicfollowers\"> 100 Followers</p>\n              <span class=\"topicAddIcon\"> <i class=\"material-icons\">add_circle</i> </span>\n          </div>\n          <div class=\"col-sm-4 topicPart \">\n              <img class=\"topicimg\" src=\"assets/images/Picture4.png\" alt=\"\">\n              <p class=\"topicname\"> Topic Name</p>\n              <p class=\"topicfollowers\"> 100 Followers</p>\n              <span class=\"topicAddIcon\"> <i class=\"material-icons\">add_circle</i> </span>\n          </div>\n          <div class=\"col-sm-4 topicPart\">\n              <img class=\"topicimg\" src=\"assets/images/Picture5.png\" alt=\"\">\n              <p class=\"topicname\"> Topic Name</p>\n              <p class=\"topicfollowers\"> 100 Followers</p>\n              <span class=\"topicAddIcon\"> <i class=\"material-icons\">add_circle</i> </span>\n          </div>\n          <div class=\"col-sm-4 topicPart\">\n              <img class=\"topicimg\" src=\"assets/images/Picture6.png\" alt=\"\">\n              <p class=\"topicname\"> Topic Name</p>\n              <p class=\"topicfollowers\"> 100 Followers</p>\n              <span class=\"topicAddIcon\"> <i class=\"material-icons\">add_circle</i> </span>\n          </div>\n          <!-- topic End -->\n\n          <!-- follow people  -->\n\n          <div class=\"col-sm-12 p-0\">\n              <p class=\"followheader\"> Follow People  </p>\n          </div>\n          <div class=\"row m-0\">\n              <div class=\"col-sm-4 followPart \">\n                  <img class=\"followimg\" src=\"assets/images/Picture1.png\" alt=\"\">\n                  <p class=\"followname\"> Topic Name</p>\n              </div>\n              <div class=\"col-sm-4 followPart\">\n                  <img class=\"followimg\" src=\"assets/images/Picture2.png\" alt=\"\">\n                  <p class=\"followname\"> Topic Name</p>\n              </div>\n              <div class=\"col-sm-4 followPart \">\n                  <img class=\"followimg\" src=\"assets/images/Picture3.png\" alt=\"\">\n                  <p class=\"followname\"> Topic Name</p>\n              </div>\n        </div>\n        <!-- follow people End  -->\n\n        <hr class=\"m-5\">\n\n        <!-- follow peoples List  -->\n        <div class=\"mt-15\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n            <div fxFlex=\"65px\" class=\"text-center\">\n              <img class=\"userlistImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n            </div>\n            <div fxFlex>\n                <p class=\"userlistname\"> User Name </p>\n                <p class=\"userlistcategory\"> Invester &nbsp; | &nbsp; Software De... </p>\n                <p class=\"userlistfollowers\"> 20 Followers </p>\n            </div>\n            <div fxFlex=\"45px\" class=\"text-center\">\n                <span class=\"userAddIcon\"> <i class=\"material-icons\">person_add</i> </span>\n            </div>\n        </div>\n        <div class=\"mt-15\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n            <div fxFlex=\"65px\" class=\"text-center\">\n              <img class=\"userlistImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n            </div>\n            <div fxFlex>\n                <p class=\"userlistname\"> User Name </p>\n                <p class=\"userlistcategory\"> Invester &nbsp; | &nbsp; Software De... </p>\n                <p class=\"userlistfollowers\"> 20 Followers </p>\n            </div>\n            <div fxFlex=\"45px\" class=\"text-center\">\n                <span class=\"userAddIcon\"> <i class=\"material-icons\">person_add</i> </span>\n            </div>\n        </div>\n\n        <div class=\"col-sm-12 text-right\">\n            <p class=\"moreusers\">  More Users...</p>\n        </div>\n\n        <!-- follow peoples List End -->\n\n    </div>\n</div>\n"

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
exports.push([module.i, ".Questions .headerPost{\n    height: 40px;\n    background-color: #e6e6e6;\n    border-top: 1px solid #dedede;\n    border-bottom: 1px solid #e6e6e6;\n}\n.Questions .headerPost .leftArea{    \n    padding: 0px 10px;\n    line-height: 40px;\n    font-size: 17px;\n    font-weight: 500;\n    color: #9c9a9a;\n}\n.Questions .headerPost .leftArea i{    \n    font-size: 19px;\n    padding: 0px 10px;\n}\n.Questions .headerPost .rightArea{    \n    background-color: #cecece;\n    height: 38px;\n    text-align: center;\n}\n.Questions .headerPost .rightArea i{    \n    font-size: 33px;\n    line-height: 39px;\n    color: #e9eef3;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.Questions .QuestionPost{\n    background-color:#ffffff;\n    box-shadow: 0px 0px 5px 1px #607d8b63;\n    margin: 3px;\n}\n\n\n.Questions .QuestionPost .PostHeader{\n    padding: 0px 10px;\n}\n.Questions .QuestionPost .leftSide .postuserImg{\n    height: 50px;\n    width: 50px;\n    margin-top: 5px;\n    cursor: pointer;\n}\n.Questions .QuestionPost .leftSide .postusername{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 15px;\n    font-weight: 600;\n    color: #827f7f;\n    letter-spacing: 0.5px;\n}\n.Questions .QuestionPost .leftSide .postusercategory{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 14px;\n    color: #9c9a9a;\n}\n.Questions .QuestionPost .leftSide .postuserfollowers{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 13px;\n    color: #9c9a9a;\n}\n\n\n\n.Questions .QuestionPost .rightSide .postcategoryicon{\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    cursor: pointer;\n}\n.Questions .QuestionPost .rightSide .postaction{\n    line-height: 18px;\n    font-size: 24px;\n    margin: 0px;\n    color: gray;\n}\n.Questions .QuestionPost .rightSide .postdate{\n    margin: 0px;\n    line-height: 18px;\n    margin-top: 5px;\n    color: #9c9a9a;\n    font-size: 12px;\n    letter-spacing: 0.4px;\n}\n.Questions .QuestionPost .rightSide .posttopic{\n    margin: 0px;\n    line-height: 18px;\n    font-weight: 600;\n    color: #9c9a9a;\n    letter-spacing: 0.5px;\n    font-size: 13px;\n}\n\n\n.Questions .QuestionPost .postquestion{\n    margin: 0px;\n    margin-left: 10px;\n    color: #666666e6;\n    font-size: 16px;\n    font-weight: 700;\n    letter-spacing: 0.3px;\n    word-spacing: 2px;\n}\n.Questions .QuestionPost .postLikes .like{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n}\n.Questions .QuestionPost .postLikes {\n    padding: 0px 15px;\n}\n.Questions .QuestionPost .postLikes .like i{\n    font-size: 32px;\n    color: #ffda00;\n}\n.Questions .QuestionPost .postLikes .like .count{\n    line-height: 35px;\n    font-size: 15px;\n    letter-spacing: 0.7px;\n    font-weight: 600;\n    margin: 0px 5px;\n    color: #666666cf;\n}\n.Questions .QuestionPost .postLikes .chat{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n}\n.Questions .QuestionPost .postLikes .chat i{\n    font-size: 32px;\n    color: #1d6d04;\n}\n.Questions .QuestionPost .postLikes .chat .count{\n    line-height: 30px;\n    font-size: 15px;\n    letter-spacing: 0.7px;\n    font-weight: 600;\n    margin: 0px 5px;\n    color: #666666cf;\n}\n.Questions .QuestionPost .postLikes .share{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n}\n.Questions .QuestionPost .postLikes .share i{\n    font-size: 30px;\n    color: #088eb7;\n}\n.Questions .QuestionPost .postLikes .share .count{\n    line-height: 35px;\n    font-size: 15px;\n    letter-spacing: 0.7px;\n    font-weight: 600;\n    margin: 0px 5px;\n    color: #666666cf;\n}\n\n.Questions .QuestionPost .postchat {\n    padding: 5px 15px;\n}\n\n.Questions .QuestionPost .postchat .chatUserImg img{\n    width: 40px;\n    height: 40px\n}\n\n.Questions .QuestionPost .postchat .chatInput input{\n    width: 97%;\n    height: 38px;\n    outline: transparent;\n    border: 1px solid #333f4f3b;\n    padding: 0px 10px;\n    font-size: 15px;\n}\n\n.Questions .QuestionPost .postchat .chatsend i{\n    font-size: 32px;\n    color: #38769f;\n    -webkit-transform: rotate(-35deg);\n            transform: rotate(-35deg);\n}\n\n\n\n\n.scrolldiv{\n    overflow-Y: auto;\n    overflow-x: hidden;\n}\n\n.Questions .postmain .postquestion {\n    margin: 5px 0px 10px 5px\n}\n.Questions .postAnswer {\n    margin: 0px 0px 10px 5%;\n    background-color: #e6e6e67a;\n}\n.Questions .PostAnsHeader .postansuserImg{\n    width: 40px;\n    height: 40px;\n    border-radius: 40px;\n}\n.Questions .PostAnsHeader .postansusername{\n    font-size: 15px;\n    font-weight: 600;\n    color: #666666ab;\n    letter-spacing: 0.4px;\n    margin: 0px;\n}\n.Questions .PostAnsHeader .postansaction{\n    font-size: 20px;\n    line-height: 10px;\n    margin-right: 10px;\n    color: #666666;\n    margin-bottom: 4px;\n}\n.Questions .PostAnsHeader .postansdate{\n    margin: 0px 10px 0px 0px;\n    font-size: 12px;\n    color: darkgray;\n}\n.Questions .PostAnsHeader .postansfollowes{\n    font-size: 12px;\n    color: darkgray;\n}\n.Questions .PostAnsHeader .postansuserinfo{\n    height: 45px;\n    margin: 5px 0px 5px 5px;\n}\n.Questions .postAnswer .postAns{\n    padding: 5px 5px 0px 10px;\n}\n.Questions .postAnswer .postAns .postAnsText{\n    font-size: 15px;\n    font-weight: 500;\n    letter-spacing: 0.2px;\n    word-spacing: 2.5px;\n    color: #9c9a9a;\n    line-height: 20px;\n}\n.Questions .postmain .readmore{    \n    font-size: 13px;\n    margin: 0px;\n    font-weight: 600;\n    letter-spacing: 0.3px;\n    cursor: pointer;\n    line-height: 30px;\n    color: #999999;\n}\n\n\n\n\n\n\n\n\n.Questions .commentPost{\n    background-color: #e9eef378;\n    box-shadow: 0px 0px 3px 1px #607d8b63;\n    margin:4px 10px 15px 10px;\n    padding: 4px;\n}\n\n.Questions .commentPost .commentbody .commenttext{\n    font-size: 15px;\n    color: gray;\n    margin: 2px 10px;\n    word-spacing: 2.5px;\n    line-height: 20px;\n}\n.Questions .commentPost .PostHeader{\n    padding: 0px 2px;\n}\n.Questions .commentPost .leftSide .postuserImg{\n    height: 35px;\n    width: 35px;\n    border-radius: 35px;\n}\n.Questions .commentPost .leftSide .postusername{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 13px;\n    font-weight: 600;\n    color: #827f7f;\n    letter-spacing: 0.5px;\n}\n.Questions .commentPost .leftSide .postusercategory{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 12px;\n    color: #9c9a9a;\n}\n.Questions .commentPost .leftSide .postuserfollowers{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 12px;\n    color: #9c9a9a;\n}\n\n.Questions .commentPost .rightSide .postaction{\n    line-height: 10px;\n    font-size: 24px;\n    margin: 0px;\n    color: gray;\n}\n.Questions .commentPost .rightSide .postdate{\n    margin: 0px;\n    line-height: 18px;\n    margin-top: 5px;\n    color: #9c9a9a;\n    font-size: 11px;\n    letter-spacing: 0.4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-questions/feeds-questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Questions\">\n   <!-- Question Header Post Div -->\n    <div class=\"headerPost\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n        <div fxFlex (click)=\"OpenModelQuestion()\">\n            <div class=\"leftArea\">\n                    <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>  Ask a Question\n            </div>\n        </div>\n        <div fxFlex=\"25%\">\n            <div class=\"rightArea\">\n                    <i class=\"material-icons\">explore</i>\n            </div>\n        </div>\n    </div>\n    <!-- Question Header Post Div  END-->\n\n    <p-scrollPanel style=\"width:100%;\" [style]=\"{height: scrollHeight }\" styleClass=\"customscroll_1\">\n\n\n\n\n\n\n\n\n\n\n\n        \n        <!-- Question Post Div -->\n        <div class=\"QuestionPost mt-15\">\n            <!-- Question Post Info Header Div -->\n            <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                <div fxFlex>\n                    <div class=\"leftSide\">\n                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <div fxFlex=\"60px\">\n                                <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                            </div>\n                            <div class=\"mt-10\" fxFlex>\n                                <p class=\"postusername\"> User Name </p>\n                                <p class=\"postusercategory\"> Invester &nbsp; | &nbsp; Software De... </p>\n                                <p class=\"postuserfollowers\"> 20 Followers </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div fxFlex=\"35%\">\n                    <div class=\"rightSide\">\n                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                            <div fxFlex>\n                            </div>\n                            <div class=\"text-right\" fxFlex=\"150px\">\n                                <p class=\"postaction\"> ... </p>\n                                <p class=\"postdate\"> 2 Months Ago </p>\n                                <p class=\"posttopic\"> Topic Name </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Question Post Info Header Div End -->\n            <hr class=\"m-5\">\n            <!-- Question Post -->\n            <div class=\"postmain\" fxLayout=\"row\">\n                <div fxFlex class=\"text-left\">\n                    <h5 class=\"postquestion\"> What is Blockchain Technology?  </h5>\n                    <div class=\"postAnswer\">\n                        <div class=\"PostAnsHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                            <div fxFlex>\n                                <div class=\"leftSide\">\n                                    <div class=\"postansuserinfo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <div fxFlex=\"45px\">\n                                            <img class=\"postansuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                        </div>\n                                        <div class=\"mt-10\" fxFlex>\n                                            <p class=\"postansusername\"> User Name </p>\n                                            <p class=\"postansfollowes\"> 20 followers </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div fxFlex=\"35%\">\n                                <div class=\"rightSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                        <div fxFlex>\n                                        </div>\n                                        <div class=\"text-right\" fxFlex=\"150px\">\n                                            <p class=\"postansaction\"> ... </p>\n                                            <p class=\"postansdate\"> 2 Months Ago </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"m-0\" style=\"border-color: #77778729;\">\n                        <div class=\"postAns\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n                            <div fxFlex>\n                                <p class=\"postAnsText\"> &emsp; The blockchain is an incorruptible digital ledger of economic transactions\n                                            that can be programmed to record not just financial transactions but virtually everything of value.</p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"postAnswer\">\n                        <div class=\"PostAnsHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                            <div fxFlex>\n                                <div class=\"leftSide\">\n                                    <div class=\"postansuserinfo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <div fxFlex=\"45px\">\n                                            <img class=\"postansuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                        </div>\n                                        <div class=\"mt-10\" fxFlex>\n                                            <p class=\"postansusername\"> User Name </p>\n                                            <p class=\"postansfollowes\"> 20 followers </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div fxFlex=\"35%\">\n                                <div class=\"rightSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                        <div fxFlex>\n                                        </div>\n                                        <div class=\"text-right\" fxFlex=\"150px\">\n                                            <p class=\"postansaction\"> ... </p>\n                                            <p class=\"postansdate\"> 2 Months Ago </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"m-0\" style=\"border-color: #77778729;\">\n                        <div class=\"postAns\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n                            <div fxFlex>\n                                <p class=\"postAnsText\"> &emsp; The blockchain is an incorruptible digital ledger of economic transactions\n                                            that can be programmed to record not just financial transactions but virtually everything of value.</p>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"text-right\">\n                        <p class=\"readmore\">Read More...</p>\n                    </div>\n                </div>\n            </div>\n            <!-- Question Post END -->\n            <hr class=\"m-5\">\n            <!-- Question Post Share Like And More -->\n            <div class=\"postLikes\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div fxFlex class=\"text-left\">\n                    <div class=\"like\"> <i class=\"material-icons\">star_border</i> <p class=\"count\"> 300 </p> </div>\n                </div>\n                <div fxFlex class=\"text-center\" >\n                    <div class=\"chat\" (click)=\"clicked = !clicked\"> <i class=\"material-icons\">chat</i> <p class=\"count\"> 200 </p> </div>\n                </div>\n                <div fxFlex class=\"text-right\">\n                    <div class=\"share\"> <i class=\"material-icons\">share</i> <p class=\"count\"> 100 </p> </div>\n                </div>\n            </div>\n            <!-- Question Post Share Like And More  END-->\n            <hr class=\"m-5\">\n            <!-- Question Post Share Like And More -->\n            <div class=\"postchat\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div fxFlex=\"60px\" class=\"text-left\">\n                    <div class=\"chatUserImg text-center\"> <img src=\"assets/images/icons/user.png\" alt=\"\"> </div>\n                </div>\n                <div fxFlex class=\"text-center\" >\n                    <div class=\"chatInput\"> <input type=\"text\" placeholder=\"Post Your Commend...\"> </div>\n                </div>\n                <div fxFlex=\"70px\" class=\"text-right\">\n                    <div class=\"chatsend text-center\"> <i class=\"material-icons\">send</i> </div>\n                </div>\n            </div>\n            <!-- Question Post Share Like And More  END-->\n\n\n            <!-- Question Post Comments -->\n            <div *ngIf=\"clicked\" class=\"Comments\">\n                <div class=\"commentPost\">\n                    <div class=\"commentinfo\">\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                            <div fxFlex>\n                                <div class=\"leftSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <div fxFlex=\"45px\">\n                                            <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                        </div>\n                                        <div class=\"mt-10\" fxFlex>\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div fxFlex=\"25%\">\n                                <div class=\"rightSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                        <div class=\"text-right\" fxFlex>\n                                            <p class=\"postaction\"> ... </p>\n                                            <p class=\"postdate\"> 2 Months Ago </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr class=\"m-0\">\n                    <div class=\"commentbody\">\n                        <p class=\"commenttext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\n                    </div> \n                </div>\n                <div class=\"commentPost\">\n                    <div class=\"commentinfo\">\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                            <div fxFlex>\n                                <div class=\"leftSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <div fxFlex=\"45px\">\n                                            <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                        </div>\n                                        <div class=\"mt-10\" fxFlex>\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div fxFlex=\"25%\">\n                                <div class=\"rightSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                        <div class=\"text-right\" fxFlex>\n                                            <p class=\"postaction\"> ... </p>\n                                            <p class=\"postdate\"> 2 Months Ago </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr class=\"m-0\">\n                    <div class=\"commentbody\">\n                        <p class=\"commenttext\"> Lorem ipsum dolor</p>\n                    </div> \n                </div>\n            </div>\n            <!-- Question Post Comments END-->\n\n\n        </div>\n        <!-- Question Post Div END -->\n\n\n\n\n\n\n\n\n\n\n\n        <!-- Question Post Div -->\n        <div class=\"QuestionPost mt-15\">\n            <!-- Question Post Info Header Div -->\n            <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                <div fxFlex>\n                    <div class=\"leftSide\">\n                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <div fxFlex=\"60px\">\n                                <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                            </div>\n                            <div class=\"mt-10\" fxFlex>\n                                <p class=\"postusername\"> User Name </p>\n                                <p class=\"postusercategory\"> Invester &nbsp; | &nbsp; Software De... </p>\n                                <p class=\"postuserfollowers\"> 20 Followers </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div fxFlex=\"35%\">\n                    <div class=\"rightSide\">\n                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                            <div fxFlex class=\"text-right\">\n                                <img class=\"postcategoryicon\" src=\"assets/images/icons/caticon1.png\" alt=\"\">\n                            </div>\n                            <div class=\"text-right\" fxFlex=\"150px\">\n                                <p class=\"postaction\"> ... </p>\n                                <p class=\"postdate\"> 2 Months Ago </p>\n                                <p class=\"posttopic\"> Topic Name </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Question Post Info Header Div End -->\n            <hr class=\"m-5\">\n            <!-- Question Post -->\n            <div class=\"postmain\" fxLayout=\"row\">\n                  <div fxFlex class=\"text-left\">\n                      <h5 class=\"postquestion\"> What is Blockchain Technology?  </h5>\n                      <div class=\"postAnswer\">\n                          <div class=\"PostAnsHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                              <div fxFlex>\n                                  <div class=\"leftSide\">\n                                      <div class=\"postansuserinfo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                          <div fxFlex=\"45px\">\n                                              <img class=\"postansuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                          </div>\n                                          <div class=\"mt-10\" fxFlex>\n                                              <p class=\"postansusername\"> User Name </p>\n                                              <p class=\"postansfollowes\"> 20 followers </p>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div fxFlex=\"35%\">\n                                  <div class=\"rightSide\">\n                                      <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                          <div fxFlex>\n                                          </div>\n                                          <div class=\"text-right\" fxFlex=\"150px\">\n                                              <p class=\"postansaction\"> ... </p>\n                                              <p class=\"postansdate\"> 2 Months Ago </p>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                          <hr class=\"m-0\" style=\"border-color: #77778729;\">\n                          <div class=\"postAns\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n                              <div fxFlex>\n                                  <p class=\"postAnsText\"> &emsp; The blockchain is an incorruptible digital ledger of economic transactions\n                                              that can be programmed to record not just financial transactions but virtually everything of value.</p>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          <!-- Question Post END -->\n          <hr class=\"m-5\">\n          <!-- Question Post Share Like And More -->\n          <div class=\"postLikes\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n              <div fxFlex class=\"text-left\">\n                  <div class=\"like\"> <i class=\"material-icons\">star_border</i> <p class=\"count\"> 300 </p> </div>\n              </div>\n              <div fxFlex class=\"text-center\" >\n                  <div class=\"chat\" (click)=\"clicked2 = !clicked2\"> <i class=\"material-icons\">chat</i> <p class=\"count\"> 200 </p> </div>\n              </div>\n              <div fxFlex class=\"text-right\">\n                  <div class=\"share\"> <i class=\"material-icons\">share</i> <p class=\"count\"> 100 </p> </div>\n              </div>\n          </div>\n          <!-- Question Post Share Like And More  END-->\n          <hr class=\"m-5\">\n          <!-- Question Post Share Like And More -->\n          <div class=\"postchat\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n              <div fxFlex=\"60px\" class=\"text-left\">\n                  <div class=\"chatUserImg text-center\"> <img src=\"assets/images/icons/user.png\" alt=\"\"> </div>\n              </div>\n              <div fxFlex class=\"text-center\" >\n                  <div class=\"chatInput\"> <input type=\"text\" placeholder=\"Post Your Commend...\"> </div>\n              </div>\n              <div fxFlex=\"70px\" class=\"text-right\">\n                  <div class=\"chatsend text-center\"> <i class=\"material-icons\">send</i> </div>\n              </div>\n          </div>\n          <!-- Question Post Share Like And More  END-->\n\n\n            <!-- Question Post Comments -->\n            <div *ngIf=\"clicked2\" class=\"Comments\">\n                <div class=\"commentPost\">\n                    <div class=\"commentinfo\">\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                            <div fxFlex>\n                                <div class=\"leftSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <div fxFlex=\"45px\">\n                                            <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                        </div>\n                                        <div class=\"mt-10\" fxFlex>\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div fxFlex=\"25%\">\n                                <div class=\"rightSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                        <div class=\"text-right\" fxFlex>\n                                            <p class=\"postaction\"> ... </p>\n                                            <p class=\"postdate\"> 2 Months Ago </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr class=\"m-0\">\n                    <div class=\"commentbody\">\n                        <p class=\"commenttext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\n                    </div> \n                </div>\n                <div class=\"commentPost\">\n                    <div class=\"commentinfo\">\n                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                            <div fxFlex>\n                                <div class=\"leftSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <div fxFlex=\"45px\">\n                                            <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                        </div>\n                                        <div class=\"mt-10\" fxFlex>\n                                            <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                            <p class=\"postuserfollowers\"> 20 Followers </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div fxFlex=\"25%\">\n                                <div class=\"rightSide\">\n                                    <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                        <div class=\"text-right\" fxFlex>\n                                            <p class=\"postaction\"> ... </p>\n                                            <p class=\"postdate\"> 2 Months Ago </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr class=\"m-0\">\n                    <div class=\"commentbody\">\n                        <p class=\"commenttext\"> Lorem ipsum dolor</p>\n                    </div> \n                </div>\n            </div>\n            <!-- Question Post Comments END-->\n\n        </div>\n        <!-- Question Post Div END -->\n\n\n\n\n\n\n\n\n\n\n\n\n  </p-scrollPanel>\n</div>"

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
exports.push([module.i, "\n.feedsRightBar .userdiv{\n    background-color: #e9eef3;\n    margin: 7px;\n    padding: 7px;\n}\n\n.feedsRightBar .userimg{\n    width: 95px;\n    height: 95px;\n    border-radius: 100px;\n}\n.feedsRightBar .username{\n    font-size: 17px;\n    font-weight: 700;\n    color: #777777;\n    margin: 0px;\n    letter-spacing: 0.5px;\n}\n.feedsRightBar .userfollowers{\n    font-size: 13px;\n    font-weight: 600;\n    color: #999999;\n    margin: 0px;\n    line-height: 20px;\n}\n.feedsRightBar .userfollowing{\n    font-size: 13px;\n    font-weight: 600;\n    color: #999999;\n    margin: 0px;\n    line-height: 20px;\n}\n\n\n.feedsRightBar .headerstyle{\n    text-align: left;\n    font-size: 15px;\n    padding: 4px 10px;\n    font-weight: 600;\n    background-color: #e9eef3;\n    margin-bottom: 10px;\n    color: #9c9a9a;\n}\n\n\n\n\n\n\n.feedsRightBar .followPart{\n    height: 65px;\n    text-align: center;\n    padding-left: 0px;\n}\n.feedsRightBar .followimg{\n    width: 45px;\n    height: 45px;\n    margin: 0px 10px;\n    /* background-color: #66666630; */\n    padding: 3px;\n    /* border-radius: 55px; */\n}\n\n.feedsRightBar .followname{\n    font-size: 11px;\n    margin: 0px;\n    font-weight: 700;\n    letter-spacing: 0.2px;\n    color: #666666;\n}\n\n\n\n.feedsRightBar .moreusers{\n    font-size: 13px;\n    margin: 0px;\n    font-weight: 600;\n    letter-spacing: 0.3px;\n    cursor: pointer;\n    line-height: 30px;\n    color: #999999;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-right-bar/feeds-right-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feedsRightBar\">\n\n    <!-- UserDetails -->\n    <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n        <div fxFlex=\"100px\" class=\"text-center\">\n            <img class=\"userimg\" src=\"assets/images/sample/img7.jpg\" alt=\"\">\n        </div>\n        <div fxFlex style=\"margin: 10px 0px 0px 10px;\">\n            <p class=\"username\"> User Name </p>\n            <p class=\"userfollowers\"> 100 Followers </p>\n            <p class=\"userfollowing\"> 200 Following </p>\n        </div>\n    </div>\n    <!-- UserDetails End -->\n\n    <!-- <hr class=\"mt-5 mb-5\"> -->\n\n    <!-- Followers -->\n    <div class=\"row mr-0\">\n      <div class=\"col-sm-12\">\n          <p class=\"headerstyle\"> Followers ( 200 ) </p>\n      </div>\n      <div class=\"col-sm-12\">\n          <div class=\"col-sm-3 followPart \">\n              <img class=\"followimg\" src=\"assets/images/coins/coin1.png\" alt=\"\">\n              <p class=\"followname\"> User Na... </p>\n          </div>\n          <div class=\"col-sm-3 followPart\">\n              <img class=\"followimg\" src=\"assets/images/coins/coin2.png\" alt=\"\">\n              <p class=\"followname\"> User Na... </p>\n          </div>\n          <div class=\"col-sm-3 followPart \">\n              <img class=\"followimg\" src=\"assets/images/coins/coin3.png\" alt=\"\">\n              <p class=\"followname\"> User Na...</p>\n          </div>\n          <div class=\"col-sm-3 followPart \">\n              <img class=\"followimg\" src=\"assets/images/coins/coin4.png\" alt=\"\">\n              <p class=\"followname\"> User Na... </p>\n          </div>\n      </div>\n      <div class=\"col-sm-12 text-right\">\n          <p class=\"moreusers\"> More Followers...</p>\n      </div>\n    </div>\n\n    <!-- Followers End  -->\n\n\n    <!-- Followers -->\n    <div class=\"row mr-0\">\n      <div class=\"col-sm-12\">\n          <p class=\"headerstyle\"> Following People ( 200 ) </p>\n      </div>\n      <div class=\"col-sm-12\">\n          <div class=\"col-sm-3 followPart \">\n              <img class=\"followimg\" src=\"assets/images/coins/coin5.png\" alt=\"\">\n              <p class=\"followname\"> User Na... </p>\n          </div>\n          <div class=\"col-sm-3 followPart\">\n              <img class=\"followimg\" src=\"assets/images/coins/coin6.png\" alt=\"\">\n              <p class=\"followname\"> User Na... </p>\n          </div>\n          <div class=\"col-sm-3 followPart \">\n              <img class=\"followimg\" src=\"assets/images/coins/coin7.png\" alt=\"\">\n              <p class=\"followname\"> User Na...</p>\n          </div>\n          <div class=\"col-sm-3 followPart \">\n              <img class=\"followimg\" src=\"assets/images/coins/coin8.png\" alt=\"\">\n              <p class=\"followname\"> User Na... </p>\n          </div>\n      </div>\n      <div class=\"col-sm-12 text-right\">\n          <p class=\"moreusers\"> More Peoples...</p>\n      </div>\n    </div>\n    \n    <!-- Followers End  -->\n\n\n\n    <!-- Followers -->\n    <div class=\"row mr-0\">\n      <div class=\"col-sm-12\">\n          <p class=\"headerstyle\"> Following Topics ( 200 ) </p>\n      </div>\n      <div class=\"col-sm-12\">\n          <div class=\"col-sm-3 followPart \">\n              <img class=\"followimg\" src=\"assets/images/coins/coin9.png\" alt=\"\">\n              <p class=\"followname\"> User Na... </p>\n          </div>\n          <div class=\"col-sm-3 followPart\">\n              <img class=\"followimg\" src=\"assets/images/coins/coin1.png\" alt=\"\">\n              <p class=\"followname\"> User Na... </p>\n          </div>\n          <div class=\"col-sm-3 followPart \">\n              <img class=\"followimg\" src=\"assets/images/coins/coin2.png\" alt=\"\">\n              <p class=\"followname\"> User Na...</p>\n          </div>\n          <div class=\"col-sm-3 followPart \">\n              <img class=\"followimg\" src=\"assets/images/coins/coin3.png\" alt=\"\">\n              <p class=\"followname\"> User Na... </p>\n          </div>\n      </div>\n      <div class=\"col-sm-12 text-right\">\n          <p class=\"moreusers\"> More Topics...</p>\n      </div>\n    </div>\n    \n    <!-- Followers End  -->\n\n</div>\n"

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
exports.push([module.i, "\n.scrolldiv{\n    overflow-Y: auto;\n    overflow-x: hidden;\n}\n\n.Trends{\n    background-color:#ffffff;\n    box-shadow: 0px 0px 5px 1px #607d8b63;\n    margin: 3px;\n}\n\n.Trends  .coinlistImg{\n    width: 40px;\n    height: 40px;\n    border-radius: 40px;\n}\n.Trends .coinlistname{\n    font-size: 15px;\n    font-weight: 600;\n    color: #666666ab;\n    letter-spacing: 0.4px;\n    margin: 0px;\n}\n\n.Trends .coinlistamt{\n    font-size: 14px;\n    color: darkgray;\n}\n.Trends .coinlistitem{\n    height: 50px;\n    margin: 7px 0px 7px 7px;\n    background-color: #e2e2e275;\n    padding: 3px;\n    border: 1px solid #e2e2e2bd;\n}\n\n\n.Trends .tabStyleTwo{\n    margin-left: 10px;\n    margin-top: 7px;\n    margin-right: 5px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.Trends .impression .headerPost{\n    background-color: #f2f2f2;\n    margin: 0px 10px 10px 10px;\n}\n.Trends .impression .headerPost .leftArea{    \n    text-align: center;\n    line-height: 35px;\n    font-size: 16px;\n    font-weight: 500;\n    color: #9c9a9a;\n}\n.Trends .impression .headerPost .leftArea i{    \n    font-size: 19px;\n    padding: 0px 10px;\n}\n\n.Trends .impressionPost{\n    background-color: #e9eef378;\n    box-shadow: 0px 0px 3px 1px #607d8b63;\n    margin:4px 4px 15px 4px;\n    padding: 4px;\n}\n\n.Trends .impressionPost .impressionbody .impressiontext{\n    font-size: 15px;\n    color: gray;\n    margin: 2px 10px;\n    word-spacing: 2.5px;\n    line-height: 20px;\n}\n.Trends .impressionPost .PostHeader{\n    padding: 0px 2px;\n}\n.Trends .impressionPost .leftSide .postuserImg{\n    height: 35px;\n    width: 35px;\n    border-radius: 35px;\n}\n.Trends .impressionPost .leftSide .postusername{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 13px;\n    font-weight: 600;\n    color: #827f7f;\n    letter-spacing: 0.5px;\n}\n.Trends .impressionPost .leftSide .postusercategory{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 12px;\n    color: #9c9a9a;\n}\n.Trends .impressionPost .leftSide .postuserfollowers{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 12px;\n    color: #9c9a9a;\n}\n\n.Trends .impressionPost .rightSide .postaction{\n    line-height: 10px;\n    font-size: 24px;\n    margin: 0px;\n    color: gray;\n}\n.Trends .impressionPost .rightSide .postdate{\n    margin: 0px;\n    line-height: 18px;\n    margin-top: 5px;\n    color: #9c9a9a;\n    font-size: 11px;\n    letter-spacing: 0.4px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeds/feeds-trends/feeds-trends.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Trends\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n      <div fxFlex=\"30%\">\n        <p-scrollPanel  [style]=\"{width: '100%', height: scrollHeight }\" styleClass=\"customscroll_1\">\n\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"45px\">\n                    <img class=\"coinlistImg\" src=\"assets/images/coins/coin1.png\" alt=\"\">\n                </div>\n                <div class=\"mt-10\" fxFlex>\n                    <p class=\"coinlistname\"> Currency Name </p>\n                    <p class=\"coinlistamt\"> $ 100000 </p>\n                </div>\n            </div>\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"45px\">\n                    <img class=\"coinlistImg\" src=\"assets/images/coins/coin2.png\" alt=\"\">\n                </div>\n                <div class=\"mt-10\" fxFlex>\n                    <p class=\"coinlistname\"> Currency Name </p>\n                    <p class=\"coinlistamt\"> $ 100000 </p>\n                </div>\n            </div>\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"45px\">\n                    <img class=\"coinlistImg\" src=\"assets/images/coins/coin3.png\" alt=\"\">\n                </div>\n                <div class=\"mt-10\" fxFlex>\n                    <p class=\"coinlistname\"> Currency Name </p>\n                    <p class=\"coinlistamt\"> $ 100000 </p>\n                </div>\n            </div>\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"45px\">\n                    <img class=\"coinlistImg\" src=\"assets/images/coins/coin4.png\" alt=\"\">\n                </div>\n                <div class=\"mt-10\" fxFlex>\n                    <p class=\"coinlistname\"> Currency Name </p>\n                    <p class=\"coinlistamt\"> $ 100000 </p>\n                </div>\n            </div>\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"45px\">\n                    <img class=\"coinlistImg\" src=\"assets/images/coins/coin5.png\" alt=\"\">\n                </div>\n                <div class=\"mt-10\" fxFlex>\n                    <p class=\"coinlistname\"> Currency Name </p>\n                    <p class=\"coinlistamt\"> $ 100000 </p>\n                </div>\n            </div>\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"45px\">\n                    <img class=\"coinlistImg\" src=\"assets/images/coins/coin6.png\" alt=\"\">\n                </div>\n                <div class=\"mt-10\" fxFlex>\n                    <p class=\"coinlistname\"> Currency Name </p>\n                    <p class=\"coinlistamt\"> $ 100000 </p>\n                </div>\n            </div>\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"45px\">\n                    <img class=\"coinlistImg\" src=\"assets/images/coins/coin1.png\" alt=\"\">\n                </div>\n                <div class=\"mt-10\" fxFlex>\n                    <p class=\"coinlistname\"> Currency Name </p>\n                    <p class=\"coinlistamt\"> $ 100000 </p>\n                </div>\n            </div>\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"45px\">\n                    <img class=\"coinlistImg\" src=\"assets/images/coins/coin2.png\" alt=\"\">\n                </div>\n                <div class=\"mt-10\" fxFlex>\n                    <p class=\"coinlistname\"> Currency Name </p>\n                    <p class=\"coinlistamt\"> $ 100000 </p>\n                </div>\n            </div>\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"45px\">\n                    <img class=\"coinlistImg\" src=\"assets/images/coins/coin3.png\" alt=\"\">\n                </div>\n                <div class=\"mt-10\" fxFlex>\n                    <p class=\"coinlistname\"> Currency Name </p>\n                    <p class=\"coinlistamt\"> $ 100000 </p>\n                </div>\n            </div>\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"45px\">\n                    <img class=\"coinlistImg\" src=\"assets/images/coins/coin4.png\" alt=\"\">\n                </div>\n                <div class=\"mt-10\" fxFlex>\n                    <p class=\"coinlistname\"> Currency Name </p>\n                    <p class=\"coinlistamt\"> $ 100000 </p>\n                </div>\n            </div>\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"45px\">\n                    <img class=\"coinlistImg\" src=\"assets/images/coins/coin5.png\" alt=\"\">\n                </div>\n                <div class=\"mt-10\" fxFlex>\n                    <p class=\"coinlistname\"> Currency Name </p>\n                    <p class=\"coinlistamt\"> $ 100000 </p>\n                </div>\n            </div>\n            <div class=\"coinlistitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"45px\">\n                    <img class=\"coinlistImg\" src=\"assets/images/coins/coin6.png\" alt=\"\">\n                </div>\n                <div class=\"mt-10\" fxFlex>\n                    <p class=\"coinlistname\"> Currency Name </p>\n                    <p class=\"coinlistamt\"> $ 100000 </p>\n                </div>\n            </div>\n\n        </p-scrollPanel>\n    </div>\n    <div fxFlex=\"70%\">\n        <div class=\"tabStyleTwo\">\n            <p-tabView (onChange)=\"onTabChange($event)\">\n        \n                <p-tabPanel header=\"Charts & Trends\"  leftIcon=\"fa-line-chart\">\n                    <img src=\"assets/images/bitcoin_chart.png\" alt=\"\">\n                </p-tabPanel>\n        \n                <p-tabPanel header=\"Write impression\" leftIcon=\"fa-pencil\">\n\n                    <div class=\"impression\">\n\n                        <div class=\"headerPost\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                            <div fxFlex >\n                                <div class=\"leftArea\">\n                                        <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>  Write Impression\n                                </div>\n                            </div>\n                        </div>\n\n                        <p-scrollPanel style=\"width:100%;\"  [style]=\"{width: '100%', height: impresionsHeight }\" styleClass=\"customscroll_1\">\n                            <div class=\"impressionPost\">\n                                <div class=\"impressionbody\">\n                                    <p class=\"impressiontext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\n                                </div>\n                                <hr class=\"m-0\">\n                                <div class=\"impressioninfo\">\n                                        <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                                                <div fxFlex>\n                                                    <div class=\"leftSide\">\n                                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                                            <div fxFlex=\"45px\">\n                                                                <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                                            </div>\n                                                            <div class=\"mt-10\" fxFlex>\n                                                                <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                                                <p class=\"postuserfollowers\"> 20 Followers </p>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div fxFlex=\"25%\">\n                                                    <div class=\"rightSide\">\n                                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                                            <div class=\"text-right\" fxFlex>\n                                                                <p class=\"postaction\"> ... </p>\n                                                                <p class=\"postdate\"> 2 Months Ago </p>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                </div>\n                            </div>\n                            <div class=\"impressionPost\">\n                                <div class=\"impressionbody\">\n                                    <p class=\"impressiontext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\n                                </div>\n                                <hr class=\"m-0\">\n                                <div class=\"impressioninfo\">\n                                    <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                                        <div fxFlex>\n                                            <div class=\"leftSide\">\n                                                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                                    <div fxFlex=\"45px\">\n                                                        <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                                    </div>\n                                                    <div class=\"mt-10\" fxFlex>\n                                                        <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                                        <p class=\"postuserfollowers\"> 20 Followers </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div fxFlex=\"25%\">\n                                            <div class=\"rightSide\">\n                                                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                                    <div class=\"text-right\" fxFlex>\n                                                        <p class=\"postaction\"> ... </p>\n                                                        <p class=\"postdate\"> 2 Months Ago </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"impressionPost\">\n                                <div class=\"impressionbody\">\n                                    <p class=\"impressiontext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\n                                </div>\n                                <hr class=\"m-0\">\n                                <div class=\"impressioninfo\">\n                                    <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                                        <div fxFlex>\n                                            <div class=\"leftSide\">\n                                                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                                    <div fxFlex=\"45px\">\n                                                        <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                                    </div>\n                                                    <div class=\"mt-10\" fxFlex>\n                                                        <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                                        <p class=\"postuserfollowers\"> 20 Followers </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div fxFlex=\"25%\">\n                                            <div class=\"rightSide\">\n                                                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                                    <div class=\"text-right\" fxFlex>\n                                                        <p class=\"postaction\"> ... </p>\n                                                        <p class=\"postdate\"> 2 Months Ago </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"impressionPost\">\n                                <div class=\"impressionbody\">\n                                    <p class=\"impressiontext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\n                                </div>\n                                <hr class=\"m-0\">\n                                <div class=\"impressioninfo\">\n                                    <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                                        <div fxFlex>\n                                            <div class=\"leftSide\">\n                                                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                                    <div fxFlex=\"45px\">\n                                                        <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                                    </div>\n                                                    <div class=\"mt-10\" fxFlex>\n                                                        <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                                        <p class=\"postuserfollowers\"> 20 Followers </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div fxFlex=\"25%\">\n                                            <div class=\"rightSide\">\n                                                <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                                    <div class=\"text-right\" fxFlex>\n                                                        <p class=\"postaction\"> ... </p>\n                                                        <p class=\"postdate\"> 2 Months Ago </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </p-scrollPanel>\n                    </div>\n                        \n                </p-tabPanel>\n        \n            </p-tabView>\n        </div>\n    </div>\n  </div>\n</div>"

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
exports.push([module.i, ".postOne .postheader{\n   margin-left: -14px;\n   margin-top: -14px;\n}\n.postOne .userimg{\n    width: 45px;\n    height: 45px;\n    border-radius: 45px;\n}\n.postOne .posttype{\n    line-height: 45px;\n    font-size: 19px;\n    font-weight: 700;\n    color: #666666;\n    letter-spacing: 0.7px;\n}\n\n.postOne .posttext{\n    border-radius: 5px;\n    width: 100%;\n    min-height: 100px;\n    padding: 5px;\n    border-color: #dedede;\n    color: #a1a1a1;\n    font-weight: 600;\n    font-size: 14px;\n    letter-spacing: 0.7px;\n}\n\n.postOne .postaddon_icon i{\n    font-size: 30px;\n    color: #808080;\n}\n\n\n.postOne .cat-img-item img{\n    width: 40px;\n    height: 40px;\n}\n.postOne .cat-img-item span{\n    font-size: 12px;\n    font-weight: 600;\n}\n.postOne .cat-img-item{\n    width: 40px;\n    height: 40px;\n    text-align: center;\n    border-radius: 50px;\n    margin-right: 15px;\n    opacity: 0.6;\n}\n\n.postOne .cat-img-item.selected{\n    opacity: 1;\n}\n.postOne .cat-img-item.selected span{\n    color: #666666;\n    font-size: 13px;\n    font-weight: 700;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popups/post-one/post-one.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"postOne\">\n  <div class=\"postheader\" fxLayout=\"row\" fxLayoutAlign=\"start\" >\n    <div fxFlex=\"65px\" class=\"text-center\">\n      <img class=\"userimg\" src=\"assets/images/sample/img7.jpg\" alt=\"\">\n    </div>\n    <div fxFlex class=\"text-left\">\n      <h5 class=\"m-0 posttype\"> Write a Post </h5>\n    </div>\n    <div fxFlex class=\"text-left\">\n        <h5 class=\"m-0 posttype text-right\" >\n          <span style=\"cursor:pointer\" (click)=\"close()\"> X </span>\n        </h5>\n      </div>\n  </div>\n\n  <hr style=\"margin-top:10px;\">\n\n  <mat-dialog-content class=\"postbody\">\n\n    <textarea class=\"posttext\" placeholder=\"Write Something....\"></textarea>\n\n    <div class=\"postaddon mt-5\" fxLayout=\"row\" fxLayoutAlign=\"start\" >\n      <div fxFlex=\"50px\" class=\"text-center postaddon_icon\">\n          <i class=\"material-icons\">burst_mode</i>\n      </div>\n      <div fxFlex=\"50px\" class=\"text-center postaddon_icon\">\n          <i class=\"material-icons\" style=\"transform:rotate(90deg)\">local_movies</i>\n      </div>\n      <div fxFlex=\"50px\" class=\"text-center postaddon_icon\">\n          <i class=\"material-icons\">insert_link</i>\n      </div>\n    </div>\n\n\n    <div fxLayout fxLayoutAlign=\"space-between\">\n      <div fxFlex=\"85%\">\n          <div class=\"mt-10\" fxLayout fxLayoutAlign=\"start\">\n            <div class=\"cat-img-item selected\">\n              <img src=\"assets/images/category icons/Picture1.png\" alt=\"\">\n              <span> Story </span>\n            </div>\n            <div class=\"cat-img-item\">\n                <img src=\"assets/images/category icons/Picture2.png\" alt=\"\">\n              <span> News </span>\n            </div>\n            <div class=\"cat-img-item\">\n                <img src=\"assets/images/category icons/Picture3.png\" alt=\"\">\n              <span> Trend </span>\n            </div>\n            <div class=\"cat-img-item\">\n                <img src=\"assets/images/category icons/Picture4.png\" alt=\"\">\n              <span> Blog </span>\n            </div>\n            <div class=\"cat-img-item\">\n                <img src=\"assets/images/category icons/Picture5.png\" alt=\"\">\n              <span> Opinion </span>\n            </div>\n            <div class=\"cat-img-item\">\n                <img src=\"assets/images/category icons/Picture6.png\" alt=\"\">\n              <span> Idea </span>\n            </div>\n          </div>\n      </div>\n      <div fxFlex=\"15%\" style=\"line-height:75px;\">\n          <button type=\"button\" mat-raised-button (click)=\"close()\" color=\"primary\"> Post </button>\n      </div>\n    </div>\n\n  </mat-dialog-content>\n</div>"

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
exports.push([module.i, ".postTwo .postheader{\n    margin-left: -14px;\n    margin-top: -14px;\n }\n .postTwo .userimg{\n     width: 45px;\n     height: 45px;\n     border-radius: 45px;\n }\n .postTwo .posttype{\n     line-height: 45px;\n     font-size: 19px;\n     font-weight: 700;\n     color: #666666;\n     letter-spacing: 0.7px;\n }\n \n .postTwo .posttext{\n     border-radius: 5px;\n     width: 100%;\n     min-height: 100px;\n     padding: 5px;\n     border-color: #dedede;\n     color: #a1a1a1;\n     font-weight: 600;\n     font-size: 14px;\n     letter-spacing: 0.7px;\n }\n \n .postTwo .postaddon_icon i{\n     font-size: 30px;\n     color: #808080;\n }\n \n .postTwo .postinput{\n    border-radius: 3px;\n    width: 80%;\n    color: #a1a1a1;\n    font-weight: 600;\n    font-size: 13px;\n    letter-spacing: 0.7px;\n    outline-color: transparent;\n    border: 1px solid #dedede;\n    height: 35px;\n    padding: 0px 5px;\n }\n\n\n \n .postTwo .cat-img-item img{\n     width: 40px;\n     height: 40px;\n }\n .postTwo .cat-img-item span{\n     font-size: 12px;\n     font-weight: 600;\n }\n .postTwo .cat-img-item{\n     width: 40px;\n     height: 40px;\n     text-align: center;\n     border-radius: 50px;\n     margin-right: 15px;\n     opacity: 0.6;\n }\n \n .postTwo .cat-img-item.selected{\n     opacity: 1;\n }\n .postTwo .cat-img-item.selected span{\n     color: #666666;\n     font-size: 13px;\n     font-weight: 700;\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popups/post-two/post-two.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"postTwo\">\n    <div class=\"postheader\" fxLayout=\"row\" fxLayoutAlign=\"start\" >\n      <div fxFlex=\"65px\" class=\"text-center\">\n        <img class=\"userimg\" src=\"assets/images/sample/img7.jpg\" alt=\"\">\n      </div>\n      <div fxFlex class=\"text-left\">\n        <h5 class=\"m-0 posttype\"> Ask a Question </h5>\n      </div>\n      <div fxFlex class=\"text-left\">\n          <h5 class=\"m-0 posttype text-right\" >\n            <span style=\"cursor:pointer\" (click)=\"close()\"> X </span>\n          </h5>\n        </div>\n    </div>\n  \n    <hr style=\"margin-top:10px;\">\n  \n    <mat-dialog-content class=\"postbody\">\n  \n      <textarea class=\"posttext\" placeholder=\"Ask Your Question ...\"></textarea>\n  \n      <div class=\"postaddon mt-5\" fxLayout=\"row\" fxLayoutAlign=\"start\" >\n        <div fxFlex=\"50px\" class=\"text-center postaddon_icon\">\n            <i class=\"material-icons\">burst_mode</i>\n        </div>\n        <div fxFlex=\"50px\" class=\"text-center postaddon_icon\">\n            <i class=\"material-icons\" style=\"transform:rotate(90deg)\">local_movies</i>\n        </div>\n        <div fxFlex=\"50px\" class=\"text-center postaddon_icon\">\n            <i class=\"material-icons\">insert_link</i>\n        </div>\n      </div>\n  \n      <input class=\"postinput\" type=\"text\" placeholder=\"Which topic best suits this question (text box) or choose below \">\n  \n      <div fxLayout fxLayoutAlign=\"space-between\">\n        <div fxFlex=\"85%\">\n            <div class=\"mt-10\" fxLayout fxLayoutAlign=\"start\">\n              <div class=\"cat-img-item selected\">\n                <img src=\"assets/images/speaker.png\" alt=\"\">\n                <span> Story </span>\n              </div>\n              <div class=\"cat-img-item\">\n                  <img src=\"assets/images/investing.png\" alt=\"\">\n                <span> News </span>\n              </div>\n              <div class=\"cat-img-item\">\n                  <img src=\"assets/images/userpin.png\" alt=\"\">\n                <span> Trend </span>\n              </div>\n              <div class=\"cat-img-item\">\n                  <img src=\"assets/images/building.png\" alt=\"\">\n                <span> Blog </span>\n              </div>\n              <div class=\"cat-img-item\">\n                  <img src=\"assets/images/expert.png\" alt=\"\">\n                <span> Opinion </span>\n              </div>\n              <div class=\"cat-img-item\">\n                  <img src=\"assets/images/programmer.png\" alt=\"\">\n                <span> Idea </span>\n              </div>\n            </div>\n        </div>\n        <div fxFlex=\"15%\" style=\"line-height:75px;\">\n            <button type=\"button\" mat-raised-button (click)=\"close()\" color=\"primary\"> Post </button>\n        </div>\n      </div>\n  \n    </mat-dialog-content>\n  </div>"

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

module.exports = "<div class=\"feedsMain\">\n\n    <app-feeds-header></app-feeds-header>\n\n\n    <div class=\"feeds mt-20\">\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n            <div fxFlex=\"21%\" style=\"background-color:#ffffff; box-shadow:#66666678 0px 1px 8px 0px\">\n                <app-profile-left-bar></app-profile-left-bar>\n            </div>\n            <div fxFlex=\"72%\" >\n                <app-profile-right-bar></app-profile-right-bar>\n            </div>\n        </div> <!-- Feeds Flex LayOut -->\n\n    </div> <!-- feeds -->\n\n</div> <!-- feedsMain -->"

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
exports.push([module.i, ".followers{\n    background-color: #ffffff;\n    box-shadow: rgba(102, 102, 102, 0.47) 0px 1px 8px 0px;\n    padding: 5px;\n}\n\n.userdiv{\n    background-color: #e9eef3;\n    padding: 5px;\n    margin: 8px;\n    box-shadow: rgba(0, 0, 0, 0.36) 2px 2px 2px 0px;\n    min-height: 100px;\n}\n\n.userimg{\n    width: 80px;\n    height: 80px;\n    border-radius: 100px;\n}\n.username{\n    font-size: 17px;\n    font-weight: 700;\n    color: #777777;\n    margin: 0px;\n    letter-spacing: 0.5px;\n}\n.userfollowers{\n    font-size: 13px;\n    font-weight: 600;\n    color: #999999;\n    margin: 0px;\n    line-height: 20px;\n}\n.userfollowing{\n    font-size: 13px;\n    font-weight: 600;\n    color: #999999;\n    margin: 0px;\n    line-height: 20px;\n}\n.Action{\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    height: 30px;\n    width: 30px;\n    text-align: center;\n    color: #6666664d;\n    cursor: pointer;\n}\n.Action i{\n    line-height: 30px;\n\n}\n\n\n.arrow{\n    height: 17px;\n    width: 30px;\n    position: absolute;\n    background-color: white;\n    z-index: -1;\n    -webkit-transform: rotate(45DEG);\n            transform: rotate(45DEG);\n    left: 5px;\n    top: -1px;\n}\n.followuserdd_icon{\n    text-align: center;\n}\n.followuserdd_icon i{\n    font-size: 28px;\n    margin-top: 4px;\n    color: #666666b3;\n}\n.followuserdd_text{\n    font-size: 15px;\n    margin: 0px;\n    line-height: 35px;\n    width: 175px;\n    font-weight: 700;\n    color: #666666b3;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile-followers/profile-followers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"followers\">\n  <div class=\"row m-0\">\n    <div class=\"col-sm-4 p-0\">\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n        <div fxFlex=\"85px\" class=\"text-center\">\n            <img class=\"userimg\" src=\"assets/images/sample/img1.jpg\" alt=\"\">\n        </div>\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n            <p class=\"username\"> User Name </p>\n            <p class=\"userfollowers\"> 100 Followers </p>\n            <p class=\"userfollowing\"> 200 Following </p>\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4 p-0\">\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n        <div fxFlex=\"85px\" class=\"text-center\">\n            <img class=\"userimg\" src=\"assets/images/sample/img2.jpg\" alt=\"\">\n        </div>\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n            <p class=\"username\"> User Name </p>\n            <p class=\"userfollowers\"> 100 Followers </p>\n            <p class=\"userfollowing\"> 200 Following </p>\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4 p-0\">\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n        <div fxFlex=\"85px\" class=\"text-center\">\n            <img class=\"userimg\" src=\"assets/images/sample/img3.jpg\" alt=\"\">\n        </div>\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n            <p class=\"username\"> User Name </p>\n            <p class=\"userfollowers\"> 100 Followers </p>\n            <p class=\"userfollowing\"> 200 Following </p>\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4 p-0\">\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n        <div fxFlex=\"85px\" class=\"text-center\">\n            <img class=\"userimg\" src=\"assets/images/sample/img4.jpg\" alt=\"\">\n        </div>\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n            <p class=\"username\"> User Name </p>\n            <p class=\"userfollowers\"> 100 Followers </p>\n            <p class=\"userfollowing\"> 200 Following </p>\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4 p-0\">\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n        <div fxFlex=\"85px\" class=\"text-center\">\n            <img class=\"userimg\" src=\"assets/images/sample/img5.jpg\" alt=\"\">\n        </div>\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n            <p class=\"username\"> User Name </p>\n            <p class=\"userfollowers\"> 100 Followers </p>\n            <p class=\"userfollowing\"> 200 Following </p>\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4 p-0\">\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n        <div fxFlex=\"85px\" class=\"text-center\">\n            <img class=\"userimg\" src=\"assets/images/sample/img6.jpg\" alt=\"\">\n        </div>\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n            <p class=\"username\"> User Name </p>\n            <p class=\"userfollowers\"> 100 Followers </p>\n            <p class=\"userfollowing\"> 200 Following </p>\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4 p-0\">\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n        <div fxFlex=\"85px\" class=\"text-center\">\n            <img class=\"userimg\" src=\"assets/images/sample/img7.jpg\" alt=\"\">\n        </div>\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n            <p class=\"username\"> User Name </p>\n            <p class=\"userfollowers\"> 100 Followers </p>\n            <p class=\"userfollowing\"> 200 Following </p>\n            <div class=\"Action\"  [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4 p-0\">\n      <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n        <div fxFlex=\"85px\" class=\"text-center\">\n            <img class=\"userimg\" src=\"assets/images/sample/img1.jpg\" alt=\"\">\n        </div>\n        <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n            <p class=\"username\"> User Name </p>\n            <p class=\"userfollowers\"> 100 Followers </p>\n            <p class=\"userfollowing\"> 200 Following </p>\n            <div class=\"Action\" [matMenuTriggerFor]=\"followersAction\"><i class=\"material-icons\">more_horiz</i></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n<mat-menu #followersAction=\"matMenu\" yPosition=\"below\" xPosition=\"after\" [overlapTrigger]=\"false\" class=\"followersAction\" >\n  <div class=\"arrow\"></div>\n  <div class=\"followuserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div class=\"followuserdd_icon\" fxFlex=\"40px\">\n      <i class=\"material-icons\">remove_circle_outline</i>\n    </div>\n    <div fxFlex>\n        <p class=\"followuserdd_text\"> Un Follow </p>\n    </div>\n  </div>\n  <div class=\"userdropdarrow\"></div>\n  <hr class=\"m-0\">\n  <div class=\"followuserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\n      <div class=\"followuserdd_icon\" fxFlex=\"40px\">\n        <i class=\"material-icons\">do_not_disturb</i>\n      </div>\n      <div fxFlex>\n          <p class=\"followuserdd_text\">Do Not Show User </p>\n      </div>\n  </div>\n  <hr class=\"m-0\">\n  <div class=\"followuserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\n      <div class=\"followuserdd_icon\" fxFlex=\"40px\">\n        <i class=\"material-icons\">speaker_notes_off</i>\n      </div>\n      <div fxFlex>\n          <p class=\"followuserdd_text\"> Do Not Show User Posts </p>\n      </div>\n  </div>\n  <hr class=\"m-0\">\n  <div class=\"followuserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\n    <div class=\"followuserdd_icon\" fxFlex=\"40px\">\n      <i class=\"material-icons\">report</i>\n    </div>\n    <div fxFlex>\n        <p class=\"followuserdd_text\"> Report User To Admin </p>\n    </div>\n</div>\n</mat-menu>\n"

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
exports.push([module.i, ".followingPeople{\n    background-color: #ffffff;\n    box-shadow: rgba(102, 102, 102, 0.47) 0px 1px 8px 0px;\n    padding: 5px;\n}\n\n.followingPeople .userdiv{\n    background-color: #e9eef3;\n    padding: 5px;\n    margin: 8px;\n    box-shadow: rgba(0, 0, 0, 0.36) 2px 2px 2px 0px;\n    min-height: 100px;\n}\n\n.followingPeople .userimg{\n    width: 80px;\n    height: 80px;\n    border-radius: 100px;\n}\n.followingPeople .username{\n    font-size: 17px;\n    font-weight: 700;\n    color: #777777;\n    margin: 0px;\n    letter-spacing: 0.5px;\n}\n.followingPeople .userfollowers{\n    font-size: 13px;\n    font-weight: 600;\n    color: #999999;\n    margin: 0px;\n    line-height: 20px;\n}\n.followingPeople .userfollowing{\n    font-size: 13px;\n    font-weight: 600;\n    color: #999999;\n    margin: 0px;\n    line-height: 20px;\n}\n.followingPeople .Action{\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    height: 30px;\n    width: 30px;\n    text-align: center;\n    color: #6666664d;\n    cursor: pointer;\n}\n.followingPeople .Action i{\n    line-height: 30px;\n\n}\n\n.folloewinguserdd_icon{\n    text-align: center;\n}\n.folloewinguserdd_icon i{\n    font-size: 28px;\n    margin-top: 4px;\n    color: #666666b3;\n}\n.folloewinguserdd_text{\n    font-size: 15px;\n    margin: 0px;\n    line-height: 35px;\n    width: 175px;\n    font-weight: 700;\n    color: #666666b3;\n}\n\n\n.arrow{\n    height: 17px;\n    width: 30px;\n    position: absolute;\n    background-color: white;\n    z-index: -1;\n    -webkit-transform: rotate(45DEG);\n            transform: rotate(45DEG);\n    left: 5px;\n    top: -1px;\n}\n.folloewingtopicdd_icon{\n    text-align: center;\n}\n.folloewingtopicdd_icon i{\n    font-size: 28px;\n    margin-top: 4px;\n    color: #666666b3;\n}\n.folloewingtopicdd_text{\n    font-size: 15px;\n    margin: 0px;\n    line-height: 35px;\n    width: 175px;\n    font-weight: 700;\n    color: #666666b3;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.followingTopics{\n    background-color: #ffffff;\n    box-shadow: rgba(102, 102, 102, 0.47) 0px 1px 8px 0px;\n    padding: 5px;\n}\n.followingTopics .userdiv{\n    background-color: #e9eef3;\n    padding: 5px;\n    margin: 8px;\n    box-shadow: rgba(0, 0, 0, 0.36) 2px 2px 2px 0px;\n    min-height: 100px;\n}\n\n.followingTopics .userimg{\n    width: 80px;\n    height: 80px;\n    border-radius: 100px;\n}\n.followingTopics .username{\n    font-size: 17px;\n    font-weight: 700;\n    color: #777777;\n    margin: 0px;\n    letter-spacing: 0.5px;\n}\n.followingTopics .userfollowers{\n    font-size: 13px;\n    font-weight: 600;\n    color: #999999;\n    margin: 0px;\n    line-height: 20px;\n}\n.followingTopics .userfollowing{\n    font-size: 13px;\n    font-weight: 600;\n    color: #999999;\n    margin: 0px;\n    line-height: 20px;\n}\n.followingTopics .Action{\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    height: 30px;\n    width: 30px;\n    text-align: center;\n    color: #6666664d;\n    cursor: pointer;\n}\n.followingTopics .Action i{\n    line-height: 30px;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile-following/profile-following.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabStyleTwo\" style=\"padding:0px 10px;\">\n  <p-tabView (onChange)=\"onTabChange($event)\">\n\n\n\n\n\n\n      <p-tabPanel header=\"Following People\"  >\n        <div class=\"followingPeople\">\n          <div class=\"row m-0\">\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/sample/img1.jpg\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> User Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/sample/img2.jpg\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> User Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/sample/img3.jpg\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> User Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/sample/img4.jpg\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> User Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/sample/img5.jpg\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> User Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/sample/img6.jpg\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> User Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/sample/img7.jpg\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> User Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/sample/img1.jpg\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> User Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </p-tabPanel>\n\n\n\n\n\n\n\n\n\n\n\n      <p-tabPanel header=\"Following Topics\" >\n        <div class=\"followingTopics\">\n          <div class=\"row m-0\">\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/coins/coin1.png\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> Topic Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/coins/coin2.png\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> Topic Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/coins/coin3.png\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> Topic Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/coins/coin4.png\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> Topic Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/coins/coin5.png\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> Topic Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/coins/coin6.png\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> Topic Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/coins/coin7.png\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> Topic Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 p-0\">\n              <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n                <div fxFlex=\"85px\" class=\"text-center\">\n                    <img class=\"userimg\" src=\"assets/images/coins/coin8.png\" alt=\"\">\n                </div>\n                <div fxFlex style=\"margin: 10px 0px 0px 5px;\">\n                    <p class=\"username\"> Topic Name </p>\n                    <p class=\"userfollowers\"> 100 Followers </p>\n                    <p class=\"userfollowing\"> 200 Following </p>\n                    <div class=\"Action\" [matMenuTriggerFor]=\"followingTopicAction\"><i class=\"material-icons\">more_horiz</i></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </p-tabPanel>\n\n  </p-tabView>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<mat-menu #followingAction=\"matMenu\" yPosition=\"below\" xPosition=\"after\" [overlapTrigger]=\"false\" class=\"followingAction\" >\n    <div class=\"arrow\"></div>\n  <div class=\"folloewinguserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div class=\"folloewinguserdd_icon\" fxFlex=\"40px\">\n      <i class=\"material-icons\">remove_circle_outline</i>\n    </div>\n    <div fxFlex>\n        <p class=\"folloewinguserdd_text\"> Un Follow </p>\n    </div>\n  </div>\n  <div class=\"userdropdarrow\"></div>\n  <hr class=\"m-0\">\n  <div class=\"folloewinguserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\n      <div class=\"folloewinguserdd_icon\" fxFlex=\"40px\">\n        <i class=\"material-icons\">do_not_disturb</i>\n      </div>\n      <div fxFlex>\n          <p class=\"folloewinguserdd_text\">Do Not Show User </p>\n      </div>\n  </div>\n  <hr class=\"m-0\">\n  <div class=\"folloewinguserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\n      <div class=\"folloewinguserdd_icon\" fxFlex=\"40px\">\n        <i class=\"material-icons\">speaker_notes_off</i>\n      </div>\n      <div fxFlex>\n          <p class=\"folloewinguserdd_text\"> Do Not Show User Posts </p>\n      </div>\n  </div>\n  <hr class=\"m-0\">\n  <div class=\"folloewinguserdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\n    <div class=\"folloewinguserdd_icon\" fxFlex=\"40px\">\n      <i class=\"material-icons\">report</i>\n    </div>\n    <div fxFlex>\n        <p class=\"folloewinguserdd_text\"> Report User To Admin </p>\n    </div>\n</div>\n</mat-menu>\n\n\n\n\n\n\n\n\n\n\n\n\n<mat-menu #followingTopicAction=\"matMenu\" yPosition=\"below\" xPosition=\"after\" [overlapTrigger]=\"false\" class=\"followingTopicAction\" >\n    <div class=\"arrow\"></div>\n  <div class=\"folloewingtopicdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div class=\"folloewingtopicdd_icon\" fxFlex=\"40px\">\n      <i class=\"material-icons\">remove_circle_outline</i>\n    </div>\n    <div fxFlex>\n        <p class=\"folloewingtopicdd_text\"> Un Follow Topic </p>\n    </div>\n  </div>\n  <div class=\"userdropdarrow\"></div>\n  <hr class=\"m-0\">\n  <div class=\"folloewingtopicdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\n      <div class=\"folloewingtopicdd_icon\" fxFlex=\"40px\">\n        <i class=\"material-icons\">do_not_disturb</i>\n      </div>\n      <div fxFlex>\n          <p class=\"folloewingtopicdd_text\">Do Not Show Topic </p>\n      </div>\n  </div>\n  <hr class=\"m-0\">\n  <div class=\"folloewingtopicdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\n      <div class=\"folloewingtopicdd_icon\" fxFlex=\"40px\">\n        <i class=\"material-icons\">speaker_notes_off</i>\n      </div>\n      <div fxFlex>\n          <p class=\"folloewingtopicdd_text\"> Do Not Show Topic Posts </p>\n      </div>\n  </div>\n  <hr class=\"m-0\">\n  <div class=\"folloewingtopicdd\" fxLayout=\"row\" fxLayoutAlign=\"space-between  center\">\n    <div class=\"folloewingtopicdd_icon\" fxFlex=\"40px\">\n      <i class=\"material-icons\">report</i>\n    </div>\n    <div fxFlex>\n        <p class=\"folloewingtopicdd_text\"> Report Topic To Admin </p>\n    </div>\n</div>\n</mat-menu>"

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
exports.push([module.i, "\n.profileRightBar .userdiv{\n    background-color: #e9eef3;\n    margin: 7px;\n    padding: 7px;\n    border: 1px solid #dee4ea;\n    border-bottom: 2px solid #dee4ea;\n}\n\n.profileRightBar .userimg{\n    width: 90px;\n    height: 90px;\n    border-radius: 100px;\n}\n.profileRightBar .username{\n    font-size: 19px;\n    font-weight: 900;\n    color: #777777;\n    margin: -5px 0px 0px 0px;\n    letter-spacing: 0.5px;\n    word-spacing: 4px;\n}\n.profileRightBar .follow{\n    text-align: center;\n    font-size: 13px;\n    padding: 0px;\n    font-weight: 600;\n    margin-bottom: 0px;\n    color: #9c9a9a;\n    margin: 0px;\n    line-height: 21px;\n}\n.textLine{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    min-height: 40px;\n    /* background-color: #e9eef3; */\n    margin: 3px 5px;\n    width: 96%;\n    border: 1px solid #dee4ea;\n    border-bottom: 2px solid #dee4ea;\n}\n.textTitle{\n    margin: 0px 0px 0px 10px;\n    font-size: 13px;\n    font-weight: 600;\n    letter-spacing: 0.4px;\n    color: #66666687;\n    line-height: 39px;\n}\n.textCount{\n    margin: 0px 0px 0px 5px;\n    font-size: 14px;\n    font-weight: 800;\n    letter-spacing: 0.4px;\n    color: #666666f0;\n    line-height: 22px;\n    margin-top: 6px;\n    zoom: 110%;\n}\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile-left-bar/profile-left-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profileRightBar\">\n\n    <!-- UserDetails -->\n    <div class=\"userdiv\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n        <div fxFlex=\"90px\" class=\"text-center\">\n            <img class=\"userimg\" src=\"assets/images/sample/img7.jpg\" alt=\"\">\n        </div>\n        <div fxFlex class=\"text-center\">\n            <p class=\"username\"> User Name </p>\n            <p class=\"follow\">100 Followers </p>\n            <p class=\"follow\"> 100 Following Users</p>\n            <p class=\"follow\"> 100 Following Topics </p>\n        </div>\n    </div>\n    <!-- UserDetails End -->\n\n\n    <div class=\"row mr-0\">\n        <div class=\"col-sm-12\">\n            <div class=\"textLine\"> \n                <p class=\"textTitle\"> E-mail :</p> \n                <p class=\"textCount\"> Username@usermail.com </p>\n            </div>\n            <div class=\"textLine\"> \n                <p class=\"textTitle\"> Profession : </p> \n                <p class=\"textCount\"> User Profession </p>\n            </div>\n            <div class=\"textLine\"> \n                <p class=\"textTitle\"> Company : </p> \n                <p class=\"textCount\"> User Working Company </p>\n            </div>\n            <div class=\"textLine\"> \n                <p class=\"textTitle\"> Gender : </p> \n                <p class=\"textCount\"> Male </p>\n            </div>\n            <div class=\"textLine\"> \n                <p class=\"textTitle\"> Date Of Birth : </p> \n                <p class=\"textCount\"> 01/01/1995</p>\n            </div>\n            <div class=\"textLine\"> \n                <p class=\"textTitle\"> Location : </p> \n                <p class=\"textCount\"> Country Name <br> State Name <br> City Name</p>\n            </div>\n            <div class=\"textLine\"> \n                    <p class=\"textTitle\"> Selected Category : </p> \n                    <p class=\"textCount\"> Blogger </p>\n                </div>\n            <div class=\"textLine\"> \n                <p class=\"textTitle\"> Account Create Date : </p> \n                <p class=\"textCount\"> 01/01/2018 </p>\n            </div>\n        </div>\n    </div>\n</div>\n"

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

module.exports = "<div class=\"tabStyleThree FeedsCenter\">\n    <p-tabView (onChange)=\"onTabChange($event)\">\n\n        <p-tabPanel header=\"Timeline\">\n            <app-profile-timeline></app-profile-timeline>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Followers\">\n            <app-profile-followers></app-profile-followers>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Following\">\n                <app-profile-following></app-profile-following>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Settings\">\n                <app-profile-settings></app-profile-settings>\n        </p-tabPanel>\n\n      </p-tabView>\n</div>\n"

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
exports.push([module.i, ".profileSettings{\n    padding: 0px 15px;\n}\n.settingsdiv{\n    padding: 0px;\n    height: 180px;\n}\n.settingsBox{\n    background-color: white;\n    height: 160px;\n    margin: 10px;\n    padding: 10px;\n    box-shadow: rgba(102, 102, 102, 0.47) 0px 1px 8px 0px;\n    cursor: pointer\n}\n\n.settingsBox .boxIcon{\n    text-align: center;\n    margin: 0px;\n}\n\n.settingsBox .boxIcon i{\n    color: #666666;\n    font-size: 45px;\n}\n\n.settingsBox .boxHeading{\n    margin: 0px;\n    text-align: center;\n    font-size: 20px;\n    font-weight: 700;\n    letter-spacing: 0.5px;\n    word-spacing: 4px;\n    color: #666666bf;\n}\n\n.settingsBox .boxDescription{\n    margin: 0px;\n    text-align: center;\n    line-height: 20px;\n    margin-top: 15px;\n    font-size: 15px;\n    color: #66666673;\n    letter-spacing: 0.3px;\n    word-spacing: 2px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile-settings/profile-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profileSettings\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 settingsdiv\">\n      <div class=\"settingsBox\">\n        <p class=\"boxIcon\"> <i class=\"material-icons\">border_color</i> </p>\n        <p class=\"boxHeading\"> Edit Profile</p>\n        <p class=\"boxDescription\"> Edit Your Name Email and More...</p>\n      </div>\n    </div>\n\n    <div class=\"col-sm-4 settingsdiv\">\n      <div class=\"settingsBox\">\n        <p class=\"boxIcon\"><i class=\"material-icons\">mode_edit</i> </p>\n        <p class=\"boxHeading\"> Change Password </p>\n        <p class=\"boxDescription\"> Change Your Password Also Inset a Current Password...</p>\n      </div>\n    </div>\n\n    <div class=\"col-sm-4 settingsdiv\">\n      <div class=\"settingsBox\">\n        <p class=\"boxIcon\"> <i class=\"material-icons\">security</i> </p>\n        <p class=\"boxHeading\"> Privacy Settings </p>\n        <p class=\"boxDescription\"> Change Your Notification Details and More ...</p>\n      </div>\n    </div>\n\n    <div class=\"col-sm-4 settingsdiv\">\n      <div class=\"settingsBox\">\n        <p class=\"boxIcon\"> <i class=\"material-icons\">delete_sweep</i> </p>\n        <p class=\"boxHeading\"> Account Settings </p>\n        <p class=\"boxDescription\"> Inactive Or Delete Your Account...</p>\n      </div>\n    </div>\n    \n  </div>\n</div>\n\n"

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
exports.push([module.i, "\n.HighlightsPost{\n    background-color:#ffffff;\n    box-shadow: 0px 0px 5px 1px #607d8b63;\n    margin: 3px;\n    padding-bottom: 5px;\n}\n.HighlightsPost .PostHeader{\n    padding: 0px 10px;\n}\n.HighlightsPost .leftSide .postusername{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 15px;\n    font-weight: 600;\n    color: #827f7f;\n    letter-spacing: 0.5px;\n}\n.HighlightsPost .leftSide .postusercategory{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 14px;\n    color: #9c9a9a;\n}\n\n.HighlightsPost .rightSide .postcategoryicon{\n    margin-top: 8px;\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    cursor: pointer;\n}\n.HighlightsPost .rightSide .postaction{\n    line-height: 18px;\n    font-size: 24px;\n    margin: 0px;\n    color: gray;\n}\n.HighlightsPost .rightSide .postdate{\n    margin: 0px;\n    line-height: 18px;\n    margin-top: 5px;\n    color: #9c9a9a;\n    font-size: 12px;\n    letter-spacing: 0.4px;\n}\n\n\n.HighlightsPost .postLikes .like{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n}\n.HighlightsPost .postLikes {\n    padding: 0px 15px;\n}\n.HighlightsPost .postLikes .like i{\n    font-size: 32px;\n    color: #ffda00;\n}\n.HighlightsPost .postLikes .like .count{\n    line-height: 35px;\n    font-size: 15px;\n    letter-spacing: 0.7px;\n    font-weight: 600;\n    margin: 0px 5px;\n    color: #666666cf;\n}\n.HighlightsPost .postLikes .chat{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n}\n.HighlightsPost .postLikes .chat i{\n    font-size: 32px;\n    color: #1d6d04;\n}\n.HighlightsPost .postLikes .chat .count{\n    line-height: 30px;\n    font-size: 15px;\n    letter-spacing: 0.7px;\n    font-weight: 600;\n    margin: 0px 5px;\n    color: #666666cf;\n}\n.HighlightsPost .postLikes .share{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n}\n.HighlightsPost .postLikes .share i{\n    font-size: 30px;\n    color: #088eb7;\n}\n.HighlightsPost .postLikes .share .count{\n    line-height: 35px;\n    font-size: 15px;\n    letter-spacing: 0.7px;\n    font-weight: 600;\n    margin: 0px 5px;\n    color: #666666cf;\n}\n\n.HighlightsPost .postchat {\n    padding: 5px;\n}\n\n.HighlightsPost .postchat .chatUserImg img{\n    width: 40px;\n    height: 40px\n}\n\n.HighlightsPost .postchat .chatInput input{\n    width: 97%;\n    height: 38px;\n    outline: transparent;\n    border: 1px solid #333f4f3b;\n    padding: 0px 10px;\n    font-size: 15px;\n}\n\n.HighlightsPost .postchat .chatsend i{\n    font-size: 32px;\n    color: #38769f;\n    -webkit-transform: rotate(-35deg);\n            transform: rotate(-35deg);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n .QuestionPost{\n    background-color:#ffffff;\n    box-shadow: 0px 0px 5px 1px #607d8b63;\n    margin: 3px;\n}\n\n\n .QuestionPost .PostHeader{\n    padding: 0px 10px;\n}\n .QuestionPost .leftSide .postuserImg{\n    height: 50px;\n    width: 50px;\n    margin-top: 5px;\n    cursor: pointer;\n}\n .QuestionPost .leftSide .postusername{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 15px;\n    font-weight: 600;\n    color: #827f7f;\n    letter-spacing: 0.5px;\n}\n .QuestionPost .leftSide .postusercategory{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 14px;\n    color: #9c9a9a;\n}\n .QuestionPost .leftSide .postuserfollowers{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 13px;\n    color: #9c9a9a;\n}\n\n\n\n .QuestionPost .rightSide .postcategoryicon{\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    cursor: pointer;\n}\n .QuestionPost .rightSide .postaction{\n    line-height: 18px;\n    font-size: 24px;\n    margin: 0px;\n    color: gray;\n}\n .QuestionPost .rightSide .postdate{\n    margin: 0px;\n    line-height: 18px;\n    margin-top: 5px;\n    color: #9c9a9a;\n    font-size: 12px;\n    letter-spacing: 0.4px;\n}\n .QuestionPost .rightSide .posttopic{\n    margin: 0px;\n    line-height: 18px;\n    font-weight: 600;\n    color: #9c9a9a;\n    letter-spacing: 0.5px;\n    font-size: 13px;\n}\n\n\n .QuestionPost .postquestion{\n    margin: 0px;\n    margin-left: 10px;\n    color: #666666e6;\n    font-size: 16px;\n    font-weight: 700;\n    letter-spacing: 0.3px;\n    word-spacing: 2px;\n}\n .QuestionPost .postLikes .like{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n}\n .QuestionPost .postLikes {\n    padding: 0px 15px;\n}\n .QuestionPost .postLikes .like i{\n    font-size: 32px;\n    color: #ffda00;\n}\n .QuestionPost .postLikes .like .count{\n    line-height: 35px;\n    font-size: 15px;\n    letter-spacing: 0.7px;\n    font-weight: 600;\n    margin: 0px 5px;\n    color: #666666cf;\n}\n .QuestionPost .postLikes .chat{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n}\n .QuestionPost .postLikes .chat i{\n    font-size: 32px;\n    color: #1d6d04;\n}\n .QuestionPost .postLikes .chat .count{\n    line-height: 30px;\n    font-size: 15px;\n    letter-spacing: 0.7px;\n    font-weight: 600;\n    margin: 0px 5px;\n    color: #666666cf;\n}\n .QuestionPost .postLikes .share{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n}\n .QuestionPost .postLikes .share i{\n    font-size: 30px;\n    color: #088eb7;\n}\n .QuestionPost .postLikes .share .count{\n    line-height: 35px;\n    font-size: 15px;\n    letter-spacing: 0.7px;\n    font-weight: 600;\n    margin: 0px 5px;\n    color: #666666cf;\n}\n\n .QuestionPost .postchat {\n    padding: 5px 15px;\n}\n\n .QuestionPost .postchat .chatUserImg img{\n    width: 40px;\n    height: 40px\n}\n\n .QuestionPost .postchat .chatInput input{\n    width: 97%;\n    height: 38px;\n    outline: transparent;\n    border: 1px solid #333f4f3b;\n    padding: 0px 10px;\n    font-size: 15px;\n}\n\n .QuestionPost .postchat .chatsend i{\n    font-size: 32px;\n    color: #38769f;\n    -webkit-transform: rotate(-35deg);\n            transform: rotate(-35deg);\n}\n\n\n\n\n.scrolldiv{\n    overflow-Y: auto;\n    overflow-x: hidden;\n}\n\n .postmain .postquestion {\n    margin: 5px 0px 10px 5px\n}\n .postAnswer {\n    margin: 0px 0px 10px 5%;\n    background-color: #e6e6e67a;\n}\n .PostAnsHeader .postansuserImg{\n    width: 40px;\n    height: 40px;\n    border-radius: 40px;\n}\n .PostAnsHeader .postansusername{\n    font-size: 15px;\n    font-weight: 600;\n    color: #666666ab;\n    letter-spacing: 0.4px;\n    margin: 0px;\n}\n .PostAnsHeader .postansaction{\n    font-size: 20px;\n    line-height: 10px;\n    margin-right: 10px;\n    color: #666666;\n    margin-bottom: 4px;\n}\n .PostAnsHeader .postansdate{\n    margin: 0px 10px 0px 0px;\n    font-size: 12px;\n    color: darkgray;\n}\n .PostAnsHeader .postansfollowes{\n    font-size: 12px;\n    color: darkgray;\n}\n .PostAnsHeader .postansuserinfo{\n    height: 45px;\n    margin: 5px 0px 5px 5px;\n}\n .postAnswer .postAns{\n    padding: 5px 5px 0px 10px;\n}\n .postAnswer .postAns .postAnsText{\n    font-size: 15px;\n    font-weight: 500;\n    letter-spacing: 0.2px;\n    word-spacing: 2.5px;\n    color: #9c9a9a;\n    line-height: 20px;\n}\n .postmain .readmore{    \n    font-size: 13px;\n    margin: 0px;\n    font-weight: 600;\n    letter-spacing: 0.3px;\n    cursor: pointer;\n    line-height: 30px;\n    color: #999999;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.commentPost{\n    background-color: #e9eef378;\n    box-shadow: 0px 0px 3px 1px #607d8b63;\n    margin:4px 10px 15px 10px;\n    padding: 4px;\n}\n\n.commentPost .commentbody .commenttext{\n    font-size: 15px;\n    color: gray;\n    margin: 2px 10px;\n    word-spacing: 2.5px;\n    line-height: 20px;\n}\n.commentPost .PostHeader{\n    padding: 0px 2px;\n}\n.commentPost .leftSide .postuserImg{\n    height: 35px;\n    width: 35px;\n    border-radius: 35px;\n}\n.commentPost .leftSide .postusername{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 13px;\n    font-weight: 600;\n    color: #827f7f;\n    letter-spacing: 0.5px;\n}\n.commentPost .leftSide .postusercategory{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 12px;\n    color: #9c9a9a;\n}\n.commentPost .leftSide .postuserfollowers{\n    margin: 0px;\n    line-height: 17px;\n    font-size: 12px;\n    color: #9c9a9a;\n}\n\n.commentPost .rightSide .postaction{\n    line-height: 10px;\n    font-size: 24px;\n    margin: 0px;\n    color: gray;\n}\n.commentPost .rightSide .postdate{\n    margin: 0px;\n    line-height: 18px;\n    margin-top: 5px;\n    color: #9c9a9a;\n    font-size: 11px;\n    letter-spacing: 0.4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile-timeline/profile-timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Timeline\">\n  <p-scrollPanel style=\"width:90%;\" [style]=\"{height: scrollHeight }\" styleClass=\"customscroll_1\">\n    <ul class=\"cbp_tmtimeline\">\n      <li>\n          <time class=\"cbp_tmtime\"><span>23/01/2018</span> <span>06:30 AM</span></time>\n          <div class=\"cbp_tmicon\"><i class=\"material-icons\">visibility</i></div>\n          <div class=\"cbp_tmlabel\">\n            <div class=\"HighlightsPost mt-15\">\n                <!-- Highlights Post Info Header Div -->\n                <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                    <div fxFlex>\n                        <div class=\"leftSide\">\n                            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <div class=\"mt-10\" fxFlex>\n                                    <p class=\"postusername\"> Higlights Post</p>\n                                    <p class=\"postusercategory\"> Topic Name </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div fxFlex=\"35%\">\n                        <div class=\"rightSide\">\n                            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                <div fxFlex class=\"text-right\">\n                                    <img class=\"postcategoryicon\" src=\"assets/images/icons/caticon1.png\" alt=\"\">\n                                </div>\n                                <div class=\"text-right\" fxFlex=\"150px\">\n                                    <p class=\"postaction\"> ... </p>\n                                    <p class=\"postdate\"> 2 Months Ago </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- Highlights Post Info Header Div End -->\n                <hr class=\"m-5\">\n                <!-- Highlights Post -->\n                <div class=\"postmain\" fxLayout=\"row\">\n                    <div fxFlex class=\"text-center\">\n                        <img src=\"assets/images/sample/img4.jpg\" alt=\"\">\n                        <img src=\"assets/images/sample/img3.jpg\" alt=\"\">\n                    </div>\n                </div>\n                <!-- Highlights Post END -->\n                <hr class=\"m-5\">\n                <!-- Highlights Post Share Like And More -->\n                <div class=\"postLikes\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div fxFlex class=\"text-left\">\n                        <div class=\"like\"> <i class=\"material-icons\">star_border</i> <p class=\"count\"> 300 </p> </div>\n                    </div>\n                    <div fxFlex class=\"text-center\" >\n                        <div class=\"chat\" (click)=\"clicked = !clicked\"> <i class=\"material-icons\">chat</i> <p class=\"count\"> 200 </p> </div>\n                    </div>\n                    <div fxFlex class=\"text-right\">\n                        <div class=\"share\"> <i class=\"material-icons\">share</i> <p class=\"count\"> 100 </p> </div>\n                    </div>\n                </div>\n                <!-- Highlights Post Share Like And More  END-->\n      \n      \n                <!-- Highlights Post Comments-->\n                  <div *ngIf=\"clicked\" class=\"Comments\">\n                      <div class=\"commentPost\">\n                              <div class=\"commentinfo\">\n                                  <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                                      <div fxFlex>\n                                          <div class=\"leftSide\">\n                                              <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                                  <div fxFlex=\"45px\">\n                                                      <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                                  </div>\n                                                  <div class=\"mt-10\" fxFlex>\n                                                      <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                                      <p class=\"postuserfollowers\"> 20 Followers </p>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                      </div>\n                                      <div fxFlex=\"25%\">\n                                          <div class=\"rightSide\">\n                                              <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                                  <div class=\"text-right\" fxFlex>\n                                                      <p class=\"postaction\"> ... </p>\n                                                      <p class=\"postdate\"> 2 Months Ago </p>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                              <hr class=\"m-0\">\n                              <div class=\"commentbody\">\n                                  <p class=\"commenttext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\n                              </div> \n                      </div>\n                      <div class=\"commentPost\">\n                          <div class=\"commentinfo\">\n                              <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                                  <div fxFlex>\n                                      <div class=\"leftSide\">\n                                          <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                              <div fxFlex=\"45px\">\n                                                  <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                              </div>\n                                              <div class=\"mt-10\" fxFlex>\n                                                  <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                                  <p class=\"postuserfollowers\"> 20 Followers </p>\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                                  <div fxFlex=\"25%\">\n                                      <div class=\"rightSide\">\n                                          <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                              <div class=\"text-right\" fxFlex>\n                                                  <p class=\"postaction\"> ... </p>\n                                                  <p class=\"postdate\"> 2 Months Ago </p>\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                          <hr class=\"m-0\">\n                          <div class=\"commentbody\">\n                              <p class=\"commenttext\"> Lorem ipsum dolor</p>\n                          </div> \n                      </div>\n                  </div>\n                  <!-- Highlights Post Comments END-->\n      \n      \n            </div>\n            <!-- Highlights Post Div END -->\n          </div>\n      </li>\n      <li>\n          <time class=\"cbp_tmtime\"><span>23/01/2018</span> <span>07:30 PM</span></time>\n          <div class=\"cbp_tmicon\"><i class=\"material-icons\">help_outline</i></div>\n          <div class=\"cbp_tmlabel\">\n             <!-- Question Post Div -->\n            <div class=\"QuestionPost mt-15\">\n                <!-- Question Post Info Header Div -->\n                <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                    <div fxFlex>\n                        <div class=\"leftSide\">\n                            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <div class=\"mt-10\" fxFlex>\n                                    <p class=\"postusername\"> Questions Post </p>\n                                    <p class=\"postusercategory\"> Topic Name </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div fxFlex=\"35%\">\n                        <div class=\"rightSide\">\n                            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                <div fxFlex>\n                                </div>\n                                <div class=\"text-right\" fxFlex=\"150px\">\n                                    <p class=\"postaction\"> ... </p>\n                                    <p class=\"postdate\"> 2 Months Ago </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- Question Post Info Header Div End -->\n                <hr class=\"m-5\">\n                <!-- Question Post -->\n                <div class=\"postmain\" fxLayout=\"row\">\n                    <div fxFlex class=\"text-left\">\n                        <h5 class=\"postquestion\"> What is Blockchain Technology?  </h5>\n                        <div class=\"postAnswer\">\n                            <div class=\"PostAnsHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                                <div fxFlex>\n                                    <div class=\"leftSide\">\n                                        <div class=\"postansuserinfo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                            <div fxFlex=\"45px\">\n                                                <img class=\"postansuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                            </div>\n                                            <div class=\"mt-10\" fxFlex>\n                                                <p class=\"postansusername\"> User Name </p>\n                                                <p class=\"postansfollowes\"> 20 followers </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div fxFlex=\"35%\">\n                                    <div class=\"rightSide\">\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                            <div fxFlex>\n                                            </div>\n                                            <div class=\"text-right\" fxFlex=\"150px\">\n                                                <p class=\"postansaction\"> ... </p>\n                                                <p class=\"postansdate\"> 2 Months Ago </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <hr class=\"m-0\" style=\"border-color: #77778729;\">\n                            <div class=\"postAns\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n                                <div fxFlex>\n                                    <p class=\"postAnsText\"> &emsp; The blockchain is an incorruptible digital ledger of economic transactions\n                                                that can be programmed to record not just financial transactions but virtually everything of value.</p>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"postAnswer\">\n                            <div class=\"PostAnsHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                                <div fxFlex>\n                                    <div class=\"leftSide\">\n                                        <div class=\"postansuserinfo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                            <div fxFlex=\"45px\">\n                                                <img class=\"postansuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                            </div>\n                                            <div class=\"mt-10\" fxFlex>\n                                                <p class=\"postansusername\"> User Name </p>\n                                                <p class=\"postansfollowes\"> 20 followers </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div fxFlex=\"35%\">\n                                    <div class=\"rightSide\">\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                            <div fxFlex>\n                                            </div>\n                                            <div class=\"text-right\" fxFlex=\"150px\">\n                                                <p class=\"postansaction\"> ... </p>\n                                                <p class=\"postansdate\"> 2 Months Ago </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <hr class=\"m-0\" style=\"border-color: #77778729;\">\n                            <div class=\"postAns\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n                                <div fxFlex>\n                                    <p class=\"postAnsText\"> &emsp; The blockchain is an incorruptible digital ledger of economic transactions\n                                                that can be programmed to record not just financial transactions but virtually everything of value.</p>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"text-right\">\n                            <p class=\"readmore\">Read More...</p>\n                        </div>\n                    </div>\n                </div>\n                <!-- Question Post END -->\n                <hr class=\"m-5\">\n                <!-- Question Post Share Like And More -->\n                <div class=\"postLikes\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div fxFlex class=\"text-left\">\n                        <div class=\"like\"> <i class=\"material-icons\">star_border</i> <p class=\"count\"> 300 </p> </div>\n                    </div>\n                    <div fxFlex class=\"text-center\" >\n                        <div class=\"chat\" (click)=\"clicked2 = !clicked2\"> <i class=\"material-icons\">chat</i> <p class=\"count\"> 200 </p> </div>\n                    </div>\n                    <div fxFlex class=\"text-right\">\n                        <div class=\"share\"> <i class=\"material-icons\">share</i> <p class=\"count\"> 100 </p> </div>\n                    </div>\n                </div>\n                <!-- Question Post Share Like And More  END-->\n                <hr class=\"m-5\">\n\n                <!-- Question Post Comments -->\n                <div *ngIf=\"clicked2\" class=\"Comments\">\n                    <div class=\"commentPost\">\n                        <div class=\"commentinfo\">\n                            <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                                <div fxFlex>\n                                    <div class=\"leftSide\">\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                            <div fxFlex=\"45px\">\n                                                <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                            </div>\n                                            <div class=\"mt-10\" fxFlex>\n                                                <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                                <p class=\"postuserfollowers\"> 20 Followers </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div fxFlex=\"25%\">\n                                    <div class=\"rightSide\">\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                            <div class=\"text-right\" fxFlex>\n                                                <p class=\"postaction\"> ... </p>\n                                                <p class=\"postdate\"> 2 Months Ago </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"m-0\">\n                        <div class=\"commentbody\">\n                            <p class=\"commenttext\"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. qui eaque ducimus quis sequi error iusto ut.!</p>\n                        </div> \n                    </div>\n                    <div class=\"commentPost\">\n                        <div class=\"commentinfo\">\n                            <div class=\"PostHeader\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                                <div fxFlex>\n                                    <div class=\"leftSide\">\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                            <div fxFlex=\"45px\">\n                                                <img class=\"postuserImg\" src=\"assets/images/icons/user.png\" alt=\"\">\n                                            </div>\n                                            <div class=\"mt-10\" fxFlex>\n                                                <p class=\"postusercategory\"> <span class=\"postusername\"> User Name,  </span> Invester &nbsp; | &nbsp; Software De... </p>\n                                                <p class=\"postuserfollowers\"> 20 Followers </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div fxFlex=\"25%\">\n                                    <div class=\"rightSide\">\n                                        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                            <div class=\"text-right\" fxFlex>\n                                                <p class=\"postaction\"> ... </p>\n                                                <p class=\"postdate\"> 2 Months Ago </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"m-0\">\n                        <div class=\"commentbody\">\n                            <p class=\"commenttext\"> Lorem ipsum dolor</p>\n                        </div> \n                    </div>\n                </div>\n                <!-- Question Post Comments END-->\n\n            </div>\n            <!-- Question Post Div END -->\n          </div>\n      </li>\n    </ul>\n  </p-scrollPanel>\n</div>"

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
exports.push([module.i, "\n.SignInSignUp .text-color{\n        color: #666666\n    }\n    \n    /* Index Page Header Design  */\n    \n.SignInSignUp .logoDesign-1{\n        height: 50px;\n        margin-top: -5px;\n    }\n.SignInSignUp .logoTextDesign-1{\n        margin-top: 12px;\n    }\n.SignInSignUp .TextDesign-1{\n        position: absolute;\n        top: -4px;\n        font-size: 18px;\n        margin: 0px;\n        font-weight: 600;\n        line-height: 23px;\n        /* color: #FFDA00; */\n    }\n.SignInSignUp .TextDesign-2{\n        font-size: 25px;\n        margin: 0px;\n        font-weight: 800;\n        line-height: 40px;\n        margin-left: 10px;\n        /* color: #FFDA00; */\n    }\n.SignInSignUp .TextDesign-3{\n        font-size: 25px;\n        margin: 0px;\n        font-weight: 800;\n        line-height: 40px;\n        /* color: #FFDA00; */\n    }\n.SignInSignUp .linkStyle-1{\n        font-weight: 700;\n        font-size: 16px;\n        margin-right: 20px;\n        border: 1px solid #ffffff;\n        padding: 2px 12px;\n        letter-spacing: 1px;\n    }\n.SignInSignUp .linkStyle-1:hover,\n.SignInSignUp .linkStyle-1:active,\n.SignInSignUp .linkStyle-1:focus{\n    background-color: #ffffff;\n    color: #FFDA00;\n    }\n\n.SignInSignUp .form-header{\n    font-size: 25px;\n    font-weight: 800;\n    color: #666666;\n}\n\n.SignInSignUp .form-header.inActive{\n    font-size: 17px;\n    font-weight: 600;\n    line-height: 40px;\n}\n\n.SignInSignUp .inputStyle-1{\n    margin-bottom: 15px;\n    height: 42px;\n    width: 85%;\n    border: none;\n    box-shadow: 0px 2px 4px #383636b5;\n    font-size: 16px;\n    font-weight: 600;\n    letter-spacing: 1px;\n    padding-left: 10px;\n}\n\n.SignInSignUp .cat-img-item img{\n    width: 35px;\n    height: 35px;\n    margin-top: 6px;\n}\n.SignInSignUp .cat-img-item span{\n    font-size: 12px;\n    font-weight: 600;\n}\n.SignInSignUp .cat-img-item{\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    background-color: #c1bb9640;\n    line-height: 40px;\n    border-radius: 50px;\n}\n\n.SignInSignUp .cat-img-item.selected{\n    background-color: #ffffff;\n}\n.SignInSignUp .cat-img-item.selected span{\n    color: #666666;\n    font-size: 13px;\n    font-weight: 700;\n}\n\n.SignInSignUp .inputStyle-2{\n    margin-bottom: 5px;\n    height: 38px;\n    width: 100%;\n    border: none;\n    box-shadow: 0px 2px 4px #383636b5;\n    font-size: 14px;\n    font-weight: 600;\n    letter-spacing: 1px;\n    padding-left: 10px;\n}\n\n.SignInSignUp .gender-select{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    margin-top: 7px;\n}\n.SignInSignUp .gender-select .tick{\n    font-size: 14px;\n    font-weight: 700;\n    letter-spacing: 0.6px;\n    color: #888888;\n}\n.SignInSignUp .gender-select .tick img{\n    width: 26px;\n    height: 26px;\n    padding: 4px;\n    background: #fff;\n    margin-right: 5px;\n}\n.SignInSignUp .gender-select .tick img.p-13{\n    padding: 13px;\n}\n.SignInSignUp .btn-cutom{\n    color: #ffffff;\n    background-color: #333333;\n    border-color: #333333;\n    font-weight: 700;\n    letter-spacing: 0.8px;\n    font-size: 16px;\n    outline: transparent;\n}\n.SignInSignUp .btn-cutom:hover{\n    color: #fff;\n    background-color: #5c5c5c;\n    border-color: #5c5c5c;\n}\n.height-60{\n    height: 60px\n}\n\n\n.SignInSignUp .textStyle-2{\n    font-size: 22px;\n    font-weight: 700;\n    color: #777777;\n    word-spacing: 2px;\n    margin-top: 10px;\n    font-family: unset;\n    text-align: justify;\n    text-align-last: center;\n}\n.SignInSignUp .imgStyle-2{\n    width: 90px;\n}\n\n\n\n.SignInSignUp .linkStyle-4{\n    margin: 5px;\n    width: 45px;\n    height: 45px;\n    border: 3px solid royalblue;\n    border-radius: 40px;\n    background-color: #fff;\n}\n.SignInSignUp .linkStyle-4 i{\n    background-color: royalblue;\n    width: 35px;\n    height: 35px;\n    border-radius: 35px;\n    line-height: 35px;\n    font-size: 17px;\n    margin-top: 2px;\n    color: #ffffff;\n}\n.SignInSignUp .linkStyle-4.facebook i{\n    background-color: #3B5999 !important;\n}\n.SignInSignUp .linkStyle-4.twitter i{\n    background-color: #1DA1F2 !important;\n}\n.SignInSignUp .linkStyle-4.linkedin i{\n    background-color: #0077B5 !important;\n}\n.SignInSignUp .linkStyle-4.googlePlus i{\n    background-color: #DC4437 !important;\n}\n\n\n.SignInSignUp .linkStyle-4.facebook{\n    border-color: #3B5999 !important;\n}\n.SignInSignUp .linkStyle-4.twitter{\n    border-color: #1DA1F2 !important;\n}\n.SignInSignUp .linkStyle-4.linkedin{\n    border-color: #0077B5 !important;\n}\n.SignInSignUp .linkStyle-4.googlePlus{\n    border-color: #DC4437 !important;\n}\n\n\n.SignInSignUp .linkStyle-3{\n    text-decoration: none;\n    color: #666666;\n    font-size: 16px;\n    font-weight: 800;\n    letter-spacing: 1px;\n}\n\n.SignInSignUp .textStyle-1{\n    font-size: 15px;\n    font-weight: 600;\n    color: gray;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin-signup/signin-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"SignInSignUp\">\n\n\n\n  <div class=\"\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"5%\" fxLayoutGap.sm=\"0\">\n\n\n    <!-- Left Bar -->\n    <div fxFlex=\"45%\" class=\"\">\n\n\n      <div class=\"mb-20 height-60\" fxLayout=\"row\" fxLayoutAlign=\"start\" style=\"margin-left:-13%\" >\n        <div fxFlex=\"250px\" routerLink=\"/\" style=\"cursor:pointer\">\n          <div class=\"row\" style=\"padding:15px 0px;\" >\n            <div class=\"col-sm-12\" style=\"display:inline-flex;\">\n              <img class=\"logoDesign-1 mr-5\" src=\"assets/images/logos/logo3mini62.png\" alt=\"\" >\n              <span class=\"logoTextDesign-1\" routerLink=\"/\" style=\"cursor:pointer\">\n                <sup class=\"TextDesign-1\"> The </sup>\n                <span class=\"TextDesign-2\"> Crypto </span>\n                <span class=\"TextDesign-3\"> Network </span>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n      <div style=\"height:500px\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly center\" >\n\n          <div class=\"right-part mb-30\" fxLayout fxLayoutAlign=\"center\" >\n              <div fxFlex=\"140px\" class=\"text-center\">\n                <img class=\"imgStyle-2\" src=\"assets/images/Picture7.png\" alt=\"\">\n              </div>\n              <div>\n                <h4 class=\"textStyle-2\"> SHARE stories, opinions and news about crypto currencies and markets </h4>\n              </div>\n          </div>\n          <div class=\"right-part mb-30\" fxLayout fxLayoutAlign=\"center\">\n              <div fxFlex=\"140px\" class=\"text-center\">\n                <img class=\"imgStyle-2\" src=\"assets/images/Picture8.png\" alt=\"\">\n              </div>\n              <div>\n                <h4 class=\"textStyle-2\"> CONNECT with experts and ask any questions related to the topic </h4>\n              </div>\n          </div>\n          <div class=\"right-part\"  fxLayout fxLayoutAlign=\"center\">\n              <div fxFlex=\"140px\" class=\"text-center\">\n                <img class=\"imgStyle-2\" src=\"assets/images/Picture9.png\" alt=\"\">\n              </div >\n              <div>\n                <h4 class=\"textStyle-2\"> CHECK the current rates and be up-to-date with the trends  </h4>\n              </div>\n          </div>\n        \n      </div>\n\n\n    </div>\n\n\n\n    <!-- Right Bar -->\n    <div class=\"mt-50\" fxFlex=\"34%\">\n\n\n        <!-- action Tabs  -->\n        <div class=\"pb-10 bg-primary-color\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\">\n          <div fxFlex=\"40%\" class=\"text-right\" (click)=\"onclick()\" style=\"cursor:pointer\" >\n            <h4 class=\"form-header\" [ngClass]=\"{ 'inActive': !SingUpActive }\" > Sign Up </h4>\n          </div>\n          <div fxFlex=\"10%\" class=\"text-center\">\n            <h4 class=\"form-header\"> | </h4>\n          </div>\n          <div fxFlex=\"40%\" class=\"text-left\" (click)=\"onclick()\" style=\"cursor:pointer\">\n            <h4 class=\"form-header \" [ngClass]=\"{ 'inActive': !SingInActive }\" > Sign In </h4>\n          </div>\n        </div>\n  \n        <div class=\"bg-primary-color\" *ngIf=\"SingUpActive\">\n            <!-- input Name -->\n            <div class=\"text-center\">\n              <input type=\"text\" class=\"inputStyle-1\" placeholder=\"Name\">\n            </div>\n  \n            <!-- input Email -->\n            <div class=\"text-center\">\n              <input type=\"email\" class=\"inputStyle-1 bg-color-D1D1D1\" placeholder=\"Sample.mail@mail.com\" readonly>\n            </div>\n  \n            <!-- input Password -->\n            <div class=\"text-center\">\n              <input type=\"password\" class=\"inputStyle-1\" placeholder=\"Password\">\n            </div>\n  \n            <!-- Topic Selection -->\n            <div class=\"mt-10 mb-30\" fxLayout fxLayoutAlign=\"space-between\" style=\"width:84%;margin-left:8%\">\n              <div class=\"cat-img-item selected\">\n                <img src=\"assets/images/speaker.png\" alt=\"\">\n                <span> Media </span>\n              </div>\n              <div class=\"cat-img-item\">\n                <img src=\"assets/images/investing.png\" alt=\"\">\n                <span> Invester </span>\n              </div>\n              <div class=\"cat-img-item\">\n                <img src=\"assets/images/userpin.png\" alt=\"\">\n                <span> Enthusiast </span>\n              </div>\n              <div class=\"cat-img-item\">\n                <img src=\"assets/images/building.png\" alt=\"\">\n                <span> Company </span>\n              </div>\n              <div class=\"cat-img-item\">\n                <img src=\"assets/images/expert.png\" alt=\"\">\n                <span> Expert </span>\n              </div>\n              <div class=\"cat-img-item\">\n                <img src=\"assets/images/programmer.png\" alt=\"\">\n                <span> Blogger </span>\n              </div>\n            </div>\n  \n            <!-- Input Company And Professioin -->\n            <div class=\"mt-40 mb-10\" fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">\n              <div fxFlex=\"41%\">\n                <input type=\"text\" class=\"inputStyle-2\" placeholder=\"Company\">\n              </div>\n              <div fxFlex=\"41%\">\n                <input type=\"text\" class=\"inputStyle-2\" placeholder=\"Profession\">\n              </div>\n            </div>\n  \n            <!-- Input Date oF Birth And Gender -->\n            <div class=\"mt-10 mb-10\" fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">\n              <div fxFlex=\"41%\">\n                <input type=\"text\" class=\"inputStyle-2\" placeholder=\"Date Of Birth\">\n              </div>\n              <div fxFlex=\"41%\">\n                <div class=\"gender-select\">\n                  <div class=\"tick ml-10\" (click)=\"genderSelect()\" style=\"cursor:pointer\">\n                    <img  [ngClass]=\"{ 'p-13': !MaleActive }\" src=\"assets/images/tick.png\" alt=\"\"> Male </div>\n                  <div class=\"tick ml-20\" (click)=\"genderSelect()\" style=\"cursor:pointer\">\n                    <img class=\"p-13\" [ngClass]=\"{ 'p-13': !FemaleActive }\" src=\"assets/images/tick.png\" alt=\"\"> Female </div>\n                </div>\n              </div>\n            </div>\n  \n            <!-- Input Country State And City -->\n            <div class=\"mt-10 mb-10\" fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"5px\">\n              <div fxFlex=\"28%\">\n                <input type=\"text\" class=\"inputStyle-2\" placeholder=\"Country\">\n              </div>\n              <div fxFlex=\"27%\">\n                <input type=\"text\" class=\"inputStyle-2\" placeholder=\"State\">\n              </div>\n              <div fxFlex=\"27%\">\n                <input type=\"text\" class=\"inputStyle-2\" placeholder=\"City\">\n              </div>\n            </div>\n  \n            <!--  Submi Button -->\n            <div class=\"text-center mt-10 pb-10\">\n              <button routerLink=\"/Feeds\" class=\"btn-flat btn btn-cutom\"> Register </button>\n            </div>\n  \n        </div>\n        \n        <div class=\"bg-primary-color\" *ngIf=\"SingInActive\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"start\" style=\"height:100%\">\n  \n                <!-- input Email -->\n                <div class=\"text-center mt-10\" >\n                  <input type=\"email\" class=\"inputStyle-1 bg-color-D1D1D1 mb-20\" placeholder=\"Sample.mail@mail.com\" readonly>\n                </div>\n  \n                <!-- input Password -->\n                <div class=\"text-center\">\n                  <input type=\"password\" class=\"inputStyle-1\" placeholder=\"Password\">\n                </div>\n  \n                <!--  Submi Button -->\n                <div class=\"text-center mt-10 mb-10\">\n                    <button routerLink=\"/Feeds\" class=\"btn-flat btn btn-cutom\"> Sign In </button>\n                </div>\n  \n                <div class=\"col-sm-12 text-center\">\n                    <p class=\"textStyle-1\"> Forgot Password !!  </p>\n                </div>\n  \n  \n                <div class=\"row mt-40 mb-30\">\n                    <div class=\"col-sm-12 text-center\">\n                            <p class=\"textStyle-1 mb-0\"> <small>  Or Sign In Using </small> </p>\n                        <div style=\"display:inline-flex\">\n                            <a href=\"#\" class=\"linkStyle-4 facebook\">\n                                <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                            </a>\n                            <a href=\"#\" class=\"linkStyle-4 twitter\">\n                                <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                            </a>\n                            <a href=\"#\" class=\"linkStyle-4 googlePlus\">\n                                <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                            </a>\n                            <a href=\"#\" class=\"linkStyle-4 linkedin\">\n                                <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n  \n            </div>\n        </div>\n  \n    </div>\n\n\n\n\n  </div>\n\n</div>\n"

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
exports.push([module.i, ".welcome{\n    background-color: #FFDA00 !important;\n}\n.welcome .text-color{\n        color: #666666;\n    }\n    \n    /* Index Page Header Design  */\n    \n.welcome .logoDesign-1{\n        height: 50px;\n        margin-top: -5px;\n    }\n.welcome .logoTextDesign-1{\n        margin-top: 12px;\n    }\n.welcome .TextDesign-1{\n        position: absolute;\n        top: -4px;\n        font-size: 18px;\n        margin: 0px;\n        font-weight: 600;\n        line-height: 23px;\n    }\n.welcome .TextDesign-2{\n        font-size: 25px;\n        margin: 0px;\n        font-weight: 800;\n        line-height: 40px;\n        margin-left: 10px;\n    }\n.welcome .TextDesign-3{\n        font-size: 25px;\n        margin: 0px;\n        font-weight: 800;\n        line-height: 40px;\n    }\n.welcome .linkStyle-1{\n        font-weight: 700;\n        font-size: 16px;\n        margin-right: 20px;\n        border: 1px solid white;\n        padding: 2px 12px;\n        letter-spacing: 1px;\n        color: #ffffff;\n    }\n.welcome .linkStyle-1:hover,\n.welcome .linkStyle-1:active,\n.welcome .linkStyle-1:focus{\n        background-color: #ffffff;\n        color: #FFDA00;\n    }\n.welcome .index-style-1{\n        max-width: 550px;\n        margin-bottom: 10px;\n        width: 74%;\n        background-color: gray;\n        padding: 10px;\n        box-shadow: 3px 3px 3px #6b5d5da1;\n    }\n.welcome .input-style-1{\n        height: 45px;\n        width: 85%;\n        border: none;\n        box-shadow: 0px 3px 3px #383636b5;\n        font-size: 18px;\n        font-weight: 600;\n        letter-spacing: 1px;\n        padding-left: 10px;\n    }\n    \n.welcome .linkStyle-2{\n        width: 15%;\n        text-align: center;\n    }\n.welcome .linkStyle-2 a{\n       text-decoration: none;\n    }\n.welcome .iconStyle-1{\n        font-size: 39px !important; \n        width: 47px;\n        height: 47px;\n        line-height: 42px !important;\n        background-color: #ffda00;\n        color: #808080;\n        border-radius: 50px;\n    }\n    \n.welcome .textStyle-1{\n        font-size: 15px;\n        font-weight: 600;\n        color: gray;\n    }\n.welcome .linkStyle-3{\n        text-decoration: none;\n        color: #666666;\n        font-size: 16px;\n        font-weight: 800;\n        letter-spacing: 1px;\n    }\n.welcome .linkStyle-4{\n        margin: 5px;\n        width: 45px;\n        height: 45px;\n        border: 3px solid royalblue;\n        border-radius: 40px;\n        background-color: #fff;\n    }\n.welcome .linkStyle-4 i{\n        background-color: royalblue;\n        width: 35px;\n        height: 35px;\n        border-radius: 35px;\n        line-height: 35px;\n        font-size: 17px;\n        margin-top: 2px;\n        color: #ffffff;\n    }\n.welcome .linkStyle-4.facebook i{\n        background-color: #3B5999 !important;\n    }\n.welcome .linkStyle-4.twitter i{\n        background-color: #1DA1F2 !important;\n    }\n.welcome .linkStyle-4.linkedin i{\n        background-color: #0077B5 !important;\n    }\n.welcome .linkStyle-4.googlePlus i{\n        background-color: #DC4437 !important;\n    }\n    \n    \n.welcome .linkStyle-4.facebook{\n        border-color: #3B5999 !important;\n    }\n.welcome .linkStyle-4.twitter{\n        border-color: #1DA1F2 !important;\n    }\n.welcome .linkStyle-4.linkedin{\n        border-color: #0077B5 !important;\n    }\n.welcome .linkStyle-4.googlePlus{\n        border-color: #DC4437 !important;\n    }\n    \n.welcome .fixed-row{\n        position: fixed;\n        top: 93%;\n        width: 102%;\n    }\n.welcome .fixed-row .menudiv{\n        height: 45px;\n        line-height: 45px;\n        background-color: #ffffff;\n        width: 100%;\n        text-align: center;\n    }\n.welcome .linkStyle-5{\n        color: #666666;\n        font-weight: 700;\n        font-size: 15px;\n        text-decoration: none;\n        margin: 0px 15px;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"welcome\">\n        <!-- Start main-content -->\n        <div class=\"main-content\">\n          <!-- Section: home -->\n          <section id=\"home\" class=\"divider parallax\">\n            <div class=\"display-table\">\n              <div class=\"display-table-cell\">\n                  <div class=\"row\" style=\"padding:15px 20px;\">\n                      <div class=\"col-sm-6\" style=\"display:inline-flex;\">\n                          <img class=\"logoDesign-1 mr-5\" src=\"assets/images/logos/logo3mini62.png\" alt=\"\"> \n                          <span class=\"logoTextDesign-1\"> \n                              <sup class=\"TextDesign-1\"> The </sup>\n                              <span class=\"TextDesign-2\"> Crypto </span>\n                              <span class=\"TextDesign-3\"> Network </span> \n                          </span>\n                      </div>\n                      <div class=\"col-sm-6 text-right\" >\n                          <div style=\"display:inline-flex;\"> \n                              <a routerLink=\"/SignInSignUp\" class=\"linkStyle-1\"> Sign Up</a>\n                              <a routerLink=\"/SignInSignUp\" class=\"linkStyle-1\"> Sign In</a>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-sm-12 mt-40 mb-40\">\n                          <h2 class=\"text-center text-color\">\n                              Join the world’s first social network dedicated to crypto currencies\n                          </h2>\n                          <h1 class=\"text-center text-white\"> \n                              ASK, CONNECT AND ENGAGE\n                          </h1>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-sm-12 mt-10 text-center\">\n                          <div class=\"index-style-1\" style=\"display:inline-flex\"> \n                              <input class=\"input-style-1\" type=\"text\" placeholder=\"Enter Your E-mail Address\">\n                              <div class=\"linkStyle-2\"> <a href=\"#\">  <i class=\"material-icons iconStyle-1\">person_outline</i> </a> </div>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-12 text-center\">\n                          <p class=\"textStyle-1\"> Already have an Account? &nbsp; <a href=\"#\" class=\"linkStyle-3\"> Sign In </a> </p>\n                      </div>\n                  </div>\n      \n                  <div class=\"row mt-40 mb-30\">\n                      <div class=\"col-sm-12 text-center\">\n                              <p class=\"textStyle-1 mb-0\"> <small>  Or Sign In Using </small> </p>\n                          <div style=\"display:inline-flex\">\n                              <a href=\"#\" class=\"linkStyle-4 facebook\">\n                                  <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                              </a>\n                              <a href=\"#\" class=\"linkStyle-4 twitter\">\n                                  <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                              </a>\n                              <a href=\"#\" class=\"linkStyle-4 googlePlus\">\n                                  <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                              </a>\n                              <a href=\"#\" class=\"linkStyle-4 linkedin\">\n                                  <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n                              </a>\n                          </div>\n                      </div>\n                  </div>\n      \n                  <div class=\"row fixed-row\">\n                      <div class=\"col-sm-12 menudiv\">\n                          <div style=\"display:inline-flex\">\n                              <a href=\"#\" class=\"linkStyle-5\"> About Us </a>\n                              <a href=\"#\" class=\"linkStyle-5\"> Career </a>\n                              <a href=\"#\" class=\"linkStyle-5\"> Terms </a>\n                              <a href=\"#\" class=\"linkStyle-5\"> Privacy </a>\n                              <a href=\"#\" class=\"linkStyle-5\"> Advertise </a>\n                              <a href=\"#\" class=\"linkStyle-5\"> Contact </a>\n                          </div>\n                      </div>\n                  </div>\n      \n              </div>\n            </div>\n          </section> \n        </div>  \n      <!-- end main-content -->\n    </div>"

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