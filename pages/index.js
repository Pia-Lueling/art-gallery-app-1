import ArtPieces from "@/components/ArtPieces";
import Image from "next/image";
import { useRouter } from "next/router";
import Spotlight from "@/components/Spotlight";

export default function HomePage({ pieces }) {
  return (
    <>
      <h1>Art Gallery App</h1>
      <Spotlight pieces={pieces} />
    </>
  );
}
