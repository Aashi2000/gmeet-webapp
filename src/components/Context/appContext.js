import React, { createContext, useContext,useState ,useEffect} from 'react';
import {auth}  from "../../config/firebase"
// Create a context
const AppContext = createContext();

// Create a custom hook to use the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};

// Create a provider component
export const AppContextProvider = ({ children }) => {


    const [appState, setAppState] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [connecting,setConnecting] = useState(false)
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setAppState("home");
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
          setAppState("login");
        }
      });
    }, []);
  const value = {currentUser,appState,connecting,setConnecting};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
