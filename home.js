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
var homeComponent = (function (_super) {
    __extends(homeComponent, _super);
    function homeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            content: 'home'
        };
        _this.view = function (state) {
            return apprun_1.default.createElement("div", null,
                apprun_1.default.createElement("h1", null, state.content));
        };
        _this.update = {
            '#': function (state) { return state; }
        };
        return _this;
    }
    return homeComponent;
}(apprun_1.Component));
exports.default = homeComponent;
//# sourceMappingURL=home.js.map