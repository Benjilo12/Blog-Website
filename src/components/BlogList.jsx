import { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import { motion } from "motion/react";
import BlogCard from "./BlogCard";

function BlogList() {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              className={`dark:text-gray-300 cursor-pointer text-gray-500 ${
                menu === item &&
                "text-white px-4 pt-0.5 dark:text-white dark:bg-emerald-400 dark:px-4 dark:pt-0.5 dark:rounded-full"
              }`}
              onClick={() => setMenu(item)}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full dark:bg-emerald-300"
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-8 sm:mx-16 xl:grid-cols-4 mb-24 xl:mx-40">
        {blog_data
          .slice(0, 8) // First limit to 8 items
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
}

export default BlogList;
