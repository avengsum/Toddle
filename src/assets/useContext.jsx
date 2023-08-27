import { useState ,createContext , useContext } from 'react'
   
 const CloseContext = createContext();

 export function CloseProvider({children}) {
    const [isClose , setIsClose] = useState(true)

    return(
        <CloseContext.Provider value={{isClose,setIsClose}}>
            {children}
        </CloseContext.Provider>
    );
 }
   
 export function useClose() {
    return useContext(CloseContext);
 }
