import React from 'react';

export default function Map({ mapContainer }) {

  return (
    <div ref={mapContainer} className="map-container" />
  );
};
