import { create } from "zustand";

interface MapState {
  mapSize: string; // e.g., "30*40"
  mapCenter: [number, number];
  mapZoom: number;
  mapStyle: string;
  setMapSize: (size: string) => void;
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
  setMapSize: (size) => set({ mapSize: size }),
  setMapCenter: (center) => set({ mapCenter: center }),
  setMapZoom: (zoom) => set({ mapZoom: zoom }),
  setMapStyle: (style) => set({ mapStyle: style }),
}));
