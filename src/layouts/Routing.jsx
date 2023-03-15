import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

import App from '@/layouts/App'

import PagesHome from '@/pages/Home'
import PagesAnother from '@/pages/Another'
import PagesNotFound from '@/pages/NotFound'
import PagesAuthSignup from '@/pages/Signup'
import PagesAuthLogin from '@/pages/Login'
import PagesUsersProfile from '@/pages/Profile'

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PagesHome />} />
          <Route path="/another" element={<PagesAnother />} />
          <Route path="/auth/signup" element={<PagesAuthSignup />} />
          <Route path="/users" element={<PagesUsersProfile />} />
          <Route path="/auth/login" element={<PagesAuthLogin />} />
          <Route path="*" element={<PagesNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
