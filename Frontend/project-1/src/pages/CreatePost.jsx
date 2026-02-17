import React from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.post("http://localhost:3000/create-post", formData)
    .then((res) => {
       alert("post created successfully")
       e.target.reset()
       navigate("/view-post")
    })
    .catch((err) => {
      alert("error creating post");
      console.log(err)
    })
  }
  

  return (
    <section className='w-full h-screen flex flex-col items-center justify-center gap-5 text-black'>

         <form
         className='w-3/4 h-1/2 flex flex-col items-center justify-center gap-5 border-2 border-gray-300 rounded-lg p-5 bg-gray-50'
         onSubmit={submitHandler}
         >

            <h1 className='text-3xl font-bold font-sans'>CREATE POST</h1>

            <input type="file" name="image" accept='image/*'
                className='w-full border-2 border-gray-300 rounded-lg px-2 py-1.5 text-medium'
            />

            <input type="text" name="caption" placeholder=" Enter caption" className='w-full border-2 border-gray-300 rounded-lg px-2 py-1.5 text-medium' />

                <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-lg w-full text-medium'>Submit</button>
         </form>
    </section>
  )
}

export default CreatePost