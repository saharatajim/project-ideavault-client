"use client"

import { deleteComment } from "@/lib/action"

const CommentAction=({comm})=>{
const commentId=comm._id
const handleDelete=async(id)=>{
    await deleteComment(id)
}
    return(

            <div className="flex gap-3 mt-2 text-sm">
            <button className="text-blue-600 hover:underline">Edit</button>
            <button onClick={()=>handleDelete(commentId)} className="text-red-600 hover:underline">Delete</button>
          </div>
    )
}
export default CommentAction