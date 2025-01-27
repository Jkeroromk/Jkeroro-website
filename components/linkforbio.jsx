'use client';

import Image from "next/image";
import React, { useState, memo } from "react";
import { Button } from "./ui/button";
import { Bell, Share } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaSpotify,
  FaSoundcloud,
} from "react-icons/fa";

const LinkforBio = memo(() => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <section className="relative flex flex-col items-center mt-8 mx-4">
        {/* Header Image */}
        <Image
          src="/header.webp"
          alt="header"
          height={600}
          width={600}
          className="rounded-2xl"
          priority
        />
        {/* Buttons on top of the image */}
        <div className="absolute top-0 flex items-center justify-center gap-8 mt-3">
          <Button variant="ghost" className="text-white hover:text-black flex items-center">
            <Bell className="mr-2" />
            Subscribe
          </Button>
          <Button variant="ghost" className="text-white hover:text-black flex items-center">
            <Share className="mr-2" />
            Share
          </Button>
        </div>
        {/* Avatar with Skeleton Fallback */}
        <div className="relative mt-[-40px]">
          <Avatar className="size-20 border w-[80px] h-[80px]">
            <AvatarImage
              src="/pfp.jpg"
              alt="Avatar"
              onLoad={() => setIsLoading(false)}
              className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
            />
            <AvatarFallback>
              {isLoading && (
                <div className="animate-pulse flex items-center justify-center bg-gray-300 rounded-full w-full h-full">
                  <div className="w-[40px] h-[40px] bg-gray-400 rounded-full"></div>
                </div>
              )}
            </AvatarFallback>
          </Avatar>
        </div>
      </section>
      <section className="flex flex-col items-center mt-12">
        <h1 className="text-white font-extrabold text-2xl">Jkeroro</h1>
        <h2 className="text-white font-semibold text-sm"> CN ‍✈️ HK ‍✈️ US </h2>
        <div className="flex gap-6 mt-6 text-white group">
          <a
            href="https://www.tiktok.com/@jkeroromk"
            target="_blank"
            rel="noopener noreferrer prefetch"
            aria-label="Visit Jkeroro on TikTok"
            className="group-hover:scale-125 transform transition-transform duration-300"
          >
            <FaTiktok size={25} />
          </a>
          <a
            href="https://www.instagram.com/jkerorozz"
            target="_blank"
            rel="noopener noreferrer prefetch"
            aria-label="Visit Jkeroro on Instagram"
            className="group-hover:scale-125 transform transition-transform duration-300"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://youtube.com/@jkeroro_mk?si=kONouwFGS9t-ti3V"
            target="_blank"
            rel="noopener noreferrer prefetch"
            aria-label="Visit Jkeroro on YouTube"
            className="group-hover:scale-125 transform transition-transform duration-300"
          >
            <FaYoutube size={25} />
          </a>
          <a
            href="https://www.twitch.tv/jkerorozz"
            target="_blank"
            rel="noopener noreferrer prefetch"
            aria-label="Visit Jkeroro on Twitch"
            className="group-hover:scale-125 transform transition-transform duration-300"
          >
            <FaTwitch size={25} />
          </a>
          <a
            href="https://open.spotify.com/user/jkeroro"
            target="_blank"
            rel="noopener noreferrer prefetch"
            aria-label="Visit Jkeroro on Spotify"
            className="group-hover:scale-125 transform transition-transform duration-300"
          >
            <FaSpotify size={25} />
          </a>
          <a
            href="https://on.soundcloud.com/B1Fe1ewaen6xbNfv9"
            target="_blank"
            rel="noopener noreferrer prefetch"
            aria-label="Visit Jkeroro on SoundCloud"
            className="group-hover:scale-125 transform transition-transform duration-300"
          >
            <FaSoundcloud size={25} />
          </a>
        </div>
      </section>
    </>
  );
});

export default LinkforBio;
