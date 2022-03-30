import BlobOne from "../components/Blobs/BlobOne";
import BlobThree from "../components/Blobs/BlobThree";
import BlobTwo from "../components/Blobs/BlobTwo";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Nav />
      <div className="w-full overflow-hidden">
        <BlobOne />
        <BlobTwo />
        <BlobThree />

        <HeroSection />
      </div>
    </div>
  );
}
