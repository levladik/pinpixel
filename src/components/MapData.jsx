import React from 'react';
import { SearchBox } from '@mapbox/search-js-react';
import { 
  Box, 
  Divider, 
  Chip, 
  Stack, 
  ToggleButtonGroup, 
  ToggleButton
 } from '@mui/material';
import MapStyles from './MapStyles';

export default function MapData({ 
  accessToken, 
  map, 
  handleChangeStyle, 
  handleChangeCenter,
  mapSize,
  handleChangeMapSize,
}) {

  return (
    <Box sx={{ width: '40%', p: 2 }}>
      <SearchBox 
        accessToken={ accessToken }
        map={ map }
        value=''
        placeholder='Enter your city'
        options={{
          types: 'place',
          }}
        onRetrieve={(response) => {
          handleChangeCenter(response.features[0].geometry.coordinates)
        }}
      />

      <Divider sx={{ m: 2 }}>
        <Chip label='STYLES' color="primary" variant='outlined' />
      </Divider>

      <Stack direction='row' spacing={1} justifyContent='center'>
        <MapStyles handleChangeStyle = { handleChangeStyle }/>
      </Stack>

      <Divider sx={{ m: 2 }}>
        <Chip label="SIZE" color="primary" variant='outlined'/>
      </Divider>

      <Stack direction="row" justifyContent="center">
        <ToggleButtonGroup
          color="primary"            
          exclusive            
          aria-label="Size"
          value={mapSize}
          onChange={handleChangeMapSize}
        >
          <ToggleButton value="21*30">21 × 30 cm</ToggleButton>
          <ToggleButton value="30*40">30 × 40 cm</ToggleButton>
          <ToggleButton value="40*50">40 × 50 cm</ToggleButton>
          <ToggleButton value="50*70">50 × 70 cm</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Box>
    
  )
}
