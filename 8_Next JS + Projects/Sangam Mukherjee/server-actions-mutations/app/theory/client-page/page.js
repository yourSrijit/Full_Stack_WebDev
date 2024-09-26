"use client"

import { fetchData } from "@/action"
import { useEffect } from "react"

function ClientPage() {

    const getData=async()=>{
        const data=await fetchData();
        console.log(data);       
    }
    useEffect(()=>{
            getData();
    },[])


  return (
    <div>ClientPage</div>
  )
}

export default ClientPage