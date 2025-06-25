import CustomTipButton from "./TipButton/CustomTipButton";
import TipButton from "./TipButton/TipButton";

const PERCENTAGES_OPTIONS = [5, 10, 15, 25, 50];

interface TipButtonsInputProps {
  discretTipPercentage: number;
  customTipPercentage: number | null;
  onSelectTip: (tipType: string, val: string | number) => void;
}

const TipButtonsInput = ({
  onSelectTip,
  customTipPercentage,
  discretTipPercentage,
}: TipButtonsInputProps) => {

  return (
    <div className="flex flex-col gap-2">
      <p className="text-preset5 text-grey-500">Select Tip %</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {PERCENTAGES_OPTIONS.map((val) => (
          <TipButton
            key={val}
            val={val}
            onClick={(value) => onSelectTip("discretTipPercentage", value)}
            isActive={val == discretTipPercentage}
          />
        ))}
        <CustomTipButton
          val={customTipPercentage}
          onChange={(value: number) =>
            onSelectTip("customTipPercentage", value)
          }
          isActive={customTipPercentage !== null}
        />
      </div>
    </div>
  );
};

export default TipButtonsInput;
