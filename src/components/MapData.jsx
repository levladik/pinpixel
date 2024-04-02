import React from 'react';
import { SearchBox } from '@mapbox/search-js-react';
import { Box, Divider, Chip, Stack } from '@mui/material';
import MapStyles from './MapStyles';

export default function MapData({ accessToken, map, handleChangeStyle, handleChangeCenter }) {

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
    </Box>
    
  )
}
