import { createContext, useReducer } from 'react';
// reducer
import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  });
  console.log('AuthContext state:', state)

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
};