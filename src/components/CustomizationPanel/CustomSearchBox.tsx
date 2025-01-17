import mapboxgl from "mapbox-gl";
import { useMapStore } from '../../store/map-store';
import { SearchBox } from '@mapbox/search-js-react';
import { mapboxConfig } from "../../config/mapboxConfig";
import { useState } from "react";

export const CustomSearchBox = () => {

  const [inputValue, setInputValue] = useState("");
const { mapRef } = useMapStore();

  return (
    <div>
    <SearchBox
      accessToken={mapboxConfig.accessToken}
      map={mapRef}
      mapboxgl={mapboxgl}
      options={{
        types: 'place',
        zoom: 12
      }}
      placeholder="Seacr your city"
      value={inputValue}
      onChange={(input) => {
        setInputValue(input);
      }}
    />
    </div>
  );
};
