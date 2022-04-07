import React from 'react'
import { useState,useEffect } from 'react';
import './Outer.css';
import Header from './Header';
import Slide from './Slide';




export default function Outer() {
  const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3004/user")
          .then(res => res.json())
          .then((result) => {
            setItems(result);
            }
          )
      }, [])
    console.log(items)
  return (<>
      <div className='headmain'>
        <Header/>
      </div>
      <section className='card-section'>
        {items.map((itemcontents)=>(
          <Slide itemcontents={itemcontents}/>
        ))}
      </section>
</>
  )
}