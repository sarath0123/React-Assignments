import React from 'react';
import App from './App';
import './Order-info.css';


function OrderInfo(props) {
  const {orderinfo}=props;
    return (
        <div className="order-info">
      <div className='order'>
        <p><b>Status</b><br></br>
        <ul>
          <li>{orderinfo.Status}</li>
        </ul>
        </p>
      </div>
      <div className='order'>
        <p><b>Door</b><br></br>
        {orderinfo.Door}
        </p>
      </div>
      <div className='order'>
        <p><b>Time</b><br></br>
        {orderinfo.ReportTime} <span className="grey">{orderinfo.ReportDate}</span>
        </p>
      </div>
    </div>
    )
}

export default OrderInfo;
