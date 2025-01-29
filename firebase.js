import { initializeApp } from "firebase/app";
import { getDatabase, ref, update, onValue, serverTimestamp, increment } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYbNpbetNWc7MaKzWHESheYaO48n-ZGu4",
    authDomain: "jkeroro-website.firebaseapp.com",
    projectId: "jkeroro-website",
    storageBucket: "jkeroro-website.appspot.com", // Fixed the typo here
    messagingSenderId: "518841981397",
    appId: "1:518841981397:web:ac6b8202d7c29dc45ec55c",
    databaseURL: "https://jkeroro-website-default-rtdb.firebaseio.com/" // Ensure your database URL is correct
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to increment viewer count atomically
const incrementViewCount = () => {
    const countRef = ref(database, 'viewCount');
    
    // Atomically increment the count
    update(countRef, {
        count: increment(1),
        lastUpdated: serverTimestamp() // Store timestamp of last visit
    });
};

// Export Firebase functionalities
export { database, ref, update, onValue, incrementViewCount };