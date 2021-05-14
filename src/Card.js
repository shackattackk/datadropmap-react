import React, { Component,useEffect,useState } from 'react';
import { Button, Card, Image, Feed } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import * as casesData from "./data/casesdata.json";



function CardBox() {

    const [newCases,setNewCases] = useState(0);
    const [brgyCnt,setBrgyCnt] = useState({});

    var count = 0
    var barangayObj = {}

    useEffect(() => {
      
      const getData = async() => { 
      
        for (var x  in casesData.cases){
            if (casesData.cases[x].HealthStatus=='MILD'){
                count += 1;
            }
        }
       setNewCases(count);

      
    }
    getData();
  },[]);

   




    return (
        
      <Card style={{borderRadius:'15px',boxShadow:'0 4px 8px 2px rgba(0,0,0,0.2)',backgroundColor:'#f3ae4e'}}>
      <Card.Content>
        <Card.Header className="center aligned header" style={{color:'#f0f1f2',fontSize:'20px'}}><strong>New Cases</strong></Card.Header>
        <Card.Meta className="center aligned meta" style={{color:'#f0f1f2',fontSize:'11px'}}>Bacolod City</Card.Meta>
        <Card.Description className="center aligned description" style={{color:'#f0f1f2',fontSize:'30px'}}>
         <strong>{newCases}</strong>
        </Card.Description>
      </Card.Content>
    </Card>
       

       
  
        

        
    )
}

export default CardBox

