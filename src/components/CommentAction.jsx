"use client"


import { deleteComment, updateMyComment } from "@/lib/action"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

const CommentAction=({comm})=>{
const commentId=comm._id
const handleDelete=async(id)=>{
    await deleteComment(id)
     window.location.reload()
}
const onSubmit=async(e)=>{
     e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const comment = Object.fromEntries(formData.entries())
    console.log(comment)
    await updateMyComment(commentId,comment)
        window.location.reload();
}
    return(

            <div className="flex gap-3 mt-2 text-sm">
            
            
            <button onClick={()=>handleDelete(commentId)} className="text-red-600 hover:underline">Delete</button>
             <Dialog>
        <DialogTrigger>
          <div className="text-blue-600 hover:underline">Edit</div>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={onSubmit}>
            <div className="mt-4">
            <textarea
              name="comment"
             
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <button type="submit" className="btn">edit</button>
          </form>
        </DialogContent>
      </Dialog>
          </div>
    )
}
export default CommentAction