import React from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {
  const { data: user, apiLogout } = useAuth()

  return (
    <div id="pages">
      <Navbar bg="light" expand="lg" sticky="top">
        <Container className="m-0">
          <Navbar.Brand href="/">Main Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              {
              user
                ? (
                  <Nav.Link href={`/users/${user.id}`}>My Profile</Nav.Link>
                ) : (
                  <Nav.Link href="/auth/signup">Sign up</Nav.Link>
                )
              }
              {
              user
                ? (
                  <Nav.Link onClick={apiLogout}>Log out</Nav.Link>
                ) : (
                  <Nav.Link href="/auth/login">Login</Nav.Link>
                )
              }
              <NavDropdown title="About Us" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">What about us</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Users experience
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  User Leaderboard
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}
export default Navigation
