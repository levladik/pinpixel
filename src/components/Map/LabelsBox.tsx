import { usePosterStore } from "../../store/map.poster-store";

interface LabelsBoxProps {
  mapContainerWidth: number;
}

export const LabelsBox: React.FC<LabelsBoxProps> = ({ mapContainerWidth }) => {
  const { labelTitle, labelSubtitle, labelTagline, isLabels } = usePosterStore();
  return (
    <>
      {isLabels && (
        <div className="labels">
          <p
            className="labels__title mb-0"
            style={{ fontSize: `${mapContainerWidth / 20}vw` }}
          >
            {labelTitle}
          </p>
          <p
            className="labels__subtitle mb-0"
            style={{ fontSize: `${mapContainerWidth / 25}vw` }}
          >
            {labelSubtitle}
          </p>
          <p
            className="labels__tagline mb-0"
            style={{ fontSize: `${mapContainerWidth / 40}vw` }}
          >
            {labelTagline}
          </p>
        </div>
      )}
    </>
  );
};
