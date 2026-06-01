"use client"

import { postComments } from "@/lib/action";

const AddComments=({user})=>{
   
  const onSubmit =  async(e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const comments = Object.fromEntries(formData.entries())
  const modifiedCommentsdata = {
  ...comments,
  user,
  newDate: new Date().toISOString()   
}

  
     await postComments(modifiedCommentsdata)
  }
    return(
 <form onSubmit={onSubmit} className="flex gap-2 mb-4">
        <input
        name="comment"
          type="text"
          placeholder="Write a comment..."
          className="flex-1 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>
    )
}
export default AddComments