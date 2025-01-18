import mapboxgl from "mapbox-gl";
import { UseMapboxStore } from "../../store/mapbox-store";
import { usePosterStore } from "../../store/map.poster-store";
import { SearchBox } from '@mapbox/search-js-react';
import { mapboxConfig } from "../../config/mapboxConfig";
import { useState } from "react";

export const CustomSearchBox = () => {

  const [inputValue, setInputValue] = useState("");
  const { mapRef } = UseMapboxStore();
  const { city, setCity, country, setCountry, coordinates, setCoordinates } = usePosterStore();

  const handleRetrieve = (result) => {
    setCity(result.features[0].properties.name);
    setCountry(result.features[0].properties?.context?.country?.name);
    setCoordinates(result.features[0].geometry.coordinates);
    console.log(city, country, coordinates);    
  };

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
      onRetrieve={handleRetrieve  }
    />
    </div>
  );
};
