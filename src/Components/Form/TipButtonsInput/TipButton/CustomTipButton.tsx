import clsx from "clsx";
import { activeStyles } from "./TipButton";
import { twMerge } from "tailwind-merge";

interface CustomTipButton {
  val: number;
  onChange: (val: number) => void;
  isActive?: boolean;
}

const CustomTipButton = ({ val, onChange, isActive }: CustomTipButton) => {
  console.log(isActive);
  const baseStyles =
    "cursor-pointer bg-grey-50 text-center outline-none min-w-0 text-green-900 placeholder-grey-550 border-2 border-transparent rounded-[5px]";
  const focusStyles = "bg-grey-50 focus:border-green-400"
  const inputStyles = `text-preset3 ${twMerge(
    clsx(baseStyles, isActive && activeStyles, focusStyles)
  )}`;
  console.log(inputStyles);
  return (
    <input
      className={inputStyles}
      type="number"
      value={val === 0 ? "" : val}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder="Custom"
      min={0}
      max={100}
      step={1}
    />
  );
};

export default CustomTipButton;
