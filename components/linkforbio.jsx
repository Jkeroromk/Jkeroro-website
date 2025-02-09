"use client";

import { useEffect, useState } from "react";
import {
  database,
  ref,
  incrementViewCount,
  onValue,
  trackVisitorLocation,
  addComment,
} from "../firebase";
import Image from "next/image";
import { Button } from "./ui/button";
import { Eye, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaSpotify,
  FaSoundcloud,
} from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import WorldMapDialog from "@/components/worldMap";

function LinkforBio() {
  const [viewerCount, setViewerCount] = useState(0);
  const [lastActivity, setLastActivity] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [error, setError] = useState(false);
  const { toast } = useToast();

  // Track admin last activity
  useEffect(() => {
    const storedTime = localStorage.getItem("adminLastActivity");
    if (storedTime) {
      setLastActivity(storedTime);

      // Check if online within last 5 min
      const lastActiveTime = new Date(storedTime).getTime();
      const currentTime = Date.now();
      setIsOnline(currentTime - lastActiveTime < 5 * 60 * 1000);
    }

    const updateActivity = () => {
      const now = new Date().toLocaleString();
      localStorage.setItem("adminLastActivity", now);
      setLastActivity(now);
      setIsOnline(true);
    };

    document.addEventListener("mousemove", updateActivity);
    document.addEventListener("keydown", updateActivity);

    return () => {
      document.removeEventListener("mousemove", updateActivity);
      document.removeEventListener("keydown", updateActivity);
    };
  }, []);

  // Track visitor location & increment view count
  useEffect(() => {
    trackVisitorLocation();
    incrementViewCount();

    const viewerCountRef = ref(database, "viewCount");
    const unsubscribe = onValue(viewerCountRef, (snapshot) => {
      const count = snapshot.val()?.count || 0;
      setViewerCount(count);
    });

    return () => unsubscribe();
  }, []);

  // Fetch recent comments
  useEffect(() => {
    const commentsRef = ref(database, "comments");
    const unsubscribe = onValue(commentsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const sortedComments = Object.values(data)
          .sort((a, b) => b.timestamp - a.timestamp)
          .slice(0, 5);
        setComments(sortedComments);
      }
    });

    return () => unsubscribe();
  }, []);

  // Handle comment submission
  const handleCommentSubmit = async () => {
    if (!comment.trim()) {
      setError(true);
      return;
    }
    try {
      await addComment(comment);
      setComment("");
      setError(false);
      setDialogOpen(false);

      toast({
        title: "Comment Submitted",
        description: "Your comment has been posted successfully!",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center mt-8 mx-4">
        <Image
          src="/header.webp"
          alt="header"
          height={600}
          width={600}
          priority
          className="rounded-2xl"
        />
        <div className="absolute top-0 flex gap-[120px] scale-[0.85] sm:gap-80 sm:scale-[1.0] mt-3">
          {/* Viewer Button */}
          <AlertDialog open={mapOpen} onOpenChange={setMapOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" className="text-white hover:text-black">
                <Eye /> {viewerCount} Viewers
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#000] text-white border border-gray-400 shadow-lg scale-[0.9] sm:scale-[1.15]">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-base font-semibold">
                  Audience Map
                </AlertDialogTitle>
              </AlertDialogHeader>
              <WorldMapDialog />
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-black text-white hover:bg-red-400 scale-[0.9] sm:scale-[0.75]">
                  Close
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Comment Button */}
          <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" className="text-white hover:text-black">
                <MessageSquare /> Comment
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#000000] text-white border border-gray-400 shadow-lg scale-[0.85] sm:scale-[1.0]">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-lg font-semibold">
                  Most Recent Comments
                </AlertDialogTitle>
                <div className="max-h-50 overflow-y-auto mb-4">
                  {comments.length > 0 ? (
                    comments.map((c, index) => (
                      <div
                        key={index}
                        className="text-white text-sm border-b border-gray-600 pb-2 mb-2"
                      >
                        <p>{c.text}</p>
                        <p className="text-gray-400 text-xs">
                          {c.timestamp
                            ? new Date(c.timestamp).toLocaleString()
                            : "Just now"}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">No comments yet.</p>
                  )}
                </div>
              </AlertDialogHeader>
              <div className="flex items-center justify-center sm:justify-start">
                <h1 className="text-lg font-semibold">
                  I want to hear from you
                </h1>
              </div>
              <textarea
                className={`w-full p-2 bg-black text-white border ${
                  error ? "border-red-500" : "border-gray-600"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500`}
                placeholder="Type your comment..."
                rows={4}
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                  setError(false);
                }}
              />
              {error && (
                <p className="text-red-500 text-sm mt-1">
                  Comment cannot be empty!
                </p>
              )}
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-black text-white hover:bg-red-400">
                  Cancel
                </AlertDialogCancel>
                <Button
                  className="bg-black text-white hover:bg-blue-500"
                  onClick={handleCommentSubmit}
                >
                  Submit
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* Avatar & Online Indicator in a column */}
        <div className="absolute bottom-[-45px] flex flex-col gap-y-1 items-center">
          {/* Avatar */}
          <Avatar className="size-20 border">
            <AvatarImage src="/pfp.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* Status Container */}
          <div className="flex items-center gap-2 mt-1 mr-2">
            <span
              className={`w-2 h-2 rounded-full ${
                isOnline ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span className="text-white text-xs">
              {isOnline
                ? "Online"
                : `Last Active: ${lastActivity || "Unknown"}`}
            </span>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-white font-extrabold text-2xl">Jkeroro</h1>
        <h2 className="text-white font-semibold text-sm">
          CN <span className="mx-1">✈️</span> HK{" "}
          <span className="mx-1">‍✈️</span> US
        </h2>
        <div className="flex flex-row gap-6 mt-6 text-white">
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@jkeroromk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center group"
          >
            <div className="relative flex flex-col items-center">
              <FaTiktok
                size={25}
                className="hover:scale-[2.0] transform transition-transform duration-300"
              />
              <span className="absolute top-full mt-4 font-bold text-sm opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                TikTok
              </span>
            </div>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/jkerorozz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center group"
          >
            <div className="relative flex flex-col items-center">
              <FaInstagram
                size={25}
                className="hover:scale-[2.0] transform transition-transform duration-300"
              />
              <span className="absolute top-full mt-4 font-bold text-sm opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                Instagram
              </span>
            </div>
          </a>
          {/* YouTube */}
          <a
            href="https://youtube.com/@jkeroro_mk?si=kONouwFGS9t-ti3V"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center group"
          >
            <div className="relative flex flex-col items-center">
              <FaYoutube
                size={25}
                className="hover:scale-[2.0] transform transition-transform duration-300"
              />
              <span className="absolute top-full mt-4 font-bold text-sm opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                YouTube
              </span>
            </div>
          </a>
          {/* Twitch */}
          <a
            href="https://www.twitch.tv/jkerorozz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center group"
          >
            <div className="relative flex flex-col items-center">
              <FaTwitch
                size={25}
                className="hover:scale-[2.0] transform transition-transform duration-300"
              />
              <span className="absolute top-full mt-4 font-bold text-sm opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                Twitch
              </span>
            </div>
          </a>
          {/* Spotify */}
          <a
            href="https://open.spotify.com/user/jkeroro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center group"
          >
            <div className="relative flex flex-col items-center">
              <FaSpotify
                size={25}
                className="hover:scale-[2.0] transform transition-transform duration-300"
              />
              <span className="absolute top-full mt-4 font-bold text-sm opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                Spotify
              </span>
            </div>
          </a>
          {/* SoundCloud */}
          <a
            href="https://on.soundcloud.com/B1Fe1ewaen6xbNfv9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center group"
          >
            <div className="relative flex flex-col items-center">
              <FaSoundcloud
                size={25}
                className="hover:scale-[2.0] transform transition-transform duration-300"
              />
              <span className="absolute top-full mt-4 font-bold text-sm opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                SoundCloud
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default LinkforBio;
