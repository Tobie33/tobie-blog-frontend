import React from 'react'
import { Link, useParams } from 'react-router-dom'

import useUser from '@/hooks/users/useUser'
import Loading from '@/components/Loading'

function PagesUserProfile() {
  const { id } = useParams()
  const { data: user, isLoading, error } = useUser(id)

  if (isLoading) return <Loading />
  if (error) return <h1 className="text-center">Error</h1>

  return (
    <div id="pages-another" className="container mt-3">
      <header className="border-bottom">
        <div id="users-index-cards" className=" container">
          <div key={user?.id} className="card mb-3">
            <div className="row gy-5 col-12">
              <div className="card-body">
                <h5 className="card-title ms-3 mb-3">{user?.name}</h5>
                <p className="card-text ms-3">{user?.email}</p>
                <ul className="list-group">
                  <li className="list-group-item border-0">Created Since: {user?.createdAt}</li>
                  <li className="list-group-item border-0">Latest Project: {user?.projects[0]?.projectName}</li>
                  <li className="list-group-item border-0">Total Projects: {user?.projects?.length}</li>
                </ul>
                {
                    user?.isOwner && (
                      <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-dark text-center px-3 py-2"><Link to="/projects/create">Create New Project</Link></button>
                      </div>
                    )
                  }
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className="container">
          <div className="row">
            {
              user.projects.map((project) => (
                <div className=" project-cards card col-lg-6 col-12" key={project?.id}><Link to={`/projects/${project.id}`}>
                  <div className="card-body">
                    <p>Project {project?.id}: {project?.projectName}</p>
                    <p>Created Since: {project?.projectCreatedAt}</p>
                  </div>
                </Link>
                </div>
              ))
            }
          </div>
        </div>
      </header>
    </div>
  )
}
export default PagesUserProfile
