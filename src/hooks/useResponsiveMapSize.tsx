import { useEffect, useState } from "react";

export const useResponsiveMapSize = () => {
  const getMapWidth = (screenWidth: number) => {
    if (screenWidth > 768) return 30;
    if (screenWidth > 576) return 40;
    return 80;
  };

  const [mapWidth, setMapWidth] = useState(() => getMapWidth(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setMapWidth(getMapWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return mapWidth;
};
