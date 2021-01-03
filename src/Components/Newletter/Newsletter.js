import React, { useRef, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './Newsletter.css';
import Brusher from './brush';
const Newsletter = ({ history, white }) => {
  const [email, setEmail] = useState('');
  const form = useRef(null);

  const handleSubmit = (e) => {
    const formData = { email: email, First_Name: 'Subscribe to newsletter' };
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_URL}contact`, formData)
      .then((res) => {
        if (res.data.mssg === 'Success') {
          window.location.reload();
        } else if (res.data.mssg === 'Error') {
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
    <div
      className="Newsletter"
      style={{ backgroundColor: white ? '#fff' : 'var(--background)' }}
    >
      <div className="Brusher_container">
        <Brusher
          options={{
            image: 'homepage.png',
            keepCleared: false,
            stroke: 80,
            lineStyle: 'round',
            autoBlur: false,
            autoBlurValue: 15,
          }}
        >
          <div className="Newsletter_form_container">
            <h2>Join our newsletter</h2>
            <p>Got a question? We would love to hear from you.</p>
            <div className="form_input">
              <form
                className="form_input_form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                ref={form}
              >
                <input
                  type="hidden"
                  value="Subscribe to Newletter"
                  name="question"
                />

                <input
                  placeholder="Enter your email address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <button>Join Now!</button>
              </form>
            </div>
          </div>
        </Brusher>
      </div>
    </div>
  );
};
export default withRouter(Newsletter);
