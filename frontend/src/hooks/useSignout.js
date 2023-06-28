import { useAuthContext } from "./useAuthContext";

export const useSignout = () => {
  const {dispatch} = useAuthContext();

    const signout = () => {
      // delete user from local storage
      localStorage.removeItem('user');

      // update the auth context
      dispatch({type: 'SIGNOUT'});
    };

  return {signout}
}