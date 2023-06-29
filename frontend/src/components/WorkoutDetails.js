import React from 'react';
// shared
import { baseUrl } from '../shared/baseUrl';
// hooks
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function WorkoutDetails({workout}) {

  const {dispatch} = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) return

    const response = await fetch(`${baseUrl}/api/workouts/${workout._id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const datas = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: datas});
    };
  };

  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p><strong>Distance (km): </strong>{workout.distance}</p>
      <p><strong>Avg, Pace: </strong>{workout.pace}</p>
      <p><strong>Time: </strong>{workout.time}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true})}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}
