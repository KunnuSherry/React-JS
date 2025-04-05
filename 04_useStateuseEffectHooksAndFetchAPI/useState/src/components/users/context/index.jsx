import { createContext } from "react";

//create context
export const GlobalContext = createContext(null);

function GlobalState({children}){
    return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
}

export default GlobalState;