"use server"

export const fetchData=async ()=>{
    const data=await fetch('https://dummyjson.com/products');
    const response=await data.json();
    return response?.products;
}