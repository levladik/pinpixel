import { useMapStore } from "../store/map-store";
import { useResponsiveMapSize } from "../hooks/useResponsiveMapSize";

export const Map = () => {

  const { mapSize } = useMapStore();
  const [width, height] = mapSize.split('*');

  const mapWidth = useResponsiveMapSize();
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
