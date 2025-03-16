import { Divider, Input, Switch } from "antd";
import { useEffect } from "react";
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
    setCoordinates,
  } = usePosterStore()

  useEffect(() => {
    const savedCity = localStorage.getItem("city")
    const savedCountry = localStorage.getItem("country")
    const savedCoordinates = localStorage.getItem("coordinates")
    const savedIsLabels = localStorage.getItem("isLabels")

    if (savedCity) setCity(savedCity)
    if (savedCountry) setCountry(savedCountry)
    if (savedCoordinates) setCoordinates(savedCoordinates)
    if (savedIsLabels) setIsLabels(savedIsLabels === "true")
  }, [])

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    localStorage.setItem("city", value);
  }

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCountry(value)
    localStorage.setItem("country", value)
  }

  const handleCoordinatesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCoordinates(value)
    localStorage.setItem("coordinates", value)
  }

  const handleIsLabelsChange = (checked: boolean) => {
    setIsLabels(checked);
    localStorage.setItem("isLabels", String(checked));
  }

  return (
    <>
      <Divider orientation="left">Labels</Divider>
      <Input
        maxLength={26}
        placeholder="Title"
        value={city}
        onChange={handleCityChange}
      />
      <Input
        maxLength={26}
        placeholder="Subtitle"
        value={country}
        onChange={handleCountryChange}
      />
      <Input
        maxLength={42}
        placeholder="Tagline"
        value={coordinates}
        onChange={handleCoordinatesChange}
      />
      <div className="text-end">
        <p className="d-inline me-2">Labels:</p>
        <Switch checked={isLabels} onChange={handleIsLabelsChange} />
      </div>
    </>
  );
};
