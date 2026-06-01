"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { updateMyIdea } from "@/lib/action";

export function UpdateModal({ IdeaCard }) {
  
    const {userId}=IdeaCard
    
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updateIdeas = Object.fromEntries(formData.entries());

    console.log("Updated Data:", updateIdeas);

    await updateMyIdea(userId, updateIdeas);
     window.location.reload();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="w-25 bg-cyan-400 hover:bg-blue-500 text-white py-2 rounded-md transition">
          Update
        </div>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <h1>Update</h1>
<form onSubmit={onSubmit}>
 <div>
            <label >Title</label>
            <input
              id="title"
              name="title"
              type="text"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label >Pitch</label>
            <input
              id="pitch"
              name="pitch"
              type="text"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label>Budget</label>
            <input
              id="budget"
              name="budget"
              type="text"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label>Image Link</label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <button className="btn mt-4 "  type="submit">Save</button>
          </form>

      </AlertDialogContent>
    </AlertDialog>
  );
}
