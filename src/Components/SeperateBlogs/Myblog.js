import React from 'react';
import DOMPurify from 'dompurify';

const Myblog = ({ text }) => {
  return (
    <div
      className="MyBlog"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
    ></div>
  );
};

export default Myblog;
