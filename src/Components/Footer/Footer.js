import React from "react";
import "./Footer.css";
import Icons from '../Icons/Icons';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__left">Copyright &#169; 2020 | ShivaaniFolio</div>
      <div className="Footer__middle">
        Privacy Policy | Terms and Conditions
      </div>
      <div className="Footer__right">
        <Icons />
      </div>
    </div>
  );
};

export default Footer;
