import { initializeApp } from "firebase/app";
import axios from "axios";

// ✅ NEW: Import Firebase Auth
import { getAuth } from "firebase/auth";

import {
  getDatabase,
  ref,
  update,
  increment,
  onValue,
  serverTimestamp,
  push,
  set,
} from "firebase/database";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYbNpbetNWc7MaKzWHESheYaO48n-ZGu4",
  authDomain: "jkeroro-website.firebaseapp.com",
  projectId: "jkeroro-website",
  storageBucket: "jkeroro-website.appspot.com",
  messagingSenderId: "518841981397",
  appId: "1:518841981397:web:ac6b8202d7c29dc45ec55c",
  databaseURL: "https://jkeroro-website-default-rtdb.firebaseio.com/"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// -------------------------------------
// NEW: Initialize and export Firebase Auth
// -------------------------------------
const auth = getAuth(app);

// ✅ Function to Increment Viewer Count
const incrementViewCount = async () => {
  try {
    const countRef = ref(database, "viewCount");
    await update(countRef, {
      count: increment(1),
      lastUpdated: serverTimestamp(),
    });
    console.log("Viewer count updated successfully!");
  } catch (error) {
    console.error("Error updating viewer count:", error);
  }
};

// ✅ Function to Track Visitor Location
const trackVisitorLocation = async () => {
  try {
    const response = await axios.get("https://ipapi.co/json/"); // ✅ Fetch IP & Country
    const country = response.data.country_name || "Unknown";

    if (!country) return; // ✅ Prevent undefined country errors

    const countryRef = ref(database, `countries/${country}`);
    await update(countryRef, {
      count: increment(1),
      lastUpdated: serverTimestamp(),
    });

    console.log(`Visitor from ${country} recorded.`);
  } catch (error) {
    console.error("Error fetching visitor location:", error);
  }
};

// ✅ Function to Add a Comment
const addComment = (comment) => {
  if (!comment.trim()) return;

  const commentsRef = ref(database, "comments");
  const newCommentRef = push(commentsRef);

  set(newCommentRef, {
    text: comment,
    timestamp: serverTimestamp(),
  })
    .then(() => {
      console.log("Comment added successfully!");
    })
    .catch((error) => {
      console.error("Error adding comment:", error);
    });
};

// ✅ Export Firebase functionalities
export {
  database,
  auth,              // NEW export for Auth
  ref,
  update,
  increment,
  onValue,
  serverTimestamp,
  addComment,
  incrementViewCount,
  trackVisitorLocation,
};
