import ProgressBar from "@ramonak/react-progress-bar";
import "./sales.css";

export function ProgressionBar({ comp, color, pNum, animateOnRender }) {
  return (
    <>
      <div className="">
        <h2 className="text-[14px] mb-2">Progression {pNum}:</h2>
        <ProgressBar
          completed={comp}
          bgColor={color}
          height="15px"
          animateOnRender={animateOnRender}
          className="wrapper"
          labelClassName="label"
        />
      </div>
    </>
  );
}
