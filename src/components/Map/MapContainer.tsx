import { usePosterStore } from "../../store/map.canvas-store";
import { Map } from "./Map";
import { useResponsiveMapSize } from "../../hooks/useResponsiveMapSize";
import { LabelsBox } from "./LabelsBox";

export const MapContainer = () => {
  const { posterSize } = usePosterStore();

  const [posterWidth, posterHeight] = posterSize.split("*");
  const mapContainerWidth = useResponsiveMapSize();
  const mapContainerHeight = Number(mapContainerWidth) * (Number(posterHeight) / Number(posterWidth));

  return (
    <div
      className="map__wrapper p-3 col-12 col-md-5 order-1 order-md-2 flex-shrink-0"
      style={{
        margin: "0 auto",
        width: `${mapContainerWidth}vw`,
        height: `${mapContainerHeight}vw`,
      }}
    >
      <Map />
      <LabelsBox mapContainerWidth={mapContainerWidth}/>
    </div>
  );
};
