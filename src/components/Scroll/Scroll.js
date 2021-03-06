import React from 'react';
import './Scroll.css';

const Scroll = ({ children }) => {
  return (
    <div className='scroll'
      style={{
        overflowY: 'scroll',
        height: '800px',
        border: '5px solid black'
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;