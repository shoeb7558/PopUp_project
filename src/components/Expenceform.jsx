import React, { useState } from 'react';
import './Expenceform.css';

function Expenceform({ onsubmit }) {
  const [Input1, setinput1] = useState('');
  const [Input2, setinput2] = useState('');
  const [message, setMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const inputvalue1 = (event) => {
   
   
    setinput1(event.target.value);
  };

  const inputvalue2 = (event) => {
  
    setinput2(event.target.value);
  };

  const addbuttonvalue = () => {
    if (Input2 <= 0 || Input2 === '' ) {
      setMessage('Invalid age. Please enter a valid age.');
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      const formdata = {
        name: Input1,
        amount: Input2,
      };
      onsubmit(formdata);
      setinput1('');
      setinput2('');
    }
  };

  return (
    <>
      <div className="ExpenceForm">
        <div className="ExpenceForm1">
          <h5 className="h5tag">UserName</h5>
          <input
            className="Input1"
            type="text"
            placeholder="Enter UserName"
            value={Input1}
            onChange={inputvalue1}
          ></input>
          <h5 className="h5tag">Age</h5>
          <input
            className="Input2"
            type="number"
            placeholder="Enter UserAge"
            value={Input2}
            onChange={inputvalue2}
          ></input>
          <button className="Addbutton" onClick={addbuttonvalue}>
            Add To list
          </button>
          {showErrorMessage && (
            <div className="ErrorMessagePopup">
              <p className="ErrorMessage">{message}</p>
              <button className='errorbutton' onClick={() => setShowErrorMessage(false)}>
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Expenceform;
