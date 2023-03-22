import React from 'react'
import { Link } from 'react-router-dom'

import useUsers from '@/hooks/users/useUsers'

function PagesUsersProfile() {
  const { data } = useUsers()
  return (
    <div id="pages-another" className="container">
      <header className="border-bottom">
        <div id="users-index-cards" className=" container">
          <div className="row">
            {data?.map((user) => (
              <div key={user.id} className=" user-cards card my-3 col-lg-6 col-12">
                <Link to={`/users/${user.id}`}>
                  <div className="col-12">
                    <div className="card-body">
                      <h5 className="card-title ms-3 mb-3">{user.name}</h5>
                      <p className="card-text ms-3">{user.email}</p>
                      <ul className="list-group">
                        <li className="list-group-item border-0">Created Since: {user.createdAt}</li>
                        <li className="list-group-item border-0">Latest Project: {user?.projects[0]?.projectName}</li>
                        <li className="list-group-item border-0">Total Projects: {user?.projects?.length}</li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  )
}
export default PagesUsersProfile
