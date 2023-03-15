import axios from 'axios'
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'

import { fetcher, handleErrors } from '@/hooks/_utils'

const useAuth = () => {
  const navigate = useNavigate()
  const { data, error, isLoading, isValidating, mutate } = useSWR(`${process.env.API_URL}/api/my/profile`, fetcher)

  const apiSignup = (user) => axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/auth/signup`,
    data: user
  }).then(() => {
    mutate()
    navigate('/private')
  }).catch(handleErrors)

  const apiLogin = (user) => axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/auth/login`,
    data: user
  }).then(() => {
    mutate()
    navigate('/private')
  }).catch(handleErrors)

  const apiLogout = () => axios({
    method: 'DELETE',
    url: `${process.env.API_URL}/api/auth/logout`
  }).then(() => {
    // force set the data to undefined
    // because just revalidation will not remove cache data
    mutate(undefined)
    navigate('/auth/login')
  }).catch(handleErrors)

  return {
    data,
    error,
    isLoading,
    isValidating,
    apiSignup,
    apiLogin,
    apiLogout
  }
}

export default useAuth
