import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from 'styled-components';

function MapContainer(props) {
  const displayMarkers = () => {
    return props.locations.map((location, index) => {
      return (
        <Marker
          key={index}
          id={index}
          title={location.title}
          position={{
            lat: location.coords.lat,
            lng: location.coords.lng
          }}
        />
      );
    });
  };

  return (
    <Map
      google={props.google}
      zoom={7}
      initialCenter={{ lat: 9.072264, lng: 7.491302 }}
    >
      {displayMarkers()}
    </Map>
  );
}

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = () => {
  return <CircleLoader css={override} size={100} color={'#9D52CC'} />;
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyArvD0YkgD-ZjHcPbdlidNCPXxsXjtYf9Q',
  LoadingContainer: Loader
})(MapContainer);
