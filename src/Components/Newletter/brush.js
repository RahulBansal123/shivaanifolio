import React from 'react';
import BrusherClass from './BrusherClass';
// import uuid from "react-uuid";

export default function Brusher(props) {
  const id = 'brusher';
  // id.replace("-", "");
  React.useEffect(() => {
    // make sure parent element doesn't cover the canvas
    let parentEl = document.getElementById(id).parentElement;
    parentEl.style.zIndex = 1;
    parentEl.style.position = 'relative';
    parentEl.style.backgroundSize = 'cover';
    const brusher = new BrusherClass({
      ...props.options,
      element: '#' + id,
    });
    brusher.init();
  });

  return (
    <>
      <div
        id={id}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {props.children}
      </div>
    </>
  );
}
