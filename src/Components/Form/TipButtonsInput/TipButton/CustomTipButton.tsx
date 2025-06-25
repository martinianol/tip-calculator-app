import clsx from "clsx";
import { activeStyles } from "./TipButton";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";

interface CustomTipButton {
  val: number;
  onChange: (val: number) => void;
  isActive: boolean;
}

const CustomTipButton = ({ val, onChange, isActive }: CustomTipButton) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const baseStyles =
    "cursor-pointer bg-grey-50 text-center outline-none min-w-0 w-full h-full text-green-900 placeholder-grey-550 border-2 border-transparent rounded-[5px]";
  const focusStyles = "focus:bg-grey-50 focus:border-green-400";
  const inputStyles = `text-preset3 ${twMerge(
    clsx(baseStyles, isActive && activeStyles, focusStyles)
  )}`;

  const displayValue =
    isActive && (val === 0 || Boolean(val)) ? String(val) + "%" : "";

  const handleClampValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const cleanedValue = rawValue.replace(/^0+(?=\d)|%/g, "");
    const numberValue = Math.min(Number(cleanedValue), 100);
    onChange(numberValue);
    setCursorBeforePercent();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "-" || e.key === "e" || e.key === "+") {
      e.preventDefault(); // Block minus and scientific notation
    }
    if (e.key === "ArrowUp") {
      onChange(Math.min(val + 1, 100));
    }
    if (e.key === "ArrowDown") {
      onChange(Math.max(val - 1, 0));
    }
  };

  const setCursorBeforePercent = () => {
    // Wait for React to update the input value
    setTimeout(() => {
      const input = inputRef.current;
      if (!input) return;

      const val = input.value;
      const percentIndex = val.indexOf("%");

      if (percentIndex > 0) {
        input.setSelectionRange(percentIndex, percentIndex);
      } else {
        // fallback to end of input if % not found
        const pos = val.length;
        input.setSelectionRange(pos, pos);
      }
    }, 0);
  };

  return (
    <input
      ref={inputRef}
      id="custom-tip-input"
      className={inputStyles}
      type="text"
      value={displayValue}
      onChange={handleClampValue}
      placeholder="Custom"
      onKeyDown={handleKeyDown}
      onFocus={setCursorBeforePercent}
      inputMode="numeric"
    />
  );
};

export default CustomTipButton;
