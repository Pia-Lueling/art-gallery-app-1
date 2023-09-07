import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      isFavorite={isFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="assets/heart.svg" width={20} height={20} alt="heart-icon" />
    </button>
  );
}
