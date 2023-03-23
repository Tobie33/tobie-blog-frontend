import React from 'react'
import { useParams, Link } from 'react-router-dom'

import usePosts from '@/hooks/posts/usePosts'
import useUser from '@/hooks/users/useUser'
import useProjects from '@/hooks/projects/useProjects'

import Loading from '@/components/Loading'

function PagesShowPosts() {
  const { pid, bid, postId } = useParams()
  const { data: post, isLoading, error } = usePosts(pid, bid, postId)

  const { data: project } = useProjects(pid)
  const { data: user } = useUser(project?.userId)

  if (isLoading) return <Loading />
  if (error) return <h1 className="text-center">Error</h1>

  return (
    <div className="mt-3">
      <div className="row col-12 m-0 text-center">
        <h1>{post.postName}</h1>
        <h2>{post.postDescription}</h2>
        <h3>{post.createdAt}</h3>
      </div>
      { user?.isOwner && (
      <div className="d-flex justify-content-evenly">
        <button className="btn btn-dark py-2 px-3 mt-3 " type="submit"><Link to={`/projects/${pid}/branches/${bid}/posts/create`}> Create a New Post!</Link></button>
        <button className="btn btn-dark py-2 px-3 mt-3 " type="submit"><Link to={`/projects/${pid}/branches/${bid}/posts/${postId}/edit`}> Edit Post!</Link></button>
      </div>
      )}
    </div>

  )
}
export default PagesShowPosts
