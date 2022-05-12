import React from 'react'
import { Nav, NavLink, NavItem } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <NavItem className="navbar-nav">
      <NavLink className="nav-item nav-link text-light" href="/profiles">
        Members
      </NavLink>
      <NavLink className="nav-item nav-link text-light" href="/posts">
        Posts
      </NavLink>
      <NavLink className="nav-item nav-link text-light" href="/dashboard">
        <i className="fa fa-user"></i> Dashboard
      </NavLink>
      <NavLink
        onClick={logout}
        className="nav-item nav-link text-light"
        href="/"
      >
        <i className="fa fa-sign-out"></i> Logout
      </NavLink>
    </NavItem>
  )

  const guestLinks = (
    <NavItem className="navbar-nav">
      <NavLink className="nav-item nav-link text-light" href="/profiles">
        Members
      </NavLink>
      <NavLink className="nav-item nav-link text-light" href="/register">
        Register
      </NavLink>
      <NavLink className="nav-item nav-link text-light" href="/login">
        Login
      </NavLink>
    </NavItem>
  )

  return (
    <Nav className="navbar navbar-expand-lg bg-dark">
      <Container>
        <NavLink className="navbar-brand fw-bold text-light " href="/">
          🍓 Stay Healthier
        </NavLink>
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
      </Container>
    </Nav>
  )
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navigation)
