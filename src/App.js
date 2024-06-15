
import React, { useState } from 'react';
import Popup from './Popup';
import Backdrop from './Backdrop';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="App">
      <button onClick={togglePopup}>show popup</button>
      {isPopupOpen && <Backdrop onClick={togglePopup} />}
      {isPopupOpen && <Popup onClose={togglePopup} />}
    </div>
  );
}

export default App;
