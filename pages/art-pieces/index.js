import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesOverview({ pieces }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
    </>
  );
}
