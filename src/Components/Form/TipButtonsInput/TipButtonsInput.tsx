import CustomTipButton from "./TipButton/CustomTipButton";
import TipButton from "./TipButton/TipButton";

const PERCENTAGES_OPTIONS = [5, 10, 15, 25, 50];

interface TipButtonsInputProps {
  tipPercentage: number;
  isCustom: boolean;
  onSelectTip: (tipType: string, val: string | number | boolean) => void;
}

const TipButtonsInput = ({
  onSelectTip,
  tipPercentage,
  isCustom,
}: TipButtonsInputProps) => {
  const handleSelectTip = (value: number, isCustom = false) => {
    onSelectTip("tipPercentage", value);
    onSelectTip("isCustom", isCustom);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-preset5 text-grey-500">Select Tip %</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {PERCENTAGES_OPTIONS.map((val) => (
          <TipButton
            key={val}
            val={val}
            onClick={(value) => handleSelectTip(value)}
            isActive={val == tipPercentage && !isCustom}
          />
        ))}
        <CustomTipButton
          val={isCustom ? tipPercentage : null}
          onChange={(value) => handleSelectTip(value, true)}
          isActive={isCustom}
        />
      </div>
    </div>
  );
};

export default TipButtonsInput;
