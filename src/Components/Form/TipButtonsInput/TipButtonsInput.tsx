import TipButton from "./TipButton/TipButton";

const PERCENTAGES_OPTIONS = [5, 10, 15, 25, 50, "Custom"];

interface TipButtonsInputProps {
  tipPercentage: string | number | null;
  onSelectTip: (val: string | number) => void;
}

const TipButtonsInput = ({
  onSelectTip,
  tipPercentage,
}: TipButtonsInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-preset5 text-grey-500">Select Tip %</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {PERCENTAGES_OPTIONS.map((val) => (
          <TipButton
            key={val}
            val={val}
            onClick={onSelectTip}
            isActive={val === tipPercentage}
            isCustom={typeof val === "string"}
          />
        ))}
      </div>
    </div>
  );
};

export default TipButtonsInput;
