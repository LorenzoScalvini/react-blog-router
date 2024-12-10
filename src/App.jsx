import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import AddPost from "./components/AddPost/AddPost";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="addpost" element={<AddPost />} />
        </Route>
      </Routes>
    </Router>
  );
}
