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
var contactComponent = (function (_super) {
    __extends(contactComponent, _super);
    function contactComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = 'contact';
        _this.view = function (state) {
            return apprun_1.default.createElement("div", null,
                apprun_1.default.createElement("h1", null,
                    state,
                    " - ",
                    firebase_auth_1.user ? firebase_auth_1.user.displayName : '[anonymous]',
                    " "));
        };
        _this.update = {
            '#contact': function (state) { return state; },
        };
        return _this;
    }
    return contactComponent;
}(apprun_1.Component));
exports.default = contactComponent;
//# sourceMappingURL=contact.js.map