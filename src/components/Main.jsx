import React, { useEffect } from 'react'
import VideoBox from './VideoBox';
import Shorts from './Shorts';
import Home from './Home';
import {  Route, Routes } from 'react-router-dom';

const Main = () => {
  return ( 
<div className='md:ml-12'>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shorts" element={<Shorts />} />
        <Route path="/watch" element={<VideoBox />} />
      </Routes> 
    </div>
  )
}

export default Main