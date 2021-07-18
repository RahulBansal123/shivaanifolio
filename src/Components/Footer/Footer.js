import React from 'react';
import './Footer.css';
import Icons from '../Icons/Icons';
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__left">Copyright &#169; 2021 | ShivaaniFolio</div>
      <div className="Footer__middle">
        <span
          onClick={() => (window.location.href = '/shivaanifolio/#/privacy')}
        >
          Privacy Policy
        </span>{' '}
        <span onClick={() => (window.location.href = '/shivaanifolio/#/terms')}>
          | Terms and Conditions
        </span>
      </div>
      <div className="Footer__right">
        <Icons />
      </div>
    </div>
  );
};

export default Footer;
