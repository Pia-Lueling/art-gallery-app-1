import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPage({ pieces, artPiecesInfo, onToggleFavorite }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = pieces.find((piece) => piece.slug === slug);

  if (!currentArtPiece) {
    return null;
  }

  return (
    <>
      <ArtPieceDetails
        {...currentArtPiece}
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(currentArtPiece.slug)}
      />
    </>
  );
}
