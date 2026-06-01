"use server"

// import { revalidatePath } from "next/cache";

   export const addIdeas=async(ideas)=>{
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(ideas)
    })
    const data = await res.json()
    console.log(data, "dta")

   }

   export const getIdeas=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`)
    const ideas=await res.json()
    return ideas
   }

   export const selectedIdea= async(id)=>{
      const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`)
    const SelectedIdea=await res.json()
    return SelectedIdea
   }
   export const getMyIdea= async(id)=>{
      const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${id}`)
    const myIdea=await res.json()
    return myIdea
   }
   export const deleteMyIdea= async(id)=>{
      const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${id}`,{
        method:"DELETE",
         headers: {
        'content-type': 'application/json'
      },
      
      })
    const deleteIdea=await res.json()
    return deleteIdea
   }
   export const updateMyIdea= async(id,data)=>{
      const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${id}`,{
        method:"PATCH",
         headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(data)
      
      })
    const updateIdea=await res.json()
    return updateIdea
   }

  export const postComments=async(comments)=>{
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(comments)
    })
    const data = await res.json()
    console.log(data, "dta")

   }

      export const getComments=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`)
    const comments=await res.json()
    return comments
   }
   export const deleteComment= async(id)=>{
      const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${id}`,{
        method:"DELETE",
         headers: {
        'content-type': 'application/json'
      },
      
      })
    const deleteData=await res.json()
    return deleteData
   }