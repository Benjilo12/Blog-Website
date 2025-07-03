import MarqBlog from "./MarqBlog";
import { Sparkle } from "lucide-react";

function Header() {
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Light mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-emerald-200 opacity-100 dark:opacity-0"></div>

        {/* Dark mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-emerald-900/20 opacity-0 dark:opacity-100"></div>

        {/* Floating circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl dark:bg-emerald-400/10"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-primary/10 blur-3xl dark:bg-emerald-400/10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-primary/10 blur-3xl dark:bg-emerald-400/10"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-10 dark:opacity-[0.03]"></div>
      </div>

      <div className="mx-8 sm:mx-16 xl:mx-24 relative pt-10">
        <MarqBlog />
        <div className="text-center mt-16 mb-8 py-12">
          <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 backdrop-blur-sm rounded-full text-sm text-primary dark:bg-emerald-400/10 dark:border-emerald-400/30">
            <p className="dark:text-gray-100 font-bold">
              Email: benjamindarteyy@gmail.com
            </p>
            <Sparkle className="text-yellow-500 dark:text-yellow-300" />
          </div>
          <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-800 dark:text-gray-100">
            Your own{" "}
            <span className="text-primary dark:text-emerald-300">Blogging</span>{" "}
            <br className="hidden sm:block" />
            platform
          </h1>
          <p className="my-6 sm:my-8 max-w-2xl mx-auto max-sm:text-xs text-gray-600 dark:text-gray-300">
            This is your space to think out loud, to show what matters, and to
            write without filters. Whether it's one word or a thousand, your
            story starts right here
          </p>
          <form className="flex justify-between max-w-lg max-sm:scale-90 mx-auto border border-gray-300 bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm dark:bg-gray-800/50 dark:border-gray-700">
            <input
              type="text"
              placeholder="Search for blogs"
              required
              className="w-full pl-4 py-3 outline-none bg-transparent dark:placeholder:text-gray-400 dark:text-white"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 m-1 rounded-lg hover:scale-[1.02] transition-transform cursor-pointer shadow-sm hover:shadow-md dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
