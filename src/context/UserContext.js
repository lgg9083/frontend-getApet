import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const context = createContext();

export default function UserProvider({ children }) {
  const { authenticated, register, logout, login } = useAuth();

  return (
    <context.Provider value={{ register, authenticated, logout, login }}>
      {children}
    </context.Provider>
  );
}

export { context };
