import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhUdL7n0ifvn-9gIRgDurpQeTx-R7x7FI",
  authDomain: "itzik-ecommerce.firebaseapp.com",
  projectId: "itzik-ecommerce",
  storageBucket: "itzik-ecommerce.appspot.com",
  messagingSenderId: "871365197267",
  appId: "1:871365197267:web:44833d27cc7c7775730326",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
