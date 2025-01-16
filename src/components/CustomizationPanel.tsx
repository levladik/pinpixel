import { Divider } from "antd";
import { MapSize } from "./MapSize";
import { CustomSearchBox } from "./CustomSearchBox";
import { Labels } from "./Labels";

export const CustomizationPanel = () => {

  return (
    <div className="customisation-panel__wrapper col-12 col-md-4 order-2 order-md-1 p-3 d-grid gap-1">
      
      <CustomSearchBox />

      <Labels />

      <Divider orientation="left">Styles</Divider>

      <div className="d-flex justify-content-start flex-wrap gap-3">
        <img
          className="map-style__icon rounded-circle"
          src="https://picsum.photos/200"
          alt=""
        />
        <img
          className="map-style__icon rounded-circle"
          src="https://picsum.photos/200"
          alt=""
        />
        <img
          className="map-style__icon rounded-circle"
          src="https://picsum.photos/200"
          alt=""
        />
        <img
          className="map-style__icon rounded-circle"
          src="https://picsum.photos/200"
          alt=""
        />
        <img
          className="map-style__icon rounded-circle"
          src="https://picsum.photos/200"
          alt=""
        />
        <img
          className="map-style__icon rounded-circle"
          src="https://picsum.photos/200"
          alt=""
        />
      </div>

      <Divider orientation="left">Size</Divider>
      <MapSize />
      
    </div>
  );
};
