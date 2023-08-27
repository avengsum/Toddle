import React from 'react'
import main from '../assets/main.svg'
import bookmark from '../assets/bookmark.png'

const PostNav = () => {
  return (
    <div className='flex w-full h-[72px] justify-between items-center border-b border-[#EBEBEB] flex-shrink-0'>
            <img className='ml-4'  src={main}>
            </img>
            <input
            className="inline-flex w-[400px] border py-1 bg-slate-100 text-xl flex-col gap-2"
            placeholder='🔍 Search'
            />

            <button>
                <img src={bookmark} className='h-10 mr-4'/>
            </button>

            
        </div>
  )
}

export default PostNav