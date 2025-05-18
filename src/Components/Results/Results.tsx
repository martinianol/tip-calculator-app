import IndividualResult from "./IndividualResult";
import ResetButton from "./ResetButton";

const Results = ({
  onClick,
  tipValue,
  totalValue,
}: {
  onClick: () => void;
  tipValue: number;
  totalValue: number;
}) => {
  const disableResetButton = tipValue === 0 && totalValue === 0;
  return (
    <div className="flex flex-col gap-4 p-6 bg-green-900 rounded-[15px] flex-1">
      <IndividualResult label="Tip Amount" value={tipValue} />
      <IndividualResult label="Total" value={totalValue} />
      <ResetButton onClick={onClick} disabled={disableResetButton} />
    </div>
  );
};

export default Results;
