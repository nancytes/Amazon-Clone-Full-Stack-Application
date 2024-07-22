import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import "firebase/compat/auth"
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU3jgqiSlNU3OSZgDpDncbCy_DowG_bhA",
  authDomain: "clone-3fe73.firebaseapp.com",
  projectId: "clone-3fe73",
  storageBucket: "clone-3fe73.appspot.com",
  messagingSenderId: "299529350922",
  appId: "1:299529350922:web:638a18eada9295a71cd4f3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = app.firestore();
export {auth, db};
