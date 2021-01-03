import React from 'react';
import './BlogContent.css';
import time from '../../assests/time.svg';
import comment from '../../assests/message.svg';
const BlogContent = ({ id, type, head, content, date }) => {
  const redirect = () => {
    window.location = `/blogs/${id}`;
    return false;
  };
  return (
    <div className="BlogContent" onClick={() => redirect(id)}>
      <h4>{type} </h4>
      <h2> {head}</h2>
      <p>{content}</p>
      <div className="BlogContent_bottom">
        <div className="BlogContent_bottom_data">
          <object
            type="image/svg+xml"
            data={time}
            className="BlogContent_bottom_svg"
          >
            Upgrade Your browser to see this.
          </object>
          {/* {date ? date.replaceAll('/', '-') : null} */}
        </div>
        {/* <div className="BlogContent_bottom_data">
          <object
            type="image/svg+xml"
            data={comment}
            className="BlogContent_bottom_svg"
          >
            Upgrade Your browser to see this.
          </object>
          0
        </div> */}
      </div>
    </div>
  );
};

export default BlogContent;
