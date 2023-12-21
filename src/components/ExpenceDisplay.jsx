import React from 'react';
import './ExpenceDisplay.css';

function ExpenceDisplay(props) {
  return (
    <>
    
      
      
      <div className='displaydiv2'>
        <h3 className='nameh2'>{props.name}</h3>
        <h3 className='amounth2'>{`(${props.amount} YEAR OLD)`}</h3>
      </div>
      
    </>
  );
}

export default ExpenceDisplay;
