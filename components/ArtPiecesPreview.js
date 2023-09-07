import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecesPreview({
  imageSource,
  name,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
  positionAbsolute,
}) {
  return (
    <div>
      <FavoriteButton
        onClick={onToggleFavorite}
        isFavorite={isFavorite}
        positionAbsolute={positionAbsolute}
      />
      <Image src={imageSource} width={500} height={500} alt={name} />
      <h2>
        {name} by {artist}
      </h2>
    </div>
  );
}
