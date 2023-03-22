import React from 'react'

import useAuth from '@/hooks/useAuth'

import FormsAuthLogin from '@/components/forms/auth/Login'

function PagesAuthLogin() {
  const { apiLogin } = useAuth()

  return (
    <div id="pages-auth-login" className="container mt-3">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Login</h1>

          <FormsAuthLogin
            onSubmit={apiLogin}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesAuthLogin
