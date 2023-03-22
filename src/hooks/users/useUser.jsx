import useSWR from 'swr'

import { fetcher } from '@/hooks/_utils'

const useUser = (id) => {
  const { data, error, isLoading, isValidating } = useSWR(`${process.env.API_URL}/api/users/${id}`, fetcher, {
    revalidateOnFocus: false
  })

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}

export default useUser
