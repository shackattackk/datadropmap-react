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
        <Card>
          <Card.Content>
            <Card.Header className="center aligned header">New Cases</Card.Header>
            <Card.Meta className="center aligned meta">Bacolod City</Card.Meta>
            <Card.Description className="center aligned description">
             <strong>{newCases}</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        </Card.Group>
    )
}

export default CardBox

