import './App.css';
import React, { Component,useEffect,useState } from 'react';
import Map from './Map';
import CardBox from "./Card";
import BrgyCardBox from "./BrgyCards"
import CityCardBox from "./CityCards"
import HospiCardBox from "./HospitalCards"



function App() {
  return (
    <div className="App">
      <div className="app__left">
        <Map />
      </div>
      
      <div className="app__right">
        <div className="app__righttitle">
          <h2><span style={{color:'#59A2A1'}}>Covid-19</span> Data for Negros Occidental</h2>
        </div>
         <div className="app__rightup">
            <div className="right_l">
              <CityCardBox/>
            </div>
            <div className="right_r">
              <BrgyCardBox/>
            </div>
        </div>
        <div className = "app__rightbot">
          <HospiCardBox/>
        </div>
        <div className="app__rightfooter">
         Last Updated: May 13, 2021
        </div>
      </div>
    </div>
  );
}

export default App;
