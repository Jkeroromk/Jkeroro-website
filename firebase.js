// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAYbNpbetNWc7MaKzWHESheYaO48n-ZGu4",
    authDomain: "jkeroro-website.firebaseapp.com",
    projectId: "jkeroro-website",
    storageBucket: "jkeroro-website.firebasestorage.app",
    messagingSenderId: "518841981397",
    appId: "1:518841981397:web:ac6b8202d7c29dc45ec55c"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue };