import React from 'react';
import './NavbarStyles.css';

const Navbar = ({ getUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand">NJ Corporates</div>
      <button className="get-users-button" onClick={getUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
