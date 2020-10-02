import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyB4awrIxcrp7otQvRRJvjElDCIOAjfLyUM",
    authDomain: "m-city-ce66c.firebaseapp.com",
    databaseURL: "https://m-city-ce66c.firebaseio.com",
    projectId: "m-city-ce66c",
    storageBucket: "m-city-ce66c.appspot.com",
    messagingSenderId: "780345799938",
    appId: "1:780345799938:web:761680d091dbe838827e1b"
};

firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();
firebase.ref('matches').once('value').then((snapshot) => {
    console.log(snapshot.val())
})