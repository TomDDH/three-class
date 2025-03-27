import React, { createContext, useState } from "react";
import App from "./App";
export const AppContext = createContext()

const AppContextComp = () => {
    const [appData, setAppData] = useState({})
    const [threeJSModule, setThreeJSModule] = useState(null)
    return (
        <AppContext.Provider value={{
            appData,
            setAppData,
            threeJSModule,
            setThreeJSModule
        }}
        >
            <App />
        </AppContext.Provider>
    )
}

export default AppContextComp 