import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const ResortsMap = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB4I0wFBgBa8uee8i-41fj3Jrfxo9DvDoM&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px', width: '100%' }} />,
    mapElement: <div style={{ height: '100%', width: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap defaultZoom={props.zoom} defaultCenter={props.defaultCenter}>
    {props.isResorts ? (
      props.markersPositions.map((markerPosition) =>
        <Marker key={markerPosition.id} clickable position={markerPosition.coordinates}  />)
    ) :
      (
        <Marker clickable position={props.coordinates} />
      )}
  </GoogleMap>
));

export default ResortsMap;
