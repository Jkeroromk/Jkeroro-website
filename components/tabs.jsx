import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Tabs = () => {
  return (
    <div className="mt-2 flex flex-col justify-center items-center w-full px-4 z-10">
      {/* Personal Cv Tab - Add an anchor link */}
      <div className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-4 rounded-3xl mt-10 w-full sm:w-[550px] animate-bounce">
        <a
          href="https://3d-portfolio-jade-xi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <h1 className="text-xl font-extrabold">Personal Cv</h1>
          <h2 className="text-sm font-semibold">Job Only</h2>
        </a>
      </div>

      <h1 className="flex justify-center text-white font-extrabold text-xl mt-10">
        Personal Project Collection
      </h1>
      <div className="flex gap-x-3">
        <ArrowLeft className="text-white mt-3"/>
        <h2 className="flex justify-center text-white font-extrabold text-xl mt-2">
          Swap me
        </h2>
        <ArrowRight className="text-white mt-3"/>
      </div>
      <Carousel className="mt-5 w-full sm:w-[550px]" opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem className="flex justify-center">
            <a
              href="https://28-jotion-clone.vercel.app/"
              target="_blank"
              className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 px-8 rounded-3xl w-full sm:w-[550px]"
            >
              <h1 className="text-xl font-extrabold">Jotion</h1>

              <h2 className="text-sm font-semibold">
                Personal Note Taking App (Notion Clone)
              </h2>
            </a>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <a
              href="https://iphone-jkeroro-clone.vercel.app/"
              target="_blank"
              className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 px-8 rounded-3xl w-full sm:w-[550px]"
            >
              <h1 className="text-xl font-extrabold">iPhone 15 Pro Website</h1>

              <h2 className="text-sm font-semibold">iPhone Clone Project</h2>
            </a>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <a
              href="https://nft-marketplace-internship-jet.vercel.app/"
              target="_blank"
              className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 px-8 rounded-3xl w-full sm:w-[550px]"
            >
              <h1 className="text-xl font-extrabold">NFT Marketplace Intern</h1>

              <h2 className="text-sm font-semibold">
                Personal Intern Template
              </h2>
            </a>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <a
              href="https://spotify-roon-model-w6.vercel.app/"
              target="_blank"
              className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 px-8 rounded-3xl w-full sm:w-[550px]"
            >
              <h1 className="text-xl font-extrabold">Spotify API Testing</h1>

              <h2 className="text-sm font-semibold">Personal project Tool</h2>
            </a>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <a
              href="https://jkeroro3d.vercel.app/"
              target="_blank"
              className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 px-8 rounded-3xl w-full sm:w-[550px]"
            >
              <h1 className="text-xl font-extrabold">
                3D Personal Website Project
              </h1>

              <h2 className="text-sm font-semibold">
                Unlock Three Js mileStone
              </h2>
            </a>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <a
              href="https://jkeroromk.github.io/One-to-one-Final-Project-/"
              target="_blank"
              className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 px-8 rounded-3xl w-full sm:w-[550px]"
            >
              <h1 className="text-xl font-extrabold">Treact Website</h1>

              <h2 className="text-sm font-semibold">
                Fully Responsive Landing Page
              </h2>
            </a>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <a
              href="https://react-book-store-iota.vercel.app/"
              target="_blank"
              className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 px-8 rounded-3xl w-full sm:w-[550px]"
            >
              <h1 className="text-xl font-extrabold">Libary Bookstore</h1>

              <h2 className="text-sm font-semibold">E-commerces Template</h2>
            </a>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 rounded-3xl mt-16 w-full sm:w-[550px] heartbeat">
        <a
          href="https://www.tiktok.com/@yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <h1 className="text-xl font-extrabold">Rednote</h1>
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
    </div>
  );
};

export default Tabs;
