import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import mapStyles from '../mapStyles'
import Geocode from 'react-geocode'
import { Container}  from 'semantic-ui-react'
import shopicon from '../images/shopicon.jpg'

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

// Geocode.setApiKey(process.env.REACT_APP_COOGLE_API_KEY)

const MapContainer = (props) =>  {
    
    const [selectedShop, setSelectedShop] = useState(null)

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY 
    })

    if (loadError) return "There was an error loading Google Maps"
    if(!isLoaded) return "Loading your map!"
    
    const defaultLocation = {
        lat: 34.0522, 
        lng: -118.2437
    }

    const geocode = (shop) => {
        let location = shop.address.split(' ').join('+')
        let key = process.env.REACT_APP_GOOGLE_API_KEY
        console.log(location)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`, {
            params: {
                address: props.shops[0].address,
                key: process.env.REACT_APP_GOOGLE_API_KEY
            }
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data.results[0].geometry.location)
            return data.results[0].geometry.location
        })
    }

  
    // Geocode.fromAddress(props.shops[0].address).then(
    //     response => {
    //         const { lat, lng } = response.results[0].geometry.location;
    //         console.log(lat, lng);
    //     })

    const containerStyle = {
        marginTop: "20px",
        marginBottom: "20px",
        marginRight: "20px"
      };

    return (

        // <Container style={containerStyle}> 
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            options={options}>

            {props.shops.map(shop => ( 
            <Marker 
                key={shop.id} 
                
                position={geocode(shop)}
                // onClick={() => setSelectedShop(shop)}
                icons={{
                    icon: shopicon,
                    scaledSize: new window.google.maps.Size(25,25)
                }}
            />
            ))}
            {selectedShop && ( 
                <InfoWindow
                    position={defaultLocation}
                    onCloseClick={() => setSelectedShop(null)}  
                > 
                <div>Shop Details</div>
                <h4>{selectedShop.name}</h4>
                </InfoWindow>
            )}
            </GoogleMap>
        // </Container>
    )
}

export default MapContainer
