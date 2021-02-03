import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyles from '../mapStyles'
import Geocode from 'react-geocode'

const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
}

const center = {
    lat: 34.0522, lng: -118.2437
}

const options = {
    styles: mapStyles,
    disabledDefaultUI: true,
    zoomControl: true
}

const MapContainer = () =>  {

        const {isLoaded, loadError} = useLoadScript({
            googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY 
        })

        if (loadError) return "There was an error loading Google Maps"
        if(!isLoaded) return "Loading your map!"
        
        Geocode.fromAddress(props.shops[0].address).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, lng);
            })

        return (
            <div className='map-container'>
                <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}>

                {/* {props.shops.map(shop => ( 
                <Marker 
                key={shop.id} 
                position=
                    )
                 )} */}
                </GoogleMap>
            </div>
        )
    }

export default MapContainer
