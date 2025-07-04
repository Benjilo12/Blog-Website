import { X } from "lucide-react";

function BlogTableItem({ blog, fetchBlogs, index }) {
  const { title, createdAt } = blog;

  const BlogDate = new Date(createdAt);
  return (
    <tr className="border-y border-gray-300 dark:border-gray-600">
      <th className="px-2 py-4 dark:text-gray-300 text-gray-800">{index}</th>
      <td className="px-2 py-4 dark:text-gray-300 text-gray-800">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p
          className={`${
            blog.isPublished ? "text-green-600" : "text-orange-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>
      <td className="px-2 py-4 flex  text-xs gap-3">
        <button className="border px-2 py-1 mt-1 rounded cursor-pointer dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition text-gray-600">
          {" "}
          {blog.isPublished ? "Unpublished" : "Published"}
        </button>
        <X className="w-8 hover:scale-110 transition text-red-700 cursor-pointer dark:text-red-400" />
      </td>
    </tr>
  );
}

export default BlogTableItem;
