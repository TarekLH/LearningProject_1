import React, { useEffect } from 'react'
// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
// hooks
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
// shared
import { baseUrl } from '../shared/baseUrl';

export default function Home() {

  const {workouts, dispatch} = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${baseUrl}/api/workouts`);
      const datas = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: datas});
      };
    };
    fetchWorkouts();
  },[dispatch])

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}
