import React from 'react';
import './ServicesContainer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesContainer = ({ odd, title, content, src }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      className={odd ? 'ServicesContainer_odd' : 'ServicesContainer_even'}
      data-aos="fade-up"
    >
      <h3>{title}</h3>
      <img
        src={src}
        alt={title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = Error;
        }}
      />
      <p>{content}</p>
    </div>
  );
};

export default ServicesContainer;
