import firebase from 'firebase/app'
import  "firebase/firestore";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6vIZ5rSWoLczzIQUNvUJf4o0QZYehk58",
    authDomain: "fir-first-project-1e9cd.firebaseapp.com",
    projectId: "fir-first-project-1e9cd",
    storageBucket: "fir-first-project-1e9cd.appspot.com",
    messagingSenderId: "665888028481",
    appId: "1:665888028481:web:5b9d91a984900a78d0d3c0",
    measurementId: "G-TPYL6D9DYF"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})
  
  export default firebase