import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

import useProjects from '@/hooks/projects/useProjects'
import useUser from '@/hooks/users/useUser'
import Loading from '@/components/Loading'

function PagesShowProject() {
  const { pid } = useParams()
  const { data: project, isLoading, error } = useProjects(pid)
  const { data: user } = useUser(project?.userId)

  if (isLoading) return <Loading />
  if (error) return <h1 className="text-center">Error</h1>

  return (
    <div className="project-page">
      <button className="btn btn-dark py-2 px-3 mt-3 ms-3" type="submit"><Link to={`/users/${project.userId}`}>Back to user</Link></button>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-5">Current Project: {project.projectName}</h1>
        <h2>Description: {project.projectDescription}</h2>
        {
          project.branches.length === 0 ? (
            <h3 className="mt-3">No Branches Available Right Now.</h3>
          ) : (
            <h3 className="mt-3">Available Branches: {project.branches.length}</h3>
          )
        }
        {user?.isOwner && project.branches.length !== 0 && (
          <div className="d-flex justify-content-evenly col-12">
            <button className="btn btn-dark py-2 px-3 mt-3 " type="submit"><Link to={`/projects/${pid}/edit`}> Edit Project!</Link></button>
          </div>
        )}

        {user?.isOwner && project.branches.length === 0 && (
        <div className="d-flex justify-content-evenly col-12">
          <button className="btn btn-dark py-2 px-3 mt-3 " type="submit"><Link to={`/projects/${pid}/branches/create`}> Create a New Branch!</Link></button>
          <button className="btn btn-dark py-2 px-3 mt-3 " type="submit"><Link to={`/projects/${pid}/edit`}> Edit Project!</Link></button>
        </div>
        )}
        {
        project.branches.length !== 0 && (
          <ul className="nav nav-tabs col-9 col-md-6 mt-4">
            {project.branches.map((branch) => (
              <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#project-description" key={branch.id}>
                <a className="nav-link active" aria-current="page" href={`/projects/${pid}/branches/${branch.id}`}>{branch.branchName}</a>
              </li>
            ))}
          </ul>
        )
        }
      </div>
      <Outlet />
    </div>
  )
}
export default PagesShowProject
