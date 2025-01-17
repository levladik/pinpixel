import { Divider, Input, Switch } from "antd";
import { useMapStore } from "../../store/map-store";

export const Labels = () => {
  const {
    labelTitle,
    setLabelTitle,
    labelSubtitle,
    setLabelSubtitle,
    labelTagline,
    setLabelTagline,
  } = useMapStore();

  return (
    <>
      <Divider orientation="left">Labels</Divider>
      <Input maxLength={16} placeholder="Title" value={labelTitle} onChange={(e) => setLabelTitle?.(e.target.value)}/>
      <Input maxLength={26} placeholder="Subtitle" value={labelSubtitle} onChange={(e) => setLabelSubtitle?.(e.target.value)}/>
      <Input maxLength={42} placeholder="Tagline" value={labelTagline} onChange={(e) => setLabelTagline?.(e.target.value)}/>
      <div className="text-end">
        <p className="d-inline me-2">Labels:</p>
        <Switch defaultChecked />
      </div>
    </>
  );
};
