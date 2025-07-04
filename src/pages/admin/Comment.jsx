import { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";
import CommentTableItem from "../../components/admin/CommentTableItem";

function Comment() {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const fetchComments = async () => {
    setComments(comments_data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12">
      <div className="flex justify-between items-center max-w-5xl">
        {" "}
        {/* Increased max width */}
        <h1 className="dark:text-gray-50 text-gray-800 text-xl font-bold">
          Comments
        </h1>{" "}
        {/* Improved styling */}
        <div className="flex gap-4">
          <button
            onClick={() => setFilter("Approved")}
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs text-white ${
              filter === "Approved"
                ? "bg-emerald-500 border-emerald-500"
                : "bg-blue-600 border-blue-600 hover:bg-blue-700"
            } transition-colors`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("Not Approved")}
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs text-white ${
              filter === "Not Approved"
                ? "bg-red-500 border-red-500"
                : "bg-red-400 border-red-400 hover:bg-red-500"
            } transition-colors`}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* Increased max width and added dark mode styling */}
      <div className="relative h-4/5 max-w-5xl overflow-auto mt-8 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <table className="w-full">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-300 bg-gray-100 dark:bg-gray-700">
            {" "}
            {/* Dark mode header */}
            <tr>
              <th scope="col" className="px-6 py-3 w-2/5">
                {" "}
                {/* Wider column */}
                Blog Title & Comment
              </th>
              <th scope="col" className="px-6 py-3 w-1/5">
                {" "}
                {/* Defined width */}
                Date
              </th>
              <th scope="col" className="px-6 py-3 w-1/5">
                {" "}
                {/* Defined width */}
                Commenter
              </th>
              <th scope="col" className="px-6 py-3 w-1/5">
                {" "}
                {/* Defined width */}
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="dark:text-gray-300">
            {" "}
            {/* Dark mode text */}
            {comments
              .filter((comment) => {
                if (filter === "Approved") return comment.isApproved === true;
                return comment.isApproved === false;
              })
              .map((comment) => (
                <CommentTableItem
                  key={comment._id}
                  comment={comment}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Comment;
