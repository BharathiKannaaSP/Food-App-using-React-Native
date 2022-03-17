import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC21YHv3m_Nz30vZfRDfkFljckWnkglu3Q",
  authDomain: "yummy-2e394.firebaseapp.com",
  projectId: "yummy-2e394",
  storageBucket: "yummy-2e394.appspot.com",
  messagingSenderId: "241452496089",
  appId: "1:241452496089:web:ba6aa5ad6eac9df3bbfac8",
  measurementId: "G-ZHF5HV03KK"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
