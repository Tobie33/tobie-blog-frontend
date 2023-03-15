import React from 'react'
import { Link } from 'react-router-dom'

import useUsers from '@/hooks/useUsers'

function PagesUsersProfile() {
  const { data } = useUsers()
  console.log(data)
  return (
    <div id="pages-another" className="container">
      <header className="border-bottom">
        <div><Link to="/">Home Page</Link></div>
        <div id="users-index-cards" className=" container">
          {data?.map((user) => (
            <div key={user.id} className="card mb-3">
              <div className="row gy-5 col-12">
                <div className="col-3">
                  <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title ms-3 mb-3">{user.name}</h5>
                    <p className="card-text ms-3">{user.email}</p>
                    <ul className="list-group">
                      <li className="list-group-item border-0">Created Since: {user.createdAt}</li>
                      <li className="list-group-item border-0">Lastest Project: {user?.projects[0]?.projectName}</li>
                      <li className="list-group-item border-0">Total Projects: {user?.projects?.length}</li>
                    </ul>
                    <p className="card-text text-center"><small className="text-muted" style={{ fontStyle: 'italic' }}>Last updated: {Date(user.lastUpdate)}</small></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  )
}
export default PagesUsersProfile
