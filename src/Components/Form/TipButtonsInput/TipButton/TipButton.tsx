import clsx from "clsx";

interface TipButtonProps {
  val: number | string;
  onClick: (val: number | string) => void;
  isActive?: boolean;
  isCustom?: boolean;
}
const standardClassName =
  "text-center py-2 px-4 border-none rounded-[5px] text-preset3 text-white bg-green-900 hover:bg-green-200 hover:text-green-900";
const activeClassName = "bg-green-200 text-green-900 border-none";
const customClassName = "bg-grey-50 text-grey-550";

const TipButton = ({ val, onClick, isActive, isCustom }: TipButtonProps) => {
  const id = `tip-${val}`;
  const buttonClassName = clsx(standardClassName, {
    [activeClassName]: isActive,
    [customClassName]: isCustom,
  });

  const displayVal = val + (typeof val === "number" ? "%" : "");
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
