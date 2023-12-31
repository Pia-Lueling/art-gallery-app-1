import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Spotlight</Link>
          </li>
          <li>
            <Link href="/art-pieces">Art Gallery</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
