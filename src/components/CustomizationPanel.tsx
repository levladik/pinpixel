import { Input, Divider, Switch } from "antd";
import { MapSize } from "./MapSize";

export const CustomizationPanel = () => {

  return (
    <div className="customisation-panel__wrapper col-12 col-md-4 order-2 order-md-1 p-3 d-grid gap-1">
      <Input placeholder="Seacr your city" />

      <Divider orientation="left">Labels</Divider>
      <Input placeholder="Title" />
      <Input placeholder="Subtitle" />
      <Input placeholder="Tagline" />
      <div className="text-end">
        <p className="d-inline me-2">Labels:</p>
        <Switch defaultChecked />
      </div>

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
