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
  mapSize: "30*40",
  mapCenter: [0, 0],
  mapZoom: 1,
  mapStyle: "mapbox://styles/mapbox/streets-v11",
  setMapSize: (size) => set({ mapSize: size }),
  setMapCenter: (center) => set({ mapCenter: center }),
  setMapZoom: (zoom) => set({ mapZoom: zoom }),
  setMapStyle: (style) => set({ mapStyle: style }),
}));
