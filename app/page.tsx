"use client";

import Background from "@/components/background";
import LinkforBio from "@/components/linkforbio";
import Tabs from "@/components/tabs";
import MusicPlayer from "@/components/musicPlayer";
import Footer from "@/components/footer";


export default function Home() {

  return (
    <>
      <Background />
      <LinkforBio />
      <MusicPlayer/>
      <Tabs/>
      <Footer />
    </>
  );
}
