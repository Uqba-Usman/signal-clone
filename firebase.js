import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrkty_BIlQ8FLdk-DxrcHavMN-_pgchJk",
  authDomain: "signal-clone-f9776.firebaseapp.com",
  projectId: "signal-clone-f9776",
  storageBucket: "signal-clone-f9776.appspot.com",
  messagingSenderId: "765492398228",
  appId: "1:765492398228:web:717cbb026ce1014a49cc81",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
