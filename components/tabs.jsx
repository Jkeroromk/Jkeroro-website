import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Tabs = () => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center w-full px-4">
      {/* Personal Cv Tab - Add an anchor link */}
      <div className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-4 rounded-3xl mt-10 w-full sm:w-[550px] animate-bounce">
        <a
          href="https://your-cv-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <h1 className="text-xl font-extrabold">Personal Cv</h1>
          <h2 className="text-sm font-semibold">Job Only</h2>
        </a>
      </div>
      
      <h1 className="flex justify-center text-white font-extrabold text-xl mt-10">Personal Project Collection</h1>
      <Carousel className="mt-5">
        <CarouselContent>
          <CarouselItem>
            <div>
              <a 
              href="https://28-jotion-clone.vercel.app/"
              className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 px-8 rounded-3xl w-full sm:w-[550px]">
                <h1 className="text-xl font-extrabold">Jotion (Notion Clone) </h1>
                <h2 className="text-sm font-semibold">Personal Note Taking App</h2>
              </a>
              </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      {/* TikTok Tab - Add an anchor link */}
      <div className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 rounded-3xl mt-16 w-full sm:w-[550px] heartbeat">
        <a
          href="https://www.tiktok.com/@yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <h1 className="text-xl font-extrabold">TikTok</h1>
          <h2 className="text-sm font-semibold">Thread</h2>
        </a>
      </div>

      {/* Discord Tab - Add an anchor link */}
      <div className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 rounded-3xl mt-10 w-full sm:w-[550px] heartbeat">
        <a
          href="https://discord.gg/yourdiscordlink"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <h1 className="text-xl font-extrabold">Discord</h1>
          <h2 className="text-sm font-semibold">Cozy</h2>
        </a>
      </div>

      {/* Donation Tab - Add an anchor link */}
      <div className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 rounded-3xl mt-10 w-full sm:w-[550px] heartbeat">
        <a
          href="https://www.patreon.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <h1 className="text-xl font-extrabold">Donation</h1>
          <h2 className="text-sm font-semibold">Payment</h2>
        </a>
      </div>

      {/* Spotify Embed */}
      <div className="flex flex-col items-center rounded-full mt-10 w-full sm:w-[550px]">
        <div className="w-full">
          <iframe
            style={{
              borderRadius: "12px",
              transform: "scale(1)", // Adjust the scale value as needed
              transformOrigin: "center", // Adjust the transform origin as needed
            }}
            src="https://open.spotify.com/embed/track/5qHXMB1vpAm7tI7Th6kazM?utm_source=generator&theme=0"
            width="100%"
            height="240"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
