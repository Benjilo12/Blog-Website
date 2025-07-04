import { NotebookPen } from "lucide-react";
import { useEffect, useState } from "react";
import { MessagesSquare } from "lucide-react";
import { SquarePen } from "lucide-react";
import { Notebook } from "lucide-react";
import BlogTableItem from "./BlogTableItem";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    blogs: 10,
    comments: 6,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashboardData = async () => {
    setDashboardData(dashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);
  return (
    <div className="flex-1 p-4 md:p-10">
      <div className="flex flex-wrap gap-15">
        <div className="flex items-center gap-4 shadow-2xl p-4 min-w-58 rounded  cursor-pointer hover:scale-105 transition-all dark:bg-gray-800">
          <NotebookPen className="text-blue-500 dark:text-gray-50" />

          <p className="text-xl font-semibold text-gray-600 dark:text-pink-400">
            {dashboardData.blogs}
          </p>
          <p className=" font-bold dark:text-emerald-500 text-blue-500">
            Blogs
          </p>
        </div>
        <div className="flex items-center gap-4  p-4 min-w-58 rounded shadow-2xl cursor-pointer hover:scale-105 transition-all dark:bg-gray-800">
          <MessagesSquare className="text-blue-500 dark:text-gray-50" />

          <p className="text-xl font-semibold text-gray-600 dark:text-pink-400">
            {dashboardData.comments}
          </p>
          <p className="text-blue-500 font-bold dark:text-emerald-500">
            Comments
          </p>
        </div>
        <div className="flex items-center gap-4 shadow-2xl  p-4 min-w-58 rounded  cursor-pointer hover:scale-105 transition-all dark:bg-gray-800">
          <SquarePen className="text-blue-500 dark:text-gray-50" />

          <p className="text-xl font-semibold text-gray-600 dark:text-pink-400">
            {dashboardData.drafts}
          </p>
          <p className="text-blue-500 font-bold dark:text-emerald-500">
            Drafts
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 m-4 mt-15 text-gray-600">
        <Notebook className="text-blue-500 dark:text-gray-50" />
        <h1 className="text-xl font-semibold dark:text-green-400">
          Recent Blogs
        </h1>
      </div>
      <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white dark:bg-gray-800">
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
            {dashboardData.recentBlogs.map((blog, index) => {
              return (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboardData}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
