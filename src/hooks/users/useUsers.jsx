import useSWR from 'swr'

import { fetcher } from '@/hooks/_utils'

const useUsers = () => {
  const { data, error, isLoading, isValidating } = useSWR(`${process.env.API_URL}/api/users`, fetcher)

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}

export default useUsers
