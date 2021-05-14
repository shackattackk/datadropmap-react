import './App.css';
import React, { Component,useEffect,useState } from 'react';
import Map from './Map';
import { Button, Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


function App() {
  return (
    <div className="App">
      <div className="app__top">
      <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>

      </div>
      
      <div className="app__bot">
        
      
      <Map />
      </div>
    </div>
  );
}

export default App;
