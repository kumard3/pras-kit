import BlobOne from "../components/Blobs/BlobOne";
import BlobThree from "../components/Blobs/BlobThree";
import BlobTwo from "../components/Blobs/BlobTwo";
import Nav from "../components/Nav";
import Sally from "../components/Sally";

export default function Home() {
  return (
    <div className="h-screen">
      <Nav />
      <BlobOne />
      <BlobTwo />
      <BlobThree />
      <Sally />
    
    </div>
  );
}
