import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Menu from '../../assests/menu.svg';
import Cross from '../../assests/cross.svg';
const Header = () => {
  const [Class, setClass] = useState('header');
  const [show, setShow] = useState(false);
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
        <a href="/shivaanifolio">Shivaani Folio</a>
      </h2>
      <div className="header__navbar">
        {/* <ul> */}
        <NavLink
          to="/"
          className="header__navitems"
          style={{ color: Class === 'header' ? '#fff' : '#000' }}
          activeClassName="header__navitems_active"
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className="header__navitems"
          activeClassName="header__navitems_active"
          style={{ color: Class === 'header' ? '#fff' : '#000' }}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/contact"
          className="header__navitems"
          activeClassName="header__navitems_active"
          style={{ color: Class === 'header' ? '#fff' : '#000' }}
        >
          Contact
        </NavLink>
        {/* </ul> */}
      </div>
      <div className="navbar__mobile" onClick={() => setShow(true)}>
        <img
          src={Menu}
          alt="Menu"
          className="navbar__mobile_icons"
          style={{
            filter: Class === 'header' ? 'brightness(100%)' : 'brightness(5%)',
          }}
        />
      </div>
      <div
        className="navbar__mobile_items"
        style={{ display: show ? 'block' : 'none' }}
      >
        <div
          className="navbar__mobile_items_close"
          onClick={() => setShow(false)}
        >
          <img src={Cross} alt="Close" />
        </div>
        <div className="navbar__mobile_items_container">
          <NavLink to="/" className="navbar__mobile_items_item">
            Home
          </NavLink>
          <NavLink to="/blogs" className="navbar__mobile_items_item">
            Blogs
          </NavLink>
          <NavLink to="/contact" className="navbar__mobile_items_item">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
