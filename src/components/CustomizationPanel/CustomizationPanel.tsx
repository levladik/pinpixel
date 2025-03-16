import { MapSizeButtons } from './MapSizeButtons/MapSizeButtons';
import { CustomSearchBox } from './CustomSearchBox';
import { UserLabels } from './UserLabels';
import { MapStyles } from './MapStyles';

export const CustomizationPanel = () => {
  return (
    <div className='customisation-panel__wrapper col-12 col-md-4 order-2 order-md-1 p-3 d-grid gap-1'>
      <CustomSearchBox />
      <UserLabels />
      <MapStyles />
      <MapSizeButtons />
    </div>
  );
};
