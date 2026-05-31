
import Image from "next/image";

const MyideaCard=async ({IdeaCard})=>{
console.log(IdeaCard)
  return(

   <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md border border-blue-200 dark:border-gray-700 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/3 w-full h-64 relative">
            <Image
              src={IdeaCard.imageUrl}
              alt={IdeaCard.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-2/3 p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
              {IdeaCard.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {IdeaCard.pitch}
            </p>
            <p>
              <strong>Category:</strong>{" "}
              <span className="text-cyan-600 dark:text-cyan-400">{IdeaCard.category}</span>
            </p>

      
            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="flex-1 bg-blue-400 hover:bg-blue-500 text-white py-2 rounded-md transition">
                Edit
              </button>
              <button className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-white py-2 rounded-md transition">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
export default MyideaCard;