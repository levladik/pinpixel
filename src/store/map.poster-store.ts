import { create } from "zustand";

interface PosterState {
  posterSize: string;
  setPosterSize: (size: string, callback?: () => void) => void;  
  labelTitle?: string;
  setLabelTitle?: (title: string) => void;
  labelSubtitle?: string;
  setLabelSubtitle?: (subtitle: string) => void;
  labelTagline?: string;
  setLabelTagline?: (tagline: string) => void;
  isLabels: boolean;
  setIsLabels: (checked: boolean) => void;
}

export const usePosterStore = create<PosterState>((set) => ({
  
  posterSize: "30*40",
  setPosterSize: (size, callback) => {
    set({ posterSize: size })
    if (callback) callback();
  },  
  labelTitle: '',
  setLabelTitle: (title) => set({labelTitle: title}),
  labelSubtitle: '',
  setLabelSubtitle: (subtitle) => set({labelSubtitle: subtitle}),
  labelTagline: '',
  setLabelTagline: (tagline) => set({labelTagline: tagline}),
  isLabels: true,
  setIsLabels: (checked) => set({isLabels: checked}),
}));
