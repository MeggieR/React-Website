import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              TRVL <i className="fab fa-typo3" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                <li to='/' className="nav-links" onClick={closeMobileMenu}>
                    Home
                </li>
                <li to='/services' className="nav-links" onClick={closeMobileMenu}>
                    Services
                </li>
                <li to='/products' className="nav-links" onClick={closeMobileMenu}>
                    Products
                </li>
                <li to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                    Sign-up
                </li>
            </ul>
            {Button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
        </nav>
      </>
    );
  }
  

export default Navbar
