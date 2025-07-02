import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const { title, content, category, image, _id } = blog;

  const navigate = useNavigate();

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-"); // Remove consecutive hyphens
  };
  return (
    <div
      onClick={() => navigate(`/blog/${createSlug(title)}`)}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer dark:shadow-gray-500/50 dark:hover:shadow-gray-500/50"
    >
      <img src={image} alt={title} className="aspect-video" />
      <span className="ml-3 mt-4 px-3 mb-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs dark:text-gray-800 dark:bg-emerald-200">
        {category}
      </span>
      <div>
        <h5 className="mb-2 font-bold text-gray-900 ml-3 hover:underline hover:underline-offset-5 dark:text-white hover:text-blue-400">
          {title}
        </h5>
        <p
          className="mb-3 ml-3 text-[15px] text-gray-600  dark:text-gray-400 leading-6"
          dangerouslySetInnerHTML={{ __html: content.slice(0, 80) }}
        ></p>
      </div>
    </div>
  );
}

export default BlogCard;
