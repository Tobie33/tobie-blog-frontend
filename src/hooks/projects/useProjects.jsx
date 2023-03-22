import useSWR, { mutate } from 'swr'

import { fetcher, handleErrors } from '@/hooks/_utils'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const useProjects = (pid) => {
  const navigate = useNavigate()
  const { data, error, isLoading, isValidating } = useSWR(`${process.env.API_URL}/api/projects/${pid}`, fetcher, {
    revalidateOnFocus: false
  })

  const apiProjectCreate = (project) => axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/projects`,
    data: project
  }).then((fullProject) => {
    const { data: { id } } = fullProject
    mutate()
    navigate(`/projects/${id}`)
  }).catch(handleErrors)

  const apiProjectPost = (project) => axios({
    method: 'PUT',
    url: `${process.env.API_URL}/api/projects/${pid}`,
    data: project
  }).then((fullProject) => {
    const { data: { id } } = fullProject
    mutate()
    navigate(`/${id}`)
  }).catch(handleErrors)

  return {
    data,
    error,
    isLoading,
    isValidating,
    apiProjectCreate,
    apiProjectPost
  }
}

export default useProjects
