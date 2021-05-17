import React from 'react';
import  { Component,useEffect,useState } from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import * as hospitalData from "./data/hospitaldata.json";
import * as bedData from "./data/beddata.json";



const defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});








function Map() {

    const [activeHospi,setActiveHospi] = useState(null);
    const [activeBed,setActiveBed] = useState(null);

    
    const checkBed = (hospital) =>{
      bedData.beds.map(bed => {
        if (hospital.cfname == bed.cfname){
          setActiveBed(bed)
        }
      })
    }
  
  
  
    return (
        <div className="map">
             <MapContainer center={[10.2926, 123.0247]} zoom={9} scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />


                  
                  {hospitalData.hospitals.map(hospital => (
                    <Marker key={hospital.id} icon={defaultIcon} position={[hospital.north_coord,hospital.east_coord]}  eventHandlers={{
                      click: (e) => {
                        setActiveHospi(hospital)
                        checkBed(hospital)
                      },
                    }}/> 
                    
                    
                  ))}
                  


                  {activeHospi && activeBed &&(
                    <Popup 
                    position={[activeHospi.north_coord,activeHospi.east_coord]}
                    >
                      <div className="popup">
                        <h4 className="popup">{activeHospi.cfname}</h4>
                        <div className="popuptext">Available ICU Beds: <strong>{activeBed.icu_v}</strong></div>
                        <div className="popuptext">Available Isolation beds: <strong>{activeBed.isolbed_v}</strong></div>
                        
                      </div>
                    </Popup> 

                  )}

                
                 
                
              </MapContainer>
  </div>
            
    )
}

export default Map;