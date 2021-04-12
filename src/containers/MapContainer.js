// import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyles from '../mapStyles'
import shopicon from '../images/shopicon.jpg'
import uuid from 'react-uuid'

const mapContainerStyle = {
    height: "90vh",
    width: "90vw",
}

const center = {
    lat: 34.0522, lng: -118.2437
}

const options = {
    styles: mapStyles,
    disabledDefaultUI: true,
    zoomControl: true
}

const MapContainer = (props) =>  {
    
    // const [selectedShop, setSelectedShop] = useState(null)

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY 
    })

    if (loadError) return "There was an error loading Google Maps"
    if(!isLoaded) return "Loading your map!"
    
    // const defaultLocation = {
    //     lat: 34.0522, 
    //     lng: -118.2437
    // }

    
    

   

    return (
        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}>

        {props.shops.map(shop => {
            let gc = geocode(shop)
            return ( 
            <Marker 
                key={uuid()} 
                position={gc}
                // onClick={() => setSelectedShop(shop)}
                icons={{
                    icon: shopicon,
                    scaledSize: new window.google.maps.Size(25,25)
                }}
            />
        )})}
        {/* {selectedShop && ( 
            <InfoWindow
                position={defaultLocation}
                onCloseClick={() => setSelectedShop(null)}  
            > 
            <div>Shop Details</div>
            <h4>{selectedShop.name}</h4>
            </InfoWindow>
        )} */}
        </GoogleMap>  
    )
}


const geocode = (shop) => {
    let location = shop.address.split(' ').join('+')
    let key = process.env.REACT_APP_GOOGLE_API_KEY
    let locationObject
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`, {
        params: {
            address: shop.address,
            key: process.env.REACT_APP_GOOGLE_API_KEY
        }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data.results[0].geometry.location)
        let locationObject = data.results[0].geometry.location
        console.log("loc obj", locationObject)
        return locationObject
    })
    console.log("returned location object:", locationObject)
}

export default MapContainer
