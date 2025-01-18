import { Divider, Input, Switch } from "antd";
import { usePosterStore } from "../../store/map.poster-store";

export const UserLabels = () => {
  const {
    isLabels,
    setIsLabels,
    city,
    setCity,
    country,
    setCountry,
    coordinates,
    setCoordinates
  } = usePosterStore();  

  return (
    <>
      <Divider orientation="left">Labels</Divider>
      <Input
        maxLength={16}
        placeholder="Title"
        value={city}
        onChange={(e) => setCity?.(e.target.value)}
      />
      <Input
        maxLength={26}
        placeholder="Subtitle"
        value={country}
        onChange={(e) => setCountry?.(e.target.value)}
      />
      <Input
        maxLength={42}
        placeholder="Tagline"
        value={coordinates}
        onChange={(e) => setCoordinates?.(e.target.value)}
      />
      <div className="text-end">
        <p className="d-inline me-2">Labels:</p>
        <Switch 
          checked={isLabels}
          onChange={(checked) => setIsLabels(checked)} />
      </div>
    </>
  );
};
