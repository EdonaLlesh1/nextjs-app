import { useRouter } from next/router;
import { volumes } from "@/lib/data";

export default function VolumeDetailPage () {
    const router = useRouter();
   const { slug } = router.query;

   //gjej volumin ne baze te slug
const volume = volumes.find((volume) => volume.slug === slug);
//kontrollojme nqs volumi ekziston ,nese jo shfaqim nje sms tj
   if (!volume ) {
    return <h1>Volume not found </h1>;
   }

   return (
    <>
    <h1>{volume.title}</h1>
    <p>Author: {volume.author}</p>
    <p>Description: {volume.description}</p>

    </>
   )
}
