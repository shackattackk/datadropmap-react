import './App.css';
import React, { Component,useEffect,useState } from 'react';
import Map from './Map';
import CardBox from "./Card";



function App() {
  return (
    <div className="App">
      <div className="app__left">
      <Map />
      
      </div>
      
      <div className="app__right">
        
      <CardBox/>
      
      </div>
    </div>
  );
}

export default App;
