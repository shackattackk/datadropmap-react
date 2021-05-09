import React from 'react';
import './Map.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


function Map() {
    return (
        <div className="map">
            <MapContainer center={[10.6840, 122.9563]} zoom={9} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
  </MapContainer>
  </div>
            
    )
}

export default Map;