import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuthenticationStatus } from '../../auth/auth-service';
// Redux
import { connect } from 'react-redux';
import { logout } from '../../actions/firebase-actions';

const Header = ({ logout }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(getAuthenticationStatus());
  }, []);

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
    toast.success('Logout successful');
  };

  const authLinks = (
    <>
      <NavLink to='/' exact className='link is-info'>
        Home
      </NavLink>
      <NavLink to='/public' exact className='link is-info'>
        Public
      </NavLink>
      <NavLink to='/private' exact className='link is-info'>
        Private
      </NavLink>
      <NavLink onClick={handleLogout} to='/' className='link is-info'>
        Logout
      </NavLink>
    </>
  );

  const guestLinks = (
    <>
      <NavLink to='/' exact className='link is-info'>
        Home
      </NavLink>
      <NavLink to='/public' exact className='link is-info'>
        Public
      </NavLink>
      <NavLink to='/private' exact className='link is-info'>
        Private
      </NavLink>
      <NavLink to='/login' className='link is-info'>
        Login
      </NavLink>
      <NavLink to='/register' className='link is-info'>
        Register
      </NavLink>
    </>
  );

  return (
    <>
      <nav className='level'>{isAuthenticated ? authLinks : guestLinks}</nav>
    </>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return { currentUser };
};

export default connect(mapStateToProps, { logout })(Header);
