import React from 'react'
import del from '../assets/del.png'
import { Link } from 'react-router-dom'

const BoardContainer = ({color,BoardName , id ,handleDelete}) => {
    const boardColor = color
  return (
        <div className="flex border-2  flex-col rounded-[8px] w-[364px] border-solid items-start gap-2 ">
                        <div className="flex items-center gap-[24px]">
                        <div className={`flex p-[24px] items-start gap-[10px]`}
                        style={{backgroundColor: boardColor}}
                        >
                        </div>
                        <Link state={boardColor} to={`/post/${id}`}>
                        <h1 className='w-[250px]'>{BoardName}</h1>
                        </Link>

                        <div className="flex p-2 justify-center items-center gap-6">
                            <button onClick={() => handleDelete(id)}>
                            <img src={del} className="h-4"/>
                            </button>
                        </div>
                        
                        
                </div>
        </div>
  )
}

export default BoardContainer