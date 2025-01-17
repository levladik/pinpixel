import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useMapStore } from "../../store/map-store";
import { mapboxConfig } from "../../config/mapboxConfig";
import { useResponsiveMapSize } from "../../hooks/useResponsiveMapSize";

export const Map = () => {
  const {
    setMapRef,
    mapStyle,
    mapCenter,
    setMapCenter,
    mapZoom,
    setMapZoom,
  } = useMapStore();

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

    mapInstance.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: false,
      })
    );

    //Update mapCenter and mapZoom when the map is moved
    mapInstance.on("move", () => {
      const { lng, lat } = mapInstance.getCenter();

      setMapCenter([lng, lat]);
      setMapZoom(mapInstance.getZoom());
    });

    mapInstance.dragRotate.disable();

    return () => {
      mapInstance.remove();
    };
  }, []);

  return (
      <div
        ref={mapContainerRef}
        id="map-container"
        className="map-container"
        style={{
          margin: "0 auto",
          width: `100%`,
          height: `100%`,
        }}
      />
  );
};
