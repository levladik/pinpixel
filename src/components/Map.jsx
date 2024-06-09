import React from 'react';

export default function Map( {mapSize }) {

  const [width, height] = mapSize.split('*')
  
  let mapWidth = 35;
  let mapHeight;

  mapHeight 
  = mapSize === '21*30' ? mapWidth * (height / width)
  : mapSize === '30*40' ? mapWidth * (height / width)
  : mapSize === '40*50' ? mapWidth * (height / width)
  : mapSize === '50*70' ? mapWidth * (height / width)
  : 0;

  return (
    <div id="map-container" className='map-container' 
    style={{ 
      margin: '0 auto', 
      width: `${mapWidth}vw`, 
      height: `${mapHeight}vw` 
    }}/>
    // max width: 1600px
    // map width: fixed
    // height: relative to width
  );
};
