import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const context = createContext();

function UserProvider({ children }) {
  const { register } = useAuth();

  return <context.Provider value={{ register }}>{children}</context.Provider>;
}


export {context, UserProvider}