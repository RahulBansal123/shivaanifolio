import { Helmet } from 'react-helmet';
import React from 'react';
import './MainPage.css';
import MainPageTop from './MainPageTop/MainPageTop';
import Logo from '../../assests/logo.png';
const MainPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Helmet>
        <title>
          Shivani Folio - Digital Marketing Blogs and hacks | Social Media Blogs
          &amp; Tutorials
        </title>
        <meta
          name="description"
          content="Learn about Digital Marketing , Social Media Marketing , Marketing hacks , Website development and case studies on various brands."
        />
        <link rel="canonical" href="https://www.shivaanibansal.in/" />
        <meta property="og:image" content={Logo} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Shivani Folio - Digital Marketing Blogs | Social Media Blogs &amp; Tutorials"
        />
        <meta
          property="og:description"
          content="Learn about Digital Marketing , Social Media Marketing , Marketing hacks , Website development and case studies on various brands."
        />
        <meta property="og:url" content="https://www.shivaanibansal.in/" />
        <meta property="og:site_name" content="ShivaaiBansal.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Learn about Digital Marketing , Social Media Marketing , Marketing hacks , Website development and case studies on various brands."
        />
        <meta
          name="twitter:title"
          content="Shivani Folio - Digital Marketing Blogs | Social Media Blogs &amp; Tutorials"
        ></meta>
      </Helmet>
      <div className="MainPage__top">
        <div className="MainPage__top_left">
          <div className="MainPage__top_left_upper">
            <h1>We Create Solutions for Website</h1>
            <div className="MainPage__top_left_down">
              <div className="MainPage__top_left_line"></div>
              <h4>
                Every Project in our Design Studio is built in cooperation with
                the client.
              </h4>
            </div>
          </div>
          <div className="MainPage__top_left_button">
            <button
              onClick={() => {
                window.location.href =
                  'https://tagmango.com/creator/shivaani-bansal';
              }}
            >
              Consultaion
            </button>
            <button
              onClick={() => {
                window.location.href =
                  'https://www.facebook.com/shivaanibansal/services/?ref=page_internal';
              }}
            >
              Services
            </button>
          </div>
        </div>
        <div className="MainPage__top_right">
          <div className="MainPage__top_right_container"></div>
          <div className="MainPage__top_right_container"></div>
          <div className="MainPage__top_right_container"></div>
        </div>
      </div>
      <div className="MainPage__top_shape_container">
        <div className="MainPage__top_shape"></div>
      </div>
      <MainPageTop />
    </div>
  );
};

export default MainPage;
