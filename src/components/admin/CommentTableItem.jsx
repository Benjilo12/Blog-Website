import { CircleCheckBig, Trash } from "lucide-react";

function CommentTableItem({ comment, fetchComments }) {
  const { name, content, createdAt, blog, isApproved } = comment;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="border-b border-gray-300 dark:border-gray-700">
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <div>
            <b className="font-medium text-gray-600 dark:text-gray-300">
              Blog:
            </b>{" "}
            <span className="italic">{blog.title}</span>
          </div>
          <div className="mt-2">
            <b className="font-medium text-gray-600 dark:text-gray-300">
              Comment:
            </b>{" "}
            <span className="line-clamp-2">{content}</span>{" "}
            {/* Truncated long comments */}
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        {BlogDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2 dark:bg-gray-600" />{" "}
          {/* Avatar placeholder */}
          <span>{name}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!isApproved ? (
            <button className="p-1 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors cursor-pointer">
              <CircleCheckBig className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </button>
          ) : (
            <span className="text-xs border border-green-600 text-green-600 rounded-full px-3 py-1 dark:text-green-400 dark:border-green-400">
              Approved
            </span>
          )}
          <button className="p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors cursor-pointer">
            <Trash className="w-5 h-5 text-red-600 dark:text-red-400" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CommentTableItem;
