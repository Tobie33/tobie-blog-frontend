import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

import useBranches from '@/hooks/branch/useBranches'
import useUser from '@/hooks/users/useUser'
import Loading from '@/components/Loading'

function PagesShowBranches() {
  const { pid, bid } = useParams()
  const { data: branch, isLoading, error } = useBranches(pid, bid)
  const { data: user } = useUser(branch?.project.userId)

  if (isLoading) return <Loading />
  if (error) return <h1 className="text-center">Error</h1>

  return (
    <div id="branches page" className="d-flex flex-column justify-content-center align-items-center">
      <div className="row col-12 text-center mt-3">
        <h1>{branch?.branchName}</h1>
        <h2>{branch?.branchDescription}</h2>
      </div>
      {
        user?.isOwner && (
          <div className="d-flex justify-content-evenly col-6">
            <button className="btn btn-dark py-2 px-3 mt-3 " type="submit"><Link to={`/projects/${pid}/branches/create`}> Create a New Branch!</Link></button>
            <button className="btn btn-dark py-2 px-3 mt-3 " type="submit"><Link to={`/projects/${pid}/branches/${bid}/edit`}> Edit Branch!</Link></button>
          </div>
        )
      }
      {
        branch.posts.length !== 0 && (
          <ul className="nav nav-tabs col-9 col-md-6 mt-3">
            {branch.posts.map((post) => (
              <li className="nav-item" key={post.id}>
                <a className="nav-link active" aria-current="page" href={`/projects/${pid}/branches/${branch.id}/posts/${post.id}`}>{post.postName}</a>
              </li>
            )
            )}
          </ul>
        )
      }
      <Outlet />

    </div>

  )
}
export default PagesShowBranches
