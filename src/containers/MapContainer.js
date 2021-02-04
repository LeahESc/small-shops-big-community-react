import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import mapStyles from '../mapStyles'
import Geocode from 'react-geocode'
import { Container}  from 'semantic-ui-react'

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

// Geocode.setApiKey(process.env.REACT_APP_COOGLE_GEO_API_KEY)

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

        <Container text style={containerStyle}> 
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
            options={options}>

            {props.shops.map(shop => ( 
            <Marker 
                key={shop.id} 
                position={defaultLocation}
                onClick={() => setSelectedShop(shop)}
                icons={{
                    url: "..public/someimage.jpg",
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
        </Container>
    )
}

export default MapContainer
