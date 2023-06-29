import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext} from "./useWorkoutsContext"

export const useSignout = () => {
  const {dispatch} = useAuthContext();
  const {dispatch: workoutsDispatch} = useWorkoutsContext();

    const signout = () => {
      // delete user from local storage
      localStorage.removeItem('user');

      // update the auth and workouts context
      dispatch({type: 'SIGNOUT'});
      workoutsDispatch({type: 'SET_WORKOUTS', payloads: null});
    };

  return {signout}
}