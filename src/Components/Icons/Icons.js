import React from 'react';

import InstagramIcon from '../../assests/icons/instagram.svg';
import LinkedIcon from '../../assests/icons/linkedin.svg';
import YoutubeIcon from '../../assests/icons/youtube.svg';
import PodcastIcon from '../../assests/icons/podcast.svg';
import './Icons.css';
const Icons = () => {
  return (
    <>
      <a
        href="https://www.instagram.com/"
        // href="https://www.instagram.com/shivaanibansal/?hl=en"
        target="_blank"
        rel="noreferrer"
        className="Footer__icons_link"
      >
        <object
          type="image/svg+xml"
          data={InstagramIcon}
          className="Footer__icons"
        >
          Upgrade Your browser to see this.
        </object>
      </a>
      <a
        href="https://www.youtube.com/channel/UCvLhO2VtwT9gvyc2CLX0MPQ?view_as=subscriber"
        target="_blank"
        rel="noreferrer"
        className="Footer__icons_link"
      >
        <object
          type="image/svg+xml"
          data={YoutubeIcon}
          className="Footer__icons"
        >
          Upgrade Your browser to see this.
        </object>
      </a>
      <a
        href="https://open.spotify.com/show/4zfdqXZG0vvlConcqVTnK6"
        target="_blank"
        rel="noreferrer"
        className="Footer__icons_link"
      >
        <object
          type="image/svg+xml"
          data={PodcastIcon}
          className="Footer__icons"
        >
          Upgrade Your browser to see this.
        </object>
      </a>
      <a
        href="https://www.linkedin.com/in/shivaani-bansal-6a2035143/"
        target="_blank"
        rel="noreferrer"
        className="Footer__icons_link"
      >
        <object
          type="image/svg+xml"
          data={LinkedIcon}
          className="Footer__icons"
        >
          Upgrade Your browser to see this.
        </object>
      </a>
    </>
  );
};

export default Icons;
