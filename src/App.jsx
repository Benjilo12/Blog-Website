import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { ThemeProvider } from "./context/ThemeContext";

import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/AddBlog";
import ListBlog from "./pages/admin/ListBlog";
import Comment from "./pages/admin/Comment";
import Layout from "./pages/admin/Layout";
import Login from "./components/admin/Login";

//another way
const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog/:slug" element={<Blog />} />
    {/* dashboard layout */}
    <Route path="/admin" element={true ? <Layout /> : <Login />}>
      <Route index element={<Dashboard />} />
      <Route path="addBlog" element={<AddBlog />} />
      <Route path="ListBlog" element={<ListBlog />} />
      <Route path="comments" element={<Comment />} />
    </Route>
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
