import useSWR, { mutate } from 'swr'

import { fetcher, handleErrors } from '@/hooks/_utils'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const usePosts = (pid, bid, postId) => {
  const navigate = useNavigate()
  const { data, error, isLoading, isValidating } = useSWR(`${process.env.API_URL}/api/projects/${pid}/branches/${bid}/posts/${postId}`, fetcher, {
    revalidateOnFocus: false
  })

  const apiPostCreate = (post) => axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/projects/${post.pid}/branches/${post.bid}/posts`,
    data: post
  }).then(() => {
    mutate()
    navigate(`/projects/${post.pid}/branches/${post.bid}`)
  }).catch(handleErrors)

  const apiPostEdit = (post) => axios({
    method: 'PUT',
    url: `${process.env.API_URL}/api/projects/${post.pid}/branches/${post.bid}/posts/${post.postId}`,
    data: post
  }).then(() => {
    mutate()
    navigate(`/projects/${post.pid}/branches/${post.bid}/posts/${post.postId}`)
  }).catch(handleErrors)

  return {
    data,
    error,
    isLoading,
    isValidating,
    apiPostCreate,
    apiPostEdit
  }
}

export default usePosts
