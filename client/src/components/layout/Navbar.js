import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [openSideNav, setOpenSideNav] = useState('main-menu');

  const toggleSideNav = () => {
    if (openSideNav === 'main-menu') {
        setOpenSideNav('main-menu show');
    } else {
        setOpenSideNav('main-menu');
    }
  };

  const guestLinks = (
    <ul className="right-menu">
      <li>
        <Link to="/register" className="btn-cta">
          Register <i class="fas fa-user-plus"></i>
        </Link>
      </li>
      <li>
        <Link to="/login">
          Log In <i class="fas fa-sign-in-alt"></i>
        </Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul className="right-menu">
      <li>
        <Link to="/profiles">Contractors</Link>
      </li>
      <li>
        <Link to="/posts">Jobs</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-running" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <div className="menu-btn" onClick={toggleSideNav}>
        <i className="fas fa-bars fa-1x"></i>
      </div>
      <div className="container">
        <div className="main-nav">
          <img
            src="https://i.ibb.co/h7GmG6W/logo.png"
            alt="InHauze"
            className="logo"
          />

          <ul className={openSideNav}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/booking">Booking Form</Link>
            </li>
          </ul>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
