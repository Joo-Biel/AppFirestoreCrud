import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDyilVN8os_XXZAxLYqdyhzfX00cCMpHxg",
    authDomain: "appfirestore-677bf.firebaseapp.com",
    projectId: "appfirestore-677bf",
    storageBucket: "appfirestore-677bf.appspot.com",
    messagingSenderId: "36264409735",
    appId: "1:36264409735:web:353744bec19ffe1b51d622"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)