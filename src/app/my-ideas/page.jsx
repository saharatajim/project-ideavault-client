import MyideaCard from "@/components/MyideaCard";
import { getMyIdea } from "@/lib/action";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


import Image from "next/image";

const MyIdeas=async ()=>{

const session = await auth.api.getSession({
    headers: await headers() 
})

const userId=session?.user.id

const myIdeas=await getMyIdea(userId)
console.log(myIdeas)
  return(

 <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">My Ideas</h1>
{
  myIdeas.map((IdeaCard,index)=><MyideaCard IdeaCard={IdeaCard} key={index}/>)
}

    </div>
  );
}
export default MyIdeas;