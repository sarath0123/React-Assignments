import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_page from './Landing_page';
import Postview from './../Postview';


export default function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing_page/>}/>
                <Route path="postview" element={<Postview/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
