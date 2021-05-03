import React, { useState, useEffect } from 'react';
import './BlogPage.css';
import BlogContent from './BlogContent';
import BlogContentBottom from './BlogContentBottom/BlogContentBottom';
import Error from '../../assests/error.png';
const axios = require('axios');
const Blogs = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}blogs/blog`)
      .then((res) => {
        setData(res.data.blogs);
      })
      .catch();
  }, []);
  const redirect = (id) => {
    window.location = `/blogs/${id}`;
    return false;
  };
  return (
    <>
      <div className="BlogPage">
        <div className="Blogs__Trending">
          <div className="Blogs__Trending_top">
            <div className="Blogs__Trending_top_one">
              {data ? (
                <img
                  src={data[0].image}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = Error;
                  }}
                  alt={data[0].title}
                  onClick={() => redirect(data[0]._id)}
                />
              ) : null}
            </div>
            <div className="Blogs__Trending_top_two">
              {data ? (
                <BlogContent
                  type={data[0].category}
                  head={data[0].title}
                  content={data[0].desc}
                  id={data[0]._id}
                  date={data[0].time}
                />
              ) : null}
            </div>
          </div>
          <div className="Blogs__Trending_bottom">
            {data
              ? data
                  .slice(1)
                  .map((blog) => (
                    <BlogContentBottom
                      key={blog._id}
                      id={blog._id}
                      type={blog.category}
                      head={blog.title}
                      content={blog.desc}
                      img={blog.image}
                      date={blog.time}
                    />
                  ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
