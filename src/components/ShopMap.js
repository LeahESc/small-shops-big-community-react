import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyles from '../mapStyles'
import shopicon from '../images/shopicon.jpg'


const mapContainerStyle = {
    height: "60vh",
    width: "35vw",
}

const center = {
    lat: 34.0522, lng: -118.2437
}

const options = {
    styles: mapStyles
}

const ShopMap = ({shop}) =>  {
    

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY 
    })

    if (loadError) return "There was an error loading Google Maps"
    if(!isLoaded) return "Loading your map!"
    
    const defaultLocation = {
        lat: 34.0522, 
        lng: -118.2437
    }
    // const geocode = (shop) => {
    //     let location = shop.address.split(' ').join('+')
    //     let key = process.env.REACT_APP_GOOGLE_API_KEY
    //     console.log(location)
    //     fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`, {
    //         params: {
    //             address: shop.address,
    //             key: process.env.REACT_APP_GOOGLE_API_KEY
    //         }
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data.results[0].geometry.location)
    //         let locationObject = data.results[0].geometry.location
    //         console.log(locationObject)
    //         let latitude = parseFloat(locationObject.lat)
    //         let longitude = parseFloat(locationObject.lng)
    //         let position = {
    //             lat: latitude,
    //             lng: longitude
    //         }
    //         console.log(position)
    //         return position
    //     })
    // }

    // const position = geocode(shop)
   

    return (

        <div className="shop-map"> 
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            options={options}>

            
            <Marker 
                // code i want: position={position}
                position={defaultLocation}
                icons={{
                    url: shopicon,
                    scaledSize: new window.google.maps.Size(25,25)
                }}
            />
            </GoogleMap>
       
        </div>
            
    )
}

export default ShopMap
