import useSWR, { mutate } from 'swr'

import { fetcher, handleErrors } from '@/hooks/_utils'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const useBranches = (pid, bid) => {
  const navigate = useNavigate()
  const { data, error, isLoading, isValidating } = useSWR(`${process.env.API_URL}/api/projects/${pid}/branches/${bid}`, fetcher, {
    revalidateOnFocus: false
  })

  const apiBranchCreate = (branch) => axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/projects/${branch.pid}/branches`,
    data: branch
  }).then(() => {
    mutate()
    navigate(`/projects/${branch.pid}`)
  }).catch(handleErrors)

  const apiBranchEdit = (project) => axios({
    method: 'PUT',
    url: `${process.env.API_URL}/api/projects/${project.pid}/branches/${project.bid}`,
    data: project
  }).then(() => {
    mutate()
    navigate(`/projects/${project.pid}/branches/${project.bid}`)
  }).catch(handleErrors)

  return {
    data,
    error,
    isLoading,
    isValidating,
    apiBranchCreate,
    apiBranchEdit
  }
}

export default useBranches
