import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useMapStore } from "../store/map-store";
import { mapboxConfig } from "../config/mapboxConfig";
import { useResponsiveMapSize } from "../hooks/useResponsiveMapSize";

export const Map = () => {
  const { setMapRef, mapStyle, mapSize, mapCenter, setMapCenter, mapZoom, setMapZoom } = useMapStore();
  const [width, height] = mapSize.split("*");

  const mapWidth = useResponsiveMapSize();
  const mapHeight = Number(mapWidth) * (Number(height) / Number(width));

  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = mapboxConfig.accessToken;
    
    if (!mapContainerRef.current) return;

    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapStyle,
      center: mapCenter,
      zoom: mapZoom,
    });

    setMapRef(mapInstance);

    //Update mapCenter and mapZoom when the map is moved
    mapInstance.on('move', () => {
      const { lng, lat } = mapInstance.getCenter();

      setMapCenter([ lng, lat ])
      setMapZoom(mapInstance.getZoom())      
    })

    mapInstance.dragRotate.disable();

    return () => {
      mapInstance.remove();
    };
  }, []);  

  return (
    <div className="map__wrapper p-3 col-12 col-md-5 order-1 order-md-2 flex-shrink-0">
      <div className="sidebar">
        Longitude: {mapCenter[0].toFixed(4)} | Latitude: {mapCenter[1].toFixed(4)} | Zoom: {mapZoom.toFixed(2)}
      </div>
      <div
        ref={mapContainerRef}
        id="map-container"
        className="map-container"
        style={{
          margin: "0 auto",
          width: `${mapWidth}vw`,
          height: `${mapHeight}vw`,
        }}
      />
    </div>
  );
};
