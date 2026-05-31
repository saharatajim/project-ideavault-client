"use client"
import Image from "next/image"

export default function CommentSection() {
  return (
    <div className="container mx-auto mt-8 p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Comments</h2>

      {/* Input */}
      <form className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Write a comment..."
          className="flex-1 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
        />
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      {/* Example List */}
      <div className="space-y-3">
        <div className="p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              width={32}
              height={32}
              className="rounded-full border"
            />
            <div>
              <p className="font-medium">Tajim Ahmed</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">May 31, 2026</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">This is a sample comment for design only.</p>

          {/* Actions */}
          <div className="flex gap-3 mt-2 text-sm">
            <button className="text-blue-600 hover:underline">Edit</button>
            <button className="text-red-600 hover:underline">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}
