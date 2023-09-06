import ArtPiecesPreview from "./ArtPiecesPreview";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <Link href={`/art-pieces/${piece.slug}`}>
              <ArtPiecesPreview
                imageSource={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
