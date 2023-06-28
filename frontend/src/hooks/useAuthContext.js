import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {

  const context = useContext(AuthContext);

  // check if we're within the scope of the context
  if (!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider');
  };

  return context
};