import { usePosterStore } from "../../store/map.poster-store";
import { Divider, Radio } from "antd";
import { UseMapboxStore } from "../../store/mapbox-store";

export const MapSizeButtons = () => {
  const { mapRef } = UseMapboxStore();
  const { posterSize, setPosterSize } = usePosterStore();

  const resizeMapContainer = () => {
    requestAnimationFrame(() => {
      if (mapRef) {
        mapRef.resize();
      }
    });
  };

  return (
    <>
      <Divider orientation="left">Size</Divider>
      <div className="m-auto">
        <Radio.Group
          buttonStyle="solid"
          size="large"
          defaultValue="30*40"
          value={posterSize}
          onChange={(e) => setPosterSize(e.target.value, resizeMapContainer)}
        >
          <Radio.Button value="21*30">21x30</Radio.Button>
          <Radio.Button value="30*40">30x40</Radio.Button>
          <Radio.Button value="40*50">40x50</Radio.Button>
          <Radio.Button value="50*70">50x70</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );
};
