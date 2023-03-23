import React from 'react'
import usePosts from '@/hooks/posts/usePosts'
import { useParams } from 'react-router-dom'

import FormPosts from '@/components/forms/posts/PostForm'

function PagesCreatePosts() {
  const { pid, bid } = useParams()
  const { apiPostCreate } = usePosts()
  return (
    <div id="pages-another" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Create a New Post!</h1>
          <FormPosts
            onSubmit={apiPostCreate}
            pid={pid}
            bid={bid}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesCreatePosts
