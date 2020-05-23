import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyAXy9gkn2JmPfT7eJKRHNKFrLoURKPqnpE",
  authDomain: "bewiz-4b18a.firebaseapp.com",
  databaseURL: "https://bewiz-4b18a.firebaseio.com",
  projectId: "bewiz-4b18a",
  storageBucket: "bewiz-4b18a.appspot.com",
  messagingSenderId: "97985126914",
  appId: "1:97985126914:web:5a666a652b7dcae93efd1b",
  measurementId: "G-G4NSB0JWPP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;