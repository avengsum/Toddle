import main from '../assets/main.svg'
import { useClose } from '../assets/useContext'

const Nav = () => {
    const {isClose , setIsClose} = useClose();

    return(
        <div className='flex w-full h-[72px] justify-between items-center border-b border-[#EBEBEB] flex-shrink-0'>
            <img className='ml-4'  src={main}>
            </img>
            <input
            className="inline-flex w-[400px] border py-1 bg-slate-100 text-xl flex-col gap-2"
            placeholder='🔍 Search'
            />
            <div className="bg-[#D33852] hover:bg-red-500 flex w-[188px] h-[40px] justify-center items-center gap-2 flex-shrink-0 rounded-lg px-3 mr-5">
            <button
            onClick={() => setIsClose((value) => !value)}
            className='text-white '
            >+ Create new board</button>
            </div>
            
        </div>
    )
}

export default Nav