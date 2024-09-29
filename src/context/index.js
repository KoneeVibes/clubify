import { createContext, useState } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
    const [isSideNavigationOpen, setIsSideNavigationOpen] = useState(false);
    return (
        <Context.Provider
            value={{
                isSideNavigationOpen,
                setIsSideNavigationOpen
            }}
        >
            {children}
        </Context.Provider>
    )
}