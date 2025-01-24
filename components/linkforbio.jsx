import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Bell, Share } from "lucide-react";
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
        <div className="absolute top-0 flex gap-40 sm:gap-80 mt-3">
          <Button variant="ghost" className="text-white hover:text-black">
            <Bell />
            Subscribe
          </Button>
          <Button variant="ghost" className="text-white hover:text-black">
            <Share />
            Share
          </Button>
        </div>
        <div className="absolute bottom-[-40px]">
          <Avatar className="size-20 border ">
            <AvatarImage src="/Pfp.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-white font-extrabold text-2xl">Jkeroro</h1>
        <h2 className="text-white font-semibold text-sm"> CN ‍✈️ HK ‍✈️ US </h2>

        <div className="flex flex-row gap-6 mt-6 text-white">
          <a
            href="https://www.tiktok.com/@jkeroro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok
              size={25}
              className="hover:scale-125 transform transition-transform duration-300"
            />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/jkeroro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={25}
              className="hover:scale-125 transform transition-transform duration-300"
            />
          </a>

          {/* YouTube Icon */}
          <a
            href="https://www.youtube.com/c/jkeroro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube
              size={25}
              className="hover:scale-125 transform transition-transform duration-300"
            />
          </a>

          {/* Twitch Icon */}
          <a
            href="https://www.twitch.tv/jkeroro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitch
              size={25}
              className="hover:scale-125 transform transition-transform duration-300"
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
              className="hover:scale-125 transform transition-transform duration-300"
            />
          </a>

          {/* SoundCloud Icon */}
          <a
            href="https://soundcloud.com/jkeroro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSoundcloud
              size={25}
              className="hover:scale-125 transform transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default LinkforBio;
