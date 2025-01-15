import { create } from "zustand";

interface MapState {
  mapRef: mapboxgl.Map | null;
  setMapRef: (ref: mapboxgl.Map | null) => void;
  mapSize: string; // e.g., "30*40"
  mapCenter: [number, number];
  mapZoom: number;
  mapStyle: string;
  setMapSize: (size: string, callback?: () => void) => void;
  setMapCenter: (center: [number, number]) => void;
  setMapZoom: (zoom: number) => void;
  setMapStyle: (style: string) => void;
}

export const useMapStore = create<MapState>((set) => ({
  mapRef: null,
  setMapRef: (ref) => set({ mapRef: ref }),
  mapSize: "30*40",
  mapCenter: [13.3844, 52.4971],
  mapZoom: 10,
  mapStyle: "mapbox://styles/mapbox/streets-v11",
  setMapSize: (size, callback) => {
    set({ mapSize: size })
    if (callback) callback();
  },
  setMapCenter: (center) => set({ mapCenter: center }),
  setMapZoom: (zoom) => set({ mapZoom: zoom }),
  setMapStyle: (style) => set({ mapStyle: style }),
}));
