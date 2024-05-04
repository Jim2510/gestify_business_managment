import ProgressBar from "@ramonak/react-progress-bar";

export function ProgressionBar({ comp, color, pNum }) {
  return (
    <>
      <h2 className="text-[14px]">Progression {pNum}:</h2>
      <ProgressBar completed={comp} bgColor={color} height="15px" />
    </>
  );
}
