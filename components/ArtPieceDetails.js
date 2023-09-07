import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({
  imageSource,
  name,
  artist,
  year,
  genre,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <button>
        <Link href="/art-pieces">Back</Link>
      </button>
      <FavoriteButton onClick={onToggleFavorite} isFavorite={isFavorite} />
      <Image src={imageSource} width={500} height={500} alt={name} />
      <p>
        {artist}: {name}
      </p>
      <p>
        {year} / {genre}
      </p>
    </>
  );
}
