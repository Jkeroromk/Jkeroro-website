import { initializeApp } from "firebase/app";
import { getDatabase, ref, update, serverTimestamp, increment, onValue } from "firebase/database"; // Import onValue here

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYbNpbetNWc7MaKzWHESheYaO48n-ZGu4",
    authDomain: "jkeroro-website.firebaseapp.com",
    projectId: "jkeroro-website",
    storageBucket: "jkeroro-website.appspot.com",
    messagingSenderId: "518841981397",
    appId: "1:518841981397:web:ac6b8202d7c29dc45ec55c",
    databaseURL: "https://jkeroro-website-default-rtdb.firebaseio.com/"
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
export { database, ref, update, incrementViewCount, onValue };
