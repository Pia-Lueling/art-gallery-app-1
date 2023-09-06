import GlobalStyle from "../styles";
import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import ArtPieces from "../components/ArtPieces";
import Layout from "@/components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const {
    data: pieces,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={isLoading || error ? [] : pieces} />
      <Layout />
    </>
  );
}
