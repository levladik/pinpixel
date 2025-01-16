import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useMapStore } from "../store/map-store";
import { mapboxConfig } from "../config/mapboxConfig";
import { useResponsiveMapSize } from "../hooks/useResponsiveMapSize";

export const Map = () => {
  const {
    setMapRef,
    mapStyle,
    mapSize,
    mapCenter,
    setMapCenter,
    mapZoom,
    setMapZoom,
    labelTitle,
    labelSubtitle,
    labelTagline,
  } = useMapStore();
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
      className="map__wrapper p-3 col-12 col-md-5 order-1 order-md-2 flex-shrink-0"
      style={{
        margin: "0 auto",
        width: `${mapWidth}vw`,
        height: `${mapHeight}vw`,
      }}
    >
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
      <div className="labels">
        <p className="labels__title mb-0" style={{ fontSize: `${mapWidth / 20}vw` }}>{labelTitle}</p>
        <p className="labels__subtitle mb-0" style={{ fontSize: `${mapWidth / 25}vw` }}>{labelSubtitle}</p>
        <p className="labels__tagline mb-0" style={{ fontSize: `${mapWidth / 40}vw` }}>{labelTagline}</p>
      </div>
    </div>
  );
};
