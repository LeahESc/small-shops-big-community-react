import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import mapStyles from '../mapStyles'
import Geocode from 'react-geocode'
import shopicon from '../images/shopicon.jpg'
import { Container}  from 'semantic-ui-react'

const mapContainerStyle = {
    height: "60vh",
    width: "35vw",
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

const ShopMapContainer = ({shop}) =>  {
    

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY 
    })

    if (loadError) return "There was an error loading Google Maps"
    if(!isLoaded) return "Loading your map!"
    
    const defaultLocation = {
        lat: 34.0522, 
        lng: -118.2437
    }
    // geocoding code i need for map marker!!!! 
    // Geocode.fromAddress(props.shop.address).then(
    //     response => {
    //         const { lat, lng } = response.results[0].geometry.location;
    //         console.log(lat, lng);
    //     })

    return (

        <div className="shop-map"> 
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            options={options}>

            
            <Marker 
                // need to geocode the shop's address for line 65
                position={defaultLocation}
                icons={{
                    // url: {shopicon},
                    scaledSize: new window.google.maps.Size(25,25)
                }}
            />
            </GoogleMap>
        {/* ))} */}
        </div>
            
        // </Container>
    )
}

export default ShopMapContainer
