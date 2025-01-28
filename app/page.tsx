"use client";

import LinkforBio from "@/components/linkforbio";
import Tabs from "@/components/tabs";
import MusicPlayer from "@/components/musicPlayer";
import Footer from "@/components/footer";
import Album from "@/components/album";




export default function Home() {

  return (
    <>
      <main>
      <LinkforBio />
      <MusicPlayer/>
      <Tabs/>
      <Album/>
      <Footer />
      </main>
    </>
  );
}
