import { create } from "zustand";

interface PosterState {
  posterSize: string;
  setPosterSize: (size: string, callback?: () => void) => void;  
  isLabels: boolean;
  setIsLabels: (checked: boolean) => void;
  city: string;
  setCity: (city: string) => void;
  country: string;
  setCountry: (country: string) => void;
  coordinates: string;
  setCoordinates: (coordinates: number[] | string) => void;
}

export const usePosterStore = create<PosterState>((set) => ({
  
  posterSize: "30*40",
  setPosterSize: (size, callback) => {
    set({ posterSize: size })
    if (callback) callback();
  },  
  isLabels: true,
  setIsLabels: (checked) => set({isLabels: checked}),
  city: 'Berlin',
  setCity: (input) => set({city: input}),
  country: 'Germany',
  setCountry: (input) => set({country: input}), 
  coordinates: '13.38886, 52.517037',
  setCoordinates: (input) => set({coordinates: input}),
}));
