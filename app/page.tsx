import LinkforBio from "@/components/linkforbio";
import Tabs from "@/components/tabs";
import MusicPlayer from "@/components/musicPlayer";
import Footer from "@/components/footer";
import Album from "@/components/album";
import Interact from "@/components/interact";
import MouseTrail from "@/components/mousetrail";
import PersonalStore from "@/components/personalStore";

export default function Home() {

  return (
    <>
      <main>
        <MouseTrail/>
        <Interact/>
        <LinkforBio />
        <MusicPlayer />
        <Tabs />
        <PersonalStore/>
        <Album />
        <Footer />
      </main>
    </>
  );
}
