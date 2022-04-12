import React from 'react'
import './App.css';
import { Outlet,Link } from "react-router-dom";



export default function App() {
  return (
    <div className="wrapper">

      <div className="innerbox">
        <img className='photo' src="./Images/photo.jpeg"/>
      </div>
      <div className="innerbox">
        <h1 className="heading">10X Team 04</h1>
        <button>
            <Link to="/postview">Enter</Link>
        </button>
      </div>


    <Outlet />
    </div>
  )
}
