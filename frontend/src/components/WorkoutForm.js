import React, { useState } from 'react'
// shared
import { baseUrl } from '../shared/baseUrl';
// hooks
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

export default function WorkoutForm() {

  const {dispatch} = useWorkoutsContext();

  const [workout, setWorkout] = useState({
    title: '',
    load: '',
    reps: ''
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`${baseUrl}/api/workouts`, {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const datas = await response.json();

    if (!response.ok) { 
      setError(datas.error);
      console.log(datas.error);
    };

    if (response.ok) {
      setWorkout({...workout, title: '', load: '', reps: ''});
      setError(null);
      console.log('new workout added', datas);
      dispatch({type: 'CREATE_WORKOUT', payload: datas});
    };
  };


  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input
        type="text"
        value={workout.title}
        onChange={(event) => setWorkout({...workout, title: event.target.value})}
      />

      <label>Load (kg):</label>
      <input
        type="number"
        value={workout.load}
        onChange={(event) => setWorkout({...workout, load: event.target.value})}
      />

      <label>Reps:</label>
      <input
        type="number"
        value={workout.reps}
        onChange={(event) => setWorkout({...workout, reps: event.target.value})}
      />

      <button type='submit'>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
