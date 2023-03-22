import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

function PagesHome() {
  const { data: user } = useAuth()

  return (
    <div id="main-page">
      {
        user ? (
          <div id="whole-page">
            <div className="upper d-flex justify-content-evenly flex-column align-items-center front-cover">
              <h1>Welcome Back! {user.name}</h1>
            </div>
            <div id="buttons" className="lower d-flex align-items-center justify-content-evenly">
              <button type="button" className="btn btn-dark px-2 py-3"><Link to="/projects/create">Create a New Project!</Link></button>
              <button type="button" className="btn btn-dark px-2 py-3"><Link to="/users">Other peoples project!</Link></button>
            </div>
          </div>
        ) : (
          <div id="whole-page">
            <div className="upper d-flex justify-content-evenly flex-column align-items-center front-cover">
              <h1>Welcome to this website!</h1>
            </div>
            <div id="buttons" className="lower d-flex align-items-center justify-content-evenly">
              <button type="button" className="btn btn-dark px-2 py-3"><Link to="/auth/signup">Signup</Link></button>
              <button type="button" className="btn btn-dark px-2 py-3"><Link to="/users">Other peoples project!</Link></button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default PagesHome
