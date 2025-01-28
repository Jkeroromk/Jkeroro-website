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
      <a
        href="https://3d-portfolio-jade-xi.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center w-full"
      >
        <div className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-4 rounded-3xl mt-10 w-full sm:w-[550px] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_white]">
          <h1 className="text-xl font-extrabold text-black hover:text-white transition-colors duration-300">
            Personal Cv
          </h1>
          <h2 className="text-base font-extrabold text-black hover:text-white transition-colors duration-300">
            Job Only
          </h2>
        </div>
      </a>


      <h1 className="flex justify-center text-white font-extrabold text-xl mt-10">
        Personal Project Collection
      </h1>
      <div className="flex gap-x-3">
        <ArrowLeft className="text-white mt-3" />
        <h2 className="flex justify-center text-white font-extrabold text-xl mt-2">
          Swap me
        </h2>
        <ArrowRight className="text-white mt-3" />
      </div>
        <Carousel className="mt-5 w-full sm:w-[550px]" opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem className="flex justify-center">
              <a
                href="https://28-jotion-clone.vercel.app/"
                target="_blank"
                className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black hover:border-white hover:text-white transition-color duration-300 py-6 px-8 rounded-3xl w-full sm:w-[550px]"
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
                className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black hover:border-white hover:text-white transition-color duration-300 py-6 px-8 rounded-3xl w-full sm:w-[550px]"
              >
                <h1 className="text-xl font-extrabold">iPhone 15 Pro Website</h1>

                <h2 className="text-sm font-semibold">iPhone Clone Project</h2>
              </a>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <a
                href="https://nft-marketplace-internship-jet.vercel.app/"
                target="_blank"
                className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black hover:border-white hover:text-white transition-color duration-300 py-6 px-8 rounded-3xl w-full sm:w-[550px]"
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
                className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black hover:border-white hover:text-white transition-color duration-300 py-6 px-8 rounded-3xl w-full sm:w-[550px]"
              >
                <h1 className="text-xl font-extrabold">Spotify API Testing</h1>

                <h2 className="text-sm font-semibold">Personal project Tool</h2>
              </a>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <a
                href="https://jkeroro3d.vercel.app/"
                target="_blank"
                className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black hover:border-white hover:text-white transition-color duration-300 py-6 px-8 rounded-3xl w-full sm:w-[550px]"
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
                className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black hover:border-white hover:text-white transition-color duration-300 py-6 px-8 rounded-3xl w-full sm:w-[550px]"
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
                className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black hover:border-white hover:text-white transition-color duration-300 py-6 px-8 rounded-3xl w-full sm:w-[550px]"
              >
                <h1 className="text-xl font-extrabold">Libary Bookstore</h1>

                <h2 className="text-sm font-semibold">E-commerces Template</h2>
              </a>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      <a
        href="https://www.xiaohongshu.com/user/profile/678e5f43000000000e0107ac?xsec_token=YBoDy4ooZI5wbVMGN9VSpV7OGN88SSTRIr5QQntEv1awY=&xsec_source=app_share&xhsshare=CopyLink&appuid=678e5f43000000000e0107ac&apptime=1738075633&share_id=d3e00f56b0ba47ecb739975076b7eb34"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center w-full"
      >
        <div className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 rounded-3xl mt-16 w-full sm:w-[550px] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_white]">
          <h1 className="text-xl font-extrabold text-black hover:text-white transition-colors duration-300">
            Rednote
          </h1>
          <h2 className="text-sm font-semibold text-black hover:text-white transition-colors duration-300">
            Thread
          </h2>
        </div>
      </a>

      <a
        href="https://discord.gg/eD7ZRcg22H"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center w-full"
      >
        <div className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 rounded-3xl mt-10 w-full sm:w-[550px] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_white]">
          <h1 className="text-xl font-extrabold text-black hover:text-white transition-colors duration-300">
            Discord
          </h1>
          <h2 className="text-sm font-semibold text-black hover:text-white transition-colors duration-300">
            Cozy
          </h2>
        </div>
      </a>

      <a
        href="https://www.patreon.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center w-full"
      >
        <div className="flex flex-col items-center bg-white bg-opacity-40 border-2 border-black py-6 rounded-3xl mt-10 w-full sm:w-[550px] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_white]">
          <h1 className="text-xl font-extrabold text-black hover:text-white transition-colors duration-300">
            Donation
          </h1>
          <h2 className="text-sm font-semibold text-black hover:text-white transition-colors duration-300">
            Payment
          </h2>
        </div>
      </a>

    </div>
  );
};

export default Tabs;
