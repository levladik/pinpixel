import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useMapStore } from "../store/map-store";
import { mapboxConfig } from "../config/mapboxConfig";
import { useResponsiveMapSize } from "../hooks/useResponsiveMapSize";

export const Map = () => {
  const { mapSize, mapCenter, mapZoom, mapStyle } = useMapStore();
  const [width, height] = mapSize.split("*");

  const mapWidth = useResponsiveMapSize();
  const mapHeight = mapWidth * (height / width);

  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = mapboxConfig.accessToken;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapStyle,
      center: mapCenter,
      zoom: mapZoom,
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div className="map__wrapper p-3 col-12 col-md-5 order-1 order-md-2 flex-shrink-0">
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
