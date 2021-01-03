import React from 'react';
import './Services.css';
import Service from './ServicesContainer';
import available from '../../assests/services/247.png';
import forecast from '../../assests/services/forecast.png';
import growth from '../../assests/services/growth.png';
import performance from '../../assests/services/performance.png';
import strategy from '../../assests/services/strategy.png';
import branding from '../../assests/services/branding.png';

const Services = () => {
  return (
    <div className="Services">
      <div className="Services__container">
        <h1>Why digital presence is a need?</h1>
        <div className="Services__container_box">
          <Service
            odd
            title="Branding"
            content="When you are digitally active can create your loyal audience base by conveying the solution of your potential consumer's problem and even ask for feedback, then it can create word of mouth which will help you in making a stand-out among your competitors."
            src={branding}
          />
          <Service
            title="Business Growth"
            content="When you have online presence then you can ask your audience to share their opinion about those segments in which they want innovation or where they have any complaints and you as a brand can work upon those factors so, that you can be the problem-solvers of your customer."
            src={growth}
          />
          <Service
            odd
            title="Making Strategies"
            content="When you are digitally active you can plot everything in advance with tech know-how, you can offer some discounts some offers to your digitally connected audience so that they can be your loyal customers for forever and meanwhile you can formulate the best seller product or service of yours and can make them as your most demanded product."
            src={strategy}
          />
          <Service
            title="Tracking performance"
            content="In this digital era, everything can be measured in numerics from your expected sales to actual conversion, you can record and recall every minor goal and at any time and place with no fear of data loss."
            src={performance}
          />

          <Service
            odd
            title="24/7 Availability"
            content="Everyone's best friend is INTERNET, whenever you have a doubt or you have a question, you simply google it and you and I both trust the results of Google and even make consideration to try the service online because we can offer everything in a single sight."
            src={available}
          />
          <Service
            title="Forecasting"
            content="When you are digitally active you can see your growth in figures and with that you can clearly formulate the good and bad performances and can schedule everything accordingly, even it will give you stats about the most demanded product of yours and the least demanded one as well."
            src={forecast}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
