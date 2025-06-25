import clsx from "clsx";
import { activeStyles } from "./TipButton";
import { twMerge } from "tailwind-merge";

interface CustomTipButton {
  val: number | null;
  onChange: (val: number) => void;
  isActive: boolean;
}

const CustomTipButton = ({ val, onChange, isActive }: CustomTipButton) => {
  const baseStyles =
    "cursor-pointer bg-grey-50 text-center outline-none min-w-0 w-full h-full text-green-900 placeholder-grey-550 border-2 border-transparent rounded-[5px]";
  const focusStyles = "focus:bg-grey-50 focus:border-green-400";
  const inputStyles = `text-preset3 ${twMerge(
    clsx(baseStyles, isActive && activeStyles, focusStyles)
  )}`;

  const displayValue = val === null ? "" : val;
  const rightLocationForPercentage =
    typeof val === "number"
      ? val === 100
        ? "19px"
        : val >= 10
        ? "27px"
        : "35px"
      : "unset";

  return (
    <div className="relative">
      <input
        id="custom-tip-input"
        className={inputStyles}
        type="number"
        value={displayValue}
        onChange={(e) => onChange(Number(e.target.value))}
        placeholder="Custom"
        min={0}
        max={100}
        step={1}
      />
      {isActive && (
        <span
          className={`absolute inset-y-0 flex items-center pointer-events-none text-green-900 text-preset3`}
          style={{ right: rightLocationForPercentage }}
        >
          %
        </span>
      )}
    </div>
  );
};

export default CustomTipButton;
