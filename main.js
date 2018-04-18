"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var apprun_1 = require("apprun");
var home_1 = require("./home");
var firebase_auth_1 = require("./firebase-auth");
var about_1 = require("./about");
var contact_1 = require("./contact");
var authorize_1 = require("./authorize");
var visitors_1 = require("./visitors");
var app_id = 'my-app';
var main_id = 'main';
new home_1.default().mount(main_id);
new about_1.default().mount(main_id);
new contact_1.default().mount(main_id);
new authorize_1.default().mount(main_id);
new visitors_1.default().mount(main_id);
new firebase_auth_1.default().mount();
// global routing
apprun_1.default.on('//', function (route) {
    console.log('[route]: ', route);
    var menus = document.querySelectorAll('.navbar-nav li');
    for (var i = 0; i < menus.length; ++i)
        menus[i].classList.remove('active');
    var item = document.querySelector("[href='" + route + "']");
    item && item.parentElement.classList.add('active');
});
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.view = function (state) {
            return apprun_1.default.createElement("div", { className: 'container' },
                apprun_1.default.createElement("nav", { className: "navbar navbar-default navbar-static-top" },
                    apprun_1.default.createElement("div", { className: "container" },
                        apprun_1.default.createElement("div", { className: "navbar-header" },
                            apprun_1.default.createElement("button", { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar" },
                                apprun_1.default.createElement("span", { className: "sr-only" }, "Toggle navigation"),
                                apprun_1.default.createElement("span", { className: "icon-bar" }),
                                apprun_1.default.createElement("span", { className: "icon-bar" }),
                                apprun_1.default.createElement("span", { className: "icon-bar" })),
                            apprun_1.default.createElement("a", { className: "navbar-brand", href: "#/" }, "Project name")),
                        apprun_1.default.createElement("div", { id: "navbar", className: "collapse navbar-collapse" },
                            apprun_1.default.createElement("ul", { className: "nav navbar-nav" },
                                apprun_1.default.createElement("li", { className: "active" },
                                    apprun_1.default.createElement("a", { href: "#" }, "Home")),
                                apprun_1.default.createElement("li", null,
                                    apprun_1.default.createElement("a", { href: "#about" }, "About")),
                                apprun_1.default.createElement("li", null,
                                    apprun_1.default.createElement("a", { href: "#contact" }, "Contact")),
                                firebase_auth_1.user && apprun_1.default.createElement("li", null,
                                    apprun_1.default.createElement("a", { href: "#visitors" }, "Visitors")),
                                firebase_auth_1.user ?
                                    apprun_1.default.createElement("li", null,
                                        apprun_1.default.createElement("a", { href: "#signout" }, "Sign Out"))
                                    :
                                        apprun_1.default.createElement("li", null,
                                            apprun_1.default.createElement("a", { href: "#authorize" }, "Authorize")))))),
                apprun_1.default.createElement("div", { className: "container", id: "main" }));
        };
        _this.update = {
            '#auth': function (state) { return state; }
        };
        return _this;
    }
    return AppComponent;
}(apprun_1.Component));
new AppComponent().mount(app_id);
//# sourceMappingURL=main.js.map