import React from 'react'
import { useParams } from 'react-router-dom'

import usePosts from '@/hooks/posts/usePosts'
import Loading from '@/components/Loading'

function PagesShowPosts() {
  const { pid, bid, postId } = useParams()
  const { data: post, isLoading, error } = usePosts(pid, bid, postId)

  if (isLoading) return <Loading />
  if (error) return <h1 className="text-center">Error</h1>

  return (
    <div className="mt-3">
      <div className="row col-12 m-0 text-center">
        <h1>{post.postName}</h1>
        <h2>{post.postDescription}</h2>
        <h3>{post.createdAt}</h3>
      </div>
    </div>

  )
}
export default PagesShowPosts
