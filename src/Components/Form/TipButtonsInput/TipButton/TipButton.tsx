import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface TipButtonProps {
  val: number | string;
  onClick: (val: string | number) => void;
  isActive?: boolean;
  isCustom?: boolean;
}
const baseStyles =
  "text-center py-2 px-4 border-none rounded-[5px] text-white bg-green-900 hover:bg-green-200 hover:text-green-900 cursor-pointer";
const customStyles = "bg-grey-50 text-grey-550";
const activeStyles = "bg-green-400 text-green-900";

const TipButton = ({ val, onClick, isActive, isCustom }: TipButtonProps) => {
  const id = `tip-${val}`;
  const displayVal = val + (typeof val === "number" ? "%" : "");

  const buttonClassName = `text-preset3 ${twMerge(
    clsx(baseStyles, isCustom && customStyles, isActive && activeStyles)
  )}`;

  return (
    <label htmlFor={id} className={buttonClassName}>
      <input
        type="radio"
        id={id}
        name="tip"
        value={val}
        checked={isActive}
        onChange={() => onClick(val)}
        className="hidden"
      />
      {displayVal}
    </label>
  );
};

export default TipButton;
