import React, { useState, useEffect } from 'react';
import './Navbar.css';
const NavBar = () => {
  const [Class, setClass] = useState('header');
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);
  const listenScrollEvent = () => {
    if (window.scrollY > 0) {
      return setClass('header_scroll');
    } else {
      return setClass('header');
    }
  };
  return (
    <div className={Class}>
      <h2 className="header__logo">
        <a href="/shivaanifolio">Shivaani Folio Blogs</a>
      </h2>
      <div className="header__navbar">
        <ul>
          <a href="/shivaanifolio">
            <li className="header__navitems">Home</li>
          </a>
          <a href="/shivaanifolio/contact">
            <li className="header__navitems">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
