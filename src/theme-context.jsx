import { useState,useEffect,useContext,createContext } from "react";

const ThemeContext  = createContext();

export const useTheme = ()=>{
    return useContext(ThemeContext);
}

export const ThemeProvider = ({children})=>{
const [isDarkMode,setIsDarkMode] = useState(false);
const ToggleDarkMode = ()=>{
    setIsDarkMode((prev)=>!prev)
}

const theme = isDarkMode ? "dark" : "light";

useEffect(()=>{
document.documentElement.setAttribute("data-theme",theme)
},[isDarkMode])

    return (
        <ThemeContext.Provider value={{ToggleDarkMode,theme}}>
            {children}
        </ThemeContext.Provider>
    )

}