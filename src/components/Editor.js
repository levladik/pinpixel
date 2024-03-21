import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { accessToken } from 'mapbox-gl';
import { SearchBox } from '@mapbox/search-js-react';

mapboxgl.accessToken = 'pk.eyJ1IjoibGV2bGFkaWsiLCJhIjoiY2ttbmtreXpsMDJuczJvbGZjbWk5a2N2diJ9.w50051-ckXCDXPYqgy-t1w';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    const nav = new mapboxgl.NavigationControl();
    
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.addControl(nav);
  }, []);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <SearchBox 
        accessToken={mapboxgl.accessToken}
        map={map.current}
        value=''
        placeholder='Enter your city'
        options={{
          types: 'place',
          }}
      />
    </div>
  );
}
