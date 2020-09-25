import React, { useState } from 'react';
// import { SignUpButton } from './SignUpButton';
import { Link } from 'react-router-dom';
// import './Navbar.css';
import Dropdown from '../Dropdown';
import logoImage from '../layout/images/nuttlylogoheader.png';


function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <>
      <nav className='navbar'>
        
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         
        
        
        <img
                src={logoImage}
                width="400"
                height="120"
                className="pr-2"
                alt=""
              />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
   
         
      
        
          
    
        
      
          <li className='nav-item'>
            <Link
              // to='/sign-up'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>

      </nav>
    </>
  );
}

export default Navbar;
