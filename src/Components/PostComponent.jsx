import React from 'react'
import { useState } from 'react'
import del from '../assets/del.png'
import fill from '../assets/heart-fill.png'
import heart from '../assets/heart.png'
import bookFill from '../assets/b-fill.png'
import { useDispatch, useSelector } from 'react-redux'
import { removePost } from '../assets/postSlice'
import { addPost } from '../assets/bookmarkSlice'
import { removeBookmark } from '../assets/bookmarkSlice'
import book from '../assets/bookmark.png'
import { Link } from 'react-router-dom'

const PostComponent = ({subject ,id,image,description,date}) => {

    const [isHeart ,setIsHeart] = useState(false)
    const [isBook ,setBook] = useState(false)
    const dispatch = useDispatch();
    const bookmark = useSelector(state => state.bookmark)


    const handleDelete = () => {
        dispatch(removePost(id))
    }
    const handleBookmark = () => {
        setBook(prevIsBook => !prevIsBook);
        if (!isBook) {
          dispatch(addPost({ id, subject, image, description, date }));
        } else {
          dispatch(removeBookmark(id));
        }
      };
      

  return (
    <div className='w-[300px] bg-slate-50 h-[545px]flex p-[16px] flex-start gap-[10px] rounded-[8px] '>
            <div className='flex gap-6'>
                <h1
                className='text-2xl font-semibold'
                >{subject}</h1>
                <div className='flex gap-2 '>
                <button
                onClick={() => handleBookmark()}
                >{isBook ? <img src={bookFill} className='w-8 h-6' /> : <img src={book} className='w-8 h-6' />}</button>
                <button
                onClick={() => handleDelete() }
                ><img src={del} className='w-8 h-6' alt="deleteIcon" /></button>
                
                </div>
                
            </div>
            <div>
                <p>{date}</p>
                {image && <img 
                className='w-[243px] h-[162px]'
                src={image} alt="" />}
            </div>
            <div className='w-'>
                <h1>{description}</h1>
            </div>
            <div>
               <button
               className='w-4'
               onClick={() => setIsHeart(value => !value)}
               >{isHeart ? <img src={fill} /> : <img src={heart} />}</button> 
            </div>
        </div>
  )
}

export default PostComponent