import './App.css';
import React, { Component,useEffect,useState } from 'react';
import Map from './Map';
import CardBox from "./Card";
import BrgyCardBox from "./BrgyCards"



function App() {
  return (
    <div className="App">
      <div className="app__left">
      <Map />
      
      </div>
      
      <div className="app__right">
        
      <CardBox/>
      <BrgyCardBox/>
      
      </div>
    </div>
  );
}

export default App;
