import useSWR from 'swr'

import { fetcher } from '@/hooks/_utils'

const useBranches = (pid, bid) => {
  const { data, error, isLoading, isValidating } = useSWR(`${process.env.API_URL}/api/projects/${pid}/branches/${bid}`, fetcher, {
    revalidateOnFocus: false
  })

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}

export default useBranches
