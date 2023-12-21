import React, { useState } from 'react';
import Expenceform from './components/Expenceform';
import ExpenceDisplay from './components/ExpenceDisplay';

function App() {
  const [userData, setUserData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const dataHandler = (formData) => {
    setUserData((prevData) => [...prevData, formData]);
    setIsFormVisible(false); 
  };
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
     
       <Expenceform onsubmit={dataHandler} onCancel={toggleFormVisibility} />
      {userData.map((data, index) => (
        <ExpenceDisplay key={index} name={data.name} amount={data.amount} />
      ))}
    </div>
  );
}

export default App;
