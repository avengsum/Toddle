import React, { useEffect, useState } from 'react'
import PostComponent from './PostComponent'
import { useDispatch , useSelector } from 'react-redux'
import { addPost  } from '../assets/postSlice'
import main from '../assets/main.svg'
import bookmark from '../assets/bookmark.png'
import bookFill from '../assets/b-fill.png'
import { Link, useLocation } from 'react-router-dom'

const Posts = () => {

    const [isClose , setIsClose] = useState(true)
    const dispatch = useDispatch();
    const selector = useSelector(state => state.post)
    const bookmarkPost = useSelector(state => state.bookmark)
    let {state} = useLocation();

    console.log(bookmarkPost)

    const [subject , setSubject] = useState("")
    const [desc , setDesc] = useState("")
    const [img , setImg] = useState([])
    const [filRes , setFilRes] = useState()
    const [search , setSearch] = useState("")


    const handleImg = (e) => {
        setImg(e.target.files[0])
    }

    const [post,setPost] = useState()

    const handleDate = () => {
        const currentDate = new Date();
        
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const dateFormatter = new Intl.DateTimeFormat('en-US', options);
        
        const formattedDate = dateFormatter.format(currentDate);
        return formattedDate
        
    }
    const uniqueId = () => {
            return Date.now().toString(36) + Math.random().toString(36);
    
    }

    useEffect(() => {
        setPost(selector)
        setFilRes(selector)
    },[selector])

    const handleSubmit = (e) => {
        e.preventDefault()
        setPost(selector)
        //setPost(prevPost => [...prevPost , {subject:subject, description : desc , image : img , date:handleDate()}])
        dispatch(addPost({id : uniqueId(), subject:subject, description : desc , image : URL.createObjectURL(new Blob([img])) , date:handleDate()}))

        setDesc('')
        setSubject('')
        setIsClose(value => !value)
        
    }

    const handleFilter = (search,posts) => {
        const res = posts?.filter(x => x.subject.toLowerCase().includes(search.toLowerCase()));
        setFilRes(res)
    }

    console.log(state)
    


  return (
    <div className='h-screen'
    style={{backgroundColor: state}}
    >
        <div className='flex bg-white w-full h-[72px] justify-between items-center border-b border-[#EBEBEB] flex-shrink-0'>
            <img className='ml-4'  src={main}/>
            <div className=' flex gap-5'>
            <input
            value={search}
            onChange={(e) =>{
                setSearch(e.target.value)

                handleFilter(e.target.value,post)
            } }
            className="inline-flex w-[400px] border py-1 bg-slate-100 text-xl flex-col gap-2"
            placeholder='🔍 Search'
            />
            <button 
            onClick={() => handleFilter(search,post)}
            class="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>

            <Link to={'/bookmark'}>
            <button>
                {bookmarkPost?.length > 0 ? 
                    <img src={bookFill} className='h-10 mr-4'/>
                    : <img src={bookmark} className='h-10 mr-4'/>
                }
                
            </button>
            </Link>

            
        </div>
        <div className='max-h-screen'
        style={{backgroundColor: state}}>
        <div className='flex p-4 justify-between'>
            <h1 className='text-4xl font-semibold'>Your posts</h1>
            <button
            onClick={() => setIsClose(value => !value)}
             className="bg-[#D33852] hover:bg-red-500 flex w-[188px] h-[40px] justify-center items-center gap-2 flex-shrink-0 rounded-lg px-3 mr-5">
            Create new post</button>
        </div>

        <div>
            <div className={`w-[458px] absolute top-[20%] left-[50%] transform translate-x-[-50%] h-[394px] flex-col justify-center items-center rounded-lg border ${isClose && 'hidden'} border-[#EBEBEB] shadow-md bg-[#FFF] `} >
                <div className="flex justify-between items-center">
                <div>
                <h1 className="text-[20px] ml-[26px] mt-[21px]  leading-7 font-bold">Create a post</h1>
                <p className='ml-[26px] '>Write something for your post</p>
                </div>
                
                <button
                onClick={() => setIsClose((value) => !value)}
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
        <div className='grid grid-cols-4 gap-y-4'>
        {filRes?.length > 0 ? (filRes?.map((x) => (
            <PostComponent key={x.id}
            subject={x.subject}
            image={x.image}
            description={x.description}
            date={x.Date}
            id = {x.id}
             />
        ))) : <h1 className='text-2xl'>Nothing Here Create some Post by click on create a post</h1>}
        </div>
        
        </div>
        
    </div>
   
  )
}

export default Posts