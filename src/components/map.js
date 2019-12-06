import React from "react";
import {Map, Marker, GoogleApiWrapper} from "google-maps-react";

class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google}
                style={{width: "100%", height: "100%", position: "relative"}}
                className={"map"}
                initialCenter={{
                    lat: -34.8377987,
                    lng: -55.9828195
                }}
                zoom={15} >
                <Marker
                    title={"Canelones, Lagomar Sur"}
                    name={"Lagomar"}
                    position={{lat: -34.8377987, lng: -55.9828195}} />
            </Map>
        );
    }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDcey2ExM83JaUJXDkHGUkFQgD6wUeg0Gw')
})(MapContainer);