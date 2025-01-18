import { UseMapboxStore } from "../../store/mapbox-store";
import { Divider, Avatar } from "antd";
import piter from '../../assets/map-styles-icons/piter.jpg';
import newyork from '../../assets/map-styles-icons/newyork.jpg';
import paris from '../../assets/map-styles-icons/paris.jpg';
import tokyo from '../../assets/map-styles-icons/tokyo.jpg';
import barcelona from '../../assets/map-styles-icons/barcelona.jpg';
import lisbon from '../../assets/map-styles-icons/lisbon.jpg';

import { mapStyles } from '../../config/mapboxConfig.ts';

export const MapStyles = () => {

  const { setMapStyle } = UseMapboxStore();

  const changeMapStyle = (style: string) => {
    setMapStyle(style)
  }

  return (
    <>
      <Divider orientation="left">Styles</Divider>
      <div className="styles-icons__container d-flex justify-content-start flex-wrap gap-3">
        <Avatar
          size={64}
          src={piter}
          onClick={() => changeMapStyle(mapStyles.piter)}
        />
        <Avatar
          size={64}
          src={newyork}
          onClick={() => changeMapStyle(mapStyles.newyork)}
        />
        <Avatar
          size={64}
          src={paris}
          onClick={() => changeMapStyle(mapStyles.paris)}
        />
        <Avatar
          size={64}
          src={tokyo}
          onClick={() => changeMapStyle(mapStyles.tokyo)}
        />
        <Avatar
          size={64}
          src={barcelona}
          onClick={() => changeMapStyle(mapStyles.barcelona)}
        />
        <Avatar
          size={64}
          src={lisbon}
          onClick={() => changeMapStyle(mapStyles.lisbon)}
        />
      </div>
    </>
  );
};
