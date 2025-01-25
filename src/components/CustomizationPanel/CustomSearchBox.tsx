import mapboxgl from "mapbox-gl";
import { UseMapboxStore } from "../../store/mapbox-store";
import { usePosterStore } from "../../store/map.poster-store";
import { SearchBox } from '@mapbox/search-js-react';
import { mapboxConfig } from "../../config/mapboxConfig";
import { useState } from "react";
import { SearchBoxRetrieveResponse } from '@mapbox/search-js-core';

export const CustomSearchBox = () => {

  const [inputValue, setInputValue] = useState("");
  const { mapRef } = UseMapboxStore();
  const { setCity, setCountry, setCoordinates } = usePosterStore();

  const handleRetrieve = (result: SearchBoxRetrieveResponse ) => {
    setCity(result.features[0].properties.name);
    setCountry(result.features[0].properties.context?.country?.name || "");
    setCoordinates(result.features[0].geometry.coordinates);
  };

  return (
      // @ts-expect-error: mapRef might be null
      <SearchBox
        accessToken={mapboxConfig.accessToken}
        map={mapRef || undefined}
        mapboxgl={mapboxgl}
        options={{
          types: 'place',
        }}
        placeholder="Seacr your city"
        value={inputValue}
        onChange={(input) => {
          setInputValue(input);
        }}
        onRetrieve={handleRetrieve}
      />
  );
};
