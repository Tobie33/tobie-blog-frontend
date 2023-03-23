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
import PagesCreateBranches from '@/pages/Branches/CreateBranch'
import PagesCreatePosts from '@/pages/Posts/CreatePost'
import PagesEditProject from '@/pages/Project/EditProject'
import PagesEditBranches from '@/pages/Branches/EditBranch'
import PagesEditPosts from '@/pages/Posts/EditPost'
import LoginSignupNavigation from './_LoginSignupNav'

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
          <Route path="/projects/:pid/edit" element={<PagesEditProject />} />
          <Route path="/projects/:pid/branches/:bid/edit" element={<PagesEditBranches />} />
          <Route path="/projects/:pid/branches/:bid/posts/:postId/edit" element={<PagesEditPosts />} />
          <Route path="/projects/:pid/branches/create" element={<PagesCreateBranches />} />
          <Route path="/projects/:pid/branches/:bid/posts/create" element={<PagesCreatePosts />} />
          <Route path="/projects/:pid" element={<PagesShowProject />}>
            <Route path="branches/:bid" element={<PagesShowBranches />}>
              <Route path="posts/:postId" element={<PagesShowPosts />} />
            </Route>
          </Route>
          <Route path="*" element={<PagesNotFound />} />
        </Route>
        <Route path="/" element={<LoginSignupNavigation />}>
          <Route path="/auth/signup" element={<PagesAuthSignup />} />
          <Route path="/auth/login" element={<PagesAuthLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
