import { create } from 'zustand';

interface MapStore {
  mapSize: string;
  setMapSize: (size: string) => void;
}

export const useMapStore = create<MapStore>((set) => ({
  mapSize: '30*40',
  setMapSize: (size) => set({ mapSize: size }),
}))
