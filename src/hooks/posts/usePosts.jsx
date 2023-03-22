import useSWR from 'swr'

import { fetcher } from '@/hooks/_utils'

const usePosts = (pid, bid, postId) => {
  const { data, error, isLoading, isValidating } = useSWR(`${process.env.API_URL}/api/projects/${pid}/branches/${bid}/posts/${postId}`, fetcher, {
    revalidateOnFocus: false
  })

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}

export default usePosts
