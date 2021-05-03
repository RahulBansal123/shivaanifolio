import React, { useEffect, useState } from 'react';
import './Blog.css';
import axios from 'axios';
import MyBlog from './Myblog';
import { Helmet } from 'react-helmet';

import Like from '../../assests/like.svg';
import Love from '../../assests/love.svg';
import Message from '../../assests/message.svg';
import Logo from '../../assests/logo.png';
import Error from '../../assests/error.png';
import Spinner from '../Spinner/Spinner';

const Blog = () => {
  const [liked, setLiked] = useState(false);
  const [data, setData] = useState(null);
  const id = window.location.pathname.split('/blogs/')[1];
  useEffect(() => {
    const id = window.location.pathname.split('/blogs/')[1];
    axios
      .get(`${process.env.REACT_APP_URL}blogs/${id}`)
      .then((res) => {
        setData(res.data.blogs);
      })
      .catch();
  }, []);
  const changeLike = (param) => {
    setLiked(param);
  };
  return (
    <div className="Blog_Container">
      {data ? (
        <React.Fragment>
          <Helmet>
            <title>{data.title}</title>
            <meta name="description" content={data.desc} />
            <link
              rel="canonical"
              href={'https://www.shivaanibansal.in/' + id}
            />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.desc} />
            <meta
              property="og:url"
              content={'https://www.shivaanibansal.in/' + id}
            />
            <meta property="og:site_name" content="SHIVANI  FOLIO" />

            {data.hashtags.split(' ').map((tag) => {
              return <meta property="article:tag" content={tag} />;
            })}

            <meta property="article:section" content={data.category} />
            <meta property="article:published_time" content={data.time} />
            <meta property="og:image" content={Logo} />

            <meta property="og:image:width" content="1080" />
            <meta property="og:image:height" content="1080" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={data.desc} />
            <meta name="twitter:title" content={data.title}></meta>
          </Helmet>
          <div className="Blog">
            <h1 className="Blog_heading">{data.title}</h1>
            <div className="Blog_content">
              <MyBlog
                text={`<div class="blog__main_description">${data.desc
                  .replaceAll(/id=\"[^\"]*\"/gi, '')
                  .replaceAll(/style=\"[^\"]*\"/gi, '')
                  .replaceAll(/dir=\"[^\"]\"/gi, '')
                  .replaceAll(/<span >/gi, '')
                  .replaceAll(/<\/span>/gi, '')
                  .replaceAll(/<br>/gi, '')}</div>`}
              />

              <img
                src={data.image}
                alt={data.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = Error;
                }}
              />
              <MyBlog
                text={data.content
                  .replaceAll(/id=\"[^\"]*\"/gi, '')
                  .replaceAll(/style=\"[^\"]*\"/gi, '')
                  .replaceAll(/dir=\"[^\"]\"/gi, '')
                  .replaceAll(/<span >/gi, '')
                  .replaceAll(/<\/span>/gi, '')
                  .replaceAll(/<h[4-6]/gi, '<h3')
                  .replaceAll(/<\/h[4-6]/gi, '</h3')
                  .replaceAll(/<br>/gi, '')}
              />
              <hr />
              <div className="Blog_content_author_container">
                By: Shivani Bansal
              </div>
              <div className="Blog_content_reaction_container">
                {liked ? (
                  <img
                    src={Love}
                    onClick={() => changeLike(false)}
                    alt="Love"
                  />
                ) : (
                  <img src={Like} onClick={() => changeLike(true)} alt="Like" />
                )}
                {/* <img src={Message} alt="Comment" /> */}
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Blog;
