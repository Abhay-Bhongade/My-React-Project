import React, { createContext, useContext } from 'react'
const MyContext = createContext();


const createContextHook = () => (
    <MyContext.Provider value={"This is sample text context value"}>
        <ChildCom />
    </MyContext.Provider>
)
   



const ChildCom = ()=>{
    const contextValue  = useContext(MyContext);
    return <div>This is the {contextValue} Value</div>
}