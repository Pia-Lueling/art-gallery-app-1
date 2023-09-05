import useSWR from "swr";
import ArtPieces from "@/components/Artpieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  return <ArtPieces pieces={isLoading || error ? [] : data} />;
}
