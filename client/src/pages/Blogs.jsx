import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  //get blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("/api/v1/blog/all-blog");
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <>
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            id={blog?._id}
            isUser={localStorage.getItem("userId") === blog?.user?._id}
            title={blog?.title}
            description={blog?.description}
            image={blog?.image}
            username={blog?.user?.username}
            time={blog?.createdAt}
          />
        ))}
    </>
  );
};

export default Blogs;
