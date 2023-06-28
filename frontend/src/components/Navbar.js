import React from 'react'
import {  Link } from 'react-router-dom'
import { useSignout } from '../hooks/useSignout'
import { useAuthContext } from '../hooks/useAuthContext';

export default function Navbar() {
  const { signout } = useSignout();
  const {user} = useAuthContext();

  const handleClick = () => {
    signout();
  };

  return (
    <header>
      <div className='container'>
        <Link to="/">
          <h1>Running Activity</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Signout</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to='/signin'>Signin</Link>
              <Link to='/signup'>Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}