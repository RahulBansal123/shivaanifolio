import React from 'react';
import NavBar from './BlogsHeader/Navbar';
import { Helmet } from 'react-helmet';

import BlogsPage from './BlogPage';
import Logo from '../../assests/logo.png';

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>
          Shivani Folio - Digital Marketing Blogs | Social Media Blogs &amp;
          Tutorials
        </title>
        <meta
          name="description"
          content="Learn about Digital Marketing , Social Media Marketing , Marketing hacks , Website development and case studies on various brands."
        />
        <meta property="og:type" content="blog" />
        <meta
          property="og:title"
          content="Shivani Folio - Digital Marketing Blogs | Social Media Blogs &amp;
          Tutorials"
        />
        <meta
          property="og:description"
          content="Learn about Digital Marketing , Social Media Marketing , Marketing hacks , Website development and case studies on various brands."
        />
        <meta property="og:site_name" content="ShivaaiBansal.in" />
        <meta property="og:image" content={Logo} />
        {/* <meta
          property="og:image:secure_url"
          content="https://www.shivaanibansal.in/blogs"
        /> */}
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Learn about Digital Marketing , Social Media Marketing , Marketing hacks , Website development and case studies on various brands."
        />
        <meta
          name="twitter:title"
          content="Shivani Folio - Digital Marketing Blogs | Social Media Blogs &amp;
          Tutorials"
        ></meta>
      </Helmet>
      <NavBar />
      <div style={{ marginTop: '120px' }}>
        <BlogsPage />
      </div>
    </>
  );
};

export default Blogs;
