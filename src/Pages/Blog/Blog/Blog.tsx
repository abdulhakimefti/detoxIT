import React from "react";
import FooterMain from "../../Shared/Footer/FooterMain";
import NavMain from "../../Shared/Navbar/NavMain/NavMain";
import BlogMain from "../BlogMain/BlogMain";

import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <NavMain></NavMain>
      <div>
        <BlogMain></BlogMain>
      </div>

      <FooterMain></FooterMain>
    </div>
  );
};

export default Blog;
