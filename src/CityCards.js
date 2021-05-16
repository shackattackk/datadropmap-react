import React, { Component,useEffect,useState } from 'react';
import { Button, Card, Image, Feed, List,Flag, Header, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import * as casesData from "./data/Nocasesdata.json";
import './Card.css'



function CityCardBox() {

    const [cityCnt,setCityCnt] = useState({});

    var cityObj = {}

    useEffect(() => {
      
      const getData = async() => { 
      

        for (var x  in casesData.cases){
          if (casesData.cases[x].CityMunRes==""){
            continue;
          }
          else if (cityObj[casesData.cases[x].CityMunRes]){
              cityObj[casesData.cases[x].CityMunRes]++;
          }
          else{
            cityObj[casesData.cases[x].CityMunRes] = 1
          }
      }
      let entries = Object.entries(cityObj);
      let sorted = entries.sort((a, b) => b[1] - a[1]);
      await setCityCnt(sorted);
      
    }
    getData();
  },[]);

   
  



    return (


    
    <List className="listScroll"style={{height:'600px',padding:'10px',width:'200px',borderRadius:'10px',boxShadow:'0 4px 8px 2px rgba(0,0,0,0.3)',backgroundColor:'#f3ae4e',overflow:'scroll'}}>
      <Header as='h4' style={{color:'#FBE6C8'}}>Cases by City</Header>
      {
        Object.values(cityCnt).map(city => (
              <List.Item>
          <List.Content>
            
            <List.Header style={{color:'#FBE6C8',fontFamily:'Lato'}}>{city[0]}</List.Header>
            
            <List.Description style={{fontFamily:'Lato'}}>
            {Array.apply(null, { length: parseInt(city[1]) }).map((e, i) => (
                <Icon style={{color:'#cf5c60'}}name='male' />
              ))}
            </List.Description>
          </List.Content>
    </List.Item>
        ))
      }
    </List>

        
    )
}

export default CityCardBox;

