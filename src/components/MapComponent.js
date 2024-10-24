import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

function MapComponent() {
    // Default coordinates (Latitude, Longitude)
    const position = [43.8563, 18.4131]; // Example coordinates for Sarajevo, Bosnia

    return (
        <div style={{ height: '500px', width: '%' }}>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                {/* Tile Layer for the map */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Marker on the map */}
                <Marker position={position}>
                    <Popup>
                        KK Željezničar - Sarajevo <br /> Home location.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default MapComponent;
