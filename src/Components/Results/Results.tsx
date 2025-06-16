import IndividualResult from "./IndividualResult";
import ResetButton from "./ResetButton";

const Results = ({
  onClick,
  tipValue,
  totalValue,
  canReset,
}: {
  onClick: () => void;
  tipValue: number;
  totalValue: number;
  canReset: boolean;
}) => {
  return (
    <div className="flex flex-col gap-8 p-6 bg-green-900 rounded-[15px] md:px-8 md:gap-4 md:h-[300px] md:justify-center lg:h-[417px] lg:flex-1 lg:gap-32 lg:px-10">
      <div className="flex flex-col gap-6 md:gap-2 lg:gap-6">
        <IndividualResult label="Tip Amount" value={tipValue} />
        <IndividualResult label="Total" value={totalValue} />
      </div>
      <ResetButton onClick={onClick} disabled={!canReset} />
    </div>
  );
};

export default Results;
