import React, { useEffect, useState } from 'react'
import main from '../assets/main.svg'
import back from '../assets/back.png'
import { useSelector } from 'react-redux'

const Bookmark = () => {
  const [search ,setSearch] = useState('')
  const [data,setData] = useState();
  const [fil,setFil] = useState();

  const selector = useSelector(state => state.bookmark);

  useEffect(() => {
    setData(selector)
    setFil(selector)
  },[selector])

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

                handleFilter(e.target.value,post)
            } }
            className="inline-flex w-[400px] border py-1 bg-slate-100 text-xl flex-col gap-2"
            placeholder='🔍 Search'
            />
            <button 
            onClick={() => handleFilter(search,post)}
            class="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
            </div>
          <div>

          </div>
    </div>
  )
}

export default Bookmark