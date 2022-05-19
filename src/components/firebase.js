import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {                                                  //a key to initialize our firebase project
    apiKey: "AIzaSyBkgfN5Nzf59-Kb5aDs_q0BG_AtrUGtkow",
    authDomain: "netflix-clone-16f76.firebaseapp.com",
    projectId: "netflix-clone-16f76",
    storageBucket: "netflix-clone-16f76.appspot.com",
    messagingSenderId: "483800788945",
    appId: "1:483800788945:web:a8accd8cc72052d057baf0",
    measurementId: "G-6ZFFLQZ9JZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initialize app with credentials/key

const db = firebaseApp.firestore();                   //firestore is the databse provided by firebase to keep track of users in real timee

const auth = firebase.auth();

export { auth }

export default db