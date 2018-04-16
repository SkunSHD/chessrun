import app, { Component } from 'apprun';

import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';


const config = {
  apiKey: "AIzaSyCsaEXo297Mo1Js08CUQ9DzWSYqJDQBdRo",
  authDomain: "cheessons.firebaseapp.com",
  databaseURL: "https://cheessons.firebaseio.com",
  projectId: "cheessons",
  storageBucket: "cheessons.appspot.com",
  messagingSenderId: "105788159539"
};

firebase.initializeApp(config);

// export const db = firebase.firestore();

const uiConfig = {
  signInSuccessUrl: '#',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  // tosUrl: '<your-tos-url>'
};

export let user;

firebase.auth().onAuthStateChanged(function (_user) {
  if (_user) {
    user = _user;
  } else {
    user = null;
  }
  app.run('#auth');
});

const ui = new firebaseui.auth.AuthUI(firebase.auth());

export default class firebaseComponent extends Component {
  update = {
    '#signin': (state, nodeId) => {
        ui.start(`#${nodeId}`, uiConfig);
    },
    '#signout': _ => {
      firebase.auth().signOut();
      document.location.replace(document.location.origin);
    },
  }
}