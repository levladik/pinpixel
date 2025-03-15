import { usePosterStore } from "../../store/map.poster-store";
import { Divider, Radio, RadioChangeEvent } from "antd";
import { UseMapboxStore } from "../../store/mapbox-store";
import { useEffect } from "react";

export const MapSizeButtons = () => {
  const { mapRef } = UseMapboxStore()
  const { posterSize, setPosterSize } = usePosterStore()

  useEffect(() => {
    const savedPosterSize = localStorage.getItem("posterSize")
    if (savedPosterSize) {
      setPosterSize(savedPosterSize, () => {
        resizeMapContainer()
      })
    }
  }, [])

  const resizeMapContainer = () => {
    requestAnimationFrame(() => {
      if (mapRef) {
        mapRef.resize()
      }
    });
  };

  const handleSizeChange = (e: RadioChangeEvent) => {
    const newSize = e.target.value
    setPosterSize(newSize, () => {
      localStorage.setItem("posterSize", newSize)
      resizeMapContainer()
    })
  }

  return (
    <>
      <Divider orientation="left">Size</Divider>
      <div className="m-auto">
        <Radio.Group
          className="text-nowrap"
          buttonStyle="solid"
          size="large"
          defaultValue="30*40"
          value={posterSize}
          onChange={handleSizeChange}
        >
          <div className="mb-2">
            <Radio.Button value="21*30">21x30</Radio.Button>
            <Radio.Button value="30*40">30x40</Radio.Button>
          </div>
          <div>
            <Radio.Button value="40*50">40x50</Radio.Button>
            <Radio.Button value="50*70">50x70</Radio.Button>
          </div>
        </Radio.Group>
      </div>
    </>
  );
};
