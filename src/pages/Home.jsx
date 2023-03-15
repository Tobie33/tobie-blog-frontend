import React from 'react'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

function PagesHome() {
  const { data, error, isLoading } = useSWR(`${process.env.API_URL}/api/users`, fetcher)

  console.log(data, error, isLoading)

  return (
    <div id="pages-home" className="container">
      <header className="text-center border-bottom">
        <h1>Home Page</h1>
        <div><Link to="/another">Another Page</Link></div>
      </header>
    </div>
  )
}

export default PagesHome
