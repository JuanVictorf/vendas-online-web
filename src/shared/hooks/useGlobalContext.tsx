/* eslint-disable prettier/prettier */
import { createContext, useContext, useEffect, useState } from "react";

import { getAuthorizationToken, setAuthorizationToken } from "../functions/connection/auth";

type NotificationType = "success" | "info" | "warning" | "error";

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}

interface GlobalData {
  acessToken?: string;
  notification?: NotificationProps;
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  useEffect(() => {
    const token = getAuthorizationToken();
    if (token){
      setAcessToken(token);
    }
  }, []);

  const setAcessToken = (acessToken: string) => {
    setAuthorizationToken(acessToken);
    setGlobalData({
      ...globalData,
      acessToken,
    });
  };

  const setNotification = (
    message: string,
    type: NotificationType,
    description?: string,
  ) => {
    setGlobalData({
      ...globalData,
      notification: {
        message,
        type,
        description,
      },
    });
  };

  return {
    notification: globalData?.notification,
    acessToken: globalData?.acessToken,
    setAcessToken,
    setNotification,
  };
};
