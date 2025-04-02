import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalContextProvider({ children }) {
    const [theme, setTheme] = useState('light');
   return <GlobalContext.Provider value={{theme, setTheme}}>{children}</GlobalContext.Provider>
}
export default GlobalContextProvider;
