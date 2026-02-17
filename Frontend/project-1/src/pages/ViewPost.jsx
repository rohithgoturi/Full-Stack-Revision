import React from 'react'
import { useState } from 'react'

const ViewPost = () => {

    const [posts, setPosts] = useState([
        {
            _id: 1,
            image: 'https://i.pinimg.com/1200x/d6/bd/53/d6bd537f8fc745b0fa45b9d37dc91374.jpg',
            caption: 'This is a sample caption for post 1'
        }
    ])

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5 text-black">
        <h1 className='text-3xl font-bold font-sans'>PHOTOS FEED</h1>
        <div className="w-3/4 h-1/2 flex flex-col items-center justify-center gap-5">
            {posts.map(post => (
                <div key={post._id} className="w-full border-2 border-gray-300 rounded-lg p-2">
                    <img src={post.image} alt={post.caption} className="w-full h-48 object-cover rounded-lg" />
                    <p className="text-center mt-2">{post.caption}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ViewPost