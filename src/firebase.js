import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyCqzFsTICCuvjuRQ7jAHT1_FdNa_XgwJr4",
  authDomain: "whatsapp-mern-ede89.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-ede89-default-rtdb.firebaseio.com",
  projectId: "whatsapp-mern-ede89",
  storageBucket: "whatsapp-mern-ede89.appspot.com",
  messagingSenderId: "774542002593",
  appId: "1:774542002593:web:c001b535e0d53cf6e763e0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
