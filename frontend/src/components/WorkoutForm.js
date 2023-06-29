import React, { useState } from 'react'
// shared
import { baseUrl } from '../shared/baseUrl';
// hooks
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

export default function WorkoutForm() {

  const {dispatch} = useWorkoutsContext();
  const {user} = useAuthContext();

  const [workout, setWorkout] = useState({
    title: '',
    distance: '',
    pace: '',
    time:''
  });
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user) {
      setError('You must be signed in.');
      return
    };

    const response = await fetch(`${baseUrl}/api/workouts`, {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    });
    const datas = await response.json();

    if (!response.ok) { 
      setError(datas.error);
      setEmptyFields(datas.emptyFields);
    };

    if (response.ok) {
      setWorkout({...workout, title: '', distance: '', pace: '', time:''});
      setError(null);
      setEmptyFields([]);
      console.log('new workout added', datas);
      dispatch({type: 'CREATE_WORKOUT', payload: datas});
    };
  };


  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Run</h3>

      <label>Run Title:</label>
      <input
        type="text"
        value={workout.title}
        onChange={(event) => setWorkout({...workout, title: event.target.value})}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Distance (km):</label>
      <input
        type="number"
        value={workout.distance}
        onChange={(event) => setWorkout({...workout, distance: event.target.value})}
        className={emptyFields.includes('distance') ? 'error' : ''}
      />

      <label>Avg.Pace:</label>
      <input
        type="text"
        value={workout.pace}
        onChange={(event) => setWorkout({...workout, pace: event.target.value})}
        className={emptyFields.includes('pace') ? 'error' : ''}
      />

      <label>Time:</label>
      <input
        type="text"
        value={workout.time}
        onChange={(event) => setWorkout({...workout, time: event.target.value})}
        className={emptyFields.includes('time') ? 'error' : ''}
      />

      <button type='submit'>Add Run</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
