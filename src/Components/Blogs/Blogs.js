import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Blogs.css';

import Blog from './Blog';

const Blogs = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}blogs/blog3`)
      .then((res) => {
        setData(res.data.blogs);
      })
      .catch();
  }, []);
  return (
    <div className="Blogs">
      <div className="Blogs__container">
        <h1>BLOGS</h1>
        {data
          ? data.map((blog) => (
              <Blog
                key={blog._id}
                id={blog._id}
                type={blog.category}
                head={blog.title}
                content={blog.desc}
                img={`${process.env.REACT_APP_URL}${blog.image}`}
                date={blog.time}
              />
            ))
          : null}
        <div className="Blogs__container_read_container">
          <form action="/blogs" method="GET">
            <button type="submit" className="Blogs__container_read">
              Read More
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
