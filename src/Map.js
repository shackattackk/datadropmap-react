import React from 'react';
import  { Component,useEffect,useState } from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import * as hospitalData from "./data/hospi.json";


const defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});





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
                    <Marker key={hospital.id} icon={defaultIcon} position={[hospital.lat,hospital.long]}  eventHandlers={{
                      click: (e) => {
                        setActiveHospi(hospital)
                      },
                    }}/> 
                    
                    
                  ))}

                  {activeHospi && (
                    <Popup 
                    position={[activeHospi.lat,activeHospi.long]}
                    >
                      <div>
                        <h2>{activeHospi.name}</h2>
                        <p>ICU Beds: <strong>{activeHospi.icu_v}</strong></p>
                        <p>Isol beds: <strong>{activeHospi.isolbed_v}</strong></p>
                      </div>
                    </Popup> 

                  )}

                
                 
                
              </MapContainer>
  </div>
            
    )
}

export default Map;