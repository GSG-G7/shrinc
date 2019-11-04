import React from 'react';
import L from 'leaflet';
import * as geocoding from 'esri-leaflet-geocoder';

import './style.css';

class Map extends React.Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    city: '',
    theMarker: {},
  };

  componentDidMount() {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken:
          'pk.eyJ1Ijoic2hyaW5jIiwiYSI6ImNrMml6c3pyYjFlbmwzY3A1bGF1djE4cDkifQ.vWHQYdsTFHFec905OCTzzw',
      }
    ).addTo(this.map);
    this.map.on('click', this.onMapClick);
  }

  onMapClick = ({ latlng }) => {
    const { theMarker } = this.state;
    this.map.removeLayer(theMarker);
    this.setState({
      theMarker: L.marker([latlng.lat, latlng.lng]).addTo(this.map),
    });
    const geo = geocoding.geocodeService();
    geo
      .reverse()
      .latlng(latlng)
      .run((error, result) => {
        // eslint-disable-next-line react/no-unused-state
        if (!error) this.setState({ city: result.address.City });
      });
  };

  render() {
    return <div id="map"></div>;
  }
}

export default Map;
