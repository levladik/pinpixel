import { useMapStore } from "../store/map-store";
import { Radio } from "antd";

export const MapSize = () => {
  const { mapRef, mapSize, setMapSize } = useMapStore();

  const resizeMapContainer = () => {
    requestAnimationFrame(() => {
      if (mapRef) {
        mapRef.resize();
      }
    });
  };

  return (
    <div className="m-auto">
      <Radio.Group
        buttonStyle="solid"
        size="large"
        defaultValue="30*40"
        value={mapSize}
        onChange={(e) => setMapSize(e.target.value, resizeMapContainer)}
      >
        <Radio.Button value="21*30">21x30</Radio.Button>
        <Radio.Button value="30*40">30x40</Radio.Button>
        <Radio.Button value="40*50">40x50</Radio.Button>
        <Radio.Button value="50*70">50x70</Radio.Button>
      </Radio.Group>
    </div>
  );
};
