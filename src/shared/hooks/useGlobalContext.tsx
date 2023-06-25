/* eslint-disable prettier/prettier */
import { createContext, useContext, useState } from "react";

interface GlobalData {
    acessToken?: string;
}

interface GlobalContextProps {
    globalData: GlobalData;
    setGlobalData: (globalData: GlobalData) => void
}

const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalProviderProps {
    children: React.ReactNode
}

export const GlobalProvider = ({children}: GlobalProviderProps) => {

    const [ globalData, setGlobalData ] = useState<GlobalData>({});

    return (
        <GlobalContext.Provider value={{globalData, setGlobalData }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);

    const setAcessToken = (acessToken: string) => {
        setGlobalData({
            ...globalData,
            acessToken,
        });
    };


    return {
        acessToken: globalData?.acessToken,
        setAcessToken,
    }
}

