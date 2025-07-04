import { ImageUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import upload from "../../components/images/upload.png"; // Assuming you have an image to show as a placeholder
import Quill from "quill";
import { blogCategories } from "../../assets/assets";

function AddBlog() {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async (e) => {
    e.preventDefault();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      // Initialize Quill with custom dark mode styling
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });

      // Add dark mode class to Quill elements
      const container = editorRef.current.querySelector(".ql-container");
      const toolbar = editorRef.current.querySelector(".ql-toolbar");

      if (container) container.classList.add("ql-container-dark");
      if (toolbar) toolbar.classList.add("ql-toolbar-dark");
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1  text-gray-800 h-full overflow-scroll"
    >
      <div className=" w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow-lg rounded dark:bg-gray-700">
        <p className="dark:text-gray-50 mb-6">Upload thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? upload : URL.createObjectURL(image)}
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            type="file"
            id="image"
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        <p className=" dark:text-gray-50 mt-7">Blog title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg p-2 border mt-4 border-gray-300 outline-none rounded dark:placeholder:text-gray-400 dark:bg-gray-600 dark:text-gray-50"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <p className=" dark:text-gray-50 mt-7">Sub title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg p-2 border mt-4 border-gray-300 outline-none rounded dark:placeholder:text-gray-400 dark:bg-gray-600 dark:text-gray-50"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />
        <p className=" dark:text-gray-50 mt-7">Blog Description</p>
        <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative">
          <div ref={editorRef}></div>
          <button
            type="button"
            onClick={generateContent}
            className="absolute buttom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer dark:hover:bg-emerald-500 transition-colors dark:bg-emerald-400 underline-offset-4"
          >
            Generate with AI
          </button>
        </div>
        <p className="mt-4 dark:text-gray-100">Blog category</p>
        <select
          name="category"
          className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded dark:placeholder:text-gray-400 dark:bg-gray-600 dark:text-gray-50"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" className="dark:placeholder:text-gray-50">
            Select category
          </option>
          {blogCategories.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
}

export default AddBlog;
