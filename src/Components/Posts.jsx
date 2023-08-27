import React, { useState } from 'react'
import PostNav from './PostNav'

const Posts = () => {

    const [isClose , setIsClose] = useState(false)

    const [subject , setSubject] = useState("")
    const [desc , setDesc] = useState("")
    const [img , setImg] = useState([])

    const handleImg = (e) => {
        setImg(e.target.files)
    }

    const [post,setPost] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        setPost(prevPost => [...prevPost , {subject:subject, description : desc , image : img}])

        setDesc('')
        setSubject('')
        
    }
    console.log(post)

  return (
    <div>
        <PostNav />
        <div className='h-screen bg-blue-400'>
        <div className='flex p-4 justify-between'>
            <h1 className='text-4xl font-semibold'>Your posts</h1>
            <button className="bg-[#D33852] hover:bg-red-500 flex w-[188px] h-[40px] justify-center items-center gap-2 flex-shrink-0 rounded-lg px-3 mr-5">
            Create new post</button>
        </div>

        <div>
            <div className={`w-[458px] absolute top-[20%] left-[50%] transform translate-x-[-50%] h-[384px] flex-col justify-center items-center rounded-lg border ${isClose && 'hidden'} border-[#EBEBEB] shadow-md bg-[#FFF] `} >
                <div className="flex justify-between items-center">
                <div>
                <h1 className="text-[20px] ml-[26px] mt-[21px]  leading-7 font-bold">Create a post</h1>
                <p className='ml-[26px] '>Write something for your post</p>
                </div>
                
                <button
                 className="w-5 h-5 flex-shrink-0 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.30806 3.30806C3.55214 3.06398 3.94786 3.06398 4.19194 3.30806L16.6919 15.8081C16.936 16.0521 16.936 16.4479 16.6919 16.6919C16.4479 16.936 16.0521 16.936 15.8081 16.6919L3.30806 4.19194C3.06398 3.94786 3.06398 3.55214 3.30806 3.30806Z" fill="#484848"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6919 3.30806C16.4479 3.06398 16.0521 3.06398 15.8081 3.30806L3.30806 15.8081C3.06398 16.0521 3.06398 16.4479 3.30806 16.6919C3.55214 16.936 3.94786 16.936 4.19194 16.6919L16.6919 4.19194C16.936 3.94786 16.936 3.55214 16.6919 3.30806Z" fill="#484848"/>
                </svg>
                </button>
                </div>
                <form onSubmit={handleSubmit}>
                <h1 className='text-lg ml-[24px] font-semibold mt-2 mb-[-10px]'>Subject</h1>
                <input type="text" 
                placeholder="Type Here"
                value={subject}
                onChange={(e) =>setSubject(e.target.value)}
                className="w-[407px] mt-[16px] ml-[26px] text-lg h-12 flex-shrink-0 rounded border borde-[#DBDBDB] bg-[#FFF]" 
                />
                <div className='mt-4'>
                <label
                className='ml-[24px] '
                 for="image">Add a image:  </label>
                <input type="file" id="image" onChange={handleImg} name="image" />
                </div>
                

                <h1 className='text-lg ml-[24px] font-semibold mt-2 mb-[-10px]'>What’s on your mind?</h1>
                <input type="text"
                placeholder="Type Here"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-[407px] h-16 mt-[16px] ml-[26px] text-lg  flex-shrink-0 rounded border borde-[#DBDBDB] bg-[#FFF]" 
                />

                <button type="submit" className="flex w-[126px] mt-7 ml-[305px] h-10 pt-4 pb-5 justify-center items-center gap-6 flex-shrink-0 rounded-lg bg-[#AF273E]">
                    <h1 className="text-white">Publish</h1>
                </button>
                </form>
            </div>

        </div>
        </div>
        
    </div>
   
  )
}

export default Posts