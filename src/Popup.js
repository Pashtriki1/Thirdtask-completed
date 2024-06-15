
import React from 'react';
import './Popup.css';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
       <div className='Header'>
       <h2>Theme Color</h2>
       <a>Change Theme</a>
       </div>
       
        <div className='Font-Color'>
        <label>Font Color</label>
        <p className='FC'>#444444</p>
        <input type="color" value="#444444" readOnly />
        </div>
        <hr/>
        <div className='Background-color'>
        <label>Background Color</label>
        <p className='BGC'>#FFFFFF</p>
        <input type="color" value="#FFFFFF" readOnly />
        </div>
        <hr/>
        <div className='Button-Color'>
        <label>Button Color</label>
        <p className='BC'>#2072EF</p>
        <input type="color" value="#2072EF" readOnly />
        </div>
        <hr></hr>
        <div className='Button-Border'>
        <label>Button Border Color</label>
        <p className='BBC'>#2072EF</p>
        <input type="color" value="#2072EF"  />
        </div>
        <hr></hr>
        <div className='Mouseover-color'>
        <label>Buttons Mouseover Color</label>
        <p className='BMC'>#0053D1</p>
        <input type="color"  value="#0053D1" readOnly />
        </div>
        <hr></hr>
       
        <div className='Save-Cancel'>
        <button className='Cancel-btn' onClick={onClose}>Cancel</button>
        <button className='Save-btn'>Save</button>
        </div>
        
        
        
        
      </div>
    </div>
  );
};

export default Popup;
