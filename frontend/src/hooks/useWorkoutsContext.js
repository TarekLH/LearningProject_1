import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";

export const useWorkoutsContext = () => {

  const context = useContext(WorkoutsContext);

  // check if we're within the scope of the context
  if (!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider');
  };

  return context
};