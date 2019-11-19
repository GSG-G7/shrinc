import React from 'react';
import PropTypes from 'prop-types';
import { notification } from 'antd';
import L from 'leaflet';
import * as geocoding from 'esri-leaflet-geocoder';

import './style.css';

class Map extends React.Component {
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
    this.theMarker = '';
  }

  onMapClick = ({ latlng }) => {
    const { handleCity } = this.props;
    if (this.theMarker) this.map.removeLayer(this.theMarker);
    this.theMarker = L.marker([latlng.lat, latlng.lng]).addTo(this.map);
    const geo = geocoding.geocodeService();
    geo
      .reverse()
      .latlng(latlng)
      .run((error, result) => {
        if (!error) handleCity(result.address.City);
        else this.openNotificationWithIcon(error);
      });
  };

  openNotificationWithIcon = e => {
    notification.error({
      message: 'Something error',
      description: e.message,
      duration: 2,
    });
  };

  render() {
    return <div id="map"></div>;
  }
}

Map.propTypes = {
  handleCity: PropTypes.func.isRequired,
};

export default Map;
