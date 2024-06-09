import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapData from './MapData';
import Map from './Map';
import { Stack } from '@mui/material';

const accessToken = "pk.eyJ1IjoibGV2bGFkaWsiLCJhIjoiY2ttbmtreXpsMDJuczJvbGZjbWk5a2N2diJ9.w50051-ckXCDXPYqgy-t1w";
mapboxgl.accessToken = accessToken;

const styles = {
	piter: 'mapbox://styles/levladik/ckwas7w420a0h15s8xanbvf8j',
	newyork: 'mapbox://styles/levladik/ckwaqs32n6iax15p1xy9twrc4',
	paris: 'mapbox://styles/levladik/ckn5wwkxc0zfk17oqooi5o2bp',
	tokyo: 'mapbox://styles/levladik/ckw3oabba2evs14k6chimh5vr',
	barcelona: 'mapbox://styles/levladik/ckn5xz5420qrw17s6q2agidvw',
	lisbon: 'mapbox://styles/levladik/ckw3o3cmm2nyz14nyhwj428nf',
}

export default function Editor() {
  const map = useRef(null);
  const [lng, setLng] = useState(-71.05);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(12);
  const [style, setStyle] = useState(styles.tokyo);
  const [mapSize, setMapSize] = useState('30*40');

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: 'map-container',
      style: style,
      center: [lng, lat],
      zoom: zoom
    });

    map.current.dragRotate.disable();
    map.current.touchZoomRotate.disableRotation();

    const nav = new mapboxgl.NavigationControl();
    
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.addControl(nav);
  }, [style, mapSize]);

  const handleChangeCenter = (coordinates) => {
    setLat(coordinates[0]);
    setLng(coordinates[1]);
  }

  const handleChangeStyle = (styleName) => {    
    map.current.remove();
    setStyle(styles[styleName]);
  }

  const handleChangeMapSize = (event, newAlignment) => {
		setMapSize(newAlignment);
	};

  return (
    <Stack direction='row'>     
       <MapData
        accessToken={ accessToken }
        map={ map.current }
        handleChangeStyle = { handleChangeStyle }
        handleChangeCenter = { handleChangeCenter }
        mapSize = { mapSize }
        handleChangeMapSize = { handleChangeMapSize }
       />
       <Map mapSize={ mapSize }/>
    </Stack>
  );
}