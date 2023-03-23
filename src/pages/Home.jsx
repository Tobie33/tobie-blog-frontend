import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import useUser from '@/hooks/users/useUser'

function PagesHome() {
  const { data: user } = useAuth()
  const { data: selectedUser } = useUser(user?.id)
  const { data: displayUser } = useUser(1)

  return (
    <div id="main-page">
      {
        user ? (
          <div id="whole-page">
            <div className="upper d-flex justify-content-evenly flex-column align-items-center front-cover">
              <h1>Welcome Back! {user.name}</h1>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h2>Some of your projects:</h2>
              <div key={selectedUser?.id} className="user-cards card my-3 col-lg-6 col-12">
                <Link to={`/projects/${selectedUser?.projects[0]?.id}`}>
                  <div className="col-12">
                    <div className="card-body">
                      <h5 className="card-title ms-3 mb-3">{selectedUser?.projects[0]?.projectName}</h5>
                      <p className="card-text ms-3">{selectedUser?.projects[0]?.projectDescription}</p>
                      <p className="card-text ms-3">Created Since: {selectedUser?.createdAt}</p>
                    </div>
                  </div>
                </Link>
              </div>
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
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h2>One of our users profile:</h2>
              <div key={displayUser?.id} className="user-cards card my-3 col-lg-6 col-12">
                <Link to={`/users/${displayUser?.id}`}>
                  <div className="col-12">
                    <div className="card-body">
                      <h5 className="card-title ms-3 mb-3">{displayUser?.name}</h5>
                      <p className="card-text ms-3">{displayUser?.email}</p>
                      <ul className="list-group">
                        <li className="list-group-item border-0">Created Since: {displayUser?.createdAt}</li>
                        <li className="list-group-item border-0">Latest Project: {displayUser?.projects[0]?.projectName}</li>
                        <li className="list-group-item border-0">Total Projects: {displayUser?.projects?.length}</li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
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
