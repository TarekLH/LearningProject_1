import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { baseUrl } from "../shared/baseUrl";

export const useSignin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const {dispatch} = useAuthContext();

  const signin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${baseUrl}/api/user/signin`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    });
    const datas = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(datas.error);
    };
    if (response.ok) {
      // save user in local storage
      localStorage.setItem('user', JSON.stringify(datas));
      // update the AuthContext
      dispatch({type: 'SIGNIN', payload: datas});

      setIsLoading(false);
    };
  };

  return {signin, isLoading, error}
}