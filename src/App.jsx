import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { ThemeProvider } from "./context/ThemeContext";

//another way
const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog/:slug" element={<Blog />} />
  </Routes>
);
function App() {
  return (
    <div className="dark:bg-gray-900">
      <ThemeProvider>{routes}</ThemeProvider>
    </div>
  );
}

export default App;
