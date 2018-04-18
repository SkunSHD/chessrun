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
var firebase = require("firebase");
var firebaseui = require("firebaseui");
var config = {
    apiKey: "AIzaSyCsaEXo297Mo1Js08CUQ9DzWSYqJDQBdRo",
    authDomain: "cheessons.firebaseapp.com",
    databaseURL: "https://cheessons.firebaseio.com",
    projectId: "cheessons",
    storageBucket: "cheessons.appspot.com",
    messagingSenderId: "105788159539"
};
firebase.initializeApp(config);
exports.db = firebase.firestore();
var uiConfig = {
    signInSuccessUrl: '#',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ]
    // Terms of service url.
    // tosUrl: '<your-tos-url>'
};
firebase.auth().onAuthStateChanged(function (_user) {
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
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var firebaseComponent = (function (_super) {
    __extends(firebaseComponent, _super);
    function firebaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.update = {
            '#signin': function (state, nodeId) {
                ui.start("#" + nodeId, uiConfig);
            },
            '#signout': function (_) {
                firebase.auth().signOut();
                document.location.replace(document.location.origin);
            },
        };
        return _this;
    }
    return firebaseComponent;
}(apprun_1.Component));
exports.default = firebaseComponent;
//# sourceMappingURL=firebase-auth.js.map