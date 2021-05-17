import React, { Component,useEffect,useState } from 'react';
import { Button, Card, Image, Feed, List,Flag, Header, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import * as bedData from "./data/beddata.json";
import './Card.css'



function HospiCardBox() {

    const [filteredHospi,setFilteredHospi] = useState([]);

    

    useEffect(() => {
      
      const getData = async() => { 
      
       var hospiFiltered =  bedData.beds.filter(hospi => {
            if (hospi.city_mun=='BACOLOD CITY (CAPITAL)'){
                return hospi;
            }
        })

        
        let sorted = hospiFiltered.sort((a, b) => b.icu_v - a.icu_v);
        console.log(sorted)
        await setFilteredHospi(sorted);
        
      
    }
    getData();
  },[]);

   
  



    return (


    
    <List className="listScroll"style={{height:'180px',padding:'10px',width:'450px',borderRadius:'10px',boxShadow:'0 4px 8px 2px rgba(0,0,0,0.3)',backgroundColor:'#9ACF5C',overflow:'scroll'}}>
      <Header as='h4' style={{color:'#E2F1D0'}}>Available <span style={{color:'#5C9ACF'}}>Isolated ICU Beds</span></Header>
     { filteredHospi.map(hospi => (
                
    
                <List.Item>
                <List.Content>
                
                <List.Header style={{color:'#E2F1D0',fontFamily:'Lato'}}>{hospi.cfname}</List.Header>
                
                <List.Description style={{fontFamily:'Lato'}}>
                {Array.apply(null, { length: parseInt(hospi.icu_v) }).map((e, i) => (
                    <Icon style={{color:'#5C9ACF'}}name='bed' />
                    ))}
                </List.Description>
                </List.Content>
            </List.Item>
     ))

     }
    </List>

        
    )
}

export default HospiCardBox;

