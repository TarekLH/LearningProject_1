import React, { useEffect, useState } from 'react'
// components
import { baseUrl } from '../shared/baseUrl';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

export default function Home() {

  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${baseUrl}/api/workouts`);
      const datas = await response.json();

      if (response.ok) {
        setWorkouts(datas);
      }
    };
    fetchWorkouts();
  },[])

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
