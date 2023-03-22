import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

import PagesHome from '@/pages/Home'
import PagesAnother from '@/pages/Another'
import PagesNotFound from '@/pages/NotFound'
import PagesAuthSignup from '@/pages/Signup'
import PagesAuthLogin from '@/pages/Login'
import PagesUsersProfile from '@/pages/Profile/Profiles'
import PagesUserProfile from '@/pages/Profile/Profile'
import PagesCreateProject from '@/pages/Project/CreateProject'
import PagesShowProject from '@/pages/Project/ShowProject'
import PagesShowBranches from '@/pages/Branches/ShowBranch'
import PagesShowPosts from '@/pages/Posts/ShowPosts'
import Navigation from '@/layouts/_Navbar'

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/signup" element={<PagesAuthSignup />} />
        <Route path="/" element={<Navigation />}>
          <Route index element={<PagesHome />} />
          <Route path="/another" element={<PagesAnother />} />
          <Route path="/users/:id" element={<PagesUserProfile />} />
          <Route path="/users" element={<PagesUsersProfile />} />
          <Route path="/projects/create" element={<PagesCreateProject />} />
          <Route path="/projects/:pid" element={<PagesShowProject />}>
            <Route path="branches/:bid" element={<PagesShowBranches />}>
              <Route path="posts/:postId" element={<PagesShowPosts />} />
            </Route>
          </Route>
          <Route path="/auth/login" element={<PagesAuthLogin />} />
          <Route path="*" element={<PagesNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
