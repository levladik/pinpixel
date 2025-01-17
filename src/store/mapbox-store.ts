import { create } from 'zustand';

interface MapboxState {
  mapRef: mapboxgl.Map | null;
  setMapRef: (ref: mapboxgl.Map | null) => void;
  mapCenter: [number, number];
  setMapCenter: (center: [number, number]) => void;
  mapZoom: number;
  setMapZoom: (zoom: number) => void;
  mapStyle: string;
  setMapStyle: (style: string) => void;
}

export const UseMapboxStore = create<MapboxState>((set) => ({
  mapRef: null,
  setMapRef: (ref) => set({ mapRef: ref }),
  mapCenter: [13.3844, 52.4971],
  setMapCenter: (center) => set({ mapCenter: center }),
  mapZoom: 10,
  setMapZoom: (zoom) => set({ mapZoom: zoom }),
  mapStyle: "mapbox://styles/mapbox/streets-v10",
  setMapStyle: (style) => set({ mapStyle: style }),
}))
