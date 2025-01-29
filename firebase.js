import { initializeApp } from "firebase/app";
import { getDatabase, ref, update, increment, onValue, serverTimestamp, push, set } from "firebase/database"; 

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

// ✅ Function to increment viewer count
const incrementViewCount = () => {
    const countRef = ref(database, "viewCount");

    update(countRef, {
        count: increment(1),
        lastUpdated: serverTimestamp()
    }).then(() => {
        console.log("Viewer count updated successfully!");
    }).catch((error) => {
        console.error("Error updating viewer count:", error);
    });
};

// ✅ Function to add a comment
const addComment = (comment) => {
    if (!comment.trim()) return;

    const commentsRef = ref(database, "comments");
    const newCommentRef = push(commentsRef);

    set(newCommentRef, {
        text: comment,
        timestamp: serverTimestamp()
    }).then(() => {
        console.log("Comment added successfully!");
    }).catch((error) => {
        console.error("Error adding comment:", error);
    });
};

// ✅ Export Firebase functionalities
export { database, ref, update, increment, onValue, serverTimestamp, addComment, incrementViewCount };
