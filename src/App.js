import './App.css';
import React, { Component,useEffect,useState } from 'react';
import Map from './Map';
import { CSVReader } from 'react-papaparse';


function App() {

  const [data,setData] = useState([]);


  const handleCSVRead = (data) =>{
    setData(data);
    console.log((data[28]['data'][2]));
    

  }
  
  return (
    <div className="App">
      
      <Map />

      <CSVReader
        onDrop={handleCSVRead}
        style={{}}
        config={{}}
        header={true}
        
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
        
    </div>
  );
}

export default App;
