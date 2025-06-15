const IndividualResult = ({
  label,
  value = 0,
}: {
  label: string;
  value?: number;
}) => {
  const displayValue = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-primary-white text-preset5">{label}</p>
        <p className="text-grey-400 text-preset6">/ person</p>
      </div>
      <p className="text-green-400 text-preset2">${displayValue}</p>
    </div>
  );
};

export default IndividualResult;
// Compare this snippet from src/Components/Results/IndividualResult.tsx:
