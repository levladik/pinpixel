import { useMapboxStore } from '../../../../store/mapbox-store'
import { useCallback, useEffect } from 'react'

export const useResizeMapContainer = () => {
  const { mapRef } = useMapboxStore()

  const resize = useCallback(() => {
    if (mapRef) {
      requestAnimationFrame(() => mapRef.resize())
    }
  }, [mapRef])

  useEffect(() => {
    resize()
  }, [resize])

  return resize
};
