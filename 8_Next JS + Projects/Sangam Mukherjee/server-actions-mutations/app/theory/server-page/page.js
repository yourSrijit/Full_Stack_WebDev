// const fetchData=async ()=>{
//     const data=await fetch('https://dummyjson.com/products');
//     const response=await data.json();
//     return response?.products;
// }

import { fetchData } from "@/action";
async function ServerPage() {

    // const fetchData=async ()=>{
    //     "use server"
    //         const data=await fetch('https://dummyjson.com/products');
    //         const response=await data.json();
    //         return response?.products;
    //     }


    
    // const data=await fetchData();
    // console.log(data);
    
  return (
    <div>ServerPage</div>
  )
}

export default ServerPage