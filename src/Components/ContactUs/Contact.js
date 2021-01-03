import React, { useRef, useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import ContactLogo from '../../assests/contact.svg';
import { Helmet } from 'react-helmet';
import Logo from '../../assests/logo.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = (props) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [question, setQuestion] = useState('');
  const [company, setCompany] = useState('');
  const form = useRef(null);
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const handleSubmit = (e) => {
    const formData = {
      First_Name: firstName,
      Last_Name: lastName,
      email: email,
      question: question,
      company: company,
    };
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_URL}contact`, formData)
      .then((res) => {
        if (res.data.mssg === 'Success') {
          window.location.reload();
        } else if (res.data.mssg === 'Error') {
          window.location.reload();
          alert('Some Error Occured');
        } else {
          window.location.reload();
        }
      })
      .catch((err) => {
        alert('Some Error Occured');
      });
  };

  return (
    <div className="Contact">
      <Helmet>
        <title>Contact us </title>
        <meta
          name="description"
          content="Any query or suggestions are most welcome , feel free to share your thoughts."
        />
        <link rel="canonical" href="https://www.shivaanibansal.in/contact" />
        <meta property="og:type" content="Contact us " />
        <meta property="og:title" content="CONTACT US - SHIVANI FOLIO" />
        <meta
          property="og:description"
          content="Any query or suggestions are most welcome , feel free to share your thoughts."
        />
        <meta
          property="og:url"
          content="https://www.shivaanibansal.in/contact/"
        />
        <meta property="og:image" content={Logo} />

        <meta property="og:site_name" content="ShivaaiBansal.in" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Any query or suggestions are most welcome , feel free to share your thoughts."
        />
        <meta name="twitter:title" content="CONTACT US - SHIVANI FOLIO" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="SHIVAANI  FOLIO &raquo; Blogs"
          href="https://www.shivaanibansal.in/blogs/"
        />
      </Helmet>
      <div className="Contact__left">
        <h1>Let's create progress together!</h1>
        <p>
          Want to learn more about our services? Submit this form and we will
          contact you soon.
        </p>
        <object
          type="image/svg+xml"
          data={ContactLogo}
          className="Contact__icon"
          data-aos="zoom-in-up"
        >
          Upgrade Your browser to see this.
        </object>
      </div>
      <div className="Contact__right">
        <div className="Contact__above">
          <form className="Contact__form" onSubmit={handleSubmit} ref={form}>
            <div className="Contact__form_row">
              <div className="Contact__form_row_data">
                <label htmlFor="First_Name">First Name</label>
                <input
                  name="First_Name"
                  type="text"
                  placeholder="eg: Shivaani"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="Contact__form_row_data">
                <label htmlFor="Last_Name">Last Name</label>
                <input
                  name="Last_Name"
                  type="text"
                  placeholder="eg: folio"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="Contact__form_row">
              <div className="Contact__form_row_data">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="eg: shivani@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="Contact__form_row">
              <div className="Contact__form_row_data">
                <label htmlFor="company">Company Name</label>
                <input
                  name="company"
                  type="text"
                  placeholder="eg: folio"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>

            <div className="Contact__form_row">
              <div className="Contact__form_row_data">
                <label htmlFor="question">Questions or Comments</label>
                <textarea
                  required
                  name="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="Contact__form_submit">
              Submit Request
            </button>
            <div className="Contact__form_row">
              <div className="Contact__form_row_data">
                <p>
                  By clicking Submit request, you agree to receive marketing
                  updates from us according with our Privacy Policy.
                </p>
              </div>
            </div>
          </form>
        </div>
        {/* <div className='Contact__below'></div> */}
      </div>
    </div>
  );
};

export default withRouter(Contact);
