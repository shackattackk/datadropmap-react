import React, { Component,useEffect,useState } from 'react';
import { Button, Card, Image, Feed } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import * as casesData from "./data/casesdata.json";



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


       
      
      

       <Card style={{borderRadius:'15px',boxShadow:'0 4px 8px 2px rgba(0,0,0,0.5)',backgroundColor:'#cf5c60'}}>
    <Card.Content>
      <Card.Header className="center aligned description" style={{color:'#f0f1f2'}}>Cases by Barangay</Card.Header>
    </Card.Content>
    <Card.Content>
    <Feed>
    {
        Object.keys(brgyCnt).map((key, i) => (
          
          
        <Feed.Event>
          <Feed.Content>
          
            <Feed.Summary >
              {key} : <strong style={{color:'#f0f1f2'}}>{brgyCnt[key]}</strong>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        ))
      }




      

      </Feed>
    </Card.Content>
  </Card>
  
        

        
    )
}

export default BrgyCardBox;

