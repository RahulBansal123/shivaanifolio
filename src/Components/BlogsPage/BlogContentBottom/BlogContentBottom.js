import React from 'react';
import './BlogContentBottom.css';
import BlogContent from '../BlogContent';
import Error from '../../../assests/error.png';

const BlogContentBottom = ({ id, img, type, head, content, date }) => {
  const redirect = () => {
    window.location = `/#/blogs/${id}`;
    return false;
  };
  return (
    <div className="BlogContentBottom">
      <div className="BlogContentBottom_right">
        <img
          src={img}
          alt={head}
          onClick={redirect}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = Error;
          }}
        />
      </div>
      <div className="BlogContentBottom_left" onClick={redirect}>
        <BlogContent type={type} head={head} content={content} date={date} />
      </div>
    </div>
  );
};

export default BlogContentBottom;
