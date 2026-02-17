import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ViewPost = () => {
  const [posts, setPosts] = useState([
    <h1 key="default" className="text-black">No posts available</h1>
  ]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/view-posts");
        setPosts(res.data.posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-5 overflow-y-scroll mt-5">
      <h1 className="text-3xl font-bold font-sans">PHOTOS FEED</h1>
    
      {posts.map((post) => (
        <div
          key={post._id}
          className="w-full p-2"
        >
          <img
            src={post.image}
            alt={post.caption}
            className="w-full h-48 object-fit rounded-lg"
          />
          <p className="text-center mt-2 bg-gray-100">{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewPost;
