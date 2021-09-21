// Firebase App (the core Firebase SDK) is always required and must be listed first

// Add the Firebase products that you want to use
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCqzFsTICCuvjuRQ7jAHT1_FdNa_XgwJr4",
    authDomain: "whatsapp-mern-ede89.firebaseapp.com",
    projectId: "whatsapp-mern-ede89",
    storageBucket: "whatsapp-mern-ede89.appspot.com",
    messagingSenderId: "774542002593",
    appId: "1:774542002593:web:c001b535e0d53cf6e763e0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;