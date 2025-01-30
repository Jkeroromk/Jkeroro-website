"use client";

import { useEffect, useState } from "react";
import { database, ref, incrementViewCount, onValue, update, serverTimestamp } from "../firebase";
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

const addComment = (comment) => {
  if (!comment.trim()) return;

  const commentRef = ref(database, `comments/${Date.now()}`);
  update(commentRef, {
    text: comment,
    timestamp: serverTimestamp(),
  });
};

const LinkforBio = () => {
  const [viewerCount, setViewerCount] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [error, setError] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    incrementViewCount();
    const viewerCountRef = ref(database, "viewCount");
    onValue(viewerCountRef, (snapshot) => {
      const count = snapshot.val()?.count || 0;
      setViewerCount(count);
    });
  }, []);

  useEffect(() => {
    const commentsRef = ref(database, "comments");
    onValue(commentsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const sortedComments = Object.values(data)
          .sort((a, b) => b.timestamp - a.timestamp)
          .slice(0, 5);
        setComments(sortedComments);
      }
    });
  }, []);

  const handleCommentSubmit = () => {
    if (!comment.trim()) {
      setError(true);
      return;
    }

    addComment(comment);
    setComment("");
    setError(false);
    setDialogOpen(false); // Close dialog after successful submission

    toast({
      title: "Comment Submitted",
      description: "Your comment has been posted successfully!",
      action: <ToastAction altText="Close">Close</ToastAction>,
    });
  };

  return (
    <>
      <div className="relative flex flex-col items-center mt-8 mx-4">
        <Image src="/header.webp" alt="header" height={600} width={600} className="rounded-2xl" />
        <div className="absolute top-0 flex gap-[120px] scale-[0.85] sm:gap-80 mt-3">
          <Button variant="ghost" className="text-white hover:text-black">
            <Eye /> {viewerCount} Viewers
          </Button>
          <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" className="text-white hover:text-black">
                <MessageSquare /> Comment
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#000000] text-white border border-gray-400 shadow-lg">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-lg font-semibold">Most Recent Comments</AlertDialogTitle>
                <div className="max-h-50 overflow-y-auto mb-4">
                  {comments.length > 0 ? (
                    comments.map((c, index) => (
                      <p key={index} className="text-white text-sm border-b border-gray-600 pb-2 mb-2">
                        {c.text}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">No comments yet.</p>
                  )}
                </div>
              </AlertDialogHeader>
              <h1 className="text-lg font-semibold">I want to hear from you</h1>
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
              {error && <p className="text-red-500 text-sm mt-1">Comment cannot be empty!</p>}
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-black text-white hover:bg-red-400">Cancel</AlertDialogCancel>
                <Button className="bg-black text-white hover:bg-blue-500" onClick={handleCommentSubmit}>
                  Submit
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="absolute bottom-[-40px]">
          <Avatar className="size-20 border ">
            <AvatarImage src="/pfp.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex flex-col items-center mt-12">
        <h1 className="text-white font-extrabold text-2xl">Jkeroro</h1>
        <h2 className="text-white font-semibold text-sm"> CN ✈️ HK ✈️ US </h2>
        <div className="flex flex-row gap-6 mt-6 text-white">
          <a href="#" className="hover:scale-[1.5] transition-transform duration-300"><FaTiktok size={25} /></a>
          <a href="#" className="hover:scale-[1.5] transition-transform duration-300"><FaInstagram size={25} /></a>
          <a href="#" className="hover:scale-[1.5] transition-transform duration-300"><FaYoutube size={25} /></a>
          <a href="#" className="hover:scale-[1.5] transition-transform duration-300"><FaTwitch size={25} /></a>
          <a href="#" className="hover:scale-[1.5] transition-transform duration-300"><FaSpotify size={25} /></a>
          <a href="#" className="hover:scale-[1.5] transition-transform duration-300"><FaSoundcloud size={25} /></a>
        </div>
      </div>
    </>
  );
};

export default LinkforBio;
