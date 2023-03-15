import axios from 'axios'

export const fetcher = (url) => axios.get(url).then((res) => res.data)

export const handleErrors = (err) => {
  // Console Log for debugging purposes
  if (err.response) {
    console.log('REQUEST ERROR: ', err.response) // eslint-disable-line
  } else {
    console.log('ERROR: ', err) // eslint-disable-line
  }
}
