import React, { Component,useEffect,useState } from 'react';
import { Button, Card, Image, Feed } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import * as casesData from "./data/casesdata.json";
import './Card.css'



function BrgyCardBox() {

    const [brgyCnt,setBrgyCnt] = useState({});

    var count = 0
    var barangayObj = {}

    useEffect(() => {
      
      const getData = async() => { 
      

        for (var x  in casesData.cases){
          if (casesData.cases[x].BarangayRes==""){
            continue;
          }
          else if (barangayObj[casesData.cases[x].BarangayRes]){
              barangayObj[casesData.cases[x].BarangayRes]++;
          }
          else{
            barangayObj[casesData.cases[x].BarangayRes] = 1
          }
      }
      await setBrgyCnt(barangayObj);
      
    }
    getData();
  },[]);

   




    return (


       <Card.Group> 
      {
        Object.keys(brgyCnt).map((key, i) => (

      <Card style={{height:'50px',width:'170px',borderRadius:'10px',boxShadow:'0 4px 8px 2px rgba(0,0,0,0.3)',backgroundColor:'#cf5c60'}}>
      <Card.Content>
        <Card.Header className="center aligned header cardFont" style={{color:'#f0f1f2',fontSize:'10px'}}><strong>{key}</strong></Card.Header>
        <Card.Description className="center aligned description cardFont" style={{color:'#f0f1f2',fontSize:'15px'}}>
         <strong>{brgyCnt[key]}</strong>
        </Card.Description>
      </Card.Content>
    </Card>
          ))
      }
      </Card.Group>

        
    )
}

export default BrgyCardBox;

