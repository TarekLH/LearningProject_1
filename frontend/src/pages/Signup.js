import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup';

export default function Signup() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const {signup, isLoading, error} = useSignup();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(credentials.email, credentials.password);
  };

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Signup</h3>

      <label>Email:</label>
      <input
        type='email'
        value={credentials.email}
        onChange={(e) => setCredentials({...credentials, email: e.target.value})}
      />

      <label>Password:</label>
      <input
        type='password'
        value={credentials.password}
        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
      />

      <button type='submit' disabled={isLoading}>Signup</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}