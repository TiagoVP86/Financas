import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyAzaSjv5opH4wQu24ZlpmGRvQvJ_iBl-DU",
    authDomain: "financas-fa640.firebaseapp.com",
    databaseURL: "https://financas-fa640-default-rtdb.firebaseio.com",
    projectId: "financas-fa640",
    storageBucket: "financas-fa640.appspot.com",
    messagingSenderId: "779770479069",
    appId: "1:779770479069:web:7e9e06c64c560c2af87634",
    measurementId: "G-FW54KH7MXK"
  };

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;