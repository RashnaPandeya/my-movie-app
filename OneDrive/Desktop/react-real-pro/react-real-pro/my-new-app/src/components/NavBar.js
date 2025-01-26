import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <div className="navbar bg-black h-15">
      <img src="reactMovie_logo.png" alt="Left Logo" />
      <div className='nav-items'>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
      </div>
      <img src="react-right_logo.png" alt="Right Logo" />
      
    </div>
  );
}

export default Navbar;
