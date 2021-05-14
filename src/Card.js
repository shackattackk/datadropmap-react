import React, { Component,useEffect,useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import * as casesData from "./data/casesdata.json";



function CardBox() {

    const [newCases,setNewCases] = useState(0);

    var count = 0

    useEffect(() => {
        for (var x  in casesData.cases){
            console.log(casesData.cases[x])
            if (casesData.cases[x].HealthStatus=='MILD'){
                count += 1;
            }
        }
        setNewCases(count);
    });



    return (
        <Card.Group>
        <Card style={{borderRadius:'15px',boxShadow:'0 4px 8px 2px rgba(0,0,0,0.2)',backgroundColor:'#f3ae4e'}}>
          <Card.Content>
            <Card.Header className="center aligned header" style={{color:'#f0f1f2',fontSize:'20px'}}><strong>New Cases</strong></Card.Header>
            <Card.Meta className="center aligned meta" style={{color:'#f0f1f2',fontSize:'11px'}}>Bacolod City</Card.Meta>
            <Card.Description className="center aligned description" style={{color:'#f0f1f2',fontSize:'30px'}}>
             <strong>{newCases}</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card style={{borderRadius:'15px',boxShadow:'0 4px 8px 2px rgba(0,0,0,0.2)',backgroundColor:'#cf5c60'}}>
          <Card.Content>
            <Card.Header className="center aligned header" style={{color:'#f0f1f2'}}><strong>More Data</strong></Card.Header>
            <Card.Meta className="center aligned meta" style={{color:'#f0f1f2'}}>Bacolod City</Card.Meta>
            <Card.Description className="center aligned description" style={{color:'#f0f1f2'}}>
             <strong>{newCases}</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        </Card.Group>
        

        
    )
}

export default CardBox

