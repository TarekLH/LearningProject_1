import React from 'react'
import {  Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <div className='container'>
        <Link to="/">
          <h1>Running Activity</h1>
        </Link>
        <nav>
          <div>
            <Link to='/signin'>Signin</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
