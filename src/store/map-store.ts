import { create } from "zustand";

interface MapState {
  mapRef: mapboxgl.Map | null;
  setMapRef: (ref: mapboxgl.Map | null) => void;
  mapSize: string; // e.g., "30*40"
  setMapSize: (size: string, callback?: () => void) => void;
  mapCenter: [number, number];
  setMapCenter: (center: [number, number]) => void;
  mapZoom: number;
  setMapZoom: (zoom: number) => void;
  mapStyle: string;
  setMapStyle: (style: string) => void;
  labelTitle?: string;
  setLabelTitle?: (title: string) => void;
  labelSubtitle?: string;
  setLabelSubtitle?: (subtitle: string) => void;
  labelTagline?: string;
  setLabelTagline?: (tagline: string) => void;
}

export const useMapStore = create<MapState>((set) => ({
  mapRef: null,
  setMapRef: (ref) => set({ mapRef: ref }),
  mapSize: "30*40",
  setMapSize: (size, callback) => {
    set({ mapSize: size })
    if (callback) callback();
  },
  mapCenter: [13.3844, 52.4971],
  setMapCenter: (center) => set({ mapCenter: center }),
  mapZoom: 10,
  setMapZoom: (zoom) => set({ mapZoom: zoom }),
  mapStyle: "mapbox://styles/mapbox/streets-v10",
  setMapStyle: (style) => set({ mapStyle: style }),
  labelTitle: '',
  setLabelTitle: (title) => set({labelTitle: title}),
  labelSubtitle: '',
  setLabelSubtitle: (subtitle) => set({labelSubtitle: subtitle}),
  labelTagline: '',
  setLabelTagline: (tagline) => set({labelTagline: tagline})
}));
