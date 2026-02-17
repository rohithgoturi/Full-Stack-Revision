import React from 'react'

const CreatePost = () => {
  return (
    <section className='w-full h-screen flex flex-col items-center justify-center gap-5 text-black'>

         <form
         className='w-3/4 h-1/2 flex flex-col items-center justify-center gap-5 border-2 border-gray-300 rounded-lg p-5 bg-gray-50'
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