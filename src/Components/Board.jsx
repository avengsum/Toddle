import { useState } from "react"
import ColorButton from "./ColorButton" 
import Nav from "./Nav"
import { useClose } from "../assets/useContext"
import del from '../assets/del.png'

const Board = () => {

    const colorOption = [
        '#A7F0F9',
        '#C5C5FC',
        '#FFAEC0',
        '#FFCC66'
    ];

    const [board , setBoard] = useState([])


    const [selectedColor, setSelectedColor] = useState('#A7F0F9');
    const [boardName, setBoardName] = useState('');

    const {isClose , setIsClose} = useClose();

    console.log(board)

    const handleSubmit = (e) => {
        e.preventDefault()

        setBoard(prevBoard => [...prevBoard , {BoardName : boardName , color : selectedColor}])

        setIsClose(value => !value)
        setBoardName('')
        setSelectedColor('#A7F0F9')
    }

    const handleDelete = (name,color) => {
        setBoard(prevBoard => prevBoard.filter(x => x.boardName != name && x.color != color ))
    }

    return(
        <div>
            <Nav  />
            <div className="flex ">
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

            <div className="flex">
                {board?.map((x,index) => (
                    <div className="flex flex-col rounded-[8px] w-[364px] border-solid items-start gap-2 ">
                        {console.log(x.color)}
                        <div className="flex items-center gap-[24px]">
                        <div className={`flex p-[24px] bg-[${x.color}] items-start gap-[10px]`}>
                        </div>
                        <h1>{x.BoardName}</h1>

                        <div className="flex p-2 justify-center items-center gap-6">
                            <button onClick={() => handleDelete(x.BoardName , x.color)}>
                            <img src={del} className="h-4"/>
                            </button>
                        </div>
                        
                        
                        </div>
                    </div>
                ))}
            </div>

            </div>
            
        </div>
        </div>
        
    )
}

export default Board