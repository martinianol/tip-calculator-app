import IndividualResult from "./IndividualResult";
import ResetButton from "./ResetButton";

const Results = ({
  onClick,
  tipValue,
  totalValue,
  canReset
}: {
  onClick: () => void;
  tipValue: number;
  totalValue: number;
  canReset: boolean;
}) => {
  return (
    <div className="flex flex-col gap-8 p-6 bg-green-900 rounded-[15px]">
      <div className="flex flex-col gap-6">
        <IndividualResult label="Tip Amount" value={tipValue} />
        <IndividualResult label="Total" value={totalValue} />
      </div>
      <ResetButton onClick={onClick} disabled={!canReset} />
    </div>
  );
};

export default Results;
