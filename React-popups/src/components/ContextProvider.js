import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";

export const DataContext = createContext();

export const ContextProvider = ({children}) => {

    const [ data, setData] = useLocalStorage('userInfo',[])

    return <DataContext.Provider value={{data,setData}}>
        {children}
    </DataContext.Provider>

}