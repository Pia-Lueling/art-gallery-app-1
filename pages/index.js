import useSWR from "swr";
import ArtPieces from "@/components/Artpieces";
import Image from "next/image";
import { useRouter } from "next/router";

const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function HomePage() {
  const { data: pieces } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (!pieces) {
    return "loading...";
  }
  return (
    <>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={pieces} />
    </>
  );
}
