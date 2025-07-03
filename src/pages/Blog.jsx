import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";
import avatar from "../components/images/avatar.jpg";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function Blog() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState([]);
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");

  // Create slug from title (same as in BlogCard)
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const addComment = async () => {
    setComments(comments_data);
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

  const fetchComments = async () => {
    setComments(comments_data);
  };

  useEffect(() => {
    fetchComments();
  });

  return data ? (
    <div className="relative min-h-screen overflow-hidden">
      {/* Beautiful background elements */}
      <div className="absolute inset-0 -z-50">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10"></div>

        {/* Floating shapes */}
        <div className="absolute top-1/4 left-[15%] w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float dark:bg-emerald-400/10"></div>
        <div className="absolute top-1/3 right-[20%] w-56 h-56 rounded-full bg-primary/10 blur-[100px] animate-float animation-delay-3000 dark:bg-emerald-400/10"></div>
        <div className="absolute bottom-[30%] left-[40%] w-40 h-40 rounded-full bg-primary/10 blur-[100px] animate-float animation-delay-6000 dark:bg-emerald-400/10"></div>

        {/* Grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.08] dark:opacity-[0.03]"></div>
      </div>

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
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary dark:bg-emerald-400/10 dark:border-pink-400/30 dark:text-pink-400">
          Benjamin dartey
        </p>
      </div>
      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} alt="" className="rounded-3xl mb-5" />
        <div
          className="rich-text max-w-4xl mx-auto text-gray-800 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
        {/* { comment Section} */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto ">
          <p className="dark:text-emerald-500 text-blue-800  font-semibold mb-4">
            Comments({comments.length})
          </p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600 dark:bg-gray-800"
              >
                <div className="flex items-center gap-3 mb-2">
                  {/* {avatar} */}
                  <img src={avatar} alt="" className="w-6 rounded-full" />
                </div>
                <p className="font-medium dark:text-pink-500 text-blue-600">
                  {item.name}
                </p>
                <p className="text-sm max-w-md ml-8 dark:text-gray-300">
                  {item.content}
                  <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs text-blue-600 dark:text-emerald-500">
                    {Moment(item.createdAt).fromNow()}
                  </div>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4 dark:text-emerald-500">
            Add your comment
          </p>
          <form
            className="flex flex-col items-start gap-4 max-w-lg"
            onSubmit={addComment}
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full; p-2 border border-gray-300 rounded outline-none dark:bg-gray-300 dark:text-gray-800 dark:placeholder:text-gray-600"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <textarea
              placeholder="Comment"
              required
              className="w-full p-2  border-gray-300 rounded border outline-none h-48 dark:bg-gray-300 dark:text-gray-800 dark:placeholder:text-gray-600"
              onChange={(e) => setContents(e.target.value)}
              value={contents}
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer dark:bg-emerald-500 dark:hover:bg-emerald-400 shadow-sm hover:shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4 dark:text-gray-50">
            Share this article on social media
          </p>
          <div className="flex">
            {/* {will use react share video on 1:50:36} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>
      <Loader />
    </div>
  );
}

export default Blog;
