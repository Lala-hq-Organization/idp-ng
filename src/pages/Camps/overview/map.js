import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from 'styled-components';

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 9.072264, lng: 7.491302 }}
      >
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'Kano'}
          position={{ lat: 12.0, lng: 8.516667 }}
        />
      </Map>
    );
  }
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
