import React from "react";
import "./Questions.css";
import Container from './Container/Container';
const Questions = () => {
  return (
    <div className="Questions">
      <div className="Questions__container">
        <h1>Why online presence is a need?</h1>
        <div className='Questions_container_box'>
          <Container /><Container /><Container /><Container /><Container />
        </div>
      </div>
    </div>
  );
};

export default Questions;
