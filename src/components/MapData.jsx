import React from 'react';
import { SearchBox } from '@mapbox/search-js-react';

export default function MapData({ acsessToken, map }) {

  return (
    <SearchBox 
      accessToken={ acsessToken }
      map={ map }
      value=''
      placeholder='Enter your city'
      options={{
        types: 'place',
        }}
      onRetrieve={(response) => {
        console.log(response.features[0].geometry.coordinates);
      }}
    />
  )
}
