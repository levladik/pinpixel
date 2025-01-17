import { useMapStore } from "../../store/map-store";
import { Map } from './Map';
import { useResponsiveMapSize } from '../../hooks/useResponsiveMapSize';

export const MapContainer = () => {
  const { mapSize, labelTitle, labelSubtitle, labelTagline } = useMapStore();

  const [width, height] = mapSize.split("*");
  const mapWidth = useResponsiveMapSize();
  const mapHeight = Number(mapWidth) * (Number(height) / Number(width));
  

  return (
    <div
      className="map__wrapper p-3 col-12 col-md-5 order-1 order-md-2 flex-shrink-0"
      style={{
        margin: "0 auto",
        width: `${mapWidth}vw`,
        height: `${mapHeight}vw`,
      }}
    >
      <Map />
      <div className="labels">
        <p
          className="labels__title mb-0"
          style={{ fontSize: `${mapWidth / 20}vw` }}
        >
          {labelTitle}
        </p>
        <p
          className="labels__subtitle mb-0"
          style={{ fontSize: `${mapWidth / 25}vw` }}
        >
          {labelSubtitle}
        </p>
        <p
          className="labels__tagline mb-0"
          style={{ fontSize: `${mapWidth / 40}vw` }}
        >
          {labelTagline}
        </p>
      </div>
    </div>
  );
};
