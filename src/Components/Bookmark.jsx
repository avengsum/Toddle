import React, { useEffect, useState } from 'react'
import main from '../assets/main.svg'
import back from '../assets/back.png'
import { useSelector } from 'react-redux'
import PostComponent from './PostComponent'

const Bookmark = () => {
  const [search ,setSearch] = useState('')
  const [data,setData] = useState();
  const [fil,setFil] = useState();

  const selector = useSelector(state => state.bookmark);

  useEffect(() => {
    setData(selector)
    setFil(selector)
  },[selector])
  console.log(data)

  const handleFilter = (search,bookmark) => {
    const res = bookmark?.filter(x => x.subject.toLowerCase().includes(search.toLowerCase()));
    setFil(res)
  } 
  return (
    <div>
        <div className='flex bg-white w-full h-[72px] justify-between items-center border-b border-[#EBEBEB] flex-shrink-0'>
           <div className='flex'>
            <button>
            <img src={back} className='ml-4 w-6' />
            </button>
           
            <img className='ml-4'  src={main}/>
           </div>
            <div className=' flex gap-5'>
            <input
            value={search}
            onChange={(e) =>{
                setSearch(e.target.value)

                handleFilter(e.target.value,data)
            } }
            className="inline-flex w-[400px] border py-1 bg-slate-100 text-xl flex-col gap-2"
            placeholder='🔍 Search'
            />
            <button 
            onClick={() => handleFilter(search,data)}
            class="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
            </div>
          <div>
          <div className='grid grid-cols-4 gap-y-4'>
        {fil?.length > 0 ? (fil?.map((x) => (
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

export default Bookmark