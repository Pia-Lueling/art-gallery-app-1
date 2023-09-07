import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesOverview({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
