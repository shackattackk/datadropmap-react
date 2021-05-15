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
        <div className="right_l">
        <CardBox/>
        </div>
        <div className="right_r">
          <BrgyCardBox/>

        </div>
        
     
      
      
      </div>
    </div>
  );
}

export default App;
