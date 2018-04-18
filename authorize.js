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
var firebase_auth_1 = require("./firebase-auth");
var authorizeComponent = (function (_super) {
    __extends(authorizeComponent, _super);
    function authorizeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = 'Sign in as admin';
        _this.view = function (state) {
            return apprun_1.default.createElement("div", null,
                apprun_1.default.createElement("h1", null, state.content),
                apprun_1.default.createElement("div", { id: "authorize-container" }));
        };
        _this.update = {
            '#authorize': function (state) {
                !firebase_auth_1.user && setTimeout(function () { return apprun_1.default.run("#signin", "authorize-container"); });
                return state;
            },
        };
        return _this;
    }
    return authorizeComponent;
}(apprun_1.Component));
exports.default = authorizeComponent;
//# sourceMappingURL=authorize.js.map