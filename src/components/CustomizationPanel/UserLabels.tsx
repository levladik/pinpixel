import { Divider, Input, Switch } from "antd";
import { usePosterStore } from "../../store/map.poster-store";

export const UserLabels = () => {
  const {
    labelTitle,
    setLabelTitle,
    labelSubtitle,
    setLabelSubtitle,
    labelTagline,
    setLabelTagline,
    isLabels,
    setIsLabels,
  } = usePosterStore();

  return (
    <>
      <Divider orientation="left">Labels</Divider>
      <Input
        maxLength={16}
        placeholder="Title"
        value={labelTitle}
        onChange={(e) => setLabelTitle?.(e.target.value)}
      />
      <Input
        maxLength={26}
        placeholder="Subtitle"
        value={labelSubtitle}
        onChange={(e) => setLabelSubtitle?.(e.target.value)}
      />
      <Input
        maxLength={42}
        placeholder="Tagline"
        value={labelTagline}
        onChange={(e) => setLabelTagline?.(e.target.value)}
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
