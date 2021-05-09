import React from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


const defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});





function Map() {

  
  
    return (
        <div className="map">
             <MapContainer center={[10.6840, 122.9563]} zoom={9} scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                <Marker icon={defaultIcon} position={[10.683240064345533,122.95807465530876]}> 
                <Popup>
                  Testing
                </Popup>
                </Marker> 
                 
                
              </MapContainer>
  </div>
            
    )
}

export default Map;