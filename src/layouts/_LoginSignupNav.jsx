import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Navbar from 'react-bootstrap/Navbar'

function LoginSignupNavigation() {
  return (
    <div id="pages">
      <Navbar bg="light" expand="lg" sticky="top">
        <Container className="m-0">
          <Navbar.Brand href="/">Main Page</Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}
export default LoginSignupNavigation
