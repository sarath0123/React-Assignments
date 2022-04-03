import React from 'react';
import './App.css';
import CustomerInfo from './Customer-info';
import OrderInfo from './Order-info';
import ProductList from './Product-list';


var arrow="<"

const object = {
    Name: 'Alan Ford',
    EmployeeID: '00005152',
    Appointment: '09:00 (24-05-2016)',
    Email: 'alan.form@email.nl',
    Phone: '+31123456789'
}

const orderinfo={
    Status: 'In progress',
    Door: 'Mark',
    ReportTime: '10:30',
    ReportDate: '(25-05-2016)'
}

const productinfo={
  Name:'Boltaart Bosbessen',
  Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\' do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  Photo: 'https://www.w3schools.com/howto/img_avatar.png',
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
    <CustomerInfo object={object}/>
    <OrderInfo orderinfo={orderinfo}/>
    <ProductList productinfo={productinfo}/>
    
    </div>
  );
}

export default App;
