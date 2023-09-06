import { useEffect, useState } from "react"
import ColorButton from "./ColorButton" 
import { useClose } from "../assets/useContext"
import BoardContainer from "./BoardContainer"
import main from '../assets/main.svg'

const Board = () => {

    const colorOption = [
        '#A7F0F9',
        '#C5C5FC',
        '#FFAEC0',
        '#FFCC66'
    ];

    const [board , setBoard] = useState([])
    const [fil,setFil] = useState([])


    const [selectedColor, setSelectedColor] = useState('#A7F0F9');
    const [boardName, setBoardName] = useState('');

    const {isClose , setIsClose} = useClose();
    const [search ,setSearch] = useState('')


    const uniqueId = () => {
        return Date.now().toString(36) + Math.random().toString(36);

     }

    const handleSubmit = (e) => {
        e.preventDefault()

        setBoard(prevBoard => [...prevBoard , {id:uniqueId() ,BoardName : boardName , color : selectedColor}])
        setFil(board)

        setIsClose(value => !value)
        setBoardName('')
        setSelectedColor('#A7F0F9')
    }

    useEffect(() => {
        setFil(board)
    },[board])

    const handleDelete = (id) => {
        setFil(prevBoard => prevBoard.filter(x => x.id !== id ))
    }

    const handleFilter = (search) => {
        const res = board?.filter(x => x.BoardName.toLowerCase().includes(search.toLowerCase()));
        setFil(res)
    }
    

    return(
        <div>
            <div className='flex w-full h-[72px] justify-between items-center border-b border-[#EBEBEB] flex-shrink-0'>
            <img className='ml-4'  src={main}>
            </img>
            <div className=' flex gap-5'>
            <input
            value={search}
            onChange={(e) =>{
                setSearch(e.target.value)

                handleFilter(e.target.value)
            } }
            className="inline-flex w-[400px] border py-1 bg-slate-100 text-xl flex-col gap-2"
            placeholder='🔍 Search'
            />
            <button 
            onClick={() => handleFilter(search)}
            class="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
            <div className="bg-[#D33852] hover:bg-red-500 flex w-[188px] h-[40px] justify-center items-center gap-2 flex-shrink-0 rounded-lg px-3 mr-5">
            <button
            onClick={() => setIsClose((value) => !value)}
            className='text-white '
            >+ Create new board</button>
            </div>
            
        </div>
            <div className="flex-col">
            {/* my boards*/}
            <h1 className="text-[32px] ml-8 mt-4 font-bold leading-10"
            >My Boards</h1>
            {/* {add name} */}
            <div>
            <div className={`w-[458px] absolute top-[20%] left-[50%] transform translate-x-[-50%] h-[364px] flex-col justify-center items-center rounded-lg border ${isClose && 'hidden'} border-[#EBEBEB] shadow-md bg-[#FFF] `} >
                <div className="flex justify-between items-center">
                <h1 className="text-[20px]  ml-[26px] mt-[21px]  leading-7 font-bold">Add a name for your board</h1>
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
                <input type="text" 
                value={boardName}
                onChange={(e) => setBoardName(e.target.value)}
                placeholder="Places around the world"
                className="w-[407px] mt-[16px] ml-[26px] text-lg h-12 flex-shrink-0 rounded border borde-[#DBDBDB] bg-[#FFF]" 
                />
                <div className="mt-[40px] ">
                    <h1 className="text-[20px] ml-[26px] leading-7 font-bold">Select post colour</h1>
                    <p className="text-[14px] ml-[26px] leading-5 font-medium text-[#2B2B2B] ">Here are some templates to help you get started</p>
                    <div className="inline-flex mt-[16px] ml-[26px] items-start gap-[10.689px]">
                        {colorOption.map((color)=> (
                            <ColorButton
                            key={color}
                            color={color}
                            isSelected={selectedColor === color}
                            onClick={() => setSelectedColor(color)}
                        />
                        ) )}
                    </div>
                </div>
                <button type="submit" className="flex w-[126px] mt-7 ml-[305px] h-10 pt-4 pb-5 justify-center items-center gap-6 flex-shrink-0 rounded-lg bg-[#AF273E]">
                    <h1 className="text-white">Create board</h1>
                </button>
                </form>
            </div>

            {/* Boards */}

            <div className="grid grid-cols-4 gap-y-5 ml-5 mt-4 ">
                {fil?.length > 0 ? (fil?.map((x) => (
                    <BoardContainer key={x?.id} id={x?.id} color={x?.color} BoardName={x?.BoardName} handleDelete={handleDelete} />
                ))) : (<h1 className='text-2xl'>Nothing Here Create some Board
                 by click on create new board
                </h1>)}
            </div>

            </div>
            
        </div>
        </div>
        
    )
}

export default Board