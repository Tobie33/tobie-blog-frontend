import React from 'react'
import { useParams } from 'react-router-dom'
import usePosts from '@/hooks/posts/usePosts'

import PostForm from '@/components/forms/posts/PostForm'

function PagesEditPosts() {
  const { pid, bid, postId } = useParams()
  const { apiPostEdit } = usePosts()
  return (
    <div id="pages-another" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Edit Branch</h1>
          <PostForm
            onSubmit={apiPostEdit}
            pid={pid}
            bid={bid}
            postId={postId}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesEditPosts
