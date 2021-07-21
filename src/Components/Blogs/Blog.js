import React from 'react';
import BlogContent from '../BlogsPage/BlogContent';
import './Blog.css';
import Error from '../../assests/error.png';

const Blog = ({ id, img, type, head, content, date }) => {
  const redirect = () => {
    return (window.location = `/#/shivaanifolio/blogs/${id}`);
  };
  return (
    <>
      <div className="Blogs__Blog_desktop">
        <div className="Blogs__Blog_image">
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
        <div className="Blogs__Blog_right" onClick={redirect}>
          <BlogContent type={type} head={head} content={content} date={date} />
        </div>
      </div>
      <div className="Blogs__Blog_mobile" onClick={redirect}>
        <div className="Blogs__Blog_image">
          <img
            src={img}
            alt={head}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = Error;
            }}
          />
        </div>
        <div className="Blogs__Blog_right">
          <BlogContent type={type} head={head} content={content} date={date} />
        </div>
      </div>
    </>
  );
};

export default Blog;
