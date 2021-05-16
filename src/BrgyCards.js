import React, { Component,useEffect,useState } from 'react';
import { Button, Card, Image, Feed, List,Flag, Header, Icon } from 'semantic-ui-react'
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
      let entries = Object.entries(barangayObj);
      let sorted = entries.sort((a, b) => b[1] - a[1]);
      console.log(sorted)
      await setBrgyCnt(sorted);
      
    }
    getData();
  },[]);

   
  



    return (


    
    <List className="listScroll"style={{height:'300px',padding:'10px',width:'200px',borderRadius:'10px',boxShadow:'0 4px 8px 2px rgba(0,0,0,0.3)',backgroundColor:'#cf5c60',overflow:'scroll'}}>
      <Header as='h4'>Cases by Barangay</Header>
      {
        Object.values(brgyCnt).map(brgy => (
              <List.Item>
          <List.Content>
            
            <List.Header style={{color:'#f0f1f2',fontFamily:'Lato'}}>{brgy[0]}</List.Header>
            
            <List.Description style={{color:'#f0f1f2',fontFamily:'Lato'}}>
            {Array.apply(null, { length: parseInt(brgy[1]) }).map((e, i) => (
                <Icon style={{color:'#B23439'}}name='male' />
              ))}
            </List.Description>
          </List.Content>
    </List.Item>
        ))
      }
    </List>

        
    )
}

export default BrgyCardBox;

