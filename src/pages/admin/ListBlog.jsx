import { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";
import BlogTableItem from "./BlogTableItem";

function ListBlog() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(blog_data); // Assuming blog_data is an array
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 ">
      <h1 className="dark:text-gray-50 mb-6">All blogs</h1>
      <div className="relative h-4/5 max-w-6xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white dark:bg-gray-800">
        <table className="w-full text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-600 text-left uppercase dark:bg-gray-800 dark:text-gray-50">
            <tr>
              <th scope="col" className="px-2 py-4 xl:px-6">
                #
              </th>
              <th scope="col" className="px-2 py-4">
                Blog Title
              </th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-2 py-4">
                Status
              </th>
              <th scope="col" className="px-2 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Fixed: Map directly over blogs array */}
            {blogs.map((blog, index) => (
              <BlogTableItem
                key={blog._id}
                blog={blog}
                fetchBlogs={fetchBlogs}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListBlog;
