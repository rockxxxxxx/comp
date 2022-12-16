import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [update, setUpdate] = useState(false);

  const value = {
    user,
    setUser,
    update,
    setUpdate,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
