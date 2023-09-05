import Link from "next/link";
import ArtPiecesPreview from "./ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => {
          return (
            <li key={piece.slug}>
              <Link href={`/art-pieces/${piece.slug}`}>
                <ArtPiecesPreview
                  imageSource={piece.imageSource}
                  artist={piece.artist}
                  name={piece.name}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
