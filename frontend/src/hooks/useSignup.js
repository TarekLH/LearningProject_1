import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import { baseUrl } from '../shared/baseUrl';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const {dispatch} = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${baseUrl}/api/user/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    });
    const datas = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(datas.error)
    };
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(datas));
      // update the AuthContext
      dispatch({type: 'SIGNIN', payload: datas});

      setIsLoading(false);
    };
  };

  return { signup, isLoading, error }
}