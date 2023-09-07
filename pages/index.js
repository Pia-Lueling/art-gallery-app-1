import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
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
            isFavorite={
              artPiecesInfo.find((piece) => piece.slug === randomArtPiece.slug)
                ?.isFavorite
            }
            onToggleFavorite={() => onToggleFavorite(randomArtPiece.slug)}
          />
        )}
      </div>
    </>
  );
}
