import Link from "next/link";
import { useRouter } from "next/router";


export default function Home() {
  const router=useRouter();
  return (
   <div>
    Hi Srijit
    <Link href={"/products"}>Product</Link>
     <button onClick={()=> router.push("account")}>Go to account</button>
   </div>
  );
}
