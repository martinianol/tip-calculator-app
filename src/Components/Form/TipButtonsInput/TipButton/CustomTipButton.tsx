import clsx from "clsx";
import { activeStyles } from "./TipButton";
import { twMerge } from "tailwind-merge";

interface CustomTipButton {
  val: number;
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

  const displayValue =
    isActive && (val === 0 || Boolean(val)) ? String(val) : "";

  const rightLocationForPercentage =
    val === 100 ? "19px" : val >= 10 ? "27px" : "35px";

  const handleClampValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const cleanedValue = rawValue.replace(/^0+(?=\d)/, "");
    const numberValue = Math.min(Number(cleanedValue), 100);
    onChange(numberValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "-" || e.key === "e" || e.key === "+") {
      e.preventDefault(); // Block minus and scientific notation
    }
  };

  const rightClasses =
  val === 100
    ? "right-[24px] md:right-[34px] lg:right-[19px]"
    : val >= 10
    ? "right-[45px] md:right-[40px] lg:right-[27px]"
    : "right-[52px] md:right-[46px] lg:right-[35px]";

  return (
    <div className="relative">
      <input
        id="custom-tip-input"
        className={inputStyles}
        type="number"
        value={displayValue}
        onChange={handleClampValue}
        placeholder="Custom"
        onKeyDown={handleKeyDown}
        min={0}
        max={100}
        step={1}
      />
      {isActive && (
        <span
          className={`absolute inset-y-0 flex items-center pointer-events-none text-green-900 text-preset3 ${rightClasses}`}
          style={{ right: rightLocationForPercentage }}
        >
          %
        </span>
      )}
    </div>
  );
};

export default CustomTipButton;
