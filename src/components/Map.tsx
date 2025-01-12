import { useEffect, useState } from "react";
import { useMapStore } from "../store/map-store";

export const Map = () => {
  const { mapSize } = useMapStore();
  const [width, height] = mapSize.split('*');

  const screenWidth = window.innerWidth;

  const [mapWidth, setMapWidth] = useState(
    screenWidth > 768 ? 30 :
    screenWidth > 576 ? 40 : 80
  );

  useEffect(() => {
    const handleResize = () => {
      setMapWidth(window.innerWidth > 768 ? 30 : window.innerWidth > 576 ? 40 : 80);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mapHeight = mapWidth * (height / width);

  return (
    <div className="map__wrapper p-3 col-12 col-md-5 order-1 order-md-2 flex-shrink-0">
      <div
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
