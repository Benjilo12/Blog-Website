import { Link, useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/ThemeContext";
import { LogIn } from "lucide-react";

function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer">
      <Link to="/" className="text-black text-2xl dark:text-gray-400">
        Benjis<span className="text-emerald-600">Blog</span>
      </Link>
      <div className="flex gap-7">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="px-3 py-2  bg-gray-200 rounded-md transition-all dark:text-gray-100  dark:bg-gray-900 dark:border-1 cursor-pointer"
        >
          {darkMode ? "🌙 dark mode" : "☀️ light mode"}
        </button>
        <button
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
          onClick={() => navigate("/admin")}
        >
          Login
          <LogIn />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
