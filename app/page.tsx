import Background from "@/components/background";
import LinkforBio from "@/components/linkforbio";
import Tabs from "@/components/tabs";
import Footer from "@/components/footer";
import MouseTrail from "@/components/mousetrail";

export default function Home() {
  return (
    <>
    <MouseTrail/>
    <div>
    <Background/>
    <LinkforBio/>
    <Tabs/>
    <Footer/>
    </div>
    </>
  );
}
