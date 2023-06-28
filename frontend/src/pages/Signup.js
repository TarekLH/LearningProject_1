import React, { useState } from 'react'

export default function Signup() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(credentials);
    setCredentials({...credentials, email: '', password: ''});
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

      <button type='submit'>Signup</button>
    </form>
  )
}