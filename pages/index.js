import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces }) {
  const randomArtPiece = pieces
    ? pieces[Math.floor(Math.random() * pieces.length)]
    : null;
  return (
    <>
      <h1>Spotlight</h1>
      <div>
        {randomArtPiece && (
          <Spotlight
            image={randomArtPiece.imageSource}
            artist={randomArtPiece.artist}
          />
        )}
      </div>
    </>
  );
}
