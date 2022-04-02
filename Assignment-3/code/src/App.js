import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow="<"

var arrow2=">"

const object = {
    Name: 'Alan Ford',
    EmployeeID: '00005152',
    Appointment: '09:00 (24-05-2016)',
    Email: 'alan.form@email.nl',
    Phone: '+31123456789'
}

function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <header className="head">
      <p className="arr">{arrow}</p>
      <p ><b>{object.Name}</b><br></br>
        <span className="grey">{object.EmployeeID}</span></p>
      <button type="button">Print</button>
    </header>
    <div className="customer-info">
      <p><b>Appointment: </b>{object.Appointment}</p>
      <p><b>Email: </b>{object.Email}</p>
      <p><b>Phone: </b>{object.Phone}</p> 
    </div>
    <div className="order-info">
      <div className='order'>
        <p><b>Status</b><br></br>
        <ul>
          <li>In Progress</li>
        </ul>
        </p>
      </div>
      <div className='order'>
        <p><b>Door</b><br></br>
        Mark
        </p>
      </div>
      <div className='order'>
        <p><b>Time</b><br></br>
        10:30  <span className="grey">(25-05-2016)</span>
        </p>
      </div>
    </div>
    <div className="product-list">
      <div className='pic'>
        <div className='squarebox'></div>
        <img src="https://www.w3schools.com/howto/img_avatar.png"/>
      </div>
      <div className='txt'>
        <h2>Boltaart Bosbessen</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='ar2'>{arrow2}</div>
    </div>
    </div>
  );
}

export default App;
