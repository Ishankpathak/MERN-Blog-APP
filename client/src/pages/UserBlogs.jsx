import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";
const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  //get user blog
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`/api/v1/blog/user-blog/${id}`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={blog.createdAt}
          />
        ))
      ) : (
        <>
          <h1 style={{ textAlign: "center", marginTop: "30vh" }}>
            You have not created a blog || reload
          </h1>
        </>
      )}
    </div>
  );
};

export default UserBlogs;
