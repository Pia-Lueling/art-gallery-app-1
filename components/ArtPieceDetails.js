import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({
  imageSource,
  name,
  artist,
  year,
  genre,
}) {
  return (
    <>
      <button>
        <Link href="/art-pieces">Back</Link>
      </button>
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
