import { UseMapboxStore } from "../../store/mapbox-store";
import { Divider, Avatar } from "antd";

import { mapStylesConfig } from "../../config/mapStylesConfig.ts";

export const MapStyles = () => {
  const { setMapStyle, mapRef } = UseMapboxStore();

  const changeMapStyle = (style: string) => {
    setMapStyle(style);
    mapRef?.setStyle(style);
    localStorage.setItem('mapStyle', style)
  };

  return (
    <>
      <Divider orientation="left">Styles</Divider>
      <div className="styles-icons__container d-flex justify-content-start flex-wrap gap-3">
        {mapStylesConfig.map(({ name, style, image }) => (
          <Avatar
            key={name}
            size={64}
            src={image}
            onClick={() => changeMapStyle(style)}
          />
        ))}
      </div>
    </>
  );
};
