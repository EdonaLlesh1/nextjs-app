import Link from "next/link";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";


export default function Volumes() {
  const router = useRouter();
  
  const navigateToRandomVolume = () => {
    if(confirm("Go to a random volume?")){
      router.push("/volumes");
    }
  };

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
      <button type="button"
      onClick={navigateToRandomVolume}>Random Volume</button>
    </>
  );
}
