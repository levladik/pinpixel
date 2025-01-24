export const formatCoordinates = (coords: string): string => {
  if (!coords || typeof coords !== 'string') {
    return '';
  }

  const [latStr, lonStr] = coords.split(',').map((s) => s.trim());

  const lat = parseFloat(latStr);
  const lon = parseFloat(lonStr);

  if (isNaN(lat) || isNaN(lon)) {
    return '';
  }

  const parseCoord = (decimal: number, isLat: boolean): string => {
    const dir = isLat 
      ? decimal >= 0 ? 'N' : 'S'
      : decimal >= 0 ? 'E' : 'W';
      
    const abs = Math.abs(decimal);
    const deg = Math.floor(abs);
    const minFloat = (abs - deg) * 60;
    let min = Math.floor(minFloat);
    let sec = Math.round((minFloat - min) * 60);

    if (sec === 60) {
      sec = 0;
      min += 1;
    }

    return `${deg}°${min.toString().padStart(2, '0')}'${sec.toString().padStart(2, '0')}"${dir}`;
  };

  try {
    const latDMS = parseCoord(lat, true);
    const lonDMS = parseCoord(lon, false);
    return `${latDMS} ${lonDMS}`;
  } catch {
    return '';
  }
};
