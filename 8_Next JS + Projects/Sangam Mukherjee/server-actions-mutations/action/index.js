"use server"

import connectDB from "@/db";
import User from "@/model/userModel";

// For theory purpose 

// export const fetchData=async ()=>{
//     const data=await fetch('https://dummyjson.com/products');
//     const response=await data.json();
//     return response?.products;
// }

export const addNewUser=async(formData)=>{
    await connectDB();
    try{
        const newUser=await User.create(formData);
        if(newUser){
            return{
                success:false,
                message:"User created successfully"
            }
        } 
        else{
            return {
                success:false,
                message:"Something went wrong while creating user"
            }
        }

    }catch(error){
        console.log(error);
        return {
            success:false,
            message:"Something went wrong while creating user"
        }
    }
}