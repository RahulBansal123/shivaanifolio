import React, { useRef, useState } from 'react';
import './Audit.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const Audit = (props) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [question, setQuestion] = useState('');
  const form = useRef(null);
  const handleSubmit = (e) => {
    const formData = {
      First_Name: firstName,
      Last_Name: lastName,
      email: email,
      question: question,
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
    <div className="Audit">
      <div className="Audit__container">
        <h1>Get a FREE Audit!</h1>
        <h3>Both your customers and competitors are online. So why not you?</h3>
        <div className="Audit__form">
          <form onSubmit={handleSubmit} ref={form}>
            <div className="Audit__form_container">
              <input
                name="First_Name"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                name="Last_Name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="Audit__form_container">
              <input
                name="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="Audit__form_container">
              <textarea
                name="question"
                placeholder="Message"
                className="Audit__form_container_message"
                required
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div className="Audit__form_submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Audit);
