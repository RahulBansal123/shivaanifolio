import React from 'react';
import './MainPageTop.css';
import Container from './MainPageTopContainer/MainPageTopContainer';
import LogoFrom from '../../../assests/fromhere.svg';
import LogoTo from '../../../assests/tohere.svg';
import Logo01 from '../../../assests/loss-chart.svg';
import Logo02 from '../../../assests/graph-bar.svg';
import Logo11 from '../../../assests/broken-heart.svg';
import Logo12 from '../../../assests/heart.svg';
import Logo21 from '../../../assests/customer.svg';
import Logo22 from '../../../assests/audience.svg';
import Logo31 from '../../../assests/fake-mentor.svg';
import Logo32 from '../../../assests/mentorship.svg';
const MainPageTop = () => {
  return (
    <div className="MainPageTop">
      <div className="MainPageTop__container">
        <div className="MainPageTop__top">
          <h1>Bring Your Website to life</h1>
          <h2>We will help you building it whatever it takes</h2>
        </div>

        <div className="MainPageTop__mid">
          <p>Google only loves you when everyone else loves you first.</p>
          <p>- Wendy Piersall</p>
        </div>
        <div className="MainPageTop__bottom">
          <div className="MainPageTop__bottom_container">
            <div className="MainPageTop__bottom_details_container">
              <span className="MainPageTop__bottom_details_data">
                From Here
              </span>
              <object
                type="image/svg+xml"
                data={LogoFrom}
                width="40"
                height="40"
              >
                Upgrade Your browser to see this.
              </object>
            </div>
            <div className="MainPageTop__bottom_left">
              <ul>
                <Container
                  title="Restrained career growth"
                  left
                  src={Logo01}
                  data="Stagnating career, working on legacy technology that can go obsolete, wasting time on benches."
                />
                <Container
                  title="No customer loyalty"
                  left
                  src={Logo11}
                  data="You might lose the connection with your customers when you are not in regular touch with your customers as there is no medium to make such connection."
                />
                <Container
                  title="Disregarded and unorganised audience"
                  left
                  src={Logo21}
                  data="Yes, sad truth all your marketing efforts can go into trash because 80 percent of your audience crowd is not of your niche or not suitable according to your product."
                />
                <Container
                  title="Absence of proper guidance or mentorship"
                  left
                  src={Logo31}
                  data="Simply yes, because you can not record or scale your graph in numeric format so, it sounds impractical to plot future strategies."
                />
              </ul>
            </div>
          </div>
          <div className="MainPageTop__bottom_container">
            <div className="MainPageTop__bottom_details_container">
              <span className="MainPageTop__bottom_details_data">To Here</span>
              <object type="image/svg+xml" data={LogoTo} width="40" height="40">
                Upgrade Your browser to see this.
              </object>
            </div>
            <div className="MainPageTop__bottom_right">
              <ul>
                <Container
                  title="Grow your website"
                  src={Logo02}
                  data="Ultimate motive of shivaani folio is to help you in growing your website and for the same you can read, listen or see our resources."
                />
                <Container
                  title="Create a personal brand"
                  src={Logo12}
                  data="When your brand is on the internet , you can create your own face value to as the owner of the label because you are directly communicating with the audience."
                />
                <Container
                  title="Create a massive targeted userbase"
                  src={Logo22}
                  data="The ultimate beauty of being an online brand, because if you follow proper strategies than you can touch the sky of massive user base."
                />
                <Container
                  title="Get proper guidance"
                  src={Logo32}
                  data="Guidance is possible when you can analyze your present with the past and can formulate with the future. In the shivaani folio you will get all these details on how you can graph your brand."
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageTop;
