import React, { useState } from 'react'
import { useSignin } from '../hooks/useSignin';

export default function Signin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const {signin, isLoading, error} = useSignin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signin(credentials.email, credentials.password);
  };

  return (
    <form className='signin' onSubmit={handleSubmit}>
      <h3>Signin</h3>

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

      <button type='submit' disabled={isLoading}>Signin</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}