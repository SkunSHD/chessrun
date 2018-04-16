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
var app_1 = require("@firebase/app");
require("@firebase/auth");
require("@firebase/firestore");
var firebaseui = require("firebaseui");
var config = {
    apiKey: "AIzaSyCsaEXo297Mo1Js08CUQ9DzWSYqJDQBdRo",
    authDomain: "cheessons.firebaseapp.com",
    databaseURL: "https://cheessons.firebaseio.com",
    projectId: "cheessons",
    storageBucket: "cheessons.appspot.com",
    messagingSenderId: "105788159539"
};
app_1.default.initializeApp(config);
exports.db = app_1.default.firestore();
var uiConfig = {
    signInSuccessUrl: '#',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        app_1.default.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        app_1.default.auth.EmailAuthProvider.PROVIDER_ID,
    ]
    // Terms of service url.
    // tosUrl: '<your-tos-url>'
};
app_1.default.auth().onAuthStateChanged(function (_user) {
    if (_user) {
        exports.user = _user;
        apprun_1.default.run('#auth');
        apprun_1.default.run('route', document.location.hash);
    }
    else {
        exports.user = null;
        apprun_1.default.run('#auth');
    }
});
var ui = new firebaseui.auth.AuthUI(app_1.default.auth());
var firebaseComponent = (function (_super) {
    __extends(firebaseComponent, _super);
    function firebaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.update = {
            '#signin': function (state, nodeId) {
                ui.start("#" + nodeId, uiConfig);
            },
            '#signout': function (_) {
                app_1.default.auth().signOut();
                document.location.replace(document.location.origin);
            },
        };
        return _this;
    }
    return firebaseComponent;
}(apprun_1.Component));
exports.default = firebaseComponent;
//# sourceMappingURL=firebase-auth.js.map