import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { UseMapboxStore } from "../../store/mapbox-store";
import "mapbox-gl/dist/mapbox-gl.css";
import { mapboxConfig } from "../../config/mapboxConfig";

export const Map = () => {
  const {
    setMapRef,
    mapStyle,
    mapCenter,
    setMapCenter,
    mapZoom,
    setMapZoom,
  } = UseMapboxStore();

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
  }, [mapStyle]);

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
