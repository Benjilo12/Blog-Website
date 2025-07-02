import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";

function Blog() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create slug from title (same as in BlogCard)
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  useEffect(() => {
    // Find blog by matching generated slug
    const blog = blog_data.find((item) => {
      const blogSlug = createSlug(item.title);
      return blogSlug === slug;
    });

    if (blog) {
      setData(blog);
    } else {
      console.error("Blog not found:", slug);
    }

    setLoading(false);
  }, [slug]);
  return data ? (
    <div className="relative">
      <Navbar />
      <div className="text-center mt-20 text-gray-600">
        <p className="text-primary py-2 font-medium dark:text-emerald-400 inline-flex items-center justify-center gap-4 px-6  mb-8 border border-primary/40 bg-primary/10 backdrop-blur-sm rounded-full text-sm  dark:bg-emerald-400/10 dark:border-emerald-400/30 ">
          Published on {Moment(data.createdAt).format("MMM Do YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-1xl mx-auto dark:text-white text-gray-900">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg truncate mx-auto text-[18px] dark:text-gray-400">
          {data.subTitle}
        </h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary dark:bg-emerald-400/10 dark:border-emerald-400/30 dark:text-emerald-400">
          Benjamin dartey
        </p>
      </div>
      <div></div>
    </div>
  ) : (
    <div>Loading.....</div>
  );
}

export default Blog;
