'use client'

import { useEffect, useState } from "react";
import { database, ref, set, onValue } from "../firebase";
import Image from "next/image";
import { Button } from "./ui/button";
import { Eye, Share } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaSpotify,
  FaSoundcloud,
} from "react-icons/fa";

const LinkforBio = () => {
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    const viewerCountRef = ref(database, 'viewerCount');

    // Increment viewer count
    onValue(viewerCountRef, (snapshot) => {
      const count = snapshot.val() || 0;
      set(ref(database, 'viewerCount'), count + 1);
    });

    // Listen for changes in viewer count
    onValue(viewerCountRef, (snapshot) => {
      setViewerCount(snapshot.val());
    });
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center mt-8 mx-4">
        {/* Image */}
        <Image
          src="/header.webp"
          alt="header"
          height={600}
          width={600}
          className="rounded-2xl"
        />
        {/* Buttons on top of the image */}
        <div className="absolute top-0 flex gap-[130px] sm:gap-80 mt-3">
          <Button variant="ghost" className="text-white hover:text-black">
            <Eye />
            {viewerCount} Viewers
          </Button>
          <Button variant="ghost" className="text-white hover:text-black">
            <Share />
            Share
          </Button>
        </div>
        <div className="absolute bottom-[-40px]">
          <Avatar className="size-20 border ">
            <AvatarImage src="/pfp.jpg"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-white font-extrabold text-2xl">Jkeroro</h1>
        <h2 className="text-white font-semibold text-sm"> CN ‍✈️ HK ‍✈️ US </h2>

        <div className="flex flex-row gap-6 mt-6 text-white">
          <a
            href="https://www.tiktok.com/@jkeroromk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok
              size={25}
              className="hover:scale-[2.0] transform transition-transform duration-300"
            />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/jkerorozz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={25}
              className="hover:scale-[2.0] transform transition-transform duration-300"
            />
          </a>

          {/* YouTube Icon */}
          <a
            href="https://youtube.com/@jkeroro_mk?si=kONouwFGS9t-ti3V"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube
              size={25}
              className="hover:scale-[2.0] transform transition-transform duration-300"
            />
          </a>

          {/* Twitch Icon */}
          <a
            href="https://www.twitch.tv/jkerorozz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitch
              size={25}
              className="hover:scale-[2.0] transform transition-transform duration-300"
            />
          </a>

          {/* Spotify Icon */}
          <a
            href="https://open.spotify.com/user/jkeroro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify
              size={25}
              className="hover:scale-[2.0] transform transition-transform duration-300"
            />
          </a>

          {/* SoundCloud Icon */}
          <a
            href="https://on.soundcloud.com/B1Fe1ewaen6xbNfv9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSoundcloud
              size={25}
              className="hover:scale-[2.0] transform transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default LinkforBio;