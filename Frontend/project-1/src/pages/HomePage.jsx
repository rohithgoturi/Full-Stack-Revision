import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5 text-black">

      <h1 className="text-3xl font-bold font-sans">Welcome Back!</h1>

      <div className="flex items-center justify-center gap-5">
        <button 
        onClick={()=> navigate('/create-post')}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Create Post
        </button>

        <button 
        onClick={() => {
            navigate('/view-post')
        }}
        className="px-4 py-2 bg-gray-500 text-white rounded-lg">
          View Posts
        </button>
      </div>
    </div>
  );
};

export default HomePage;
