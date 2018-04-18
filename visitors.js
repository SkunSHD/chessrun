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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var apprun_1 = require("apprun");
var firebase_auth_1 = require("./firebase-auth");
var fetch_1 = require("./fetch");
function onSubmit(e) {
    console.log('--> [e]', fetch_1.toQueryString(e.target));
}
var visitorsComponent = (function (_super) {
    __extends(visitorsComponent, _super);
    function visitorsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            pageName: 'visitors',
            visitors: [],
            search: ''
        };
        _this.view = function (state) {
            // if (state && state.then) return null;
            return apprun_1.default.createElement("div", { className: "row" },
                apprun_1.default.createElement("div", { className: "col-3" },
                    apprun_1.default.createElement("h3", null, "Filters:"),
                    apprun_1.default.createElement("div", { className: "btn-group-vertical", role: "group" },
                        apprun_1.default.createElement("button", { type: "button", className: "btn btn-info" }, "Visitors"),
                        apprun_1.default.createElement("button", { type: "button", className: "btn btn-secondary mt-1" }, "Anonymous"),
                        apprun_1.default.createElement("button", { type: "button", className: "btn btn-danger mt-1" }, "Deleted"),
                        apprun_1.default.createElement("form", { className: "form-inline mt-4", onsubmit: onSubmit },
                            apprun_1.default.createElement("input", { onChange: console.log, className: "form-control w-75", type: "search", placeholder: "Search", "aria-label": "Search" }),
                            apprun_1.default.createElement("button", { className: "btn btn-outline-success w-25", type: "submit" }, "\u265F")))),
                apprun_1.default.createElement("div", { className: "col-9" },
                    apprun_1.default.createElement("h1", null, state.pageName),
                    state.visitors.map(function (visitor) { return apprun_1.default.createElement("div", { style: { width: 400, border: '1px black solid' } },
                        apprun_1.default.createElement("p", null, visitor.name),
                        apprun_1.default.createElement("button", { className: "btn btn-danger", onclick: function (e) { return apprun_1.default.run('#deleteVisitor', visitor.timestamp); } }, "Delete")); })));
        };
        _this.update = {
            '#visitors': function (state) { return __awaiter(_this, void 0, void 0, function () {
                var querySnapshot, _a, result;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!state.visitors.length) return [3 /*break*/, 1];
                            _a = state.visitors;
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, firebase_auth_1.db.collection("visitors").get()];
                        case 2:
                            _a = _b.sent();
                            _b.label = 3;
                        case 3:
                            querySnapshot = _a;
                            result = [];
                            querySnapshot.forEach(function (item) { return result.push(item.data()); });
                            return [2 /*return*/, __assign({}, state, { visitors: result })];
                    }
                });
            }); },
            '#change': function (state, input) {
                return __assign({}, state, { input: input });
            },
            '#deleteVisitor': function (state, visitorId) {
                console.log('%%---> state, visitorId', state, visitorId);
                return state;
            },
            '#search': function (state, e) {
                console.log('e', e);
                alert(e.target.value);
                return state;
            }
        };
        _this.updateState = function (state, type, page, tag) { return __awaiter(_this, void 0, void 0, function () {
            var visitorsList, _a, feed, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!state.visitors.length) return [3 /*break*/, 1];
                        _a = { visitors: state.visitors };
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, firebase_auth_1.db.collection("visitors").get()];
                    case 2:
                        _a = _c.sent();
                        _c.label = 3;
                    case 3:
                        visitorsList = _a;
                        _b = type;
                        switch (_b) {
                            case 'feed': return [3 /*break*/, 4];
                            case 'search': return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 8];
                    case 4: return [4 /*yield*/, articles.feed({ limit: limit, offset: offset })];
                    case 5:
                        feed = _c.sent();
                        return [3 /*break*/, 10];
                    case 6: return [4 /*yield*/, articles.search({ tag: tag, limit: limit, offset: offset })];
                    case 7:
                        feed = _c.sent();
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, articles.search({ limit: limit, offset: offset })];
                    case 9:
                        feed = _c.sent();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/, __assign({}, state, { tags: tagList.tags, type: type, page: page, tag: tag, articles: feed.articles, max: feed.articlesCount })];
                }
            });
        }); };
        return _this;
    }
    return visitorsComponent;
}(apprun_1.Component));
exports.default = visitorsComponent;
//# sourceMappingURL=visitors.js.map