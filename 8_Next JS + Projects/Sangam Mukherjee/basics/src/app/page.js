'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router=useRouter();
  const handelRoute=()=>{
    router.push("account")
  }
  return (
   <div>
    Hi Srijit
    <Link href={"/products"}>Product</Link>
     <button onClick={handelRoute}>Go to account</button>
   </div>
  );
}
