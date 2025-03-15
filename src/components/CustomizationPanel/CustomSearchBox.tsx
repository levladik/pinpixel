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
    const place = result.features[0]
    const cityName = place.properties.name
    const countryName = place.properties.context?.country?.name || ""
    const coords = place.geometry.coordinates

    setCity(cityName)
    setCountry(countryName)
    setCoordinates(coords)

    localStorage.setItem("city", cityName)
    localStorage.setItem("country", countryName)
    localStorage.setItem("coordinates", JSON.stringify(coords))
  }

  return (
      // @ts-expect-error: mapRef might be null
      <SearchBox
        accessToken={mapboxConfig.accessToken}
        map={mapRef || undefined}
        mapboxgl={mapboxgl}
        options={{
          types: 'place',
        }}
        placeholder="Search your city"
        value={inputValue}
        onChange={(input) => setInputValue(input)}
        onRetrieve={handleRetrieve}
      />
  );
};
