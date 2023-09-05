import Image from "next/image";

export default function Spotlight({ pieces }) {
  const randomArtPiece = Math.floor(Math.random() * pieces.length);

  return (
    <>
      <Image
        src={pieces[randomArtPiece].imageSource}
        width={500}
        height={500}
      />
      <h2>{pieces[randomArtPiece].artist}</h2>
    </>
  );
}
