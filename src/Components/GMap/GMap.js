import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import GoogleMap from "react-google-map";
import GoogleMapLoader from "react-google-maps-loader";
import iconMarker from '../../igm/marker.png'
import './GMap.css';

const MY_API_KEY = null;

const iconMarkerHover = iconMarker;

class GMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: {
                name: 'vit'
            }
        }
    }


    onInfoWindowClose() {

        console.log('onInfoWindowClose')
    }

    onMarkerClick() {
        console.log('selectedPlace' )
    }

    render() {

        const googleMaps = {};
        const style = {
            width: '100vw',
            height: '100vh'
        };
        console.log(this.state);

        return (<div>
            
            super
            <Map
                google={this.props.google}
                zoom={19}
                style={style}
                initialCenter={{
                    lat: 49.235827,
                    lng:  28.426037
                }}
                //onClick={this.onMapClicked}
            >
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'}/>

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        </div>)
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBJKZHC5fuTGVumYM0zkD-6OsN--fVwk3U')
})(GMap)