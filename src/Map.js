import React from 'react';
import  { Component,useEffect,useState } from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import * as hospitalData from "./data/DOH_Datadrop.json";



const defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});


console.log(typeof(hospitalData))






function Map() {

    const [activeHospi,setActiveHospi] = useState(null)

    

  
  
  
    return (
        <div className="map">
             <MapContainer center={[10.6840, 122.9563]} zoom={9} scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />


                  
                  {hospitalData.hospitals.map(hospital => (
                    <Marker key={hospital.id} icon={defaultIcon} position={[hospital.north_coord,hospital.east_coord]}  eventHandlers={{
                      click: (e) => {
                        setActiveHospi(hospital)
                      },
                    }}/> 
                    
                    
                  ))}
                  

                 

                    

                  

                  {activeHospi && (
                    <Popup 
                    position={[activeHospi.north_coord,activeHospi.east_coord]}
                    >
                      <div>
                        <h2>{activeHospi.cfname}</h2>
                        <p>ICU Beds: <strong>{activeHospi.ics_total}</strong></p>
                        <p>Isol beds: <strong>{activeHospi.nurse_triage}</strong></p>
                      </div>
                    </Popup> 

                  )}

                
                 
                
              </MapContainer>
  </div>
            
    )
}

export default Map;